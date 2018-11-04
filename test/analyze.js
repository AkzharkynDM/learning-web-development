process.env.NODE_ENV = 'test';

//let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app=requere("../app");
chai.use(chaiHttp);

/*
  * Test the /GET route
  */
  /*curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' */
  describe('/GET '+command, () => {
      it('it should check the response from my task', (done) => {
        chai.request(app)
            .get('/analyze')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(json({
                    "textLength":{"withSpaces":15,"withoutSpaces":11},
                    "wordCount":3,
                    "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
                  }));
              done();
            });
      });
  });

});
