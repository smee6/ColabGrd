import { Timeslot } from "../@types";
import events from "../data/events.json";
import workhours from "../data/workhours.json";

/**
 * @param startOfDay 시작일의 Unixstamp seconds
 * @param slotTime 타임슬롯 간격
 * @returns 타임슬롯 배열
 * */
function makeTimeslots(startOfDay: number, slotTime: number): Timeslot[] {
    const timeslots: Timeslot[] = [];
    let currentTime = startOfDay;
    const endOfDay = startOfDay + 86400; // 1일은 86400초 

    while (currentTime + slotTime <= endOfDay) {
        const timeslot: Timeslot = {
            begin_at: currentTime,
            end_at: currentTime + slotTime
        };
        timeslots.push(timeslot);

        currentTime += slotTime;
    }

    return timeslots;
}

/**
 * @param startDay 시작일
 * @returns 시작일의 Unixstamp seconds
 *  */
function strToTimeStamp(startDay: string) {

    const year = parseInt(startDay.substr(0, 4));
    const month = parseInt(startDay.substr(4, 2)) - 1;
    const date = parseInt(startDay.substr(6, 2));

    const dateObj = new Date(year, month, date);
    const result = Math.floor(dateObj.getTime() / 1000);

    return result;
}

export { makeTimeslots, strToTimeStamp }