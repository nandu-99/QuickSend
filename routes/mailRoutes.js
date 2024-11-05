
const express = require('express');
const { sendEmail } = require('../controllers/mailController');
const router = express.Router();
router.post('/send-email', sendEmail);
module.exports = router;
