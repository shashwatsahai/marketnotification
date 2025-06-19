const express = require('express');

const Notification = require("./notification.js").default
const router = express.Router();

router.post('/create', Notification.createAndSendNotif)

router.post('/send', Notification.sendNotif)

router.get('/list', Notification.getList)

module.exports = router;
