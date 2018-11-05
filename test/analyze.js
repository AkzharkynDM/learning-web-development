process.env.NODE_ENV = 'test';

//let mongoose = require("mongoose");
var request = require('request');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app=require("../app");
chai.use(chaiHttp);


var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"text":"hello 2 times  "}';

var options = {
    url: 'http://localhost:3000/analyze',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

  describe('/POST', () => {
      it('it should check the response from my task', (done) => {
        chai.request(app)
            .get('/analyze')
            .end((err, res) => {
                  res.should.have.status(500);
                  res.body.length.should.be.eql(json({
                    "textLength":{"withSpaces":15,"withoutSpaces":11},
                    "wordCount":3,
                    "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
                  }));
              done();
            });
      });
  });
