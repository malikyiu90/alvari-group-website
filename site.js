(function () {
  var burger = document.querySelector('.nav-burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  setOpen(false);

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(menu.hidden);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (!menu.hidden && !menu.contains(e.target) && !burger.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); burger.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1100) setOpen(false);
  });
})();
