import "dotenv/config"; // env 설정
import cors from "cors";
import express from 'express';

import bookRouter from './routes/bookRouter.ts';

const app: express.Application = express();
const PORT: string = process.env.PORT || "4040";

try {
    // express 설정
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // 라우터 설정
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
