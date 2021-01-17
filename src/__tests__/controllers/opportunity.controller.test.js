const axios = require('axios')
const opportunityController = require('../../controllers/opportunity.controller')

jest.mock('axios');

const mockRequest = (params, body) => ({
    params,
    body
})

const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    res.render = jest.fn()
    return res
}

describe('Test opportunityController functions', () => {
    test('on opportunity success', async (done) => {
        const data = {
            status: 200,
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse()
        const req = mockRequest({job_id: '1'})
        await opportunityController.opportunity(req, res)
        expect(res.render).toHaveBeenCalledWith('opportunity.ejs', { opportunity:data.data });
        done()
    })

    test('on opportunity failed', async (done) => {
        const data = {
            status: 401,
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse()
        const req = mockRequest({job_id: '1'})
        await opportunityController.opportunity(req, res)
        expect(res.render).toHaveBeenCalledWith('opportunity.ejs', { opportunity:false });
        done()
    })

    test('on opportunity, job_id not passed', async (done) => {
        const data = {
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.reject(data));
        const res = mockResponse()
        const req = mockRequest({job_id: ''})
        await opportunityController.opportunity(req, res)
        expect(res.render).toHaveBeenCalledWith('opportunity.ejs', { opportunity:false });
        done()
    })
    test('on opportunity exception', async (done) => {
        axios.get.mockRejectedValueOnce(Promise.reject(new Error('something bad happened')));
        const res = Promise.reject(new Error('something bad happened'))
        const req = mockRequest({})

        try {
            await opportunityController.opportunity(req, res)
        } catch (err) {
            console.error(res, 'res')
        }
        done()
    })
});
