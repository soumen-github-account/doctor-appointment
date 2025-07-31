import express, { response } from 'express'

import cors from 'cors'
import 'dotenv/config'
import connectDB from './confiig/mongodb.js'
import connectCloudinary from './confiig/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// app configg
const app = express()
const port = process.env.PORT || 8000
connectDB();
connectCloudinary()
// midddlewere
app.use(express.json())
const allowedOrigin = ['https://doctor-appointment-frontend-rfco.onrender.com', 'http://localhost:5173']
app.use(cors({
    origin: function(origin, callback){
        if(!origin || allowedOrigin.includes(origin)){
            callback(null, true);
        } else{
            callback(new Error('NOT allowed by cors'));
        }
    },
    credentials:true
}))

// api endpoint

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

// localhost:8000/api/admin

app.get('/', (req, res)=>{
    res.send("Api working");
});

app.listen(port, ()=>{
    console.log("App is started in", port)
})