const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



  
  function scrollToElement(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  
  var projetoLink = document.querySelector('a[href="#projeto"]');
  var sobreLink = document.querySelector('a[href="#sobre"]');


  projetoLink.addEventListener('click', function (e) {
    e.preventDefault();
    var projetoSection = document.querySelector('#projeto');
    scrollToElement(projetoSection);
  });

  
  sobreLink.addEventListener('click', function (e) {
    e.preventDefault();
    var sobreSection = document.querySelector('#sobre');
    scrollToElement(sobreSection);
  });


