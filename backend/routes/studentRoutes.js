const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create Operation [cite: 83, 86]
router.post('/add', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send('Student Added');
});

// Read Operation [cite: 83, 87]
router.get('/view', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Update Operation [cite: 83, 87]
router.put('/update/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send('Student Updated');
});

// Delete Operation [cite: 83, 88]
router.delete('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Student Deleted');
});

module.exports = router;