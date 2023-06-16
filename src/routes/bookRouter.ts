import express from 'express';
import { Request, Response } from 'express';
import { RequestBody, ResponseBody, DayTimetable, Timeslot } from "../@types";
import { makeTimeslots, strToTimeStamp } from "../utils/common";
import events from "../data/events.json";
import workhours from "../data/workhours.json";

const router = express.Router();

router.post("/getTimeSlots", (req: Request, res: Response) => {
    try {
        const requestBody: RequestBody = req.body;
        const startDay = requestBody.start_day_identifier;
        const timezone = requestBody.timezone_identifier;
        const duration = Number(requestBody.service_duration);
        const slotTime = Number(requestBody.timeslot_interval) || 1800;
        const isIgnoreSchedule = requestBody.is_ignore_schedule || false;
        const days = requestBody.days || 1;

        const startOfDay = strToTimeStamp(startDay);

        // 응답 바디
        const result: ResponseBody = [];
        let dayMod = 0;
        for (let i = 0; i < days; i++) {
            const currentDay = startOfDay + (i * 86400); // 1일은 86400초

            let dayTimetable: DayTimetable = {
                start_of_day: currentDay,
                day_modifier: dayMod,
                is_day_off: false, // is_day_off 로직 추가 필요
                timeslots: makeTimeslots(currentDay, slotTime),
            };

            //timeslots에 events 와 겹치는 시간대가 이미 있다면 빼고 다시 timeslots를 만들어야 한다.
            console.log(events);
            if (!isIgnoreSchedule && events.length > 0) {
                const filteredTimeslots: Timeslot[] = [];
                dayTimetable.timeslots.forEach((timeslot: Timeslot) => {
                    const hasConflict = events.some((event) => {
                        return event.begin_at < timeslot.end_at && event.end_at > timeslot.begin_at;
                    });
                    if (!hasConflict) {
                        filteredTimeslots.push(timeslot);
                    }
                });
                dayTimetable.timeslots = filteredTimeslots;
            }


            if ((currentDay - startOfDay) % 86400 === 0) {
                dayMod++;
            };

            result.push(dayTimetable);
        };

        // 응답 전송
        return res.json(result);

    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "서버 에러" });

    }
});






export default router;


