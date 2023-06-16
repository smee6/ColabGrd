
### REQUEST 예시   
{
    "start_day_identifier": "20210506",
    "timezone_identifier": "Asia/Seoul",
    "service_duration": 600,
    "days": 1,
    "timeslot_interval": 1800,
    "is_ignore_schedule": false,
    "is_ignore_workhour": false
    
}

### RESPONSE (예시에 대한 응답)   
[
    {
        "start_of_day": 1620226800,
        "day_modifier": 0,
        "is_day_off": false,
        "timeslots": [
            {
                "begin_at": 1620262800,
                "end_at": 1620264600
            },
            {
                "begin_at": 1620264600,
                "end_at": 1620266400
            },
            {
                "begin_at": 1620266400,
                "end_at": 1620268200
            },
            {
                "begin_at": 1620275400,
                "end_at": 1620277200
            },
            {
                "begin_at": 1620277200,
                "end_at": 1620279000
            },
            {
                "begin_at": 1620279000,
                "end_at": 1620280800
            },
            {
                "begin_at": 1620280800,
                "end_at": 1620282600
            },
            {
                "begin_at": 1620282600,
                "end_at": 1620284400
            },
            {
                "begin_at": 1620284400,
                "end_at": 1620286200
            },
            {
                "begin_at": 1620286200,
                "end_at": 1620288000
            },
            {
                "begin_at": 1620288000,
                "end_at": 1620289800
            },
            {
                "begin_at": 1620289800,
                "end_at": 1620291600
            },
            {
                "begin_at": 1620291600,
                "end_at": 1620293400
            },
            {
                "begin_at": 1620293400,
                "end_at": 1620295200
            },
            {
                "begin_at": 1620295200,
                "end_at": 1620297000
            },
            {
                "begin_at": 1620297000,
                "end_at": 1620298800
            }
        ]
    }
]