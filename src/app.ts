import "dotenv/config"; // env파일 사용
import cors from "cors";
import express from "express";
import { User } from "./@types/index.d"; // @types/index에 있는 User 인터페이스 사용

import UserRouter from './routes/userRouter.ts';
const app = express();
const PORT = process.env.PORT || 1234;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();


const user: User = {
    name: "jbee",
    id: 1,
};


app.use("/api/user", UserRouter);

app.listen(PORT, () => {
    console.log(`
--------------------------------------------
##$$$$ Server listening on port: ${PORT}
http://localhost:${PORT}/test
--------------------------------------------
***********SERVER IS RUNNING NOW************
  `);
});