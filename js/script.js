jQuery(document).ready(function ($) {


  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

  /*default form*/
  $('.input-wrap input, .input-wrap textarea').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active');
    }
  });
  $('.input-wrap input, .input-wrap textarea').focus(function (e) {
    $(this).siblings('label').addClass('is-focus')
  });
  $('.input-wrap input, .input-wrap textarea').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus')
  });
});