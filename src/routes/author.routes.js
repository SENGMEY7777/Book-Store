const express = require('express');
const router = express.Router();
const author.Controller = require('../controllers/author.Controller');

router.get('/', author.Controller.getAll);
router.get('/:id', author.Controller.getById);
router.post('/', author.Controller.create);
router.put('/:id', author.Controller.update);
router.delete('/:id', author.Controller.delete);

module.exports = router;
