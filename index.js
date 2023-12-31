const dotenv = require('dotenv/config')


const express = require('express')
const cookieParser = require('cookie-parser');
const line = require('@line/bot-sdk')
const cors = require('cors')

const app = express();
const port = 9000;


const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());






app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


app.get('/api', (req,res) => {
  res.json({result: 'connected'})
});


app.post('/api/register', (req,res) => {
  Register
})