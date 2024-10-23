const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Connecting to database
const query = '';

mongoose.Promise = global.Promise;
mongoose.connect(query, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/save', async (req, res) => {
    try {
        const newStudent = new StudentModel({
            StudentId: 101,
            Name: "Sam",
            Roll: 1,
            Birthday: "2001-09-08"
        });
        await newStudent.save();
        res.send("Data inserted");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/save', async (req, res) => {
    try {
        const newStudent = new StudentModel({
            StudentId: req.body.StudentId,
            Name: req.body.Name,
            Roll: req.body.Roll,
            Birthday: req.body.Birthday
        });
        await newStudent.save();
        res.send("Data inserted");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/findall', async (req, res) => {
    try {
        const data = await StudentModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/findfirst', async (req, res) => {
    try {
        const data = await StudentModel.findOne({ StudentId: req.query.StudentId });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/delete', async (req, res) => {
    try {
        const data = await StudentModel.remove({ StudentId: 188 });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/delete', async (req, res) => {
    try {
        const data = await StudentModel.findByIdAndDelete(req.body.id);
        res.send(data);
        console.log("Data Deleted!");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/update', async (req, res) => {
    try {
        const data = await StudentModel.findByIdAndUpdate(req.body.id, { Name: req.body.Name });
        res.send(data);
        console.log("Data updated!");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;