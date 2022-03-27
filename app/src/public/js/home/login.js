"use strict";

const id= document.querySelector("#id"); //질의 선택자 , 두번째파라미터를 통해 html값을 가져옴
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");
console.log(id);
loginBtn.addEventListener("click",login);

function login(){
    const req ={
        id : id.value,
        psword:psword.value,
    };
    //첫번재 경로 경로로 전달 두번째파라미터로 전달할 데이터를 보내줌 오브젝트형태로
    //json 형태로 전달
    fetch("/login", {
        //body를 통해서 데이터 전달하려ㄴ면 post 메서드ㅏ로 전달해야됨 rest
        method:"POST",
        //내가보내는게 json파일이다 라는걸 알려줘야됨 데이터타입
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(req),
    })
}
 