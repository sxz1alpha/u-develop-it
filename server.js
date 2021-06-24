const express = require('express');
const mysql = require('mysql2');
const db = require('db');


const PORT = process.env.PORT || 3001;
const app = express();



//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
db.connect(
    {
        host: process.env.DB_HOST,
        // Your MySQL username,
        user: process.env.DB_USER,
        //Your MySQL password
        password: process.env.DB_PASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});