require("dotenv").config() ;
const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors")

const app= express();
app.use(express.json())
app.use(cors());

const PORT= process.env.PORT || 7979 ;
const MongoUrl= process.env.MongoUrl || "mongodb+srv://mayank:mayank@cluster0.tmbqo77.mongodb.net/TripsCollection?retryWrites=true&w=majority" 
const tripRoutes= require("./routes/trip");


app.use("/api/trip",tripRoutes) ;


mongoose.connect(process.env.MongoUrl)
.then(()=>{
    console.log("connected to DB")
}).catch(error=>{
    console.error(error)
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


