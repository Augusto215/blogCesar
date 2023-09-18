const nav_mobile = document.querySelector('.nav-mobile');
const nav = document.querySelector(".nav");
const logo = document.querySelector('.cesar');
const logoImg = document.querySelector('#logo-img');
const night_button = document.querySelector('.button');
const hamburger = document.querySelector('.hamburger');
const menuUl = document.querySelector('.menu-ul');
const nav_links = document.querySelectorAll('.nav-mobile a');
const modal_login = document.querySelectorAll('.modal-login');
const modal = document.querySelector('.modal-container');
const fechar_modal = document.querySelector('.fechar_modal');
const post2_img = document.querySelector('.post-container2-img');
const footer_box = document.querySelector('.footer-box');
const modal_registro = document.querySelector('.modal');
const modal_login1 = document.querySelector('.modal1');
const open_login = document.querySelector('.open-modal2');
const modal_main_login = document.querySelector('.modal-container1');
const fechar_modal1 = document.querySelector('.fechar_modal1');
const atualizarPerfil = document.querySelector('.modal-container2')
const atualizarSenha = document.querySelector('.modal-container3')
const fecharAtualizarPerfil = document.querySelector('.fechar_modal2')
const fecharSenha = document.querySelector('.fechar_modal3')
const openSenha = document.querySelector('.openSenha')
let abrirPopup = document.querySelectorAll('.abrir-popup')
let fecharPopup = document.querySelectorAll('.fechar-modal-popup')
let popupContainer = document.querySelectorAll('.modal-container-popup')
const socialBtn = document.querySelector('.redes-mobile');
const navSocial = document.querySelector('.nav-social')
const igFooter = document.querySelectorAll('.ig-footer')
const tiktokFooter = document.querySelectorAll('.tiktok-footer')
const twitterFooter = document.querySelectorAll('.twitter-footer')
const ytFooter = document.querySelectorAll('.yt-footer')
const mediumFooter = document.querySelectorAll('.medium-footer')
const linkedinFooter = document.querySelectorAll('.linkedin-footer')
const acadFooter = document.querySelectorAll('.acadEdu-footer')
const orcidFooter = document.querySelectorAll('.orcid-footer')
const lattesFooter = document.querySelectorAll('.lattes-footer')
const gmailFooter = document.querySelectorAll('.gmail-footer')
const dsFooter = document.querySelectorAll('.ds-footer')
const psnFooter = document.querySelectorAll('.psn-footer')





function toggleNightMode(sliders) {
  sliders.forEach((slider) => {
    if (slider.classList.contains('slider-checked')) {
      slider.classList.remove('slider-checked');
    } else {
      slider.classList.add('slider-checked');
    }
  });


  if (logoImg.getAttribute('src') === "/static/base/img/site(logo).png") {
    logoImg.setAttribute('src', "/static/base/img/logo(escuro).png");
    igFooter.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/instagram(claro).png")
    })

    tiktokFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/tiktok(claro).png')
    })

    twitterFooter.forEach((img)=>
    {
      img.setAttribute('src', '/static/base/img/twitter(claro).png')
    })
    ytFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/yt(claro).png')
    })

    mediumFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/medium(claro).png')
    })

    linkedinFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/linkedin(claro).png')

    })

    orcidFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/shopping(claro).png')
    })

    lattesFooter.forEach((img) =>
    {
    img.setAttribute('src', '/static/base/img/id(claro).png')
  })
  
  acadFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/a(claro).png')
  })

  gmailFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/gmail(claro).png')
  })

  dsFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/discord(claro).png')
  })

  psnFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/psn(claro).png')
  })
} else {
    logoImg.setAttribute('src', "/static/base/img/site(logo).png");
    igFooter.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/instagram(semfundo).png")
    })

    tiktokFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/tiktok.png')
    })

    ytFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/youtube(semfundo).png')
    })

    twitterFooter.forEach((img)=>
    {
      img.setAttribute('src', '/static/base/img/twitter.png')
    })

    mediumFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/medium(semfundo).png')
    })
    linkedinFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/linkedin.png')

    })

    orcidFooter.forEach((img) =>
    {
      img.setAttribute('src', '/static/base/img/idk.png')
    })

    lattesFooter.forEach((img) =>
    {
    img.setAttribute('src', '/static/base/img/id.png')
  })

  acadFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/A.png')
  })

  
  gmailFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/gmail.png')
  })

  dsFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/discord.png')
  })

  psnFooter.forEach((img) =>
  {
    img.setAttribute('src', '/static/base/img/playstation.png')
  })
}


  nav_mobile.classList.toggle("nav-mobile-night");
  document.body.classList.toggle('body-night');
  menuUl.classList.toggle('ul-night');
  night_button.classList.toggle('button-night');
  nav.classList.toggle('nav-night');
  hamburger.classList.toggle('hamburger-night');
  modal_login1.classList.toggle('modal-night');
  modal_registro.classList.toggle('modal-night');

 
  // Aqui nós armazenamos o estado do modo noturno
  if (document.body.classList.contains('body-night')) {
    localStorage.setItem('nightMode', 'true');
  } else {
    localStorage.setItem('nightMode', 'false');
  }
}

