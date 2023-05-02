const express = require('express');
const router = express.Router();

const authMiddleware = require('./../middlewares/auth-middleware');

const controller = require('./../controllers/contact-controller');

router.get('/', controller.getAllContacts);

router.post('/', authMiddleware, controller.createContact);

module.exports = router;