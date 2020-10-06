import supertest from 'supertest'
import { expect } from 'chai'

const request = supertest(`${process.env.BASE_URL}`)

describe('User requests ', () => {
    const loginData = {
        "meta": {},
        "data": {
            "type": "login",
            "attributes": {
                "email": "email",
                "password": "password",
                "login_attempts": 1
            }
        }
    }

    it('Login uccesfull', () => {
        request
            .post('/login')
            .set({
                'apikey': `${process.env.API_KEY}`,
                'authority': `${process.env.AUTHORITY}`,
                'origin': `${process.env.ORIGIN}`
            })
            .send(loginData)
            .then((res) => {
                expect(res.status).eql(200)
                expect(res.body).haveOwnProperty('data')
            })
    })
})
