const express =require('express')
const app=express()
app.use(express.json())

app.listen(3000)

app.post("/students",(req,res)=>{
    const {name,rollno,cgpa}=req.body
    if(!name || !rollno || !cgpa) {
        res.status(400).send("All fields are required")
    }
    console.log(`Name : ${name} \nRoll No : ${rollno} \nCGPA : ${cgpa}`)
    res.send("Student Data sent Successfully")
})

