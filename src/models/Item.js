import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";

export const Item = sequelize.define(
  "items",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    price: {
        type: DataTypes.FLOAT,
        validate:{
          isFloat: true
        }
    },
    name: {
      type: DataTypes.STRING,
      validate:{
        min: 1,
        max: 30
      }
    },
    details: {
        type: DataTypes.STRING,
        validate:{
          min: 1,
          max: 100,
          isNull: true
        }
    },
  },
  {
      timestamps: true,
      paranoid: true
  }
);

// Item.belongsTo(Guest);
// Item.belongsTo(Event);