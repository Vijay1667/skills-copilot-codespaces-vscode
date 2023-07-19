// Create a web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Create a route for GET /comments/:id/author
// 8. Create a route for GET /comments/:id/post

const express = require('express');
const db = require('../db');

const router = express.Router();

// 2. Create a route for GET /comments
router.get('/', (req, res) => {
  db.query('SELECT * FROM comments')
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// 3. Create a route for GET /comments/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM comments WHERE id = $1', [id]);
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: `Cannot find comment with id ${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Create a route for POST /comments
router.post('/', async (req, res) => {
  const { content, post_id, author_id } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO comments (content, post_id, author_id) VALUES ($1, $2, $3) RETURNING *',
      [content, post_id, author_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
