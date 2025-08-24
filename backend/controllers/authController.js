const User = require('../models/Users')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '60d'});
}

exports.register = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.login = async (req, res) => {

};

exports.getMe = async (req, res) => {
    res.json(req, res);
};