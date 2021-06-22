/* Abre e fecha Menu*/ 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click',  function () {
    nav.classList.toggle('show')
  })
}

/* Esconde o menu e vai para o item selecionado */

const links = document.querySelectorAll('nav ul li a');

for (const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

/* evento box-shadow mudando o header da pagina quando o scroll for acionado */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if (window.scrollY >= navHeight){
    //scroll é maior
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})
