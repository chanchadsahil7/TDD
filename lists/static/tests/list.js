jQuery(document).ready(function ($) {
$('input').on('keypress',function () { //1
   callback();
});
$( "input" ).click(function() {
   callback();
});
});

var callback = function() {
	$('.has-error').hide();
};