import supertest from 'supertest'
import { expect } from 'chai'
import routes from '../helpers/routes'

const request = supertest(`${process.env.BASE_URL}`)

describe('POST /login', () => {
    const loginData = {
        "meta": {},
        "data": {
            "type": "login",
            "attributes": {
                "email": `${process.env.USER_EMAIL}`,
                "password": `${process.env.USER_PASSWORD}`,
                "login_attempts": 1
            }
        }
    }

    it('Endpoint should return token', () => {
        request
            .post(`${routes.LOGIN}`)
            .set({
                'apikey': `${process.env.API_KEY}`,
                'authority': `${process.env.AUTHORITY}`,
                'origin': `${process.env.ORIGIN}`
            })
            .send(loginData)
            .then((res) => {
                expect(res.status).eql(200)
                expect(res.body.data.attributes).have.property('id_token')
                expect(res.body.data.attributes).have.property('access_token')
                expect(res.body.data.attributes).have.property('refresh_token')
            })
    })
})
