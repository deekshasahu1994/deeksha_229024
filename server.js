const express=require('express');
const app=express();

app.get("/",function(req,res){
    res.sendFile("home.html",{root:__dirname});
})

app.get("/schedule",function(req,res){
    res.sendFile("schedule.html",{root:__dirname});
})

app.listen(4000,()=>{
    console.log("server is running");
})