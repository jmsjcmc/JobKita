const Job = require('../models/Job');
const User = require('../models/Users');
const Application = require('../models/Application');
const SavedJob = require('../models/SavedJob');

exports.createJob = async (req, res) => {
    try {
        if (req.user.role !== 'employer'){
            return res.status(403).json({message: 'Only employers can post jobs.'});
        }
        
        const job = await Job.create({
            ...req.body, company: req.user._id
        });
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.getJobs = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.getJobsEmployer = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.getJobById = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.updateJob = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.deleteJob = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.toggleCloseJob = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}