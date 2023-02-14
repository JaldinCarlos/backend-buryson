import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
      validate:{
        min: 1,
        max: 20      
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true      
      }
    },
    password: {
        type: DataTypes.STRING,
        validate:{
          min: 4,
        }
    }
  },
  {
      timestamps: true,
      paranoid: true
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.matchPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

User.prototype.getSignedJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.SECRET_JWT, {
    expiresIn: "20d",
  });
};

User.findByToken = async (token) => {
  try {
    const { id } = await jwt.verify(token, process.env.SECRET_JWT);
    const user = User.findByPk(id);
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};