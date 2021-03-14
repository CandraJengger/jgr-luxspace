const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let i = 0; i < smoothScrollAnchor.length; i++) {
  const el = smoothScrollAnchor[i];

  el.addEventListener('click', function (event) {
    event.preventDefault();

    if (document.getElementById(this.getAttribute('href').replace('#', '')))
      // membuat scroll menjadi smooth
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
  });
}
