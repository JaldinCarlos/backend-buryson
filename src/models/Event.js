import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database";
import { Group } from "./Group";
// import { Item } from "./Item";

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
            validate: {
                isNull: true
            }
        },
        location_link: {
            type: DataTypes.STRING,
            validate: {
                isNull: true
            }
        }
    },
    {
        timestamps: true,
        paranoid: true
    }
);

// Event.belongsTo(Group);