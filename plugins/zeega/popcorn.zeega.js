// pop.zeega( ..... [ 10, 10, 10,

(function( Popcorn ) {
  Popcorn.plugin( "zeega", function()
  {
    // one time Setup
    var ZeegaScriptURL = "http://somewhere",

    // Ready called by Zeega player
    zeegaReady = function( options ) {

      var fto = options.frameTimeout || 10;
      for ( var i = 0, len = options._zeega.frameCount; i < len; i++ ) {
        createFrameAdvance( options, fto + ( i * fto ) );
      }

    },

    // Call end manually
    zeegaEnded = function(options) {
      console.log('zeegaEnded has been called');
      options._natives.end && options._natives.end({},options);

    },

    createZeega = function( options ) {
      options._zeega = new ZeegaPlayer( options.target);

      options._zeega.loadProjectById(options.id, function() {
        zeegaReady( options );
      }, function() {
        zeegaEnded( options );
      });
    },

    createFrameAdvance = function( options, time ) {
      options._frameAdvanceIds.push(
        setTimeout( function() {
          options._zeega && options._zeega.advanceFrame({},options);
        }, time )
      );


    };


    return {
      start: function( event, options ) {

		document.getElementById(options.target).style.top=options.css.top;
		document.getElementById(options.target).style.left=options.css.left;
		options._zeega.beginPlayback();
      },
      end: function( event, options ) {
        if ( options.noEnd ) {
          return;
        }
        document.getElementById(options.target).style.top="-1000%";
		    document.getElementById(options.target).style.left="-1000%";

        /*
        Popcorn.forEach( options._frameAdvanceIds, function( id ) {
          clearTimeout( id );
        });
        */
      },
      _setup:function( options ) {
        if ( !window.ZeegaPlayer ) {
          Popcorn.getScript( ZeegaScriptURL, function() {
            createZeega( options );
          });
        } else {
          createZeega( options );
        }
        console.log(this);
      },
      _teardown:function( options ){
        // Will need for Butter/Popcorn Maker
        //options._zeega.teardown();
      },
      toString:function( options ) {

      }

    };
  });
})( Popcorn );