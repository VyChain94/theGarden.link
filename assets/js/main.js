/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.getElementById("name").onchange = name
document.getElementById("email").onchange = email
document.getElementById("message").onchange = message

function name(){
	document.getElementById("name").style.background="green"
	document.getElementById("name").style.color="white"
	document.getElementById("name").style.fontWeight="400"
}

function email(){
	document.getElementById("email").style.background="green"
	document.getElementById("email").style.color="white"
	document.getElementById("email").style.fontWeight="400"
}

function message(){
	document.getElementById("message").style.background="green"
	document.getElementById("message").style.color="white"
	document.getElementById("message").style.fontWeight="400"
}

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);