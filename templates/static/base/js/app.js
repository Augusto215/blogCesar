const nav_mobile = document.querySelector('.nav-mobile');
let post_box = document.querySelectorAll(".post-box");
const nav = document.querySelector(".nav");
const logo = document.querySelector('.cesar');
const logoImg = document.querySelector('#logo-img');
let comentarioBoxImg = document.querySelectorAll('.comentario-box-img');
let addComentarioImg = document.querySelectorAll('.add-comentario-img');
let inputButton = document.querySelectorAll('.input-comentario-submit')
const post_sub = document.querySelectorAll('.post-subtitulo');
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
let input_comentario = document.querySelectorAll('.input_comentario');
let comentario_box = document.querySelectorAll('.comentario-box');
let main_comentario = document.querySelectorAll('.main-comentario');
let ler_mais = document.querySelectorAll('.ler-mais')
let all_post = document.querySelectorAll('.post')
let adicionar_comentario = document.querySelectorAll('.add-comentario-box')
const modal_main_resposta = document.querySelector('.modal-main-resposta')
const modal_resposta_fechar = document.querySelector('.modal-resposta-fechar')
const ler_resposta_fechar = document.querySelector('.ver-resposta-fechar')
const modal_add_comentario = document.querySelector('.modal-add-comentario')
const modal_resposta = document.querySelector('.modal-resposta')
let post_container2_img = document.querySelectorAll('.post-container2-img')
const fechar_modal_comentario = document.querySelector('.fechar_modal_comentario')
let modal_container_video = document.querySelectorAll('.modal-container-video')
let comentario_text = document.querySelectorAll(".post-box-p")
let post_text = document.querySelectorAll('.post-text')
const fechar_modal_video = document.querySelectorAll('.fechar-modal-video')
let fecharPost1 = document.querySelectorAll('.post1-fechar_modal')
let Post1LerMais = document.querySelectorAll('.post1-ler-mais')
let align_label = document.querySelectorAll('.align-label')
let post1_container = document.querySelectorAll('.post-container')
let post1_comentarios = document.querySelectorAll('.post1-comentarios')
const modal_main_respostas = document.querySelector('.modal-main-ler-respostas')
let iframe = document.querySelectorAll('.responsive-iframe')
let iframePopup = document.querySelectorAll('.iframe-popup')
let lerMais2 = document.querySelectorAll('.ler-mais2')
let postLerMais2 = document.querySelectorAll('.post2-ler-mais')
let postLerMais1 = document.querySelectorAll('.post1-ler-mais')
let post2FecharModal = document.querySelectorAll('.post2-fechar_modal')
let post1FecharModal = document.querySelectorAll('.post1-fechar_modal')
let AbrirPostVideo = document.querySelectorAll('.abrir-post-video')
let comentarioFechar = document.querySelectorAll('.comentario-box-fechar')
const atualizarPerfil = document.querySelector('.modal-container2')
const atualizarSenha = document.querySelector('.modal-container3')
const fecharAtualizarPerfil = document.querySelector('.fechar_modal2')
const fecharSenha = document.querySelector('.fechar_modal3')
const openSenha = document.querySelector('.openSenha')
let abrirPopup = document.querySelectorAll('.abrir-popup')
let popupContainer = document.querySelectorAll('.modal-container-popup')
let fecharPopup = document.querySelectorAll('.fechar-modal-popup')
const socialBtn = document.querySelector('.redes-mobile');
const navSocial = document.querySelector('.nav-social')
const alertContainer1 = document.querySelector('.alert-container1')
const alertContainer2 = document.querySelector('.alert-container2')
const fecharAlert1 = document.querySelector('.fechar_alert1')
const fecharAlert2 = document.querySelector('.fechar_alert2')
const alertText = document.querySelector('.alert-text')
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
let lerMaisNovo = document.querySelectorAll('.ler-mais1')
let LerNovo = document.querySelectorAll('.postNovo-ler-mais')
let fecharNovo = document.querySelectorAll('.postNovo-fechar_modal')




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
    inputButton.forEach((input) =>
    {
      input.style.backgroundImage = 'url("/static/base/img/enviar(escuro).png")'
    })
   
    
      
    comentarioBoxImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/comentario(escuro).png" )
    });

    addComentarioImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/message (3).png")
    })
    
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
    comentarioBoxImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/comment (2).png" )
    });
    inputButton.forEach((input) =>
    {
      input.style.backgroundImage = 'url("/static/base/img/enviar(claro).png")'
    })
    addComentarioImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/message (1).png")
    })

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
  modal_registro.classList.toggle('modal-night');
  modal_login1.classList.toggle('modal-night');
  post_sub.forEach(post_sub => post_sub.classList.toggle('post-subtitulo-night'));
  post_box.forEach(post_box => post_box.classList.toggle('post-night'));
  post2_img.classList.toggle('post-container2-img-night');

  if (document.body.classList.contains('body-night')) {
    localStorage.setItem('nightMode', 'true');
  } else {
    localStorage.setItem('nightMode', 'false');
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  let sliders = document.querySelectorAll('.slider');
  if (localStorage.getItem('nightMode') === 'true') {
    toggleNightMode(sliders);
  }
});

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

  open_login.addEventListener('click', function(event) {
    event.stopPropagation();
    modal.classList.remove('modal-hide');
    modal_main_login.classList.add('modal-hide1');
  });

  fechar_modal1.addEventListener('click', function() {
    modal_main_login.classList.remove('modal-hide1');
  });

  fechar_modal.addEventListener("click", function() {
    modal.classList.remove('modal-hide');
  });

  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      event.stopPropagation();
      modal.classList.remove('modal-hide');
    }
  });

  modal_login.forEach(function(login) {
    login.addEventListener('click', openModal);
  });

  modal_main_login.addEventListener("click", function(event) {
    if (event.target === modal) {
      event.stopPropagation();
      modal_main_login.classList.remove('modal-hide1');
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

input_comentario.forEach((input, index) => {
  input.addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.add('is-active');
    main_comentario[index].classList.add('is-active');
    align_label[index].classList.add('is-active');

    comentario_box.forEach((comentario) => {
      comentario.classList.remove('is-active');
    });
  });
});

document.body.addEventListener("click", function() {
  input_comentario.forEach((input) => {
    input.classList.remove('is-active');
  });

  main_comentario.forEach((main) => {
    main.classList.remove('is-active');
  });
  align_label.forEach((item) => {
    item.classList.remove('is-active');
  });
  comentario_box.forEach((comentario) => {
    comentario.classList.remove('is-active');
  });


 

 
});

comentario_box.forEach((comentario, index) => {
  comentario.addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.add('is-active');
    comentarioFechar[index].classList.add('is-active')
    input_comentario.forEach((input) => {
      input.classList.remove('is-active');
    });
    align_label.forEach((label) => {
      label.classList.remove('is-active');
    });
    main_comentario.forEach((main) => {
      main.classList.remove('is-active');
    });
  });
});




