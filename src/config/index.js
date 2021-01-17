require('dotenv').config()
const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  baseURL: 'http://localhost:9000/',// https://torre-brijal.herokuapp.com/
  torreBioUrl: 'https://bio.torre.co/api/bios/',
  opportunityUrl: 'https://torre.co/api/opportunities/',
  searchPeopleURL: 'https://search.torre.co/people/_search/',
  searchOpportunityURL: 'https://search.torre.co/opportunities/_search/'
}
module.exports = config
