require("dotenv").config();
const express = require("express");
const app = express();



app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "This Api Is Working"
    })
})

app.listen(process.env.APP_PORT,() =>{
    console.log("servere is Working Fine On :", process.env.APP_PORT)
})