const express = require('express');
const router = express.Router();
const summonersCtrl = require('../../controllers/summoners');

/*---------- Public Routes ----------*/
router.get('/search/:query', summonersCtrl.search);

module.exports = router;