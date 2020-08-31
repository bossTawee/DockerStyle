import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes.js'

const app  = express();

app.use(bodyParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)


export default app;