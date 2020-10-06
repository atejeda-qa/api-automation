import supertest from 'supertest'
import { expect } from 'chai'

const request = supertest(`${process.env.BASE_URL}`)

describe('Server ON', () => {
    it('GET /are-you-alive', () => {
        request
            .get('/are-you-alive')
            .then((res) => {
                expect(res.status).eql(200)
            })
    })
})
