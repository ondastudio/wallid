$(document).ready(function () {
  $(".tab-trigger").on("inview", function (event, isInView) {
    if (isInView) {
      // Select the SVG element
      const svgElement = document.querySelector(".svg-tab1");
      // Define the DrawSVG timeline
      const drawSVGTimeline = gsap.timeline({
        defaults: { ease: "none" }
      });

      drawSVGTimeline.fromTo(
        ".draw-me",
        {
          strokeDasharray: "1000px",
          strokeDashoffset: "1000px",
          opacity: 0
        },
        {
          strokeDasharray: "0px",
          strokeDashoffset: "10px",
          duration: 3,
          stagger: 0.6,
          opacity: 1
        }
      );
      drawSVGTimeline.fromTo(
        ".draw-me-mobile",
        {
          strokeDasharray: "1000px",
          strokeDashoffset: "1000px",
          opacity: 0
        },
        {
          strokeDasharray: "0px",
          strokeDashoffset: "0px",
          duration: 3,
          stagger: 0.6,
          opacity: 1
        },
        0
      );
    }
  });

  $(".trigger-2").on("click", function () {
    // Tab 2

    // Select the SVG element
    const svgElement2 = document.querySelector(".svg-tab2");
    // Define the DrawSVG timeline
    const drawSVGTimeline2 = gsap.timeline({
      defaults: { ease: "none" }
    });

    drawSVGTimeline2.fromTo(
      ".draw-me2",
      {
        strokeDasharray: "1000px",
        strokeDashoffset: "1000px",
        opacity: 0
      },
      {
        strokeDasharray: "0px",
        strokeDashoffset: "10px",
        duration: 3,
        stagger: 0.6,
        opacity: 1
      }
    );
    drawSVGTimeline2.fromTo(
      ".draw-me-mobile2",
      {
        strokeDasharray: "1000px",
        strokeDashoffset: "1000px",
        opacity: 0
      },
      {
        strokeDasharray: "0px",
        strokeDashoffset: "0px",
        duration: 3,
        stagger: 0.6,
        opacity: 1
      },
      0
    );
  });

  $(".trigger-3").on("click", function () {
    // Tab 3

    // Select the SVG element
    const svgElement3 = document.querySelector(".svg-tab3");
    // Define the DrawSVG timeline
    const drawSVGTimeline3 = gsap.timeline({
      defaults: { ease: "none" }
    });

    drawSVGTimeline3.fromTo(
      ".draw-me3",
      {
        strokeDasharray: "1000px",
        strokeDashoffset: "1000px",
        opacity: 0
      },
      {
        strokeDasharray: "0px",
        strokeDashoffset: "10px",
        duration: 3,
        stagger: 0.6,
        opacity: 1
      }
    );
    drawSVGTimeline3.fromTo(
      ".draw-me-mobile3",
      {
        strokeDasharray: "1000px",
        strokeDashoffset: "1000px",
        opacity: 0
      },
      {
        strokeDasharray: "0px",
        strokeDashoffset: "0px",
        duration: 3,
        stagger: 0.6,
        opacity: 1
      },
      0
    );
  });
});
