var $selectNumber = `<div class="phone-wrapper">

<div class="phone-input">

    <input placeholder="Номер телефона" type="tel" class="tel-input phone-input number-mask input-gray">

    <button class="phone-delete ripple-effect-dark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.75 5.5H4.58333H19.25" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.4173 5.49992C18.4173 4.94763 17.9696 4.49992 17.4173 4.49992C16.865 4.49992 16.4173 4.94763 16.4173 5.49992H18.4173ZM5.58398 5.49992C5.58398 4.94763 5.13627 4.49992 4.58398 4.49992C4.0317 4.49992 3.58398 4.94763 3.58398 5.49992H5.58398ZM6.33398 5.49992C6.33398 6.0522 6.7817 6.49992 7.33398 6.49992C7.88627 6.49992 8.33398 6.0522 8.33398 5.49992H6.33398ZM13.6673 5.49992C13.6673 6.0522 14.115 6.49992 14.6673 6.49992C15.2196 6.49992 15.6673 6.0522 15.6673 5.49992H13.6673ZM16.4173 5.49992V18.3333H18.4173V5.49992H16.4173ZM16.4173 18.3333C16.4173 18.7935 16.0442 19.1666 15.584 19.1666V21.1666C17.1488 21.1666 18.4173 19.8981 18.4173 18.3333H16.4173ZM15.584 19.1666H6.41732V21.1666H15.584V19.1666ZM6.41732 19.1666C5.95708 19.1666 5.58398 18.7935 5.58398 18.3333H3.58398C3.58398 19.8981 4.85251 21.1666 6.41732 21.1666V19.1666ZM5.58398 18.3333V5.49992H3.58398V18.3333H5.58398ZM8.33398 5.49992V3.66658H6.33398V5.49992H8.33398ZM8.33398 3.66658C8.33398 3.20635 8.70708 2.83325 9.16732 2.83325V0.833252C7.60251 0.833252 6.33398 2.10178 6.33398 3.66658H8.33398ZM9.16732 2.83325H12.834V0.833252H9.16732V2.83325ZM12.834 2.83325C13.2942 2.83325 13.6673 3.20635 13.6673 3.66658H15.6673C15.6673 2.10178 14.3988 0.833252 12.834 0.833252V2.83325ZM13.6673 3.66658V5.49992H15.6673V3.66658H13.6673Z" fill="#707070"/>
    <path d="M9.16602 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.834 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>

</div>

<div class="phone-social-links">
    <p class="phone-social-links-title">К номеру подключен</p>

    <ul>    

        <li class="phone-social-link">        
            <img src="img/viber.svg" alt="viber">Viber        
            <label class="switch">            
                <input type="checkbox">            
                <span class="switch-button"></span>        
            </label>    
        </li>
        <li class="phone-social-link">        
            <img src="img/whatssapp.svg" alt="whtsapp">Whatsapp        
            <label class="switch">            
                <input type="checkbox">            
                <span class="switch-button"></span>        
            </label>    
        </li>
        <li class="phone-social-link">
            <img src="img/telegram.svg" alt="telegram">Telegram
            <label class="switch"><input type="checkbox">
                <span class="switch-button"></span>
            </label>
        </li>

    </ul>

</div>
<!-- ./phone-social-links -->
</div>
<!-- .phone-wrapper -->`;

// add phone
$('.phone-add').on("click", function() {

    $('.phone-add').before($selectNumber);

    $('.phone-wrapper:last').css('display', 'none');
    $('.phone-wrapper:last').slideDown(300);

    $('.selectpicker').selectpicker('size', '6');

    $('.number-mask').mask("+99 999 999 99 99");
    
    $('.tel-input').intlTelInput();

    /*--------------------------------------------------*/
	/*  Ripple Effect
	/*--------------------------------------------------*/
	$('.ripple-effect, .ripple-effect-dark').on('click', function(e) {
		var rippleDiv = $('<span class="ripple-overlay">'),
			rippleOffset = $(this).offset(),
			rippleY = e.pageY - rippleOffset.top,
			rippleX = e.pageX - rippleOffset.left;

		rippleDiv.css({
			top: rippleY - (rippleDiv.height() / 2),
			left: rippleX - (rippleDiv.width() / 2),
			// background: $(this).data("ripple-color");
		}).appendTo($(this));

		window.setTimeout(function() {
			rippleDiv.remove();
		}, 800);
	});

    tippy('[data-tippy-placement]', {
		delay: 100,
		arrow: true,
		arrowType: 'sharp',
		size: 'regular',
		duration: 200,

		// 'shift-toward', 'fade', 'scale', 'perspective'
		animation: 'shift-away',

		animateFill: true,
		theme: 'dark',

		// How far the tooltip is from its reference element in pixels 
		distance: 10,

	});

    $(".switch, .radio").each(function() {
        var intElem = $(this);
        intElem.on('click', function() {
            intElem.addClass('interactive-effect');
           setTimeout(function() {
                    intElem.removeClass('interactive-effect');
           }, 400);
        });
    });

    $('.tel-input').on("keyup", function() {
        $str = $(this).val();
        
        for (var i = 0; i < $str.length; i++) {
          if ($str[i] == '+' || $str[i] == '_' || $str[i] == ' ') {
            $str = $str.replace(/\+/g, '');
            $str = $str.replace(/_/g, '');
            $str = $str.replace(/ /g, '');
          }
        }
      
        if ($str.length < 4) {
      
          $(this).addClass('wrong-value');
      
          if ($(this).parent().parent().next().hasClass('wrong-value-text') == false) {
            $(this).parent().parent().after('<p class="wrong-value-text">Неверный формат номера*</p>');
            $(this).parent().parent().next().next().slideUp(200);
          }
      
        } else if ($str.length >= 4) {
          
          $(this).removeClass('wrong-value');
      
          if ($(this).parent().parent().next().hasClass('wrong-value-text') == true) {
            $(this).parent().parent().next().remove();
          }
      
          $(this).parent().parent().next().slideDown(300);
        }
      });
});

// delete number
$(document).ready(function () {
    $("body").on("click", ".phone-delete", function () {
        var $deletePhoneIndex =  $(this).index('.phone-delete');

        $('.phone-wrapper').eq($deletePhoneIndex + 1).slideUp(200);

        setTimeout(function() {
            $('.phone-wrapper').eq($deletePhoneIndex + 1).detach();
        }, 200)
    });
});