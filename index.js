import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import sangController from './controller/sangController'
import oakController from './controller/oakController'
import bossController from './controller/bossController'

const app = express();
const PORT = "3000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGO_END_POINT, {
  useNewUrlParser: true
})
mongoose.connection.on("error", (err) => {
    console.log("Cannot connect DB");
})

//create server by node
http.createServer(app).listen(3000, () => {
    console.log("server status : running");
    console.log(`run on port : ${PORT}`);
});

app.get("/me", function (req, res) {
    let limit = req.query.limit
    let offset = req.query.offset
    res.json({
        limit,
        offset
    })
})

app.get("/tas/:statusCode", (req) => {
    const statusCode = req.params.statusCode || 0

    try {
        switch (statusCode) {
            case 200:
                return {
                    statusCode,
                    body: {
                        name: 'i Peng'
                    }
                }
            case 400:
                return {
                    statusCode,
                    message: `Bad request: ${statusCode}`,
                    body: {
                        statusCode,
                        items: [
                            {
                                test: 123
                            }
                        ]
                    }
                }
            case 401:
                return {
                    statusCode,
                    message: '401 โว๊ย'
                }
            case 403:
                return {
                    statusCode,
                    message: '403 โว๊ยยยยยย'
                }
            default:
                throw {
                    statusCode: 500,
                        message: `Status code: ${statusCode}`
                }
        }
    } catch (e) {
        throw {
            statusCode: 500,
            message: `Catch code: ${statusCode}`
        }
    }
})

app.get('/oak', oakController)

app.post('/sang', sangController)

app.get('/boss/:userId',bossController)