//ACTIVE AND INACTIVE PAGE

$(".navbar li").on("click",function(){
	var current = $(".navbar li.active a").text();
	$(".navbar li.active").removeClass("active");
	$(this).addClass("active");	

	if ($(this).children('a').text() == current) {
		return
	} else {
		if (current == "home") {
			$(".home").css("display","none");
			$($(this).data("page")).css('display','block');
		} else if (current == "about") {
			$(".about").css('display','none');
			$($(this).data("page")).css('display','block');
		} else if (current == "experience") {
			$(".work").css('display','none');
			$($(this).data("page")).css('display','block');

		} else if (current == "skills") {
			$(".skills").css('display','none');
			$($(this).data("page")).css('display','block');
		} else if (current == "recommendations") {
			$(".recommendations").css('display','none');
			$($(this).data("page")).css('display','block');
		}
	}
});

// NPROGRESS

(function ($) {
	$(function() {
		NProgress.start(); //loader
	});
	
	window.onload = function() {
		NProgress.done();
		setTimeout("$('.outer').css('display','block');", 650);
	}
})(jQuery);
