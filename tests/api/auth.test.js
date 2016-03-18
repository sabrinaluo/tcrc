var mocha = require('mocha');
var should = require('chai').should();
var supertest = require('supertest');
var app = require('./../../app');
var ERROR = require('./../../api/error.json');

var server = supertest(app);

describe('login', ()=> {
  it('should error userNotExists when user not exists', (done)=> {
    server
      .post('/api/login')
      .send({username: 'aa', password: 'bb'})
      .end((e, res)=> {
        res.status.should.equal(400);
        res.body.status.should.equal(ERROR.userNotExists.status);
        res.body.error.should.equal(ERROR.userNotExists.error);
        done();
      });
  });

  it('should 40002 when password wrong', (done)=> {
    server
      .post('/api/login')
      .send({username: 'tutor1', password: 'bb'})
      .end((e, res)=> {
        res.status.should.equal(400);
        res.body.status.should.equal(ERROR.userPassNotMatch.status);
        res.body.error.should.equal(ERROR.userPassNotMatch.error);
        done();
      });
  });

  it('should 200 and return token, when login', (done)=> {
    server
      .post('/api/login')
      .send({username: 'tutor1', password: 'tutor1'})
      .end((e, res)=> {
        res.status.should.equal(200);
        res.body.data.token.should.not.be.empty;
        should.not.exist(res.body.error);
        done();
      });
  });
});
