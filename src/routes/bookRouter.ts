import express from 'express';
import { Request, Response } from 'express';
import { RequestBody, ResponseBody, DayTimetable, Timeslot } from "../@types";
import { makeTimeslots, strToTimeStamp, dayConverter } from "../utils/common";
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
        const isIgnoreSchedule = requestBody.is_ignore_schedule === false ? false : true;

        const days = requestBody.days || 1;

        const startOfDay = strToTimeStamp(startDay);

        // 응답 바디
        const result: ResponseBody = [];
        let dayMod = 0;
        for (let i = 0; i < days; i++) {
            const currentDay = startOfDay + (i * 86400); // 1일은 86400초

            //유닉스 타임으로 오늘이 무슨 요일인지 판단
            let day = new Date(currentDay * 1000).getDay();
            let newDay = dayConverter(day);

            //요일에 해당하는 key값으로 workhours에서 해당 요일의 시작시간과 끝시간을 가져옴, 그래서 maekTimeslots에 넣어줌
            const matchedWorkhour = workhours.find((item) => item.weekday === newDay);
            const openTime = matchedWorkhour ? matchedWorkhour.open_interval : 36000;
            const closeTime = matchedWorkhour ? matchedWorkhour.close_interval : 72000;
            const dayoff = matchedWorkhour ? matchedWorkhour.is_day_off : false;

            let dayTimetable: DayTimetable = {
                start_of_day: currentDay,
                day_modifier: dayMod,
                is_day_off: dayoff, // is_day_off 로직 추가 필요
                timeslots: makeTimeslots(currentDay, slotTime),
            };

            if (!isIgnoreSchedule) {
                // openTime 이전의 timeslots 제거
                dayTimetable.timeslots = dayTimetable.timeslots.filter((timeslot) => {
                    return timeslot.begin_at >= currentDay + openTime;
                });

                // closeTime 이후의 timeslots 제거
                dayTimetable.timeslots = dayTimetable.timeslots.filter((timeslot) => {
                    return timeslot.end_at <= currentDay + closeTime;
                });

                // 이벤트가 있으면 timeslots에서 제거
                events.forEach((event) => {
                    dayTimetable.timeslots = dayTimetable.timeslots.filter((timeslot) => {
                        return event.begin_at >= timeslot.end_at || event.end_at <= timeslot.begin_at;
                    });
                });

                //dayoff면 timeslots에서 제거
                if (dayoff) {
                    dayTimetable.timeslots = [];
                }
            };

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


