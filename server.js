const express = require('express');
const db = require('./db/connection.js')
const inputCheck = require('./utils/inputCheck');

//this path will automatically look for index.js if it exists.
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//use apiRoutes routes app.use must come after express middleware
app.use('/api', apiRoutes);

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });  
});

