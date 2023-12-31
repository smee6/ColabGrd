### 디렉토리 구조 
```python 

src
 ⊢ app.ts (서버 실행)
 ⊢ @types (타입 정의)
 ⊢ routes (라우터)
 ⊢ controllers (컨트롤러)
 ⊢ utils (유틸 함수)
 ⊢ data (json 데이터)
``` 

### 테스트 시작
```python 
npm install -g yarn
yarn install
yarn dev

기본 포트 4040
``` 

### POSTMAN 테스트 (20210509 날짜의 경우)
![image](https://github.com/smee6/ColabGrd/assets/65226760/3664cdf4-8780-41ce-83c0-bdad0f5e26bb)

 
### REQUEST 예시   
```json 
{
    "start_day_identifier": "20210506",
    "timezone_identifier": "Asia/Seoul",
    "service_duration": 600,
    "days": 1,
    "timeslot_interval": 1800,
    "is_ignore_schedule": false,
    "is_ignore_workhour": false
}
``` 

### RESPONSE (예시에 대한 응답)   
```json 
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
``` 
