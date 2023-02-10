import { sequelize } from "../database/database";
import { User } from "./User";
import { Group } from "./Group";

export const Member = sequelize.define(
  "members",
  {
  },
  {
    timestamps: true,
    paranoid: true
  }
);

User.belongsToMany(Group, { through: Member });
Group.belongsToMany(User, { through: Member });
Member.belongsTo(Group);
Member.belongsTo(User);
Group.hasMany(Member);
User.hasMany(Member);
