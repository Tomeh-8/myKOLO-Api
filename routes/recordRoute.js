const express = require('express');
const router = express.Router();
const { getRecords, postRecord, deleteRecord} = require('../controllers/recordController');


router.get('/', getRecords);
router.post('/', postRecord);
router.delete('/:id', deleteRecord);

module.exports = router;