const should = require('should');
const Backoff = require('../index')

describe('node-backoff', () => {
    describe('#forAttempt()', () => {
        it('should return duration success', () => {
            let backoff = new Backoff();
            backoff.forAttempt(0).should.be.equal(100)
            backoff.forAttempt(1).should.be.equal(200)
            backoff.forAttempt(2).should.be.equal(400)
            backoff.forAttempt(3).should.be.equal(800)
        })
    })

    describe('#duration()', () => {
        it('should increase attempts success', () => {
            let backoff = new Backoff();
            backoff.duration().should.be.equal(100)
            backoff.duration().should.be.equal(200)
            backoff.duration().should.be.equal(400)
            backoff.duration().should.be.equal(800)
        })
    })

    describe('#duration()', () => {
        it('should increase attempts with jitter success', () => {
            let backoff = new Backoff({ jitter: true });
            backoff.duration().should.be.equal(100);
            backoff.duration().should.be.above(200);
            backoff.duration().should.be.above(400);
            backoff.duration().should.be.above(800);
        })
    })
})