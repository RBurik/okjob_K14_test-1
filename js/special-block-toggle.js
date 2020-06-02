  // Special block

$('.switch-button').on("click", function() {

  if ($(this).parent().parent().next().hasClass('special-block')) $(this).parent().parent().next().slideToggle(300)

});