// Aqui nós verificamos o estado do modo noturno quando a página é carregada
window.addEventListener('DOMContentLoaded', (event) => {
  let sliders = document.querySelectorAll('.slider');
  if (localStorage.getItem('nightMode') === 'true') {
    toggleNightMode(sliders);
  }
});

// ... o resto do seu código ...
function toggleHamburger() {
  hamburger.classList.toggle('is-active');
  menuUl.classList.toggle('show');
  if(!navSocial.classList.contains('is-active'))
  {
    nav_mobile.classList.toggle('is-active');
  }

  navSocial.classList.remove('is-active');
};

function removeActiveClass() {
  if (window.innerWidth > 1200) {
    hamburger.classList.remove('is-active');
    nav_mobile.classList.remove('is-active');
    menuUl.classList.remove('show');
    navSocial.classList.remove('is-active');
  }
}

function openModal() {
  modal.classList.toggle('modal-hide');

open_login.addEventListener('click', function(event) 
  {event.stopPropagation();
  modal.classList.remove('modal-hide');
  modal_main_login.classList.add('modal-hide1');
});

fechar_modal1.addEventListener('click', function() {
  modal_main_login.classList.remove('modal-hide1');  // Use add para garantir que a classe será adicionada
});

fechar_modal.addEventListener("click", function() {
  modal.classList.remove('modal-hide');  // Use add para garantir que a classe será adicionada
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    event.stopPropagation();
    modal.classList.remove('modal-hide');  // Use add para garantir que a classe será adicionada
  }
});

modal_login.forEach(function(login) {
  login.addEventListener('click', openModal);
});

modal_main_login.addEventListener("click", function(event) {
  if (event.target === modal) {
    event.stopPropagation();
    modal_main_login.classList.remove('modal-hide1');  // Use add para garantir que a classe será adicionada
  }
});
}

night_button.addEventListener('click', function(event) {
  event.stopPropagation();
  let sliders = document.querySelectorAll('.slider');
  toggleNightMode(sliders);
});

hamburger.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleHamburger();
});

menuUl.addEventListener('click', function(event) {
  event.stopPropagation();
});

window.addEventListener('resize', removeActiveClass);

nav_links.forEach(function(link) {
  link.addEventListener('click', removeActiveClass);
});

logo.addEventListener('click', removeActiveClass);

nav_mobile.addEventListener('click', removeActiveClass);

modal_login.forEach(function(login) {
  login.addEventListener('click', openModal);
});

function abrirEditarPerfil()
{
atualizarPerfil.classList.toggle('modal-hide')
}

fecharAtualizarPerfil.addEventListener('click', function()
{
  atualizarPerfil.classList.remove('modal-hide')
})

atualizarPerfil.addEventListener('click', function(event)
{
  if(event.target === atualizarPerfil)
  {
    atualizarPerfil.classList.remove('modal-hide')
  }
})

openSenha.addEventListener('click', function()
{
  atualizarPerfil.classList.remove('modal-hide')
  atualizarSenha.classList.add('modal-hide')
})

atualizarSenha.addEventListener('click', function(event)
{
  if(event.target === atualizarSenha)
  {
    atualizarSenha.classList.remove('modal-hidee')
  }
})

fecharSenha.addEventListener('click', function()
{
  atualizarSenha.classList.remove('modal-hide')
})

socialBtn.addEventListener('click', function()
{
   navSocial.classList.add('is-active')
   hamburger.classList.add('is-active')
})

abrirPopup.forEach((abrir, index) =>
{
  abrir.addEventListener('click', function()
  {
    popupContainer[index].classList.add('is-active')
  })
})

fecharPopup.forEach((fechar, index) =>
{
  fechar.addEventListener('click', function(event)
  {
    event.stopPropagation()
    popupContainer[index].classList.remove('is-active')
    iframePopup[index].setAttribute('src', iframePopup[index].getAttribute('src'));
    
    
  })
})

popupContainer.forEach((popup, index) =>
{
  popup.addEventListener('click', function(event)
  {
    if(event.target === popup) {
      event.stopPropagation()
      popup.classList.remove('is-active');
      iframePopup[index].setAttribute('src', iframePopup[index].getAttribute('src'));
    }
  })
})