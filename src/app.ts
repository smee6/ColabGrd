import "dotenv/config"; // env 설정
import cors from "cors";
import express, { Application } from 'express';

import bookRouter from './routes/bookRouter.ts';

const app: Application = express();
const PORT: string = process.env.PORT || "4040";

const runServer = (): void => {
    try {
        // express 설정
        app.use(cors());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        // 라우터 설정 
        // 예약 로직 라우터
        app.use("/", bookRouter);

        // 서버 실행
        app.listen(PORT, () => {
            console.log(`
--------------------------------------------
##$$$$ Server listening on port: ${PORT}
http://localhost:${PORT}/test
--------------------------------------------
***********SERVER IS RUNNING NOW************`);
        });
    } catch (err) {
        // 서버 실행 중 에러 발생 시
        console.error(err);
    }
}

//서버 실행
runServer();