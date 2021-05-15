import { addClass, removeClass } from './utils-class';

const sliders = document.getElementsByClassName('slider');

for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index];

  // dapatkan semua items
  const items = document.querySelectorAll('.slider .item');
  // dapatkan preview
  const preview = slider.querySelector('div > .preview');

  for (let item = 0; item < items.length; item++) {
    const itemTrigger = items[item];

    itemTrigger.addEventListener('click', function () {
      // ketika item di klik
      const dataImg = this.attributes?.['data-img']?.value; // ambil value dari data-img

      for (
        let eachItemTrigger = 0;
        eachItemTrigger < items.length;
        eachItemTrigger++
      ) {
        const triggerNeedToRemoved = items[eachItemTrigger];

        removeClass(triggerNeedToRemoved, 'selected'); // hapus semua selected pada item
      }

      addClass(itemTrigger, 'selected'); // tambahkan selected pada item yang sedang diklik

      preview.querySelector('img').setAttribute('src', dataImg); // set preview dengan img yang sesuai dengan item yang sedang di klik
    });
  }
}
