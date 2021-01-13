require('dotenv').config()
const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  torreBioUrl: 'https://bio.torre.co/api/bios/',
  opportunityUrl: 'https://torre.co/api/opportunities/'
}

module.exports = config
