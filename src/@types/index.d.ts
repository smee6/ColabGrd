// src/@types/index.d.ts

interface RequestBody {
    start_day_identifier: string
    timezone_identifier: string
    service_duration: number
    days?: number
    timeslot_interval?: number
    is_ignore_schedule?: boolean
    is_ignore_workhour?: boolean
}

type ResponseBody = DayTimetable[]

interface DayTimetable {
    start_of_day: number // Unixstamp seconds
    day_modifier: number
    is_day_off: boolean
    timeslots: Timeslot[]
}
interface Timeslot {
    begin_at: number // Unixstamp seconds
    end_at: number // Unixstamp seconds
}


export { RequestBody, ResponseBody, DayTimetable, Timeslot }