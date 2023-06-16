import express from 'express';
import { getTimeSlots } from '../controllers/bookController';

const router = express.Router();

router.post("/getTimeSlots", getTimeSlots);

export default router;