const express = require('express');
const router = express.Router();
const college = require('../controller/collegeController')

router.post("/colleges",college.createCollege)
router.post("/interns",college.createIntern)
router.get("/collegeDetails",college.getCollegeDetails)

module.exports = router;