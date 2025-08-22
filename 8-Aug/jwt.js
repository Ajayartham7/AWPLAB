const express=require("express")
const jwt=require("jsonwebtoken")
const app=express()
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})
app.use(express.json())
const secretKey="awplab"

app.post("/login",(req,res)=>{
    const {username,password}=req.body
    const token=jwt.sign({username,password},secretKey)
    res.json({token})
})

app.get("/",(req,res)=>{
    const headers=req.headers.authorization
    const token=headers.split(" ")[1]
    jwt.verify(token,secretKey,(err,payload)=>{
        if(err){
            res.statusCode=401
            return res.json({error:"Invalid JWT Token"})
        }else{
            res.json({message:"Valid Token",payload})
        }
    })
})

