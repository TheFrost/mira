(function() {
  'use strinct';

  // Trigger mobile menu

  // Cache variables
  var trigger = document.getElementById('menu-trigger'),
      menu = document.getElementById('menu-mobile'),
      overlay = document.getElementById('overlay'),
      items = [].slice.call(document.querySelectorAll('.o-menu--mobile .o-menu__item'));

  // Bind Events
  overlay.addEventListener('click', function () {
    menuAction();
  });
  trigger.addEventListener('click', function () {
    menuAction();
  });

  items.forEach(function (item, index) {
    console.log(item);
    item.addEventListener('click', function () {
      menuAction();
    });
  });

  // Functions
  function menuAction () {
    toggleClass(menu, 'js-active');
    toggleClass(overlay, 'js-active');
  }

  function toggleClass (el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }

}());
