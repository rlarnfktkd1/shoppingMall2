//외장 모듈
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import logger from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// 라우트 모듈
import globalRouter from "./routes/globalRouter";
import routes from "./routes/routes";
import adminRouter from "./routes/adminRouter";
import userRouter from "./routes/userRouter";

import { localsMiddleWare } from "./middlewares";

dotenv.config();

const app = express();

app.set("view engine", "pug");

app.use(helmet());
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(localsMiddleWare);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.admin, adminRouter);

export default app;
