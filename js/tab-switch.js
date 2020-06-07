$('.tab').css({
    'opacity': '0',
    'display': 'none'
});
$('.tab').eq(0).css({
  'opacity': '1',
  'display': 'block'
});

var $stepsButtonIndex;
var $switchButtonIndex = 1;


// ! action, when you click on circles on the top

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

  // TODO: .tab -- switch animation
  $('.tab').css('opacity', '0');
  setTimeout(function() {
    $('.tab').css('display', 'none');
    $('.tab').eq($stepsButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  // TODO: .main-block-title -- switch animation
  $('.main-block-title').css({
    'opacity': '0'
  });
  setTimeout(function() {
    if ($stepsButtonIndex == 1) $('.main-block-title').text('Паспорт')
    else if ($stepsButtonIndex == 2) $('.main-block-title').text('О себе')
    else if ($stepsButtonIndex == 3) $('.main-block-title').text('Контакты')

    $('.main-block-title').css({
      'opacity': '1'
    });
  }, 150);

  // TODO: .steps-number-text -- switch animation
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
    $('.prev-tab').css('display', 'none');
    $('.exit-tab').css('display', 'inline-flex');
  } else {
    $('.prev-tab').css('display', 'inline-flex');
    $('.exit-tab').css('display', 'none');
  }

  if ($stepsButtonIndex == $('.steps-number-bar button').length) {
    $('.next-tab').css('display', 'none');
    $('.save-tab').css('display', 'inline-flex');
  } else {
    $('.next-tab').css('display', 'inline-flex');
    $('.save-tab').css('display', 'none');
  }
  
  if ($(window).width() <= 556) {   // ? Changing tab title
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


$('.prev-tab').css('display', 'none');

// ! action, when you click on prev-button

$('.prev-tab').on("click", function(e) {
  
$('html,body').stop().animate({ scrollTop: $(window).offset().top }, 300);
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

  // TODO: .tab -- switch animation
  $('.tab').css('opacity', '0');
  setTimeout(function() {
    $('.tab').css('display', 'none');
    $('.tab').eq($switchButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  // TODO: .main-block-title -- switch animation
  $('.main-block-title').css({
    'opacity': '0'
  });
  setTimeout(function() {
    if ($switchButtonIndex == 1) $('.main-block-title').text('Паспорт')
    else if ($switchButtonIndex == 2) $('.main-block-title').text('О себе')
    else if ($switchButtonIndex == 3) $('.main-block-title').text('Контакты')

    $('.main-block-title').css({
      'opacity': '1'
    });
  }, 150);

  // TODO: .steps-number-text -- switch animation
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
    $('.next-tab').css('display', 'none');
    $('.save-tab').css('display', 'inline-flex');
  } else {
    $('.next-tab').css('display', 'inline-flex');
    $('.save-tab').css('display', 'none');
  }
  if ($switchButtonIndex == 1) {
    $('.prev-tab').css('display', 'none');
    $('.exit-tab').css('display', 'inline-flex');
  } else {
    $('.prev-tab').css('display', 'inline-flex');
    $('.exit-tab').css('display', 'none');
  }

  if ($(window).width() <= 556) {   // ? Changing tab title
    if ($switchButtonIndex == 1) {
      $('.summary-steps .main-block-title').text('Паспорт');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($switchButtonIndex == 2) {
      $('.summary-steps .main-block-title').text('О себе');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($switchButtonIndex == 3) {
      $('.summary-steps .main-block-title').text('Контакты');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    }
  }
});


$('.save-tab').css('display', 'none');


// ! action, when you click on next-button

$('.next-tab').on("click", function(e) {

  $('html,body').stop().animate({ scrollTop: $(window).offset().top }, 300);   // ? Scrolling to top
    e.preventDefault();

  $switchButtonIndex++;
  
  for (var i = $switchButtonIndex; i > 0; i--) {
    $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #5199FC')
  }

  for (var i = $switchButtonIndex; i < $('.steps-number-bar button').length; i++) {
      $('.steps-number-bar button').eq(i).css('box-shadow', '0 0 0 .1875rem #F0F0F0');
  }

  $('.steps-number-bar button').eq($switchButtonIndex).css('box-shadow', '0 0 0 .1875rem #F0F0F0');

  $('.steps-number-bar-fill').css('width', ($switchButtonIndex - 1) * 50 + '%');    // ? Bar length

  // TODO: .tab -- switch animation
  $('.tab').css('opacity', '0');
  setTimeout(function() {
    $('.tab').css('display', 'none');
    $('.tab').eq($switchButtonIndex - 1).css({
      'opacity': '1',
      'display': 'block'
    });
  }, 150);

  // TODO: .main-block-title -- switch animation
  $('.main-block-title').css({
    'opacity': '0'
  });
  setTimeout(function() {
    if ($switchButtonIndex == 1) $('.main-block-title').text('Паспорт')
    else if ($switchButtonIndex == 2) $('.main-block-title').text('О себе')
    else if ($switchButtonIndex == 3) $('.main-block-title').text('Контакты')

    $('.main-block-title').css({
      'opacity': '1'
    });
  }, 150);

  // TODO: .steps-number-text -- switch animation
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
    $('.next-tab').css('display', 'none');
    $('.save-tab').css('display', 'inline-flex');
  } else {
    $('.next-tab').css('display', 'inline-flex');
    $('.save-tab').css('display', 'none');
  }
  if ($switchButtonIndex == 1) {
    $('.prev-tab').css('display', 'none')
    $('.exit-tab').css('display', 'inline-flex');
  } else {
    $('.prev-tab').css('display', 'inline-flex')
    $('.exit-tab').css('display', 'none');
  }

  if ($(window).width() <= 556) {   // ? Changing tab title
    if ($switchButtonIndex == 1) {
      $('.summary-steps .main-block-title').text('Паспорт');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($switchButtonIndex == 2) {
      $('.summary-steps .main-block-title').text('О себе');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    } else if ($switchButtonIndex == 3) {
      $('.summary-steps .main-block-title').text('Контакты');
      $('.summary-steps .main-block-title').append(questionInfoSvg);
    }
  }
});