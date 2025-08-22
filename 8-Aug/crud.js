const express=require('express')
const fs=require("fs")
const app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})

const studentsFile="students.json"

app.get("/",(req,res)=>{
    res.send("Welcome to REST API")
})

app.get("/list",(req,res)=>{
    fs.readFile(studentsFile,(err,data)=>{
        if(err){
            res.status(500).send("Error reading student data")
        }
        res.send(JSON.parse(data))
    })
})

app.post("/students",(req,res)=>{
    const newStudent=req.body
    if(!newStudent.name || !newStudent.rollno) {
        return res.status(400).send("Name and Roll No are required")
    }
    fs.readFile(studentsFile,(err,data)=>{
        if(err){
            res.status(500).send("Error reading student data")
        }
        let students=JSON.parse(data)
        students.push(newStudent)
        fs.writeFile(studentsFile,JSON.stringify(students),(err)=>{
            if(err){
                res.status(500).send("Error saving student data")
            }
            res.send("Student added successfully")
        })
    })
})

app.put("/students", (req, res) => {
    const newStudent = req.body;
    if (!newStudent || !newStudent.name || !newStudent.rollno) {
        return res.status(400).send("Invalid update data. 'name' and 'rollno' are required.");
    }
    fs.readFile(studentsFile, (err, data) => {
        if (err) return res.status(500).send("Error reading student data");
        let students = JSON.parse(data);
        const idx = students.findIndex(s => s.rollno == newStudent.rollno);
        if (idx !== -1) {
            students[idx].name = newStudent.name;
            fs.writeFile(studentsFile, JSON.stringify(students, null, 2), err => {
                if (err) return res.status(500).send("Error saving student data");
                res.send("Student updated successfully");
            });
        } else {
            res.status(404).send("Student not found");
        }
    });
});

app.delete("/students", (req, res) => {
    const delstu = req.body;
    if (!delstu || !delstu.rollno) {
        return res.status(400).send("Invalid delete request. 'rollno' is required.");
    }
    fs.readFile(studentsFile, (err, data) => {
        if (err) return res.status(500).send("Error reading student data");
        let students = JSON.parse(data);
        const idx = students.findIndex(s => s.rollno == delstu.rollno);
        if (idx !== -1) {
            students.splice(idx, 1);
            fs.writeFile(studentsFile, JSON.stringify(students, null, 2), err => {
                if (err) return res.status(500).send("Error saving student data");
                res.send("Student deleted successfully");
            });
        } else {
            res.status(404).send("Student not found");
        }
    });
});