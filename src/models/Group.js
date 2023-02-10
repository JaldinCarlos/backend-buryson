import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";
import { Event } from "./Event";

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
    }
  },
  {
      timestamps: true,
      paranoid: true
  }
);

Group.hasMany(Event, {
  foreignKey: 'groupId',
  sourceKey: 'id'
});
Event.belongsTo(Group, {
  foreignKey: 'groupId',
  targetKey: 'id'
});