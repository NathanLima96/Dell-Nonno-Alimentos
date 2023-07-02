function menuShow(){
    let menuMobile = document.querySelector('.header-mobile');
    if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open')
      document.querySelector('.icon').src = "imagens/menu_black_36dp.svg"
    }else{
      menuMobile.classList.add('open')
      document.querySelector('.icon').src = "imagens/close_black_36dp.svg"
    }
}