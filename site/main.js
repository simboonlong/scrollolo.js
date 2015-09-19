(function( window, document, undefined){
    'use strict';
    // instantiate with scrollolo class + options
    var scrolloloCache = $('.scrollolo'); // to cache element
    var scrollolo = new Scrollolo( scrolloloCache, {
        throttleThreshold : 20, // scrolling throttle
        offsetDown : 0, // element percentage offset for scrolling down, use float values
        offsetUp : 0, // element percentage offset for scrolling up, use float values
        direction : 'none', // x, y, none
        x : 20, // starting x offset
        y : 20, // starting y offset
        scale : 0, // starting scale
        rotation : 0, // starting rotation
        opacity : 0, // starting opacity
        delay : 0, // starting delay
        duration : 1.7, // starting duration
        easeType : 'Expo.easeOut' // ease type, refer to TweenMax documentation at: http://greensock.com/ease-visualizer
    });
    scrollolo.initialize(); // init scrollolo
}(this, this.document));
