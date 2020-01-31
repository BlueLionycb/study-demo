const express=require('express')

const app=new express()
app.get('/',(req,res)=>{
    res.send("你好");
})

app.lensten