import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";

export const UserGroup = sequelize.define(
  "user_groups",
  {
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);
