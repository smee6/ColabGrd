import express from 'express';
import { getTimeSlots } from '../controllers/bookController';

const router = express.Router();

/**
 * @post
 * @description: 예약 가능한 시간대를 조회함, 컨트롤러 getTimeSlots에서 로직 처리
 * @url :/getTimeSlots
 */
router.post("/getTimeSlots", getTimeSlots);

export default router;