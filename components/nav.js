document.addEventListener('DOMContentLoaded', () => {
  const navbutton = document.querySelector('#ham-btn');
  const navlinks = document.querySelector('#nav-bar');

  if (!navbutton || !navlinks) {
    console.error("❌ Hamburger or nav element not found");
    return;
  }

  navbutton.addEventListener('click', () => {
    console.log("✅ Hamburger clicked"); // test message in console
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
  });
});
