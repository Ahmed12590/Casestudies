$(document).ready(() => {

  gsap.registerPlugin(Draggable);
  SplitType.create(".hero-txt-h1");

  //setting elements inital css

  gsap.set(".char", {
    yPercent: 100,
  });

  gsap.set(".portfolio-punch .line-inner", {
    yPercent: -100,
  });

  gsap.set(".mob-inner", {
    yPercent: -100,
  });

  gsap.set(".faq-body", {
    display: "none",
    opacity: 0,
  });

  //tweens

  ScrollTrigger.create({
    trigger: ".portfolio-hero",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
  });

  tl = gsap.timeline();

  tl.to(".portfolio-hero .line-inner", {
    scrollTrigger: {
      trigger: ".portfolio-hero",
      start: "top center",
      scrub: true,
    },
    yPercent: -100,
    duration: 1.5,
    stagger: 0.09,
    ease: "Expo.easeInOut",
    delay: 1,
  });

  ScrollTrigger.create({
    trigger: ".portfolio-punch",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
  });

  const tl_two = gsap.timeline();

  tl_two.to(".portfolio-punch .line-inner", {
    scrollTrigger: {
      trigger: ".portfolio-punch",
      start: "top center",
      scrub: true,
    },
    yPercent: 0,
    duration: 1,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".char", {
    scrollTrigger: {
      trigger: ".customer-reviews",
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1,
    stagger: 0.05,
    ease: "expo.inOut",
  });

  $(".faq-toggler").click(function () {
    if ($(this).text() == "+") {
      $(this).text("-");

      gsap.to(".faq-body", {
        display: "inline-block",
        opacity: 1,
      });
    } else {
      $(this).text("+");

      gsap.to(".faq-body", {
        opacity: 0,
        display: "none",
      });
    }
  });

  $(".clients-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  // Select all elements with the classes 'layer-one', 'layer-two', and 'btn-tabs'
  let layerOneElements = document.querySelectorAll(".layer-one");
  let layerTwoElements = document.querySelectorAll(".layer-two");
  let btnTabs = document.querySelectorAll(".btn-tabs");

  // Iterate over each button tab
  btnTabs.forEach((el, index) => {
    // Add event listener for mouse enter
    el.addEventListener("mouseenter", () => {
      if (!enterAnim.isActive()) enterAnim.restart();
    });

    // Add event listener for mouse leave
    el.addEventListener("mouseleave", () => {
      if (!leaveAnim.isActive()) leaveAnim.restart();
    });

    // Create enter animation timeline
    let enterAnim = gsap.timeline();
    enterAnim
      .to(layerOneElements[index], { left: "0%" })
      .to(layerTwoElements[index], { left: "0%" }, 0.3);
    enterAnim.reversed(true);

    // Create leave animation timeline
    let leaveAnim = gsap.timeline();
    leaveAnim
      .to(layerTwoElements[index], { left: "100%", scale: 1 })
      .to(layerOneElements[index], { left: "100%" }, 0.3);
    leaveAnim.reversed(true);
  });

  const player = new Plyr("#player");
  const playerTwo = new Plyr("#player-two");

  $(document).ready(function () {
    function activateTab(tab_id) {
      $(".btn-tabs").removeClass("active");
      $(".tab-content").removeClass("active");

      $("[data-tab='" + tab_id + "']").addClass("active");
      $("#" + tab_id).addClass("active");
    }

    // Extract tab identifier from URL path if present
    var path = window.location.pathname;
    var pathSegments = path.split("/");
    var tab_id = pathSegments[pathSegments.length - 1]; // Assuming the tab ID is the last segment

    // If the last segment is a valid tab ID, activate the corresponding tab
    if ($("[data-tab='" + tab_id + "']").length) {
      activateTab(tab_id);
    }

    $(".btn-tabs").click(function () {
      var tab_id = $(this).attr("data-tab");
      activateTab(tab_id);
    });
  });

  const imgReveal = gsap.utils.toArray(".img-reveal");

  imgReveal.forEach(img => {
    const imgReveal_tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "center bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",

      },
    })

    let item = img.querySelector(".case-study-img");
    imgReveal_tl.fromTo(item, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.out",
      duration: 2,
    }).to(item, {
      scale: 1,
      delay: -2,
      duration: 1.4,
      ease: "power1.out"
    });
  });
});


// 🛑 Stop only unwanted redirect, not animations
const redirectBlocker = setInterval(() => {
  if (window.location.href.includes("digitalgravity.ae")) {
    clearInterval(redirectBlocker);
    window.stop();
  }
}, 500);




// ===== Mobile Dropdown Toggle =====
const dropdownToggle = document.querySelector(".dropdown-toggle");
const mobileDropdown = document.querySelector(".mobile-dropdown");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault(); // stop link click
  mobileDropdown.classList.toggle("show");
});





const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});
