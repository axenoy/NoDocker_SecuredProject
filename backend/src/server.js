// Connecting "libraries"
const express = require('express'); 
const pool = require('./routes/health'); // import from ./routes/health

// app = HTTP server + routes + middleware.
const app = express(); // Create an object of Express app.

app.use(express.json());

app.use('/health', healthRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});