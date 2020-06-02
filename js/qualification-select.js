var $qualificationCheckboxIndex = 1;

var $selectQualification = `<div class="qualification-wrapper">
<select class="qualification-select" data-live-search="true">
                                        <optgroup label="Сфера обслуживания, красота">
                                            <option>Повар</option>
                                            <option>Кондитер</option>
                                            <option>Пекарь</option>
                                        </optgroup>
                                        <optgroup label="Отели, Рестораны, Питание">
                                            <option>Бармен</option>
                                            <option>Бариста</option>
                                            <option>Горничная</option>
                                        </optgroup>
                                        <optgroup label="Сельское хозяйство">
                                            <option>Садовник</option>
                                            <option>Помощник</option>
                                            <option>Рыбное хозяйство</option>
                                        </optgroup>
                                        <optgroup label="Без квалификации">
                                            <option>Рабочий</option>
                                            <option>Разнорабочий</option>
                                            <option>Грузчик</option>
                                        </optgroup>
                                        <optgroup label="Строительство">
                                            <option>Арматурщик</option>
                                            <option>Бутонщик</option>
                                            <option>Бригадир</option>
                                        </optgroup>
                                        <optgroup label="Транспорт, Логистика, Таможня">
                                            <option>Водитель</option>
                                            <option>Автомаляр</option>
                                            <option>Водитель автобуса</option>
                                        </optgroup>
                                        <optgroup label="Сезонная работа">
                                            <option>Сборщик грибов</option>
                                        </optgroup>
                                        <optgroup label="Образование">
                                            <option>Преподаватель</option>
                                            <option>Переводчик</option>
                                        </optgroup>
                                        <optgroup label="Медицина">
                                            <option>Медбрат, медсестра</option>
                                            <option>Фельдшер</option>
                                        </optgroup>
                                        <optgroup label="Торговля">
                                            <option>Кассир</option>
                                            <option>Менеджер</option>
                                        </optgroup>
                                        <optgroup label="Склады">
                                            <option>Кладовщик</option>
                                            <option>Оператор погрузчика, карщик</option>
                                        </optgroup>
                                        <optgroup label="Сфера развлечений и искусство">
                                            <option>Аниматор</option>
                                            <option>Гид</option>
                                            <option>Диджей</option>
                                        </optgroup>
                                        <optgroup label="Работа в офисе">
                                            <option>Офискный работник</option>
                                            <option>Рекрутер</option>
                                            <option>Секретарь</option>
                                        </optgroup>
                                        <optgroup label="Оегкая промышленность">
                                            <option>Вязальщий</option>
                                            <option>Швея</option>
                                        </optgroup>
                                        <optgroup label="Лесничество, Деревообработка">
                                            <option>Лесник</option>
                                            <option>Лесорубр</option>
                                            <option>Изготовитель палет</option>
                                        </optgroup>
                                        <optgroup label="Металлообработка">
                                            <option>Жестянщик</option>
                                            <option>Газорезчик</option>
                                            <option>Газосварщик</option>
                                        </optgroup>
                                        <optgroup label="IT">
                                            <option>IT Helpdesk</option>
                                            <option>QA Engineer</option>
                                            <option> Контент-менеджер</option>
                                        </optgroup>
                                        <optgroup label="Сервис автомобилей">
                                            <option>Автомаляр</option>
                                            <option>Автомеханик</option>
                                            <option>Автослесарь</option>
                                        </optgroup>
                                    </select>
</div>`;
var $qualificationInformation = `<div class="qualification-information"><h5 class="qualification-information-title">Тракторист</h5><input class="qualification-exp" type="text" value="2" name="qualification-exp"><p class="qualification-information-subtitle">Навыки по специальности</p><div class="keywords-container"><div class="keyword-input-container"><input type="text" class="keyword-input with-border" placeholder="Ввести 3 варианта"/><button class="keyword-input-button ripple-effect"><img src="img/plus.svg" alt="plus"></button></div><div class="keywords-list"></div><div class="clearfix"></div></div><!-- ./keyword-container --><div class="checkboxes"><div class="checkbox"><input type="checkbox" id="is-sertificate-checkbox-` + $qualificationCheckboxIndex + `"><label for="is-sertificate-checkbox-` + $qualificationCheckboxIndex + `"><span class="checkbox-icon"></span>Есть диплом/сертификат</label></div></div><!-- ./checkboxed --><button class="delete-button qualification-delete"S><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.75 5.5H4.58333H19.25" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4173 5.49992C18.4173 4.94763 17.9696 4.49992 17.4173 4.49992C16.865 4.49992 16.4173 4.94763 16.4173 5.49992H18.4173ZM5.58398 5.49992C5.58398 4.94763 5.13627 4.49992 4.58398 4.49992C4.0317 4.49992 3.58398 4.94763 3.58398 5.49992H5.58398ZM6.33398 5.49992C6.33398 6.0522 6.7817 6.49992 7.33398 6.49992C7.88627 6.49992 8.33398 6.0522 8.33398 5.49992H6.33398ZM13.6673 5.49992C13.6673 6.0522 14.115 6.49992 14.6673 6.49992C15.2196 6.49992 15.6673 6.0522 15.6673 5.49992H13.6673ZM16.4173 5.49992V18.3333H18.4173V5.49992H16.4173ZM16.4173 18.3333C16.4173 18.7935 16.0442 19.1666 15.584 19.1666V21.1666C17.1488 21.1666 18.4173 19.8981 18.4173 18.3333H16.4173ZM15.584 19.1666H6.41732V21.1666H15.584V19.1666ZM6.41732 19.1666C5.95708 19.1666 5.58398 18.7935 5.58398 18.3333H3.58398C3.58398 19.8981 4.85251 21.1666 6.41732 21.1666V19.1666ZM5.58398 18.3333V5.49992H3.58398V18.3333H5.58398ZM8.33398 5.49992V3.66658H6.33398V5.49992H8.33398ZM8.33398 3.66658C8.33398 3.20635 8.70708 2.83325 9.16732 2.83325V0.833252C7.60251 0.833252 6.33398 2.10178 6.33398 3.66658H8.33398ZM9.16732 2.83325H12.834V0.833252H9.16732V2.83325ZM12.834 2.83325C13.2942 2.83325 13.6673 3.20635 13.6673 3.66658H15.6673C15.6673 2.10178 14.3988 0.833252 12.834 0.833252V2.83325ZM13.6673 3.66658V5.49992H15.6673V3.66658H13.6673Z" fill="#707070"/>
<path d="M9.16602 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.834 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Удалить</button></div><!-- ./qualification-information -->`;

