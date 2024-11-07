const express = require("express")
const mongoose = require("mongoose");
const router = require("./src/routes/Route");

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set API route Endpoints
app.use("/api",router)



//Database connection
let URI = `mongodb+srv://drmizanurrahman452:mizan1234@cluster0.5vetql5.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0`
let OPTION = { user: "", pass: "", autoIndex: true }
mongoose
    .connect(URI, OPTION)
    .then(() => console.log("Database connected ."))
    .catch((err) => console.log(err))




let PORT = 3035



app.listen(PORT, () => {
    console.log(`App is running at the port ${PORT}`)
})
