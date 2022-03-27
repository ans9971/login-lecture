"use strict";

const id= document.querySelector("#id"); //질의 선택자 , 두번째파라미터를 통해 html값을 가져옴
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");
console.log(id);
loginBtn.addEventListener("click",login);

function login(){
    console.log(id.value);
}
 