const axios = require('axios')
const config = require('../config')

exports.profile = async (req, res, next) => {
  const { username } = req.params
  try {
    if(username) {
      const response = await axios.get(`${config.torreBioUrl}${username}`)
      if(response.status === 200) {
        res.render('profile.ejs', { user: response.data })
      }
      res.render('profile.ejs', { user: false })
    }
    res.render('profile.ejs', { user: false })
  } catch (error) {
    console.error(error)
    res.render('profile.ejs', { user: false })
  }
}
