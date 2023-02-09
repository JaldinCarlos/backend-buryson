import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";

export const Group = sequelize.define(
  "groups",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);