modal_resposta_fechar.addEventListener("click", function(event)
{
  event.stopPropagation();
  modal_main_resposta.classList.remove("is-active")
})
modal_main_resposta.addEventListener("click", function(event) {
  if (event.target === modal_main_resposta) {
    event.stopPropagation();
    this.classList.remove('is-active');
  }
});

ler_mais.forEach((ler, index) => {
  ler.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ativo");
    postLerMais1[index].classList.add('is-active')

  });
});


function addComentario() {
    modal_add_comentario.classList.add("is-active")

}

function alertComentario()
{
  alertContainer1.classList.add('is-active')
}
function alertComentario1()
{ 
  alertContainer2.classList.add('is-active')
 
}
modal_add_comentario.addEventListener("click", function(event)
{
  
  if(event.target === modal_add_comentario)
  {event.stopPropagation();
    this.classList.remove('is-active')
  }
})
fechar_modal_comentario.addEventListener("click", function(event)
{
  event.stopPropagation()
  modal_add_comentario.classList.remove('is-active');
})


fechar_modal_video.forEach((fechar, index)=>
{
  fechar.addEventListener("click", function(event)
  {
    event.stopPropagation()
    modal_container_video[index].classList.remove('is-active')
    iframe[index].setAttribute('src', iframe[index].getAttribute('src'));
   
  }
  
)
})

