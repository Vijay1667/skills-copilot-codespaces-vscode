// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!commentsByPostId[id]) {
    commentsByPostId[id] = [];
  }

  commentsByPostId[id].push({ id: generateId(), content, status: 'pending' });

  res.status(201).send(commentsByPostId[id]);
});

app.listen(port, () => {
  console.log(`Comments server listening on port ${port}`);
});

const generateId = () => {
  return Math.floor(Math.random() * 99999);
};