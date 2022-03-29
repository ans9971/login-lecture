"use strict";

const users ={
    id:["a1","b2","c3"],
    psword:["1231","1232","1233"],
}



const output ={
    home: (req,res)=>{
        //res.render("home/index");
        res.send("여기는 루트입니다");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
}

const process ={
    login : (req,res)=>{
        //console.log(req.body),//프론트엔드에서 요청한 
        //body로 데이터를 전달해서 컨트롤러 함수에서 바이함수보려면 body로 접근해야됨
        //body를 파싱해올수있도록 모듈설치해얃횜
        const id= req.body.id;
        const psword = req.body.psword;
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){//로그인 성공시 
                return res.json({ //제이슨으로 만들어서 프론트엔드로 리스폰스
                    success:true, //석세스 트루 오브젝트를 
                });
            }
        }
        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다."
        })
    },
};

module.exports ={
    output,
    process,
};