// add qualification

$('.qualification-add').on("click", function() {
    
    $(this).css('display', 'none');
    $(this).before($selectQualification);

    $('.qualification-wrapper:last').css('display', 'none');
    $('.qualification-wrapper:last').fadeIn(300);

    $('.qualification-select').selectpicker();


    $('.qualification-wrapper li').on("click", function() {


        $(this).parent().parent().parent().css('display', 'none');

        if (!$(this).parent().parent().parent().next().hasClass('qualification-information')) {
            $qualificationCheckboxIndex++;

            $('.qualification-wrapper:last').append(`<div class="qualification-information"><h5 class="qualification-information-title">Тракторист</h5><input class="qualification-exp" type="text" value="2" name="qualification-exp"><p class="qualification-information-subtitle">Навыки по специальности</p><div class="keywords-container"><div class="keyword-input-container"><input type="text" class="keyword-input with-border" placeholder="Ввести 3 варианта"/><button class="keyword-input-button ripple-effect"><img src="img/plus.svg" alt="plus"></button></div><div class="keywords-list"></div><div class="clearfix"></div></div><!-- ./keyword-container --><div class="checkboxes"><div class="checkbox"><input type="checkbox" id="is-sertificate-checkbox-` + $qualificationCheckboxIndex + `"><label for="is-sertificate-checkbox-` + $qualificationCheckboxIndex + `"><span class="checkbox-icon"></span>Есть диплом/сертификат</label></div></div><!-- ./checkboxed --><button class="delete-button qualification-delete"S><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.75 5.5H4.58333H19.25" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.4173 5.49992C18.4173 4.94763 17.9696 4.49992 17.4173 4.49992C16.865 4.49992 16.4173 4.94763 16.4173 5.49992H18.4173ZM5.58398 5.49992C5.58398 4.94763 5.13627 4.49992 4.58398 4.49992C4.0317 4.49992 3.58398 4.94763 3.58398 5.49992H5.58398ZM6.33398 5.49992C6.33398 6.0522 6.7817 6.49992 7.33398 6.49992C7.88627 6.49992 8.33398 6.0522 8.33398 5.49992H6.33398ZM13.6673 5.49992C13.6673 6.0522 14.115 6.49992 14.6673 6.49992C15.2196 6.49992 15.6673 6.0522 15.6673 5.49992H13.6673ZM16.4173 5.49992V18.3333H18.4173V5.49992H16.4173ZM16.4173 18.3333C16.4173 18.7935 16.0442 19.1666 15.584 19.1666V21.1666C17.1488 21.1666 18.4173 19.8981 18.4173 18.3333H16.4173ZM15.584 19.1666H6.41732V21.1666H15.584V19.1666ZM6.41732 19.1666C5.95708 19.1666 5.58398 18.7935 5.58398 18.3333H3.58398C3.58398 19.8981 4.85251 21.1666 6.41732 21.1666V19.1666ZM5.58398 18.3333V5.49992H3.58398V18.3333H5.58398ZM8.33398 5.49992V3.66658H6.33398V5.49992H8.33398ZM8.33398 3.66658C8.33398 3.20635 8.70708 2.83325 9.16732 2.83325V0.833252C7.60251 0.833252 6.33398 2.10178 6.33398 3.66658H8.33398ZM9.16732 2.83325H12.834V0.833252H9.16732V2.83325ZM12.834 2.83325C13.2942 2.83325 13.6673 3.20635 13.6673 3.66658H15.6673C15.6673 2.10178 14.3988 0.833252 12.834 0.833252V2.83325ZM13.6673 3.66658V5.49992H15.6673V3.66658H13.6673Z" fill="#707070"/>
            <path d="M9.16602 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.834 10.0833V15.5833" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>Удалить</button></div><!-- ./qualification-information -->`);
        
            $("input[name='qualification-exp']").TouchSpin({
                min: 1,
                max: 100,
                step: 1,
                boostat: 2,
                maxboostedstep: 5, 
                prefix: "Опыт работы",
                postfix: "лет"
            });
            $("input[name='qualification-exp']").on("touchspin.on.startspin", function() {
                var $qualificationInputIndex = $(this).index($("input[name='qualification-exp']"));
                $(this).css({
                    'padding-top': '.25rem', 
                    'padding-bottom': '.75rem', 
                    'color': '#FF86B7'
                });
                setTimeout(function() {
                    $("input[name='qualification-exp']").eq($qualificationInputIndex).css({
                        'padding-top': '.5rem', 
                        'padding-bottom': '.5rem', 
                        'color': '#FF0066'
                    });
                }, 200)
            })

            $('.qualification-add').css('display', 'flex');
        }
        
        $('.qualification-wrapper').eq($(this).parent().parent().parent().parent().index() - 2).children('.qualification-information').children('.qualification-information-title').text($(this).text());
    
        /*--------------------------------------------------*/
	    /*  Keywords
	    /*--------------------------------------------------*/
	    $(".keywords-container").each(function() {

	    	var keywordInput = $(this).find(".keyword-input");
	    	var keywordsList = $(this).find(".keywords-list");

	    	// adding keyword
	    	function addKeyword() {
	    		var $newKeyword = $("<span class='keyword'><span class='keyword-remove'></span><span class='keyword-text'>"+ keywordInput.val() +"</span></span>");
	    		keywordsList.append($newKeyword).trigger('resizeContainer');
	    		keywordInput.val("");
	    	}

	    	// add via enter key
	    	keywordInput.on('keyup', function(e){
	    		if((e.keyCode == 13) && (keywordInput.val()!=="")){
	    			addKeyword();
	    		}
	    	});

	    	// add via button
	    	$('.keyword-input-button').on('click', function(){

	    		if((keywordInput.val()!=="")){
	    			addKeyword();
	    		}
            
	    	});

	    	// removing keyword
	    	$(document).on("click",".keyword-remove", function(){
	    		$(this).parent().addClass('keyword-removed');

	    		function removeFromMarkup(){
	    		  $(".keyword-removed").remove();
	    		}
	    		setTimeout(removeFromMarkup, 500);
	    		keywordsList.css({'height':'auto'}).height();
	    	});


	    	// animating container height
	    	keywordsList.on('resizeContainer', function(){
	    	    var heightnow = $(this).height();
	    	    var heightfull = $(this).css({'max-height':'auto', 'height':'auto'}).height();

	    		$(this).css({ 'height' : heightnow }).animate({ 'height': heightfull }, 200);
	    	});

	    	$(window).on('resize', function() {
	    		keywordsList.css({'height':'auto'}).height();
	    	});

	    	// Auto Height for keywords that are pre-added
	    	$(window).on('load', function() {
	    		var keywordCount = $('.keywords-list').children("span").length;

	    		// Enables scrollbar if more than 3 items
	    		if (keywordCount > 0) {
	    			keywordsList.css({'height':'auto'}).height();
                
	    		} 
	    	});

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
	    });
    });
});

// delete qualification
$(document).ready(function () {
    $("body").on("click", ".qualification-delete", function () {
        var $deleteQualificationIndex =  $(this).index('.qualification-delete');

        $('.qualification-wrapper').eq($deleteQualificationIndex).slideUp(200);

        setTimeout(function() {
            $('.qualification-wrapper').eq($deleteQualificationIndex).detach();
        }, 200)
    });
});