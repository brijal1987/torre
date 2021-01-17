const axios = require('axios')
const config = require('../config')

exports.search = async (req, res, next) => {
  const { search, page, size, offset } = req.body
  const { type } = req.params

  try {
    let condition = {}
    let url = ''
    if(type === 'people') {
        condition = {
            or:
            [
                {
                    'skill/role': {
                        text: search,
                        experience: "1-plus-year"
                    }
                },
                {
                    name: {
                        term: search
                    }
                },
                {
                    organization: {
                        term: search
                    }
                }
            ]
        }
        url = config.searchPeopleURL
    } else if (type === 'jobs') {
        condition = {
            'skill/role': {
                text: search,
                experience: "potential-to-develop"
            }
        }
        url = config.searchOpportunityURL
    }
    const response = await axios.post(`${url}?currency=USD%24&page=${page}&periodicity=hourly&lang=es&size=${size}&aggregate=true&offset=${offset}`, condition)
    res.json({data: response.data.results, total: response.data.total, size: size, offset: offset, page: page});

  } catch (error) {
    console.error(error)
  }
}
