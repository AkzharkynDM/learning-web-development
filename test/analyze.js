process.env.NODE_ENV = 'test';

//let mongoose = require("mongoose");
var request = require('request');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app=require("../app");
chai.use(chaiHttp);


  describe('/POST', () => {
    var dataString = 'hello 2 times  ';
      it('Also, the list of characters in answers doesnt include number', (done) => {
        chai.request(app)
            .post('/analyze')
            .send({"text": dataString})
            .end((err, res) => {
                  //res.should.have.status(200);
                  res.body.should.be.eql({
                    "textLength":{"withSpaces":15,"withoutSpaces":11},
                    "wordCount":3,
                    "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
                  });
              done();
            });
      });
  });


  describe('/POST', () => {
    var dataString = '   ';
      it('Negative test', (done) => {
        chai.request(app)
            .post('/analyze')
            .send({"text": dataString})
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.eql({
                    "textLength":{"withSpaces":3,"withoutSpaces":0},
                    "wordCount":0,
                    "characterCount":[]
                  });
              done();
            });
          });
      });

      describe('/POST', () => {
        var dataString = 'hello 4';
          it('Punctuation chars must be omitted check', (done) => {
            chai.request(app)
                .post('/analyze')
                .send({"text": dataString})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.eql({
                        "textLength":{"withSpaces":7,"withoutSpaces":6},
                        "wordCount":2,
                        "characterCount":[{"e":1},{"h":1},{"l":2},{"o":1}]
                      });
                  done();
                });
          });
  });

  describe('/POST', () => {
    var data_string = " trailing spaces...     ";
      it('Punctuation chars must be omitted check', (done) => {
        chai.request(app)
            .post('/analyze')
            .send({"text": data_string})
            .end((err, res) => {
                  //res.should.have.status(200);
                  res.body.should.be.eql({
                    "textLength":{"withSpaces":24,"withoutSpaces":17},
                    "wordCount":2,
                    "characterCount":[{
                    "a": 2
                },
                {
                    "c": 1
                },
                {
                    "e": 1
                },
                {
                    "g": 1
                },
                {
                    "i": 2
                },
                {
                    "l": 1
                },
                {
                    "n": 1
                },
                {
                    "p": 1
                },
                {
                    "r": 1
                },
                {
                    "s": 2
                },
                {
                    "t": 1
                }]
                  });
              done();
            });
      });
});
