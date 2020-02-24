function smoothScrollTo(selector, duration, easing, callback) {
  "use strict";
  var elem = document.querySelector(selector),
    stopped = false,
    y1 = window.pageYOffset || 0,
    y2 = elem.offsetTop || 0,
    distance = Math.abs(y2 - y1),
    direction = y2 > y1 ? "down" : "up",
    t1 = performance.now(),
    t2 = duration || 400,
    easingFn =
      easing ||
      function(t) {
        return t;
      };

  var startScroll = function() {
    requestAnimationFrame(tick);
    window.addEventListener("mousewheel", stopScroll);
  };

  var stopScroll = function() {
    stopped = true;
  };

  var onScrollEnd = function() {
    window.removeEventListener("mousewheel", stopScroll);
    if (callback && typeof callback === "function") callback();
  };

  var isInsideDocument = function(y) {
    if (direction === "down")
      return y < document.body.offsetHeight - window.innerHeight;
    return y > 0;
  };

  var tick = function() {
    var elapsed = performance.now() - t1,
      progress = Math.min(elapsed / t2, 1),
      temp = easingFn(progress) * distance,
      y = direction === "down" ? y1 + temp : y1 - temp;

    if (stopped) {
      stopped = false;
      return;
    }

    if (progress < 1 && isInsideDocument(y)) {
      window.scrollTo(0, y);
      requestAnimationFrame(tick);
    } else {
      window.scrollTo(0, y2);
      requestAnimationFrame(onScrollEnd);
    }
  };

  if (!elem) {
    console.warn(
      "SmoothScrollTo: DOM element " + selector + " does not exist.",
    );
    return;
  }

  if (typeof easingFn !== "function") {
    console.warn("SmoothScrollTo: check easing function.");
    return;
  }

  if (distance === 0) {
    return;
  }

  startScroll();
}