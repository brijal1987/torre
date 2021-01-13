const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const opportunityController = require('../controllers/opportunity.controller')

router.get('/profile/:username', userController.profile)
router.get('/opportunities/:job_id', opportunityController.opportunity)
module.exports = router
