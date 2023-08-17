const express= require("express")
const router= express.Router();
const User= require("../Model/user")


//Post Data

router.post("/trip",async (req,res)=>{
try{
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
}catch(error){
    console.log(error)
    // res.send(error)
    res.status(500).json({error: "Error adding data"})
}
});


//Retrieve Data 

router.get("/trip", async (req,res)=>{
try{
    const user= await User.find();
    res.status(200).json(user);
}catch(error){
    res.status(500).json({error: "Error fetching data"})
}

})

//Delete Data 

router.delete("/trip/:id", async (req,res)=>{
try{
const deletedUser= await User.findByIdAndDelete(req.params.id);
if(!deletedBooks){
    res.status(404).json({error:"Data not found"});
    return ;
}
res.status(200).json({message:"Data deleted successfully"});

}catch(error){
    res.status(500).json({error:"Error deleting data"});
    // res.send(error)
}
})

//Filtering Data

router.get("/trip/filter", async (req,res)=>{
    const {destination}= req.query
    try{
     const filteredDestination = await User.find({destination}) ;
     res.status(200).json({filteredDestination});
    }catch(error){
        res.status(500).json({error:"Error filtering  data"});
    }
})

//Sort

router.get("/trip/sort", async (req,res)=>{
const {budget}=req.query 

try{
const sortedBudget= await User.find().sort({budget:budget});
res.status(200).json(sortedBudget);
}catch(error){
    res.status(500).json({error:"Error sorting  data"});
}

})



module.exports =router ;