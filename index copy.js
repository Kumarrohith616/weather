import express from "express";
import axios from "axios";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = 3000;
const CITY = "Coimbatore"; // Change to your preferred city

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Coimbatore&units=metric&appid=22842b20d346771f461314872ae22f29
`;
        const result = await axios.get(url);
        res.render("index.ejs", {
            city: CITY,
            temperature: result.data.main.temp
        });
    } catch (error) {
        res.send("Error fetching weather data.");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
