const express = require('express');
const router = express.Router();
const summonersCtrl = require('../../controllers/summoners');

/*---------- Public Routes ----------*/
router.get('/search/:query', summonersCtrl.search);
router.get('/entries/:id', summonersCtrl.entries);
router.get('/matches/:id', summonersCtrl.matches);
router.get('/detail/:id', summonersCtrl.matchDetail);

module.exports = router;