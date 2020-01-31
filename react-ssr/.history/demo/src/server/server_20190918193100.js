const express = require('express')
const ReactDomServer=require('react-dom/server').default
const ServerApp=require('../client/serverApp')

const app = new express()
const port = process.env.PORT || 5000

console.log(ServerApp)

//ReactDomServer.renderToString()

app.listen(port, (req, res) => {
    console.log(`服务端启动了，端口：${port}`)
})