$('.main-block').css({
    'opacity': '0',
    'display': 'none'
});
$('.main-block').eq(0).css({
  'opacity': '1',
  'display': 'block'
});

var $stepsButtonIndex;
var $switchButtonIndex = 1;

                                                              // action, when you click on circles on the top
$('.steps-number-bar button').on("click", function() {
  $stepsButtonIndex = $(this).index();
  $switchButtonIndex = $stepsButtonIndex;
    
  for (var i = $stepsButtonIndex; i > 0; i--) {
      $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #5199FC')
  }

  for (var i = $stepsButtonIndex; i < $('.steps-number-bar button').length; i++) {
      $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #F0F0F0');
  }

  $(this).css('box-shadow', '0 0 0 .1875rem #5199FC');

  $('.steps-number-bar-fill').css('width', ($stepsButtonIndex - 1) * 50 + '%');

  $('.main-block').css('opacity', '0');

  setTimeout(function() {
    $('.main-block').css('display', 'none');
    $('.main-block').eq($stepsButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  $('.steps-number-text').css({
      'opacity': '0'
  });
  setTimeout(function() {
    $('.steps-number-text').text($stepsButtonIndex);
    $('.steps-number-text').css({
      'opacity': '1'
    });
  }, 150);

  if ($stepsButtonIndex == 1) {

    $('.prev-main-block').css('opacity', '0');

    setTimeout(function() {
      $('.prev-main-block').css('display', 'none');
    }, 150);

  } else {
    $('.prev-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }

  if ($stepsButtonIndex == $('.steps-number-bar button').length) {

    $('.next-main-block').css('opacity', '0');

    setTimeout(function() {
      $('.next-main-block').css('display', 'none');
    }, 150);

  } else {
    $('.next-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }
  
  if ($(window).width() <= 556) {
    if ($stepsButtonIndex == 1) {
      $('.summary-steps .main-block-title').text('Паспорт');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($stepsButtonIndex == 2) {
      $('.summary-steps .main-block-title').text('О себе');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($stepsButtonIndex == 3) {
      $('.summary-steps .main-block-title').text('Контакты');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    }
  }
});





$('.prev-main-block').css('display', 'none');

                                                                              // action, when you click on prev-button
$('.prev-main-block').on("click", function(e) {
  
$('html,body').stop().animate({ scrollTop: $('.main-title').offset().top }, 300);
    e.preventDefault();

  $switchButtonIndex--;
  
  for (var i = $switchButtonIndex; i > 0; i--) {
    $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #5199FC')
  }

  for (var i = $switchButtonIndex; i < $('.steps-number-bar button').length; i++) {
      $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #F0F0F0');
  }

  $('.steps-number-bar button').eq($switchButtonIndex).css('box-shadow', '0 0 0 .1875rem #F0F0F0');

  $('.steps-number-bar-fill').css('width', ($switchButtonIndex - 1) * 50 + '%');

  $('.main-block').css('opacity', '0');

  setTimeout(function() {
    $('.main-block').css('display', 'none');
    $('.main-block').eq($switchButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  $('.steps-number-text').css({
      'opacity': '0'
  });
  setTimeout(function() {
    $('.steps-number-text').text($switchButtonIndex);
    $('.steps-number-text').css({
      'opacity': '1'
    });
  }, 150);


  if ($switchButtonIndex == $('.steps-number-bar button').length) {

    $('.next-main-block').css('opacity', '0');
  
    setTimeout(function() {
      $('.next-main-block').css('display', 'none');
    }, 150);
  
  } else {
    $('.next-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }
  if ($switchButtonIndex == 1) {

    $('.prev-main-block').css('opacity', '0');
  
    setTimeout(function() {
      $('.prev-main-block').css('display', 'none');
    }, 150);
  
  } else {
    $('.prev-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }
});


                                                                            // action, when you click on next-button
$('.next-main-block').on("click", function(e) {

  $('html,body').stop().animate({ scrollTop: $('.main-title').offset().top }, 300);
    e.preventDefault();

  $switchButtonIndex++;
  
  for (var i = $switchButtonIndex; i > 0; i--) {
    $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #5199FC')
  }

  for (var i = $switchButtonIndex; i < $('.steps-number-bar button').length; i++) {
      $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #F0F0F0');
  }

  $('.steps-number-bar button').eq($switchButtonIndex).css('box-shadow', '0 0 0 .1875rem #F0F0F0');

  $('.steps-number-bar-fill').css('width', ($switchButtonIndex - 1) * 50 + '%');

  $('.main-block').css('opacity', '0');

  setTimeout(function() {
    $('.main-block').css('display', 'none');
    $('.main-block').eq($switchButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  $('.steps-number-text').css({
      'opacity': '0'
  });
  setTimeout(function() {
    $('.steps-number-text').text($switchButtonIndex);
    $('.steps-number-text').css({
      'opacity': '1'
    });
  }, 150);

  if ($switchButtonIndex == $('.steps-number-bar button').length) {

    $('.next-main-block').css('opacity', '0');
  
    setTimeout(function() {
      $('.next-main-block').css('display', 'none');
    }, 150);
  
  } else {
    $('.next-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }
  if ($switchButtonIndex == 1) {

    $('.prev-main-block').css('opacity', '0');
  
    setTimeout(function() {
      $('.prev-main-block').css('display', 'none');
    }, 150);
  
  } else {
    $('.prev-main-block').css({
      'display': 'initial',
      'opacity': '1'
    });
  }
});