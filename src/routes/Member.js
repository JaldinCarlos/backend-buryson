import { Router } from "express";

const router = Router();
const ROOT_ROUTE = '/members';

router.get(`${ROOT_ROUTE}`);

export default router;