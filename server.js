require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/jobs', require('./routes/jobs'));
// Add user/auth/application routes similarly

app.listen(4000, () => console.log('Server running on port 4000'));
