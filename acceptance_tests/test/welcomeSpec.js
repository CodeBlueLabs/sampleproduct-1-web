"use strict";

const Nightmare = require( "nightmare" ),
      expect = require( "chai" ).expect,
      BASE_URL = "https://sampleproduct1-app.cfapps.io/#/welcome",
      onError = ( err ) => {
        console.error( "Test-runner failed:", err );
      },
      browser = new Nightmare({
        show: false,
        typeInterval: 20,
        pollInterval: 20
      });


describe( "When the application is launched", function(){
  this.timeout( 15000 );
  // start up with the blank list
  before(( done ) => {
    browser
        .goto( BASE_URL )
        .evaluate(() => {
          return localStorage.clear();
        })
        .then(() => {
          done();
        });
  });

     it( "should see the welcome message", ( done ) => {
              browser
                .wait(() => {
                      return document.querySelectorAll( "h2" )[0].innerHTML !== "";
                })
                .evaluate(() => {
                  return document.querySelectorAll( "h2" )[0].innerHTML;
                })
                .then(( res ) => {
                  expect( res ).to.eql( "Welcome to CodeBlue Immersion Lab." );
                  done();
                }).catch( onError );
            });

       after(() => {
          browser
            .end();
        });
});