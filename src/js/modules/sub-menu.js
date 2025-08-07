export default function initSubMenuLeft() {
  const navLinks = document.querySelectorAll('.sub-menu-left a');

  function setActiveLink(event) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    event.target.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
  });
}
