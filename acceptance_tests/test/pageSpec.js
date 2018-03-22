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

   it( "should see 3 menus on the top right", ( done ) => {
       browser
         .wait("li")
         .evaluate(() => {
           return document.querySelectorAll( "li" ).length;
         })
         .then(( res ) => {
           expect( res ).to.eql( 3 );
           done();
         }).catch( onError )
     });


       after(() => {
          browser
            .end();
        });
});