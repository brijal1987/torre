const axios = require('axios')
const userController = require('../../controllers/user.controller')

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

describe('Test userController functions', () => {
    test('on profile success', async (done) => {
        const data = {
            status: 200,
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse()
        const req = mockRequest({username: 'test'})
        await userController.profile(req, res)
        expect(res.render).toHaveBeenCalledWith('profile.ejs', { user:data.data });
        done()
    })
    test('on profile failed', async (done) => {
        const data = {
            status: 401,
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const res = mockResponse()
        const req = mockRequest({username: 'test'})
        await userController.profile(req, res)
        expect(res.render).toHaveBeenCalledWith('profile.ejs', { user:false });
        done()
    })
    test('on profile, username not passed', async (done) => {
        const data = {
            data: {},
          };
        axios.get.mockImplementationOnce(() => Promise.reject(data));
        const res = mockResponse()
        const req = mockRequest({username: ''})
        await userController.profile(req, res)
        expect(res.render).toHaveBeenCalledWith('profile.ejs', { user:false });
        done()
    })
    test('on profile exception', async (done) => {
        axios.get.mockRejectedValueOnce(Promise.reject(new Error('something bad happened')));
        const res = Promise.reject(new Error('something bad happened'))
        const req = mockRequest({})

        try {
            await userController.profile(req, res)
        } catch (err) {
            console.error(res, 'res')
        }
        done()
    })
});
