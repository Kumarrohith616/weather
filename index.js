import express from "express";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
const app=express();
const port=3000;

// app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",async(req,res)=>{
    const result=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Coimbatore&units=metric&appid=22842b20d346771f461314872ae22f29");
    res.render("index.ejs",{
        city:result.data.name,
        temperature:result.data.main.temp
    });
})
app.listen(port,()=>{
    console.log(`Server running on the port ${port}.`);
})