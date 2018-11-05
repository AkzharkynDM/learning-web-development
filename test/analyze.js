process.env.NODE_ENV = 'test';

//let mongoose = require("mongoose");
var request = require('request');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app=require("../app");
chai.use(chaiHttp);

var dataString = 'hello 2 times  ';

  describe('/POST', () => {
      it('it should check the response from my task', (done) => {
        chai.request(app)
            .post('/analyze')
            .send({"text": dataString})
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.be.eql({
                    "textLength":{"withSpaces":15,"withoutSpaces":11},
                    "wordCount":3,
                    "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
                  });
              done();
            });
      });
  });
