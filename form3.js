  // Simple mobile menu toggle
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && closeMenu && mobileNav) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });

        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }
});
composer global require laravel/installer