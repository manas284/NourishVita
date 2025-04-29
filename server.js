const express = require('express');
const userController = require('./controllers/userController');
const productRoutes = require('./routes/productRoutes');
const db = require('./db');

const app = express();
const port = 3001;

app.use(express.json());

// User routes
app.post('/api/users/register', userController.register);
app.post('/api/users/login', userController.login);

// Product routes
app.use('/api', productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});