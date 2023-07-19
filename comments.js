
const express = require('express');
const app = express();


app.get('/comments', (req, res) => {
    res.json({"comments": "This is a comment"});
    }  
)
app.listen(3000, () => console.log('Listening on port 3000!'));