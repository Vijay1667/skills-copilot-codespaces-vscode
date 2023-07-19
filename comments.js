
const express = require('express');
const app = express();


app.get('/comments', (req, res) => {
    res.json({"comments": "This is a comment"});
    }  
)