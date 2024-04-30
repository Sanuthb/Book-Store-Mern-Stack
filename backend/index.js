import express, { json } from 'express';
import mongoose from 'mongoose';
import { PORT, mongodburl } from './config.js';
import bookroutes from './routes/Bookroutes.js';
import loginroutes from './routes/Loginroutes.js';
import cors from 'cors'

const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}))
app.use(express.json());

app.use('/login',loginroutes)
app.use('/books',bookroutes)


mongoose.connect(mongodburl)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch(err => console.log(err));
