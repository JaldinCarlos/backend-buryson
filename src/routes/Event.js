import { Router } from "express";

const router = Router();
const ROOT_ROUTE = '/event';

router.get(`${ROOT_ROUTE}`);

export default router;