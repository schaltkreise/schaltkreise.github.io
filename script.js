const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY < 100) {
    nav.classList.remove('scrolled-nav');
  } else if (scrollY >= 100 && scrollY < 200) {
    nav.classList.add('scrolled-nav');
  }
});
