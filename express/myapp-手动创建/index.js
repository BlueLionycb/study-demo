const express = require('express')

const app = new express()
app.get('/', (req, res) => {
    res.send("你好");
})

app.listen(3000, () => {
    console.log("启动3000端口");
})