import { Timeslot } from "../@types";
import moment from "moment";

/**
 * @param startOfDay 시작일의 Unixstamp seconds
 * @param slotTime 타임슬롯 간격
 * @returns 타임슬롯 배열
 * */
function makeTimeslots(startOfDay: number, slotTime: number): Timeslot[] {
    const timeslots: Timeslot[] = [];

    let currentTime = startOfDay;
    const endOfDay = startOfDay + 86400;
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

/**
 * @param day 요일
 * @returns 요일에 해당하는 key값
 * */
function dayConverter(day: number) {
    if (day === 0) {
        day = 1;
    } else if (day === 1) {
        day = 2;
    } else if (day === 2) {
        day = 3;
    } else if (day === 3) {
        day = 4;
    }
    else if (day === 4) {
        day = 5;
    }
    else if (day === 5) {
        day = 6;
    }
    else if (day === 6) {
        day = 7;
    }
    return day;
}

export { makeTimeslots, strToTimeStamp, dayConverter }