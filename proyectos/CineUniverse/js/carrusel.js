// JavaScript Document

$(document).ready(function(){
	
var slider = $('#banner');
var siguiente = $('.btn_next');
var anterior = $('.btn_prev');	
	
$('.caja_slider:last').insertBefore('.caja_slider:first');
slider.css('margin-left', '-'+100+'%');	
	
function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.caja_slider:first').insertAfter('.caja_slider:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('.caja_slider:last').insertBefore('.caja_slider:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
	moverD();
	}, 5000);
}	

siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});	
	
autoplay();	


});
	
	