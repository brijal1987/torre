const axios = require('axios')
const config = require('../config')

exports.profile = async (req, res, next) => {
  const { username } = req.params
  try {
    const response = await axios.get(`${config.torreBioUrl}${username}`)

    res.render('profile.ejs', { user: response.data })
  } catch (error) {
    console.error(error)
  }
}
