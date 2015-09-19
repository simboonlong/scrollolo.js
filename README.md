## scrollolo.js
A lightweight js plugin, that animates elements when entering viewport.

1. requires Jquery, TweenMax.
2. manually tested on latest version of Chrome, Firefox, Safari.
3. optional custom animations, using data-attributes.

## Mechanics

Currently the plugin only supports the 4 basic animations: translate, scale, rotation, opacity. This is in line with keeping animations high performing on browsers. Read more at: http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/

Integrated throttling function from underscore.js. Read more at: http://underscorejs.org/#throttle

## Demo
Demo link at http://htmlpreview.github.io/?https://github.com/simboonlong/scrollolo.js/blob/master/site/index.html


## Usage
To use, assign `scrollolo` class to any element you want to animate.
```

<div class="scrollolo"></div>

```

Include `scrollolo.js` script.
```

<script type="text/javascript" src="scrollolo.js"></script>

```

Then initialize `scrollolo.js` with the following arguments.

```

// instantiate with scrollolo class + options
var scrolloloCache = $('.scrollolo'); // to cache element
var scrollolo = new Scrollolo( scrolloloCache, {
    throttleThreshold : 20, // scrolling throttle
    offsetDown : 0, // element percentage offset for scrolling down, use float values
    offsetUp : 0, // element percentage offset for scrolling up, use float values
    direction : 'none', // x, y, none
    x : 20, // starting x offset
    y : 20, // starting y offset
    scale : 0.2, // starting scale
    rotation : 0, // starting rotation
    opacity : 0, // starting opacity
    delay : 0, // starting delay
    duration : 1.7, // starting duration
    easeType : 'Expo.easeOut' // ease type, refer to TweenMax documentation at: http://greensock.com/ease-visualizer
});
scrollolo.initialize(); // init scrollolo

```

## Customizing
Use data attributes `data-scrollolo` to do customized animation behaviour on any element with the scrollolo class. Below are the available data attributes:

- data-scrollolo-direction
- data-scrollolo-x
- data-scrollolo-y
- data-scrollolo-scale
- data-scrollolo-rotation
- data-scrollolo-opacity
- data-scrollolo-delay
- data-scrollolo-duration
- data-scrollolo-easetype

Example:
```

<div class="scrollolo" data-scrollolo-direction="y" data-scrollolo-y="100" data-scrollolo-scale="1" data-scrollolo-rotation="360" data-scrollolo-opacity="0.25" data-scrollolo-delay="0.7" data-scrollolo-duration="1.5" data-scrollolo-easetype="Expo.easeOut">

```


## Issues
1. Not tested in IE yet.


## Todo
1. Trigger on elements' offset position relative to document.height, rather than isElementInViewport.
2. Offset capability for individual elements.


## License
scrollolo.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)


## Contributing
Feel free to contribute.
