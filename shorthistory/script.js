
function() {

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('body').scrollLeft -= (delta * 100); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('body').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('body').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('body').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('body').attachEvent('onmousewheel', scrollHorizontally);
    }
};