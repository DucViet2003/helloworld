const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const { Sequelize } = require('sequelize');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.DB_URI);

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection failed:', err));

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
