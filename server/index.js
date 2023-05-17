import express from "express";
import mongoose from 'mongoose' 
import cors from 'cors'
import userRoutes from './routes/users.js'
mongoose.set('strictQuery', true);
const app = express();
app.use(express.json({limit: "30mb",extended:"true"}))
app.use(express.urlencoded({limit: "30mb",extended:"true"}))
app.use(cors());
app.get('/',(req,res) => {
    res.send("This is a Stack Overflow Clone API")
})
app.use('/user',userRoutes)
const PORT = process.env.PORT || 5000
const Connection_URL="mongodb+srv://root:root@stack-overflow-clone.3qniauy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(Connection_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})).catch((err)=> console.log(err.message))