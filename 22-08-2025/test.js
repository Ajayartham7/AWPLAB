
const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();


app.use(express.json());


const SECRET = 'mysecretkey';


// Simulated student database

let students = [

  { id: 1, name: 'Ravi', age: 20, course: 'CSE' },

  { id: 2, name: 'Priya', age: 21, course: 'ECE' }

];


// Middleware to verify JWT token

function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ error: 'Authorization header missing' });


  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token missing' });


  jwt.verify(token, SECRET, (err, user) => {

    if (err) return res.status(403).json({ error: 'Invalid or expired token' });

    req.user = user;

    next();

  });

}


// Login Route - Generates JWT token

app.post('/login', (req, res) => {

  const { username, password } = req.body;


  // Dummy user check (replace with DB check in real app)

  if (username === 'admin' && password === 'admin123') {

    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

    return res.json({ token });

  }


  res.status(401).json({ error: 'Invalid credentials' });

});


// CREATE - Add new student

app.post('/students', authenticateToken, (req, res) => {

  const { name, age, course } = req.body;

  const newStudent = {

    id: students.length ? students[students.length - 1].id + 1 : 1,

    name,

    age,

    course

  };

  students.push(newStudent);

  res.status(201).json({ message: 'Student added', student: newStudent });

});


// READ - Get all students

app.get('/students', authenticateToken, (req, res) => {

  res.status(200).json(students);

});


// READ - Get single student by ID

app.get('/students/:id', authenticateToken, (req, res) => {

  const student = students.find(s => s.id === parseInt(req.params.id));

  if (!student) return res.status(404).json({ error: 'Student not found' });

  res.status(200).json(student);

});


// UPDATE - Modify student by ID

app.put('/students/:id', authenticateToken, (req, res) => {

  const student = students.find(s => s.id === parseInt(req.params.id));

  if (!student) return res.status(404).json({ error: 'Student not found' });


  const { name, age, course } = req.body;

  student.name = name || student.name;

  student.age = age || student.age;

  student.course = course || student.course;


  res.status(200).json({ message: 'Student updated', student });

});


// DELETE - Remove student by ID

app.delete('/students/:id', authenticateToken, (req, res) => {

  const index = students.findIndex(s => s.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ error: 'Student not found' });


  const deleted = students.splice(index, 1);

  res.status(200).json({ message: 'Student deleted', student: deleted[0] });

});


app.listen(4000, () => console.log('Server running on port 4000'));