import { addClass, removeClass } from './utils-class';

const menutTogglerId = document.getElementById('menu-toggler');
menutTogglerId.addEventListener('click', () => {
  const menuId = document.getElementById('menu');
  if (menuId.className.indexOf('opacity-0') > -1) {
    addClass(menutTogglerId, 'fixed top-0 right-0');
    removeClass(menutTogglerId, 'remove');
    addClass(menuId, 'opacity-100 z-30');
    removeClass(menuId, 'opacity-0 invisible');
  } else {
    removeClass(menutTogglerId, 'fixed top-0 right-0');
    addClass(menutTogglerId, 'relative');
    addClass(menuId, 'opacity-0 invisible');
    removeClass(menuId, 'opacity-100 z-30');
  }
});
