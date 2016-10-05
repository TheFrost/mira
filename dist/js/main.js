(function() {
  'use strinct';

  // Trigger mobile menu

  // Cache variables
  var body = document.querySelector('body'),
      trigger = document.getElementById('menu-trigger'),
      menu = document.getElementById('menu-mobile'),
      overlay = document.getElementById('overlay'),
      items = document.querySelectorAll('.o-menu--mobile .o-menu__item'),
      triggerSubmenu = document.getElementById('submenu');

  // Bind Events
  overlay.addEventListener('click', function () {
    menuAction();
    closeSubmenu();
  });
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    menuAction();
    closeSubmenu();
  });
  items.forEach(function (item, index) {
    if (!item.classList.contains('o-menu__item--submenu')) {
      item.addEventListener('click', function () {
        menuAction();
      });
    }
  });
  triggerSubmenu.addEventListener('click', function (e) {
    e.preventDefault();
    submenuAction();
  });

  // Functions
  function menuAction () {
    toggleClass(menu, 'js-active');
    toggleClass(overlay, 'js-active');
    toggleClass(body, 'js-noscroll');
  }

  function submenuAction () {
    toggleClass(triggerSubmenu, 'js-active');
  }

  function closeSubmenu () {
    if (triggerSubmenu.classList.contains('js-active')) {
      triggerSubmenu.classList.remove('js-active');
    }
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


  /*Sponsors functionality*/
  var sponsors = document.querySelectorAll('.o-sponsors__item'),
      infoPanes = document.querySelectorAll('.o-sponsors__info');

  /*service*/
  var sponsorsService = [
    {
      id: "cinepolis-f",
      title: "Fundación Club Cinépolis®",
      text: "Fundación Cinépolis® nace en 2008 con el objetivo de contribuir a la justicia social de México a través de sus ejes rectores de Salud Visual, Educación a través del Cine y Entretenimiento con Sentido con un enfoque especial en los sectores más vulnerables de la sociedad. Estos tres ejes han sido creados por su alta vinculación con nuestra razón de ser como empresa, el cine, conscientes de los activos clave con los que cuenta Cinépolis® entre los que destacan: su capacidad instalada, poder de convocatoria, capital humano y sus raíces como empresa mexicana.",
      link: "https://www.fundacioncinepolis.org/"
    },
    {
      id: "sala-arte",
      title: "Sala de Arte",
      text: "Cinépolis® busca vincular al espectador con la comunidad fílmica, por lo que en este espacio te presenta los festivales y muestras más importantes del país. Descubre las actividades cinematográficas que se realizarán próximamente y visita sus sitios oficiales para conocer a detalle las propuestas y actividades que presentarán estos importantes eventos",
      link: "http://www.cinepolis.com/sala-de-arte"
    },
    {
      id: "ashoka",
      title: "Ashoka",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      link: "link/to/ashoka"
    },
    {
      id: "vena-cava",
      title: "Vena Cava",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      link: "link/to/vena-cava"
    },
    {
      id: "entertaiment-ed",
      title: "Entertaiment Education",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      link: "link/to/entertaiment-ed"
    },
    {
      id: "twitter-mx",
      title: "Twitter MX",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      link: "link/to/twitter-mx"
    }
  ];

  /*bind events*/
  sponsors.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      toggleInfo(e.currentTarget);
    });
  });

  /*functions*/
  function renderInfo (infoPane, sponsorInfo) {
    var source = document.getElementById('sponsor-template').innerHTML,
        template = Handlebars.compile(source),
        html = template(sponsorInfo[0]);

    infoPane.innerHTML = html;
  }

  function toggleInfo (el) {
    var infoPane = getCurrentPane(el),
        sponsorInfo = getSponsor(el);

    setTimeout(function () {
      renderInfo(infoPane, sponsorInfo);
    }, 300);

    hideAllPanes(infoPanes);

    if (el.classList.contains('js-active')) {
      closeInfoPane(infoPane);
    } else {
      switchInfoPane(infoPane);
    }

    toggleClass(el, 'js-active');

    inactiveOtherSponsor(sponsors, el);
  }

  function closeInfoPane (pane) {
    pane.classList.remove('js-active');
  }

  function switchInfoPane (pane) {
    pane.classList.remove('js-active');
    setTimeout(function () {
      pane.classList.add('js-active');
    }, 300);
  }

  function getCurrentPane (el) {
    var nodes = el.parentNode.parentNode.children;

    for (i in nodes) {
      if (nodes[i].nodeType === 1) {
        if (nodes[i].classList.contains('o-sponsors__info')) {
          return nodes[i];
        }
      }
    }
  }

  function hideAllPanes (infoPanes) {
    infoPanes.forEach(function (item, index) {
      item.classList.remove('js-active');
    });
  }

  function inactiveOtherSponsor (sponsors, currentSponsor) {
    sponsors.forEach(function (item, index) {
      if (item != currentSponsor) {
        item.classList.remove('js-active');
      }
    });
  }

  function getSponsor (el) {
    var slug = el.dataset.sponsor;

    return sponsorsService.filter(function (item) {
      return item.id === slug;
    });
  }


}());
