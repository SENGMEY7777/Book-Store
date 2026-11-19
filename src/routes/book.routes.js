const express = require('express');
const router = express.Router();
const book.Controller = require('../controllers/book.Controller');

router.get('/', book.Controller.getAll);
router.get('/:id', book.Controller.getById);
router.post('/', book.Controller.create);
router.put('/:id', book.Controller.update);
router.delete('/:id', book.Controller.delete);

module.exports = router;
