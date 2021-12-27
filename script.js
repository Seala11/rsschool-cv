const navList = document.getElementById('primary-nav');
const navElement = document.querySelector('.nav');
const navToggleButton = document.querySelector('.mobile-nav-toggle');
const scrollButton = document.getElementById('scroll__button');

// menu open/close toggle
const navHandler = () => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', true);
    navToggleButton.setAttribute('aria-expanded', true);
    navToggleButton.innerHTML = `Close`;
  } else {
    navList.setAttribute('data-visible', false);
    navToggleButton.setAttribute('aria-expanded', false);
    navToggleButton.innerHTML = `Menu`;
  }
};

//close menu by pressing menu links
const navLinkHandler = (element) => {
  const linkElement = element.target.closest('.nav-list__item');

  if (!linkElement) return;

  //   setTimeout(navHandler, 250);
  navHandler();
};

//scroll home button, only visible on big screen

const scrollHomeHandler = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

navElement.addEventListener('click', navLinkHandler);
navToggleButton.addEventListener('click', navHandler);
scrollButton.addEventListener('click', scrollHomeHandler);
