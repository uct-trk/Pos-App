const express = require("express");

// mongoose indirme sebebimiz express js ile bağlamak
const mongoose = require("mongoose");

// env ile bağlantı kurabilmek için dotenv install ettik
const dotenv = require("dotenv");

const app = express();

const cors = require("cors");

const logger = require("morgan") // log bakmamızı sağlıyor

const port = process.env.PORT || 5500;

// routes
const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const billRoute = require("./routes/bills.js")
const registerRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")

dotenv.config()

// Mongo db ile express.js bağladık
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Bağlanıldı")
    } catch (error) {
        console.log(error)
        throw error
    }
}

// middlewares
app.use(logger("dev")) // log bakmamızı sağlıyor
app.use(express.json())
app.use(cors())

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", registerRoute);
app.use("/api/users", userRoute);


app.listen(port, () => {
    connect()
  console.log(`Example app listening on port dinleniyor ${port}`);
});

