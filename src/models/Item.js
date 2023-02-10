import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";
import { User } from "./User";
import { Event } from "./Event";

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


User.hasMany(Item, {
  foreignKey: 'userId',
  sourceKey: 'id'
});
Item.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
});


Event.hasMany(Item, {
  foreignKey: 'eventId',
  sourceKey: 'id'
});
Item.belongsTo(Event, {
  foreignKey: 'eventId',
  targetKey: 'id'
});

// Item.belongsTo(Guest);
// Item.belongsTo(Event);