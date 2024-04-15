const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');
const createJobSchema = require('./jobs');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const Job = createJobSchema({});

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Wagwan Broski');
});

// CRUD OPS
app.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

app.get('/jobs/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job', error });
    }
});

// Get jobs by email
app.get('/my-jobs/:email', async (req, res) => {
    try {
        const jobs = await Job.find({ postedBy: req.params.email });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

app.delete('/job/:id', async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
});

app.post('/post-job', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
});

app.patch('/update-job/:id', async(req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
