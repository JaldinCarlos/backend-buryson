import { sequelize } from "../database/database";
import { User } from "./User";
import { Event } from "./Event";

export const Guest = sequelize.define(
    "guests",
    {
    },
    {
        timestamps: true,
        paranoid: true
    }
);

User.belongsToMany(Event, { through: Guest });
Event.belongsToMany(User, { through: Guest });
Guest.belongsTo(Event);
Guest.belongsTo(User);
Event.hasMany(Guest);
User.hasMany(Guest);

// Guest.hasMany(Item);


