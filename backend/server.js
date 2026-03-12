require('dotenv').config();

// Connecting "libraries"
const express = require('express'); 
// Routes
const healthRoute = require('./src/routes/health');
const dbRoute = require('./src/routes/dbroutes');
// Middleware
const errorHandler = require('./middleware/errorHandler');

// app = HTTP server + routes + middleware.
const app = express(); // Create an object of Express app.

app.use(express.json());

// Connecting routes
app.use('/health', healthRoute);
app.use('/api', dbRoute);
app.use(errorHandler); // Last one in the list for catching all errors.

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});