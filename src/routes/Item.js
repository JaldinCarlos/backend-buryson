import { Router } from "express";

const router = Router();
const ROOT_ROUTE = '/items';

router.get(`${ROOT_ROUTE}`);

export default router;