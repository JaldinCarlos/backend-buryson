import { memberService } from "../services";


export const createMember = async (req, res, next) => {
  try {
    const { userId, groupId } = req.body;
    const data = await memberService.createMember(userId, groupId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const deleteMember = async (req, res, next) => {
  try {
    const { userId, groupId } = req.body;
    const data = await memberService.deleteMember(userId, groupId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const getMembersOfGroup = async (req, res, next) => {
  try {
    const data = await memberService.getMembers(req.params.group);
    res.json(data);
  } catch (error) {
    next(error);
  }
}