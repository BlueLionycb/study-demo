const express = require('express')
const app = new express()
const ReactServer=require('')



const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    console.log(`服务端启动了，端口：${port}`)
})