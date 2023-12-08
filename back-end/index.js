import express from 'express';
import mongoose from 'mongoose';
import { User } from './models/UserModel.js';
const app = express()
const port = 3000

const URLConnect = "mongodb+srv://vanhuydb:vanhuydb@cluster0.mogx2mj.mongodb.net/WeepooShop?retryWrites=true&w=majority"
mongoose.connect(URLConnect)
    .then((rs)=>console.log("Connected"))
    .catch(error => {
        console.log(error);
    })

const users = await User.find();
app.get('/', (req, res) => {
    // return res.send(users)
    return res.status(200).json(users)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))