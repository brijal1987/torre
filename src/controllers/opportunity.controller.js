const axios = require('axios')
const config = require('../config')

exports.opportunity = async (req, res, next) => {
  const { job_id: jobID } = req.params
  try {
    if(jobID) {
      const response = await axios.get(`${config.opportunityUrl}${jobID}`)
      if(response.status === 200) {
        res.render('opportunity.ejs', { opportunity: response.data })
      }
      res.render('opportunity.ejs', { opportunity: false })
    }
    res.render('opportunity.ejs', { opportunity: false })
  } catch (error) {
    console.error(error)
    res.render('opportunity.ejs', { opportunity: false })
  }
}
