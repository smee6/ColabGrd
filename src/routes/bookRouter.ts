import express from 'express';
import { getTimeSlots } from '../controllers/bookController';

const router = express.Router();

/**
 * @url :/getTimeSlots
 * @post
 * @description: "예약 가능한 시간대를 조회합니다."
 */
router.post("/getTimeSlots", getTimeSlots);

export default router;