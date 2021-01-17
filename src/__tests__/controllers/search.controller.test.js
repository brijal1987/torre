const axios = require('axios')
const searchController = require('../../controllers/search.controller')

jest.mock('axios');

const mockRequest = (params, body) => ({
    params,
    body
})

const mockResponse = (data) => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    res.data = data
    return res
}
describe('Test searchController functions', () => {
    test('on search people success', async (done) => {
        const data = {
            status: 200,
            data: {},
            total: 100
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse(data)
        const req = mockRequest({type: 'people'}, { search:0, page:0, size:20, offset:0 })
        await searchController.search(req, res)
        expect(res.data.status).toEqual(200);
        done()
    })
    test('on search jobs success', async (done) => {
        const data = {
            status: 200,
            data: {},
            total: 100
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse(data)
        const req = mockRequest({type: 'jobs'}, { search:0, page:0, size:20, offset:0 })
        await searchController.search(req, res)
        expect(res.data.status).toEqual(200);
        done()
    })
    test('on search without parameters', async (done) => {
        const data = {
            status: 200,
            data: {},
            total: 100
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse(data)
        const req = mockRequest({type: ''}, { search:0, page:0, size:20, offset:0 })
        await searchController.search(req, res)
        expect(res.data.status).toEqual(200);
        done()
    })
});
