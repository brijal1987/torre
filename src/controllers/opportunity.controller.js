const axios = require('axios')
const config = require('../config')

exports.opportunity = async (req, res, next) => {
  const { job_id: jobID } = req.params
  try {
    const response = await axios.get(`${config.opportunityUrl}${jobID}`)

    res.render('opportunity.ejs', { opportunity: response.data })
  } catch (error) {
    console.error(error)
  }
}
