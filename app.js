import express from "express"
import cors from "cors"

//config dotenv
import "dotenv/config"

const app = express()

//middwares
app.use(cors())
app.use(express.json())

//connection database mongodb
import { 
    connectMongoDB as connect 
} from "./database/connect.js"

connect()

// routes
import { 
    routes 
} from "./routes/routes.js"

app.use(routes)

//serve
const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    return console.log(`\n Serve is running \n PORT:${PORT} \n http://localhost:${PORT}/<routes> \n`)
})