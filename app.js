const mouseCursor = document.querySelector('.cursor');

const navLinks = document.querySelectorAll('.nav-links li');

const cursor = (e) => {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
};

window.addEventListener('mousemove', cursor);

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});
