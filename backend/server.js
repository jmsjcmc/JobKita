require('dotenv').config();
const express = require('express')
const cors = require('cors')
const path = require('path');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRouter')
const analyticsRoutes = require('./routes/analyticsRouter')
const applicationRoutes = require('./routes/applicationRouter')
const savedJobRoutes = require('./routes/savedJobRouter')
const userRoutes = require('./routes/userRouter')
const jobsRoutes = require('./routes/jobRouter')
const app = express();

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
)

connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/savedJobs', savedJobRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {}))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));