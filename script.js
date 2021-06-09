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
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})