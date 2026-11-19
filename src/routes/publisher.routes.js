const express = require('express');
const router = express.Router();
const publisher.Controller = require('../controllers/publisher.Controller');

router.get('/', publisher.Controller.getAll);
router.get('/:id', publisher.Controller.getById);
router.post('/', publisher.Controller.create);
router.put('/:id', publisher.Controller.update);
router.delete('/:id', publisher.Controller.delete);

module.exports = router;
