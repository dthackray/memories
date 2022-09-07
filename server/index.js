import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

// https://mongodb.com/cloud/atlas
const CONNECTION_URL = "mongodb+srv://memories:memories123@cluster0.9lim2q7.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))