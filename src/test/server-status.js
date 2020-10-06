import supertest from 'supertest'
import { expect } from 'chai'
import routes from '../helpers/routes'

const request = supertest(`${process.env.BASE_URL}`)

describe('Server status', () => {
    it('Validate server status | GET /are-you-alive', () => {
        request
            .get(`${routes.SERVER}`)
            .then((res) => {
                expect(res.status).eql(200)
            })
    })
})
