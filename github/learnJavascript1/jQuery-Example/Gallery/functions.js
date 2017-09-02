(function($) {
  var $li = $('.img-list').find('> li'),
      //находим все тэги li кт явл дочерними эл-ми
      $links = $li.find('> a'),
      //находим все ссылки кт явл дочерними эл-ми
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  
  //preload images



$links.click(function (event) {
    event.preventDefault();
    //отменить стандартное поведение браузера(чтобы не переходить сразу по ссылке)
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('herf');
    //сохраняем в targetImg значение  href для той ссылки на кт кликнули
    $lightbox.find('img').attr('src', targetImg);
    //выбираем img внутри lightbox, меняем знач аттр src
    $lightbox.fadeIn();
    //показываем lightbox
}); //при клике на ссылку получ значение href для данной ссылки(этот атр ссыллается на большой выриант изобр) href помещаем в <img src=""> кт наход в  <div class="lightbox"> далее показываем lightbox


$overlay.click(function () {
   $lightbox.fadeOut();
});
//добавляется возможность закрыть lightbox
