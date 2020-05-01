$(".page-scroll").on("click", function (e) {
	var tujuan = $(this).attr("href");

	var elemenTujuan = $(tujuan);

	$("html , body").animate(
		{
			scrollTop: elemenTujuan.offset().top - 55,
		},
		1000,
		"easeInOutExpo"
	);

	e.preventDefault();
});

// parallax
// about
$(window).on("load", function () {
	$(".pKiri").addClass("pMuncul");
	$(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	// JUMBOTRON
	$(".jumbotron img").css({
		transform: "translate(0px, " + wScroll / 6 + "%)",
	});

	$(".jumbotron h1").css({
		transform: "translate(0px, " + wScroll / 1.5 + "%)",
	});

	$(".jumbotron p").css({
		transform: "translate(0px, " + wScroll + "%)",
	});

	// PORTFOLIO
	if (wScroll > $(".portfolio").offset().top - 400) {
		$(".portfolio .img-thumbnail").each(function (i) {
			setTimeout(function () {
				$(".portfolio .img-thumbnail").eq(i).addClass("muncul");
			}, 300 * (i + 1));
		});
	}
});
