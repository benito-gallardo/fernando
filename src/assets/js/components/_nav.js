
$(window).scroll( function() {
 $(this).scrollTop() > 56 ? $("nav").addClass('scrolled') : $("nav").removeClass('scrolled')
})