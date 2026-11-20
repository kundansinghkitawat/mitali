// Interactive Animation & Scroll Hooks for Solar Energy React App

export function initAnimations() {
  const $ = window.$;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const ScrollSmoother = window.ScrollSmoother;
  const SplitText = window.SplitText;
  const lottie = window.lottie;

  if (!$) return;

  // 0. Disable automatic browser scroll restoration on refresh and force top scroll
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // Register GSAP plugins safely
  try {
    if (gsap) {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
        if (typeof ScrollSmoother !== 'undefined' && ScrollSmoother) {
          gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        } else {
          gsap.registerPlugin(ScrollTrigger);
        }
      }
    }
  } catch (e) {
    console.warn('GSAP plugin registration note:', e);
  }

  // 1. Initial body overflow
  try {
    $('body, html').addClass('overflow');
  } catch (e) { }

  // 2. Lottie Preloader
  try {
    const loaderEl = document.getElementById('loader_animation');
    if (loaderEl && lottie && !loaderEl.hasChildNodes()) {
      lottie.loadAnimation({
        container: loaderEl,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: { progressiveLoad: false },
        path: 'https://landopp.uy/themes/web/animations/logoanimation.json',
        name: 'myAnimation',
      });
    }
  } catch (e) { }

  // 3. Main GSAP & ScrollTrigger Setup Function
  let smoother = null;
  const runSetup = () => {
    try {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
      // 3.1 Slick Slider Initialization
      const $slider = $('.slider');
      if ($slider.length && $.fn.slick && !$slider.hasClass('slick-initialized')) {
        $slider.slick({
          fade: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          dots: true,
          arrows: false
        });
      }


      // 3.3 ScrollSmoother (Disabled to allow native GSAP pinning on #circle without transform matrix conflicts)
      smoother = null;

      // 3.4 Video background setup
      const video = document.querySelector('.video-background');
      const videoSrc = 'https://landopp.uy/themes/web/img/abstract-background-ink-water-20072.mp4';

      if (video && gsap && ScrollTrigger) {
        ScrollTrigger.matchMedia({
          '(min-width: 1000px)': function () {
            video.setAttribute('src', videoSrc);
            let tl = gsap.timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: '#container',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
              },
            });

            function once(el, event, fn, opts) {
              var onceFn = function () {
                el.removeEventListener(event, onceFn);
                fn.apply(this, arguments);
              };
              el.addEventListener(event, onceFn, opts);
              return onceFn;
            }

            once(video, 'loadedmetadata', () => {
              tl.fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 });
            });
          },
        });
        video.load();
      }

      // Circle Scale Animation (1:1 Dome Reveal from landopp.uy)
      if (gsap && ScrollTrigger) {
        gsap.set('#circle', {
          transformOrigin: 'center center',
          xPercent: 0,
          yPercent: 0,
        });

        gsap.to('#circle', {
          scale: 55,
          ease: 'none',
          scrollTrigger: {
            trigger: '#circle',
            start: 'top 85%',
            end: '+=2200',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }

      // Text Reveal (1:1 Line mask highlight from landopp.uy)
      if (typeof SplitText !== 'undefined' && SplitText && gsap && ScrollTrigger) {
        try {
          document.querySelectorAll('p.text_reveal .mask').forEach((m) => m.remove());
          let split = new SplitText('p.text_reveal', { type: 'lines' });
          if (split && split.lines) {
            split.lines.forEach((target) => {
              let mask = document.createElement('span');
              mask.className = 'mask';
              target.append(mask);
              gsap.to(mask, {
                scaleX: 0,
                transformOrigin: 'right center',
                ease: 'none',
                scrollTrigger: {
                  trigger: target,
                  scrub: true,
                  start: 'top center',
                  end: 'bottom center',
                },
              });
            });
          }
        } catch (e) {
          console.warn('SplitText note:', e);
        }
      }

      // Hero Banner Parallax Scroll Effect
      if (gsap && ScrollTrigger) {
        gsap.to('.content_hero .slider', {
          yPercent: 35,
          ease: 'none',
          scrollTrigger: {
            trigger: '.content_hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Sticky video section pin
      if (ScrollTrigger) {
        ScrollTrigger.create({
          trigger: '.content_sticky',
          scrub: 0.5,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.content_video',
          pinSpacing: false,
          markers: false,
        });

        if (gsap) {
          let viewSections = gsap.utils.toArray('.classView');
          viewSections.forEach((section) => {
            gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: '+=900',
                onEnter: () => onEnter(section),
                onEnterBack: () => onEnter(section),
              },
            });
          });
        }

        function onEnter(section) {
          $(section).addClass('is-inview');
          if (section.id) {
            const link = document.querySelector('[data-section="' + section.id + '"]');
            if (link) link.classList.add('active');
          }
        }

        ScrollTrigger.create({
          trigger: '.bg_change_video',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => {
            $('.content_dot').addClass('active_bg_video');
            $('.content_steps_video').addClass('active_bg_video');
          },
          onLeaveBack: () => {
            $('.content_dot').removeClass('active_bg_video');
            $('.content_steps_video').removeClass('active_bg_video');
          },
        });

        ScrollTrigger.create({
          trigger: '.bg_change',
          start: 'top 85%',
          end: 'bottom 15%',
          onEnter: () => $('.bg_change').addClass('active_bg'),
          onEnterBack: () => $('.bg_change').addClass('active_bg'),
          onLeaveBack: () => $('.bg_change').removeClass('active_bg'),
        });

        ScrollTrigger.create({
          trigger: '.content_news',
          start: 'top 75%',
          end: 'bottom 10%',
          onEnter: () => {
            $('.content_news').addClass('active_bg_change');
          },
          onEnterBack: () => {
            $('.content_news').addClass('active_bg_change');
          },
          onLeaveBack: () => {
            $('.content_news').removeClass('active_bg_change');
          },
        });

        ScrollTrigger.create({
          trigger: '.bg_change_white',
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: () => $('.content_steps_video, .content_about').addClass('active_bg_change_white'),
          onLeaveBack: () => $('.content_steps_video, .content_about').removeClass('active_bg_change_white'),
        });

        // Floating Navbar Controller:
        // 1. Hidden while in Hero Banner
        // 2. Slides DOWN from top when scrolling UPWARDS after Hero
        // 3. Slides AWAY upwards when scrolling DOWNWARDS
        ScrollTrigger.create({
          start: 'top top',
          onUpdate: (self) => {
            const currentScroll = self.scroll();
            const heroHeight = document.querySelector('.content_hero')?.offsetHeight || 600;

            if (currentScroll > heroHeight - 100) {
              if (self.direction === -1) {
                // Scrolling UP -> Slide in smoothly from top
                $('.content_navigation.hide_navigation').addClass('active');
              } else {
                // Scrolling DOWN -> Slide away smoothly to top
                $('.content_navigation.hide_navigation').removeClass('active');
              }
            } else {
              // Inside Hero -> Always stay hidden
              $('.content_navigation.hide_navigation').removeClass('active');
            }
          }
        });

        ScrollTrigger.refresh();
      }
    } catch (err) {
      console.warn('Animation setup error:', err);
    }
  };

  // Run setup after short DOM mount delay
  setTimeout(runSetup, 200);

  // Preloader hide sequence
  setTimeout(() => {
    try {
      $('.content_loading').addClass('animation');
    } catch (e) { }
  }, 800);

  setTimeout(() => {
    try {
      window.scrollTo(0, 0);
      if (smoother) smoother.scrollTop(0);
      $('.content_loading').addClass('hide');
      $('.content_hero').addClass('show');
      $('.content_navigation').addClass('show');
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) ScrollTrigger.refresh();
    } catch (e) { }
  }, 1500);

  // Smooth scroll handler for nav and footer section links
  $(document).off('click', '.link_sections, .link_sections_footer').on('click', '.link_sections, .link_sections_footer', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const sectionId = $(this).attr('data-section');
    if (!sectionId) return;

    let targetEl = document.getElementById(sectionId);
    if (!targetEl && sectionId === 'steps') {
      targetEl = document.querySelector('.content_steps_video');
    }
    if (!targetEl) {
      targetEl = document.querySelector('.' + sectionId);
    }

    if (targetEl) {
      const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  });

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }
}
