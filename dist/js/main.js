(function() {
  'use strinct';

  // Trigger mobile menu

  // Cache variables
  var body = document.querySelector('body'),
      trigger = document.getElementById('menu-trigger'),
      menu = document.getElementById('menu-mobile'),
      overlay = document.getElementById('overlay'),
      items = document.querySelectorAll('.o-menu--mobile .o-menu__item');

  // Bind Events
  overlay.addEventListener('click', function () {
    menuAction();
  });
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    menuAction();
  });

  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      menuAction();
    });
  });

  // Functions
  function menuAction () {
    toggleClass(menu, 'js-active');
    toggleClass(overlay, 'js-active');
    toggleClass(body, 'js-noscroll');
  }

  function toggleClass (el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }


  // Gallery functionality

  function openGallery () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'http://lorempixel.com/output/people-q-c-1024-768-3.jpg',
        w: 1200,
        h: 900
      },
      {
        src: 'http://lorempixel.com/output/people-q-c-1024-768-6.jpg',
        w: 1200,
        h: 900,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      }
    ];

    // define options
    var options = {
      index: 0,
      history: false,
      shareEl: false,
      closeOnScroll: false
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }

  var galleryGridItems = document.querySelectorAll('.o-grid--gallery .o-grid__item');

  galleryGridItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      openGallery();
    });
  });

}());
