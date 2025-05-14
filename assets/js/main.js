(function() {
  "use strict";

  // ... [your existing code remains unchanged]

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Highlight active nav link on click
   */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('#navmenu a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /**
   * Highlight nav link based on current URL on page load
   */
  window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/').pop(); // e.g., "about.html"
    document.querySelectorAll('#navmenu a').forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === path || (linkPath === 'index.html' && path === '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

})();

