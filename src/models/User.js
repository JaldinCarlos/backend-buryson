import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";

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
        min: 3,
        max: 15
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
          max: 15
        }
    }
  },
  {
      timestamps: true,
      paranoid: true
  }
);

