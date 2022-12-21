const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/index');
app.use(express.json());
app.use(cors());
const kill = require('kill-port');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on("connect",(socket) => {
    console.log(socket.id);

    socket.on('disconnect',() => {
        console.log();
    })
});

mongoose.connect(process.env.DATABASE_URL ,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database.");
    })
    .catch(err => {
        console.log(`Your error ${err}`);
    })

const PORT = process.env.PORT || 5000;

router(app);



http.listen(PORT , () => {
    console.log("Connected to port 5000");
});
