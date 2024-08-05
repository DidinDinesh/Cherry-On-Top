import express from 'express'
import cors from 'cors'
import { connectDB } from "./config/db.js"
import cakeRouter from "./routes/cakeRoute.js"
import giftRouter from "./routes/giftRoute.js"
import flowerRouter from "./routes/flowerRoute.js"
import comboRouter from "./routes/comboRoute.js"


// app config

const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

// db connection 

connectDB();

// api endpoints

app.use("/api/cakes", cakeRouter)
app.use("/api/gifts", giftRouter)
app.use("/api/flowers", flowerRouter)
app.use("/api/combos", comboRouter)

app.use("/images", express.static("uploads"))

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port,() => {
    console.log(`Server started on http://localhost:${port}`);
})
