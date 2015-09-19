var Scrollolo = (function(){
    'use strict';
    /* jshint validthis:true */
    // Constructor
    function Scrollolo( el, options ) {
        // options settings
        this.el = el;
        this.throttleThreshold = options.throttleThreshold;
        this.offsetDown = options.offsetDown;
        this.offsetUp = options.offsetUp;
        this.direction = options.direction;
        this.x = options.x;
        this.y = options.y;
        this.scale = options.scale;
        this.rotation = options.rotation;
        this.opacity = options.opacity;
        this.delay = options.delay;
        this.duration = options.duration;
        this.easeType = options.easeType;
    }
    // Methods
    Scrollolo.prototype = {
        throttle : function( func, wait, options ) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) {
                options = {};
            }
            var later = function() {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) {
                    context = args = null;
                }
            };
            return function() {
                var now = Date.now();
                if (!previous && options.leading === false) {
                    previous = now;
                }
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        isElementInViewport : function( el ) {
            if (typeof jQuery === 'function' && el instanceof jQuery) {
                el = el[0];
            }
            var self = this,
                rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 + self.offsetUp &&
                // rect.left >= 0 &&
                rect.bottom <= (window.innerHeight + self.offsetDown || document.documentElement.clientHeight + self.offsetDown) /*or $(window).height() */
                // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
        },
        onScrolling : function() {
            var self = this;
            for (var i = self.el.length - 1; i >= 0; i--) {
                var el = $(self.el[i]),
                    isEntered = self.isElementInViewport( el );
                if ( isEntered && !el.data('scrollolo-animated') ) {
                    var delay = el.data('scrollolo-delay') || self.delay,
                        duration = el.data('scrollolo-duration') || self.duration,
                        easeType = el.data('scrollolo-easetype') || self.easeType;
                    TweenMax.to( el, duration, { x:0, y:0, scale:1, rotation:0, opacity:1, delay:delay ,ease:''+easeType+'' });
                    el.data('scrollolo-animated', true);
                    // console.log(el.data('scrollolo-animated'),'done');
                } else {
                    continue; // skips the rest of the iteration, prevent unnecessary function call
                }
                // console.log(i);
            }
        },
        initialize : function() {
            var self = this,
                throttled = self.throttle( self.onScrolling.bind(this), self.throttleThreshold, undefined );
            // set booleans to individual elements
            self.el.data('scrollolo-animated', false);
            // set offset
            self.offsetDown = self.el.outerHeight() * self.offsetDown;
            self.offsetUp = self.el.outerHeight() * -self.offsetUp;
            // set animation values
            for (var i = self.el.length - 1; i >= 0; i--) {
                var el = $(self.el[i]),
                    direction = el.data('scrollolo-direction') || self.direction,
                    x = el.data('scrollolo-x') || self.x,
                    y = el.data('scrollolo-y') || self.y,
                    scale = el.data('scrollolo-scale') || self.scale,
                    rotation = el.data('scrollolo-rotation') || self.rotation,
                    opacity = el.data('scrollolo-opacity') || self.opacity;
                if ( direction === 'x') {
                    TweenMax.set( el, { x:x, y:0, scale:scale, rotation:rotation, opacity:opacity});
                } else if ( direction === 'y' ) {
                    TweenMax.set( el, { x:0, y:y, scale:scale, rotation:rotation, opacity:opacity});
                } else if ( direction === 'none') {
                    TweenMax.set( el, { x:0, y:0, scale:scale, rotation:rotation, opacity:opacity});
                } else {
                }
            }
            // set scroll events and trigger once
            $(window).on('scroll', throttled );
            throttled();
        }
    };
    return Scrollolo;
}());
