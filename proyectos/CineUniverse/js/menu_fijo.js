// JavaScript Document


$(document).ready(function(){
		
	/*$('#menu_movil').toggle(function () {
	    $('#nav_movil').css({'left':'0%','transition':'0.5s'});
		$('#fondo_menu_movil').css({'opacity':'1','transition':'1s'});
		$('#fondo_menu_movil').css('visibility','visible');
		}, function () {
		$('#nav_movil').css({'left':'-80%','transition':'1s'});
		$('#fondo_menu_movil').css({'opacity':'0','transition':'1s'});
		$('#fondo_menu_movil').css('visibility','hidden');
    });*/
	
	
	$('#menu_movil').click(function(){
		$('#menu_movil').css('visibility','hidden');
	    $('#nav_movil').css({'left':'0%','transition':'0.5s'});
		$('#fondo_menu_movil').css({'opacity':'1','transition':'1s'});
		$('#fondo_menu_movil').css('visibility','visible');	
	});
	

	$('#menu_movil2').click(function(){
		$('#menu_movil').css('visibility','visible');
	    $('#nav_movil').css({'left':'-80%','transition':'1s'});
		$('#fondo_menu_movil').css({'opacity':'0','transition':'1s'});
		$('#fondo_menu_movil').css('visibility','hidden');
	});
	
	
	$('#nav_movil li').mouseover(function(){
		$(this).css('background-color','#017bbc');
		$(this).children('a').css({'font-size':'16px','transition':'0.5s'});
		$(this).css('transition','0.5s');
	});
	
	$('#nav_movil li').mouseout(function(){
		$(this).css('background-color','#016296');
		$(this).children('a').css({'font-size':'14px','transition':'0.5s'});
		$(this).css('transition','0.5s');
	});
	
	
	
	
});