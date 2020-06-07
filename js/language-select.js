var $selectLanguage = `<div class="language-wrapper">
<select class="language-select" title="Язык">
    <option>Английский</option>
    <option>Украинский</option>
    <option>Польский</option>
    <option>Русский</option>
    <option>Белорусский</option>
</select>
</div>`;

// add language

var $langIndex = 0;

$('.language-add').on("click", function() {
    
    $(this).css('display', 'none');
    $(this).before($selectLanguage);

    $('.language-wrapper:last').css('display', 'none');
    $('.language-wrapper:last').fadeIn(300);

    $('.language-select').selectpicker('size', '6');

    $('.language-wrapper li').on("click", function() {

        $(this).parent().parent().parent().css('display', 'none');

        $langIndex++;

        if (!$(this).parent().parent().parent().next().hasClass('language-information')) {
            $('.language-wrapper:last').append(`<div class="language-information"><h5 class="language-information-title">Повар</h5>
                                                <div class="language-level-wrapper">
                                                <p class="language-information-subtitle">Уровень</p>
                                                <div class="language-level-bar" id="langSlider-` + $langIndex + `">
                                                  <div class="language-prompt language-prompt-` + $langIndex +`">A1</div>
                                                  <ul>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                    <li class="slider-li-` + $langIndex + `"></li>
                                                  </ul>
                                                </div>
                                                </div>
                                                <a class="delete-button language-delete">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.75 5.5H4.58333H19.25" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.4173 5.49992C18.4173 4.94763 17.9696 4.49992 17.4173 4.49992C16.865 4.49992 16.4173 4.94763 16.4173 5.49992H18.4173ZM5.58398 5.49992C5.58398 4.94763 5.13627 4.49992 4.58398 4.49992C4.0317 4.49992 3.58398 4.94763 3.58398 5.49992H5.58398ZM6.33398 5.49992C6.33398 6.0522 6.7817 6.49992 7.33398 6.49992C7.88627 6.49992 8.33398 6.0522 8.33398 5.49992H6.33398ZM13.6673 5.49992C13.6673 6.0522 14.115 6.49992 14.6673 6.49992C15.2196 6.49992 15.6673 6.0522 15.6673 5.49992H13.6673ZM16.4173 5.49992V18.3333H18.4173V5.49992H16.4173ZM16.4173 18.3333C16.4173 18.7935 16.0442 19.1666 15.584 19.1666V21.1666C17.1488 21.1666 18.4173 19.8981 18.4173 18.3333H16.4173ZM15.584 19.1666H6.41732V21.1666H15.584V19.1666ZM6.41732 19.1666C5.95708 19.1666 5.58398 18.7935 5.58398 18.3333H3.58398C3.58398 19.8981 4.85251 21.1666 6.41732 21.1666V19.1666ZM5.58398 18.3333V5.49992H3.58398V18.3333H5.58398ZM8.33398 5.49992V3.66658H6.33398V5.49992H8.33398ZM8.33398 3.66658C8.33398 3.20635 8.70708 2.83325 9.16732 2.83325V0.833252C7.60251 0.833252 6.33398 2.10178 6.33398 3.66658H8.33398ZM9.16732 2.83325H12.834V0.833252H9.16732V2.83325ZM12.834 2.83325C13.2942 2.83325 13.6673 3.20635 13.6673 3.66658H15.6673C15.6673 2.10178 14.3988 0.833252 12.834 0.833252V2.83325ZM13.6673 3.66658V5.49992H15.6673V3.66658H13.6673Z" fill="#707070"/>
                                                <path d="M9.16602 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.834 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Удалить</a></div>`);
        
            $('.language-add').css('display', 'flex');
        }
        
        $('.language-wrapper').eq($(this).parent().parent().parent().parent().index() - 1).children('.language-information').children('.language-information-title').text($(this).text());

        

        var slider = document.getElementById("langSlider-" + $langIndex);

        noUiSlider.create(slider, {
          start: [0],
          step: 1,
          connect: [true, false], 
          range: {
            'min': 0,
            'max': 5
          }, 
        });

        slider.noUiSlider.on("update", function(value) {
          var currentSliderIndex = slider.id.charAt(11);

          if ($(window).width() > 556) {
            $('.language-prompt-' + currentSliderIndex).css({
              'left': -.8 + slider.noUiSlider.get() * 3.35 + "rem", 
              'transition': '.05s'
            })
          } else {
            $('.language-prompt-' + currentSliderIndex).css({
              'left': -.7 + slider.noUiSlider.get() * 2.27 + "rem", 
              'transition': '.05s'
            })
          }

          if (slider.noUiSlider.get() >= 0) $('.language-prompt-' + currentSliderIndex).text('A' + 1)
          if (slider.noUiSlider.get() >= 1) $('.language-prompt-' + currentSliderIndex).text('A' + 2)
          if (slider.noUiSlider.get() >= 2) $('.language-prompt-' + currentSliderIndex).text('B' + 1)
          if (slider.noUiSlider.get() >= 3) $('.language-prompt-' + currentSliderIndex).text('B' + 2)
          if (slider.noUiSlider.get() >= 4) $('.language-prompt-' + currentSliderIndex).text('C' + 1)
          if (slider.noUiSlider.get() >= 5) $('.language-prompt-' + currentSliderIndex).text('C' + 2)

          for (var i = 0; i < 6; i++) {
            $('.slider-li-' + currentSliderIndex).eq(i).css('background-color', '#F0F0F0');
          }
          for (var i = 0; i <= slider.noUiSlider.get(); i++) {
            $('.slider-li-' + currentSliderIndex).eq(i).css('background-color', '#5199FC');
          }
        });
    });
});

// delete language
$(document).ready(function () {
    $("body").on("click", ".language-delete", function () {
        var $deleteLanguageIndex =  $(this).index('.language-delete');

        $('.language-wrapper').eq($deleteLanguageIndex).slideUp(200);

        setTimeout(function() {
            $('.language-wrapper').eq($deleteLanguageIndex).detach();
        }, 200)
    });
});