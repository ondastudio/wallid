$(document).ready(function() {
  $("#tabs").on("inview", function (event, isInView) {
    if (isInView) {
      // Select the SVG element
      const svgElement = document.querySelector(".svg-tab1");
      console.log(svgElement); // Check if svgElement is properly defined and not null
      // Define the DrawSVG timeline
      const drawSVGTimeline = gsap.timeline({
        defaults: { ease: "none" },
      });
              console.log(drawSVGTimeline); // Check if drawSVGTimeline is properly defined

      // Set up the DrawSVG animation
    console.log($(svgElement)); // Check if the selector for svgElement is correct
      drawSVGTimeline.to($(svgElement));
      // Draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
      gsap.staggerFrom(".draw-me", 1, { drawSVG: 0 }, 0.5);
      gsap.staggerFrom(".draw-me-mobile", 1, { drawSVG: 0 }, 0.5);
      // Start the animation
      drawSVGTimeline.play();
    }
  });

  $(".trigger-2").on("click", function () {
    // Tab 2
    
    // Select the SVG element
    const svgElement2 = document.querySelector(".svg-tab2");
    console.log(svgElement2); // Check if svgElement is properly defined and not null
    // Define the DrawSVG timeline
    const drawSVGTimeline2 = gsap.timeline({
      console.log(drawSVGTimeline2); // Check if drawSVGTimeline is properly defined
      defaults: { ease: "none" },
    });
    // Set up the DrawSVG animation
  console.log($(svgElement2)); // Check if the selector for svgElement is correct
    drawSVGTimeline2.to($(svgElement2));
    // Draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
    gsap.staggerFrom(".draw-me2", 3, { drawSVG: 0 }, 0.5);
    gsap.staggerFrom(".draw-me-mobile2", 3, { drawSVG: 0 }, 0.5);
    // Start the animation
    drawSVGTimeline2.play();
  });

  $(".trigger-3").on("click", function () {
    // Tab 3

    // Select the SVG element
    const svgElement3 = document.querySelector(".svg-tab3");
    console.log(svgElement3); // Check if svgElement is properly defined and not null
    // Define the DrawSVG timeline
    const drawSVGTimeline3 = gsap.timeline({
      console.log(drawSVGTimeline3); // Check if drawSVGTimeline is properly defined
      defaults: { ease: "none" },
    });
    // Set up the DrawSVG animation
console.log($(svgElement3)); // Check if the selector for svgElement is correct
    drawSVGTimeline3.to($(svgElement3));
    // Draws all elements with the "draw-me" class applied with staggered start times 0.5 seconds apart
    gsap.staggerFrom(".draw-me3", 3, { drawSVG: 0 }, 0.5);
    gsap.staggerFrom(".draw-me-mobile3", 3, { drawSVG: 0 }, 0.5);
    // Start the animation
    drawSVGTimeline3.play();
  });
});
