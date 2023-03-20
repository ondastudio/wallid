document.addEventListener("DOMContentLoaded", function () {
  $("#tabs").on("inview", function (event, isInView) {
    if (isInView) {
      // Select the SVG element
      const svgElement = document.querySelector(".svg-tab1");
      // Define the DrawSVG timeline
      const drawSVGTimeline = gsap.timeline();
      // Set up the DrawSVG animation
      drawSVGTimeline.to(svgElement, {
        defaults: { ease: "none" }
      });
      //draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
      TweenMax.staggerFrom(".draw-me", 1, { drawSVG: 0 }, 0.5);
      TweenMax.staggerFrom(".draw-me-mobile", 1, { drawSVG: 0 }, 0.5);
      // Start the animation
      drawSVGTimeline.resume();
    }
  });

  $(".trigger-2").on("click", function () {
    //tab2

    // Select the SVG element
    const svgElement2 = document.querySelector(".svg-tab2");
    // Define the DrawSVG timeline
    const drawSVGTimeline2 = gsap.timeline();
    // Set up the DrawSVG animation
    drawSVGTimeline2.to(svgElement2, {
      defaults: { ease: "none" }
    });
    //draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
    TweenMax.staggerFrom(".draw-me2", 3, { drawSVG: 0 }, 0.5);
    TweenMax.staggerFrom(".draw-me-mobile2", 3, { drawSVG: 0 }, 0.5);
    // Start the animation
    drawSVGTimeline2.play();
  });

  $(".trigger-3").on("click", function () {
    //tab3

    // Select the SVG element
    const svgElement3 = document.querySelector(".svg-tab3");
    // Define the DrawSVG timeline
    const drawSVGTimeline3 = gsap.timeline();
    // Set up the DrawSVG animation
    drawSVGTimeline3.to(svgElement3, {
      defaults: { ease: "none" }
    });
    //draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
    TweenMax.staggerFrom(".draw-me3", 3, { drawSVG: 0 }, 0.5);
    TweenMax.staggerFrom(".draw-me-mobile3", 3, { drawSVG: 0 }, 0.5);
    // Start the animation
    drawSVGTimeline3.play();
  });
