const express = require("express");
const cors = require("cors");

const PORT = 8080
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    return res.send("Welcome to Ystar Farm Mock Api");
})

app.use((req, res, next) => {
    let error = new Error("Page Not Found");
    error.status = 404; 

    return next(error);
})

app.use((err, req, res, next) => {
    res.status = err.status || 500;

    return res.json({
        status: "error",
        data: {
            message: err.message
        }
    })
})

app.listen(PORT, () => {
    console.log("Server running on port..." + PORT);
})