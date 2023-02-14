import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";

export const Event = sequelize.define(
    "events",
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                min: 1,
                max: 64
            }
        },
        event_date: {
            type: DataTypes.DATE,
        },
        location_link: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true,
        paranoid: true
    }
);

// Event.belongsTo(Group);