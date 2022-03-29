
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const PORT = 3000;
const bodyParser = require("body-parser") //bodypaser사용할땐 별도의 모듈 필요
//모듈
const express = require("express");
const app=express();

//라우팅
const home = require("./src/routes/home"); //현재 폴더에서 라우츠 폴더에서 홈폴더안에있는 거 읽어오자

//앱세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));//app.js파일이있는 위치 정적경로로 추가
app.use(bodyParser.json()); //bodyparser를 사용할때 별도의 미들웨어 필요
//bodyparser가 json데이터 파싱할수있도록 명시
app.use(bodyParser.urlencoded({exteded:true}));//url을 통해 전달되는 데이터에 한글,
//exteded:true공백과 같은 문자가 포함될경우 제대로 인식되지않은 문제 해결
app.use("/", home); // use는 미들웨어를 등록해주는 메서드 //루트경로로오면 홈으로 보내줌

module.exports = app;