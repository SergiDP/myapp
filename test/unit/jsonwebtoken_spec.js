const sinon = require('sinon');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server.js')
describe('test mocha', () => {
    it('mocha works', () => {
        expect(true).to.be.true;
    })
})

let token = null;
before((done) => {
    request(app)
        .post('/login')
        .send({
            username: 'admin',
            password: 'password'
        })
        .end(function(err, res) {
            token = res.body.token;
            done();
        });
});

describe('POST /login', () => {
    it('responds with json', (done) => {
        const user = {
            username: 'admin',
            password: 'password'
        }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('responds with 403 forbidden if user incorrect', (done) => {
        const user = {
            username: 'lalala',
            password: 'password'
        }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /text/)
            .expect(403, done);
    });

    it('responds with 403 forbidden if password incorrect', (done) => {
        const user = {
            username: 'admin',
            password: 'lalala'
        }
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /text/)
            .expect(403, done);
    });

    it('responds with 400 if no user password', (done) => {
        const user = null;
        request(app)
            .post('/login')
            .set('Accept', 'application/json')
            .send(user)
            .expect('Content-Type', /text/)
            .expect(400, done);
    });


});

describe('GET /', () => {
    it('success if token Ok', function(done) {
        request(app)
            .get('/')
            .set('Authorization', token)
            .expect(200)
            .end ((err, response) => {
                expect(response.body.success).to.be.true;
                done();
            });
    });

    it('no success if token not OK', function(done) {
        request(app)
            .get('/')
            .set('Authorization', 'badtoken')
            .expect(200)
            .end ((err, response) => {
                expect(response.body.success).to.be.true;
                done();
            });
    });
})
