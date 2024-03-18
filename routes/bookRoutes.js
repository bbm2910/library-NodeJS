const express = require('express');

const bookController = require('../controllers/bookController')

const router = express.Router();


router.get('/', bookController.book_index)

router.get('/create', bookController.book_create_get)

router.post('/', bookController.book_create_post)

router.get('/:id', bookController.book_details);

router.delete('/:id', bookController.book_delete)

module.exports = router;