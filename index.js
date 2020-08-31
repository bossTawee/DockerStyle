import app from './app.js';
import http from 'http';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_END_POINT,  {
  useNewUrlParser: true
})

const db = mongoose.connection

db.on("error", (err) => {
    console.log("Cannot connect DB");
})

//create server by node
http.createServer(app).listen(3000, () => {
    console.log("server status : running");
    console.log(`run on port : 3000`);
});

// app.get('/boss/:userId',bossController)

