const router = require('express').Router()
const all = require('./all.route')

// Export all routes
router.get('/heartbeat', (req, res) => {
  res.json({
    status: 'online'
  })
})
router.get('/', (req, res) => {
  res.render('index.ejs')

})

router.use('/', all)

module.exports = router