modal_container_video.forEach((modal, index) => {
  modal.addEventListener("click", function(event) {
    event.stopPropagation();
    if(event.target === modal) {
      modal.classList.remove('is-active');
      iframe[index].setAttribute('src', iframe[index].getAttribute('src'));
    
    }
  })
})

fecharPost1.forEach((post, index) => 
{
  post.addEventListener("click", function(event)
  {
    event.stopPropagation();
    Post1LerMais[index].classList.remove('is-active')
    
  })
})



    


function fechar_modal_respostas(event)
{
    modal_main_respostas.classList.remove('is-active')
    event.stopPropagation()
 
}


lerMais2.forEach((ler, index) =>
{
  ler.addEventListener("click", function(event)
  {
    postLerMais2[index].classList.add('is-active')
  })
})

postLerMais2.forEach((post) =>
post.addEventListener("click", function(event)
{
  if(event.target === post)
  {
    post.classList.remove('is-active')
  }
}))

post2FecharModal.forEach((post, index) => 
{
  post.addEventListener("click", function(event)
  {
    event.stopPropagation()
    postLerMais2[index].classList.remove('is-active')

  })
})

postLerMais1.forEach((post) =>
post.addEventListener("click", function(event)
{
  if(event.target === post)
  {
    post.classList.remove('is-active')
  }
}))

post1FecharModal.forEach((post, index) => 
{
  post.addEventListener("click", function(event)
  {
    event.stopPropagation()
    postLerMais1[index].classList.remove('is-active')

  })
})

AbrirPostVideo.forEach((abrir, index) => {
  abrir.addEventListener("click", function(event) {
    event.stopPropagation();
    modal_container_video[index].classList.add('is-active')
  });
});
comentarioFechar.forEach((fechar, index) =>
{
  fechar.addEventListener("click", function(event)
  {
    event.stopPropagation();
    comentario_box.forEach((comentario) =>
    {
      comentario.classList.remove('is-active')
    })
  })
})



function showLoginAlert(event) {
  alert("Você precisa estar logado para comentar!");
  event.preventDefault(); // prevent the focus event
  return false; // prevent further propagation of the event
  event.stopPropagation()
}

modal_resposta.addEventListener("click", function(event)
{
  event.stopPropagation()
})

modal_resposta_fechar.addEventListener("click", function(event)
{
  modal_main_resposta.classList.remove('is-active')
})

ler_resposta_fechar.addEventListener("click", function(event)
{
  modal_main_respostas.classList.remove('is-active')
})

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

socialBtn.addEventListener('click', function()
{
   navSocial.classList.add('is-active')
   hamburger.classList.add('is-active')
})


fecharAlert1.addEventListener('click', function(event)
{ 
  event.stopPropagation()
  alertContainer1.classList.remove('is-active')
})


fecharAlert2.addEventListener('click', function(event)
{ 
  event.stopPropagation()
  alertContainer2.classList.remove('is-active')
})


lerMaisNovo.forEach((button, index) =>
{
  button.addEventListener('click', function(event)
  {
    event.stopPropagation()
    LerNovo[index].classList.add('is-active');
    
  })
})

LerNovo.forEach((button, index) =>
{
  button.addEventListener('click', function(event)
  {
    if(event.target === button)
    {
      LerNovo[index].classList.remove('is-active')
    }
  })
})

fecharNovo.forEach((button, index) =>
{
  button.addEventListener('click', function(event)
  {
    event.stopPropagation();
    LerNovo[index].classList.remove('is-active')
  })
})
alertContainer1.addEventListener('click', function(event)
{ event.stopPropagation()
  if(event.target === alertContainer1)
  {
    alertContainer1.classList.remove('is-active')
  }
})