import express from 'express';
import { Request, Response } from 'express';
import { RequestBody, ResponseBody } from "../@types";

const router = express.Router();
router.get("/test", (req: Request, res: Response) => {
    return res.send("Hello World!");
});

router.post("/getTimeSlots", (req: Request, res: Response) => {
    // 요청 바디 파라미터 추출
    const requestBody: RequestBody = req.body;
    console.log(requestBody);
    // 예시 응답 데이터 생성
    // 필수값 검증
    const { start_day_identifier, timezone_identifier, service_duration } = req.body;
    if (!start_day_identifier || !timezone_identifier || !service_duration) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const response: ResponseBody = [
        {
            "start_of_day": 1538697600,
            "day_modifier": 2,
            "is_day_off": false,
            "timeslots": [
                {
                    "begin_at": 1538740800,
                    "end_at": 1538744400
                },
                {
                    "begin_at": 1538742600,
                    "end_at": 1538746200
                },
                {
                    "begin_at": 1538744400,
                    "end_at": 1538748000
                }
            ]
        },
        {
            "start_of_day": 1538784000,
            "day_modifier": 3,
            "is_day_off": false,
            "timeslots": [
                {
                    "begin_at": 1538827200,
                    "end_at": 1538830800
                },
                {
                    "begin_at": 1538829000,
                    "end_at": 1538832600
                },
                {
                    "begin_at": 1538830800,
                    "end_at": 1538834400
                }
            ]
        }
    ];

    // 응답 전송
    res.json(response);
});

export default router;


