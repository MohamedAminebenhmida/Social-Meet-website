const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const userRoute =require('./Routes/UserRoutes')
const authRoute =require('./Routes/authRoutes');
const postRoute=require('./Routes/postRoutes')
const connectDB = require('./ConnectDB');
const cors = require('cors')
dotenv.config();
mongoose.set("strictQuery", false);
// connection with database
connectDB();
//middleware
app.use(cors())
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" ,userRoute)
app.use("/api/auth" ,authRoute)
app.use("/api/post" ,postRoute)
app.listen(8800,()=>{
    console.log("Backend server is running")
})