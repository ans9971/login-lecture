
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const PORT = 3000;
//모듈
const express = require("express");
const app=express();

//라우팅
const home = require("./src/routes/home"); //현재 폴더에서 라우츠 폴더에서 홈폴더안에있는 거 읽어오자

//앱세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use는 미들웨어를 등록해주는 메서드 //루트경로로오면 홈으로 보내줌

module.exports = app;