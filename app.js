require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/user",userRouter);

app.listen(process.env.APP_PORT,() =>{
    console.log("servere is Working Fine On :", process.env.APP_PORT)
})