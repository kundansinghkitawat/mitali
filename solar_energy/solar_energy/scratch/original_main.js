/*Lottie Loader*/
var anim;
var anim2 = document.getElementById('loader_animation')
var animation = {
  container: anim2,
  renderer: 'svg',
  loop: false,
  autoplay: true,   /*MAKE SURE THIS IS FALSE*/
  rendererSettings: {
    progressiveLoad: false
  },
  path: webPath + 'themes/web/animations/logoanimation.json',
  name: 'myAnimation',
};
anim2 = lottie.loadAnimation(animation);

$(document).ready(function () {

  /*Preload Images*/
  if (typeof (preloadImageList) !== "undefined") {
    if (preloadImageList.length > 0) {
      checkImagesLoaded(preloadImageList);
    } else {
      whenImagesAreLoaded(0);
    }
  } else {
    whenImagesAreLoaded(0);
  }

  function checkImagesLoaded(arrayIds) {
    // Initialize the counter
    var counter = arrayIds.length;
    arrayIds.forEach(function (id) {
      var element = $('#' + id);
      if (!element.prop('complete')) {
        element.on('load', function () {
          counter--;
          whenImagesAreLoaded(counter);
        });
        element.on('error', function () {
          counter--;
          whenImagesAreLoaded(counter);
        });
      } else {
        counter--;
        whenImagesAreLoaded(counter);
      }
    });
  }

  function whenImagesAreLoaded(counter) {
    if (counter === 0) {
      const video = document.querySelector(".video-background");
      let videoSrc = webPath + "themes/web/img/abstract-background-ink-water-20072.mp4";

      setTimeout(function () {
        
        $('body, html').addClass('overflow');

        ScrollTrigger.matchMedia({
          // large
          "(min-width: 1000px)": function () {
            video.setAttribute("src", videoSrc);
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
              defaults: {duration: 1},
              scrollTrigger: {
                trigger: "#container",
                start: "top top",
                end: "bottom bottom",
                scrub: true
              }
            });

            function once(el, event, fn, opts) {
              var onceFn = function (e) {
                el.removeEventListener(event, onceFn);
                fn.apply(this, arguments);
              };
              el.addEventListener(event, onceFn, opts);
              return onceFn;
            }

            // Cuando los metadatos del video están listos, animamos el timeline
            once(video, "loadedmetadata", () => {
              tl.fromTo(
                video,
                {currentTime: 0},
                {currentTime: video.duration || 1}
              );
            });
          },
        });
      }, 200);

      setTimeout(function () {
        
        video.load(); // Esto asegura que el video se cargue si no está ya cargado
      }, 1000);

      setTimeout(function () {
        if (!isMobile()) {
          // Smooth Scroll
          const smoother = ScrollSmoother.create({
            content: "#smooth-content",
            smooth: 1,
            normalizeScroll: true,
            ignoreMobileResize: true,
            effects: true,
          });
        }

        $('.normal_btn').click(function (e) {
          e.preventDefault();
          if ($('.normal_navigation').hasClass('open')) {
            $('.normal_navigation').removeClass('open');
            $('html').removeClass('overflow_mobile');

          } else {
            $('.normal_navigation').addClass('open');
            $('html').addClass('overflow_mobile');
          }
        });

        $('.hidden_btn').click(function (e) {
          e.preventDefault();
          if ($('.hide_navigation').hasClass('open')) {
            $('.hide_navigation').removeClass('open');
            $('html').removeClass('overflow_mobile');
          } else {
            $('.hide_navigation').addClass('open');
            $('html').addClass('overflow_mobile');
          }
        });
      }, 1300);

      setTimeout(function () {
        $('.content_loading').addClass('animation');
        

        /*Circle Scale*/
        gsap.set("#circle", {xPercent: 0, yPercent: 0}),
          gsap.to("#circle", {
            scale: 50, x: "0", scrollTrigger: {
              trigger: "#circle",
              start: "top 90%",
              end: "+=2000",
              markers: false,
              pin: true,
              scrub: true
            }
          });

        /*ScrollTrigger.matchMedia({
          "(min-width: 1000px)": function () {
            gsap.set("#circle", { xPercent: -50, yPercent: -50 });

            gsap.to("#circle", {
              scale: 50,  // Ajusta según necesidad
              x: 0,
              transformOrigin: "center",
              scrollTrigger: {
                trigger: "#circle",
                start: "top 90%",
                end: "+=2000",
                markers: false,
                pin: true,
                scrub: true
              }
            });
          },
        });*/

          

      }, 2000);

      setTimeout(function () {
        $('.content_loading').addClass('hide');

        /*Slider*/
        $('.slider').slick({
          fade: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          dots: true,
          arrows: false
        });

        /*Text Reveal*/
        let split = new SplitText("p.text_reveal", {type: "lines"});
        let masks;

        function makeItHappen() {
          masks = [];
          split.lines.forEach((target) => {
            let mask = document.createElement("span");
            mask.className = "mask";
            target.append(mask);
            masks.push(mask);
            gsap.to(mask, {
              scaleX: 0,
              transformOrigin: "right center",
              ease: "none",
              scrollTrigger: {
                trigger: target,
                markers: false,
                scrub: true,
                start: "top center",
                end: "bottom center"
              }
            });
          });
        }

        window.addEventListener("resize", newTriggers);

        function newTriggers() {
          ScrollTrigger.getAll().forEach((trigger, i) => {
            trigger.kill();
            masks[i].remove();
          });
          split.split();
          makeItHappen();
        }

        makeItHappen();

      }, 3500);

      setTimeout(function () {
        $('.content_hero').addClass('show');
        $('.content_navigation').addClass('show');

        ScrollTrigger.create({
          trigger: ".content_sticky", // What element triggers the scroll
          scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
          start: "top top", // Can be top, center, bottom
          end: "bottom bottom", // Can be top, center, bottom
          pin: ".content_video",
          pinSpacing: false,
          markers: false,
        });

        
        /*Add is-inview class to sections with "classView" class*/
        let viewSections = gsap.utils.toArray(".classView");
        viewSections.forEach((section) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "+=900",
              onEnter: () => onEnter(section),
              onEnterBack: () => onEnter(section),
            }
          })
        });

        function onEnter(section) {
          $(section).addClass("is-inview");
          removeActiveLink()
          if (section.id) {
            const link = document.querySelector('[data-section="' + section.id + '"]')
            link.classList.add('active')
          }
        }

        ScrollTrigger.create({
          trigger: '.bg_change_video',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => {
            document.querySelector('.content_dot').classList.add('active_bg_video');
            document.querySelector('.content_steps_video').classList.add('active_bg_video');
          },
          onLeaveBack: () => {
            document.querySelector('.content_dot').classList.remove('active_bg_video');
            document.querySelector('.content_steps_video').classList.remove('active_bg_video');
          }
        });

        ScrollTrigger.create({
          trigger: '.bg_change',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => {
            document.querySelector('.bg_change').classList.add('active_bg');
          },
          onLeaveBack: () => {
            document.querySelector('.bg_change').classList.remove('active_bg');
          }
        });

        ScrollTrigger.create({
          trigger: '.bg_change_green',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => {
            document.querySelector('.content_news').classList.add('active_bg_change');
            document.querySelector('.content_banner').classList.add('active_bg_change');
            document.querySelector('.content_iplusd').classList.add('active_bg_change');
            document.querySelector('.content_about').classList.add('active_bg_change');
          },
          onLeaveBack: () => {
            document.querySelector('.content_news').classList.remove('active_bg_change');
            document.querySelector('.content_banner').classList.remove('active_bg_change');
            document.querySelector('.content_iplusd').classList.remove('active_bg_change');
            document.querySelector('.content_about').classList.remove('active_bg_change');
          }
        });

        ScrollTrigger.create({
          trigger: '.bg_change_white',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => {
            document.querySelector('.content_steps_video').classList.add('active_bg_change_white');
            document.querySelector('.content_about').classList.add('active_bg_change_white');
          },
          onLeaveBack: () => {
            document.querySelector('.content_steps_video').classList.remove('active_bg_change_white');
            document.querySelector('.content_about').classList.remove('active_bg_change_white');
          }
        });

      }, 3500);

      setTimeout(function () {
        scrollToSectionFromUrl();
      }, 5200);

    }
  }

  /*Menu hide*/
  const cntNavitationItem = document.querySelector(".hide_navigation");
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var menuHidden = document.getElementById('menu');
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      cntNavitationItem.classList.add("active");
    } else {
      if (!menuHidden.classList.contains('open')) {
        cntNavitationItem.classList.remove("active");
      }
    }
    if (currentScrollPos < 600) {
      cntNavitationItem.classList.remove("active");
    }
    prevScrollpos = currentScrollPos;
  }

  /*Link-To*/
  document.querySelectorAll('.link_items').forEach((e) => {
    e.addEventListener('click', (e) => {
      e.preventDefault();
      removeActiveLink()
      e.currentTarget.classList.add('active')
      gsap.to(window, {duration: 1, scrollTo: "#" + e.currentTarget.dataset.section});
    })
  });

  function scrollToSectionFromUrl() {
    const currentPage = document.getElementById('smooth-content').getAttribute('data-navigation');
    const section = window.location.hash;
    if (currentPage === 'home' && section) {
      gsap.to(window, {duration: 1, scrollTo: section});
    }
  }

  function removeActiveLink() {
    const activeLink = document.querySelector('.link_items.active')

    if (activeLink) {
      activeLink.classList.remove('active')
    }
  }

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }
});




    

    