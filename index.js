import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./Database/dbConnect.js";
import  { errorMiddleware } from "./Error/error.js";
import router from "./Routes/reservationRoute.js";

const app = Express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/api/reservation',router)


dbConnect();


app.use(errorMiddleware)

export default app;
