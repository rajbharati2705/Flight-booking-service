const express=require('express');
const {ServerConfig,Logger} =require('./config');
const apiRoutes= require('./routes')

const app= express()

//app.use(express.json())

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully statred the server ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server",{})
}) 