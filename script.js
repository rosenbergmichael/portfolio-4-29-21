const navbar = document.querySelector('.navbar');

const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');

const navbarLinks = document.querySelectorAll('.navbar-link')

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  sections.forEach((section, i) => {
    if(window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });
});

// DARK/LIGHT THEMES
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
})