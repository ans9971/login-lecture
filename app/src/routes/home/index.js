"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);

router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);
//프론트엔드가 전달한 로그인데이터 받아서 로그인기능을 처리해주는거
module.exports = router;