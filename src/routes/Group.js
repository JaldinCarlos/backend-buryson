import { Router } from "express";

const router = Router();
const ROOT_ROUTE = '/groups';

router.get(`${ROOT_ROUTE}`);

export default router;