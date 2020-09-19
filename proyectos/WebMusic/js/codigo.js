// JavaScript Document


var cancion=['lista/david_guetta1.mp3',
			 'lista/david_guetta2.mp3',
			 'lista/david_guetta3.mp3',
			 'lista/david_guetta4.mp3'];


var cancion2=['lista/dnce1.mp3',
			  'lista/dnce2.mp3',
			  'lista/dnce3.mp3',
			  'lista/dnce4.mp3'];


var cancion3=['lista/brunomars1.mp3',
			  'lista/brunomars2.mp3',
			  'lista/brunomars3.mp3',
			  'lista/brunomars4.mp3'];



$(document).ready(function(){
	
var estado=false;
	
function buscar_original(){
	$('#logo').removeClass('logo2');
	$('#logo').addClass('logo');
	$('#logo').css('transition','all 1s');
	$('#buscar').css('width','.5%');
	$('#buscar').css('transition','all 1s');
	estado=false;
}

function buscar_efecto(){
	$('#logo').removeClass('logo');
	$('#logo').addClass('logo2');
	$('#logo').css('transition','all 1s');
	$('#buscar').css('width','100%');
	$('#buscar').css('transition','all 1s');
	estado=true;
}

	
function menu1(){
	$('.menu_clase a').removeClass('menu_enlace2');
	$('.menu_clase a').addClass('menu_enlace');
	
	$('.menu_clase').mouseover(function(){
	$(this).find('.menu_fondo').css('width','100%');
	$(this).find('.menu_fondo').css('box-shadow','rgba(0,0,0,.5) 1px 1px 1px');	
	$(this).find('.menu_enlace').css('color','white');	
	$('.menu_fondo').css('transition','all 1s');
		
	});
	
	$('.menu_clase').mouseleave(function(){
	$(this).find('.menu_fondo').css('width','0%');
	$('.menu_enlace').css('color','white');		
	$('.menu_fondo').css('transition','all 1s');
	});
	
}	

	
	
	menu1();

	
	
	$('#img_buscar1').click(function(){
		if(estado===false){
		buscar_efecto();}
		else{
		buscar_original();	
		}
	});
	
	

$('.listas_galeria').mouseover(function(){
	$(this).find('.fondo_lista_galeria').css('width','100%');
	$('.fondo_lista_galeria').css('transition','all 1s');
});
	

$('.listas_galeria').mouseleave(function(){
	$(this).find('.fondo_lista_galeria').css('width','0%');
	$('.fondo_lista_galeria').css('transition','all 1s');
});	
	
	

	$('#inicio').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: $('#contenedor').offset().top }, 1000);
    });
	
	
	$('#nosotros').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#banner_publicidad').offset().top }, 1000);
    });
	
	
	$('#album').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#playlist').offset().top }, 1000);
    });
	
	$('#concierto').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#conciertos').offset().top }, 1000);
    });
	
	
	
	$('#nuevo').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#noticias').offset().top }, 1000);
    });
	
	
	$('#artista').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#artistas').offset().top }, 1000);
    });
	
	
	$('#contact').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#contacto').offset().top }, 1000);
    });
	
	$('#btn_ahora').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#podcasts').offset().top }, 1000);
    });
	
	posicionarMenu();

$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
 
    var altura_del_menu = $('#centrar_menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_menu){
	$("#menu_completo").removeClass('menu_completo1');
	$("#menu_completo").addClass('menu_completo2');


    } else {
	 
	  $("#menu_completo").addClass('menu_completo1');
      $("#menu_completo").removeClass('menu_completo2');
    }
}

var estado_menu=false;	

function menu_movilEfecto(){

setTimeout(function() {
        $("#menu2").fadeIn(500);
    },200);	
	estado_menu=true;
}	

function menu_movilNormal(){
setTimeout(function() {
        $("#menu2").fadeOut(500);
    },400);

	estado_menu=false;
}
	
	
$('#menu_movil img').click(function(){
	if(estado_menu===false){
		menu_movilEfecto();
	}
	else{
		menu_movilNormal();
	}
});
	

	
	
	$('#inicio2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: $('#contenedor').offset().top }, 1000);
    });	
	
	
	$('#nosotros2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#banner_publicidad').offset().top }, 1000);
    });
	
    $('#concierto2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#conciertos').offset().top }, 1000);
    });	

	
	$('#album2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -70+$('#playlist').offset().top }, 1000);
    });
	
	
	$('#nuevo2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -120+$('#noticias').offset().top }, 1000);
    });
	
	
	$('#artista2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -100+$('#artistas').offset().top }, 1000);
    });
	
	
	$('#contacto2').on('click', function(e) {
	menu_movilNormal();
    e.preventDefault();
    $("html, body").animate({scrollTop: -100+$('#contacto').offset().top }, 1000);
    });
		
	
	$('.menu_clase2').mouseover(function(){
		$(this).find('.menu2_fondo').css('width','100%');
		$('.menu2_fondo').css('transition','1s all');
	});
	
	$('.menu_clase2').mouseleave(function(){
		$(this).find('.menu2_fondo').css('width','0%');
		$('.menu2_fondo').css('transition','1s all');
	});
	
	
	$('.album_img').mouseover(function(){
	$(this).addClass('animated infinite pulse');
});
	

$('.album_img').mouseleave(function(){
	$(this).removeClass('animated infinite pulse');
			
});
	
	
$('.red a').mouseover(function(){
	$(this).css('color','#AD1D62');
	$(this).find('span').css('font-size','20px');
	$('.red_icon span').css('transition','.5s all');
			
});

$('.red a').mouseleave(function(){
	$(this).css('color','#354049');
	$(this).find('span').css('font-size','16px');
	$('.red_icon span').css('transition','.5s all');
			
});

	
$('.vermas_concierto').mouseover(function(){
	$(this).removeClass('vermas_concierto');
	$(this).addClass('vermas_concierto2');
});	

$('.vermas_concierto').mouseleave(function(){
	$(this).removeClass('vermas_concierto2');
	$(this).addClass('vermas_concierto');
});		
	
	
	
var estado_btn=false;
	
function mostrar_concierto(){
	if(estado_btn===false){
		$('#ocultar_anuncio_concierto').slideDown('slow');
		$('#btn_mostrar1').text('MOSTRAR MENOS');
		estado_btn=true;
	}                  
	else{
		$('#ocultar_anuncio_concierto').slideUp('fast');
		$('#btn_mostrar1').text('MOSTRAR MÁS');
		estado_btn=false;
	} 
}
	
function mostrar_noticia(){
	if(estado_btn===false){
		$('#ocultar_anuncio_noticias').slideDown('slow');
		$('#btn_mostrar2').text('MOSTRAR MENOS');
		estado_btn=true;
	}                  
	else{
		$('#ocultar_anuncio_noticias').slideUp('fast');
		$('#btn_mostrar2').text('MOSTRAR MÁS');
		estado_btn=false;
	} 
}		
	
	
	
function mostrar_galeria(){
	if(estado_btn===false){
		$('#ocultar_fotos_galeria').slideDown('slow');
		$('#btn_mostrar3').text('MOSTRAR MENOS');
		estado_btn=true;
	}                  
	else{
		$('#ocultar_fotos_galeria').slideUp('fast');
		$('#btn_mostrar3').text('MOSTRAR MÁS');
		estado_btn=false;
	} 
}
	
$('#btn_vermas_concierto').click(function(){
    mostrar_concierto();
	
});	
	
$('#btn_vermas_noticias').click(function(){
    mostrar_noticia();
	
});		

	
$('#btn_vermas_galerias').click(function(){
    mostrar_galeria();
	
});		
	
	
$('#primero_galeria').click(function(){
	$('#foto1').removeClass('animated zoomOut');
	$('#foto1').addClass('animated zoomIn');
	$('#foto1').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto2').removeClass('animated zoomOut');
	$('#foto2').addClass('animated zoomIn');
	$('#foto2').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto3').removeClass('animated zoomOut');
	$('#foto3').addClass('animated zoomIn');
	$('#foto3').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto4').removeClass('animated zoomOut');
	$('#foto4').addClass('animated zoomIn');
	$('#foto4').css({'width':'40%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto5').removeClass('animated zoomOut');
	$('#foto5').addClass('animated zoomIn');
	$('#foto5').css({'width':'20%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto6').removeClass('animated zoomOut');
	$('#foto6').addClass('animated zoomIn');
	$('#foto6').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%','float':'right'});
	
	$('#foto7').removeClass('animated zoomOut');
	$('#foto7').addClass('animated zoomIn');
	$('#foto7').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto8').removeClass('animated zoomOut');
	$('#foto8').addClass('animated zoomIn');
	$('#foto8').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto9').removeClass('animated zoomOut');
	$('#foto9').addClass('animated zoomIn');
	$('#foto9').css({'width':'40%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto10').removeClass('animated zoomOut');
	$('#foto10').addClass('animated zoomIn');
	$('#foto10').css({'width':'20%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
});
	
	
$('#btn_musica').click(function(){
	$('#foto1').addClass('animated zoomOut');
	$('#foto1').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto2').addClass('animated zoomOut');
	$('#foto2').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto3').removeClass('animated zoomOut');
	$('#foto3').addClass('animated zoomIn');
	$('#foto3').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto4').addClass('animated zoomOut');
	$('#foto4').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto5').removeClass('animated zoomOut');
	$('#foto5').addClass('animated zoomIn');
	$('#foto5').css({'width':'20%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto6').addClass('animated zoomOut');
	$('#foto6').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto7').addClass('animated zoomOut');
	$('#foto7').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto8').addClass('animated zoomOut');
	$('#foto8').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto9').removeClass('animated zoomOut');
	$('#foto9').addClass('animated zoomIn');
	$('#foto9').css({'width':'40%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto10').addClass('animated zoomOut');
	$('#foto10').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
});	
		
	
	
$('#btn_artistas').click(function(){
	$('#foto1').addClass('animated zoomOut');
	$('#foto1').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto2').removeClass('animated zoomOut');
	$('#foto2').addClass('animated zoomIn');
	$('#foto2').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto3').addClass('animated zoomOut');
	$('#foto3').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto4').removeClass('animated zoomOut');
	$('#foto4').addClass('animated zoomIn');
	$('#foto4').css({'width':'40%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto5').addClass('animated zoomOut');
	$('#foto5').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto6').addClass('animated zoomOut');
	$('#foto6').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto7').addClass('animated zoomOut');
	$('#foto7').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto8').removeClass('animated zoomOut');
	$('#foto8').addClass('animated zoomIn');
	$('#foto8').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto9').addClass('animated zoomOut');
	$('#foto9').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto10').removeClass('animated zoomOut');
	$('#foto10').addClass('animated zoomIn');
	$('#foto10').css({'width':'20%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
});	
	
	
$('#btn_conciertos').click(function(){
	$('#foto1').addClass('animated zoomOut');
	$('#foto1').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto2').addClass('animated zoomOut');
	$('#foto2').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto3').removeClass('animated zoomOut');
	$('#foto3').addClass('animated zoomIn');
	$('#foto3').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto4').addClass('animated zoomOut');
	$('#foto4').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto5').addClass('animated zoomOut');
	$('#foto5').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto6').addClass('animated zoomOut');
	$('#foto6').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto7').removeClass('animated zoomOut');
	$('#foto7').addClass('animated zoomIn');
	$('#foto7').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto8').addClass('animated zoomOut');
	$('#foto8').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
    $('#foto9').addClass('animated zoomOut');
	$('#foto9').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto10').addClass('animated zoomOut');
	$('#foto10').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
});	
	

$('#btn_video').click(function(){
	$('#foto1').removeClass('animated zoomOut');
	$('#foto1').addClass('animated zoomIn');
	$('#foto1').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto2').addClass('animated zoomOut');
	$('#foto2').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto3').removeClass('animated zoomOut');
	$('#foto3').addClass('animated zoomIn');
	$('#foto3').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	
	$('#foto4').removeClass('animated zoomOut');
	$('#foto4').addClass('animated zoomIn');
	$('#foto4').css({'width':'40%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%'});
	
	$('#foto5').addClass('animated zoomOut');
	$('#foto5').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto6').removeClass('animated zoomOut');
	$('#foto6').addClass('animated zoomIn');
	$('#foto6').css({'width':'30%','margin-right':'1.5%','margin-left':'1.5%','margin-bottom':'3%','float':'left'});
	
	$('#foto7').addClass('animated zoomOut');
	$('#foto7').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto8').addClass('animated zoomOut');
	$('#foto8').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
    $('#foto9').addClass('animated zoomOut');
	$('#foto9').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
	$('#foto10').addClass('animated zoomOut');
	$('#foto10').css({'width':'0%','margin-right':'0%','margin-left':'0%','margin-bottom':'0%'});
	
});
	
	
	
	/*
	$pantalla = $(window);
    $('footer').each(function(){
        var $this = $(this);
        $pantalla.scroll(function() {
            var y = -($pantalla.scrollTop() / $this.data('movimiento')); 
            var xy = '-100% '+ y + 'px';
            $this.css({ backgroundPosition: xy });
       });
    });*/
  	
/*-------------audio------------------*/
	
   $('#audio-player').mediaelementplayer({
   alwaysShowControls: true,
   features: ['playpause','current','progress','duration','volume'],
   audioVolume: 'horizontal',
   audioWidth: 400,
   audioHeight: 40
  });
	
	

	var x_lista=0;
	
	var listaactivo=false;
	
	   
		   
	   $('.mejs__play').click(function(){
		  if(listaactivo===false){
			  $('.caja2_cd').addClass('efectocd');
			  listaactivo=true;
		  } 
		   else{
			  $('.caja2_cd').removeClass('efectocd');
			  listaactivo=false;
		   }
	   });

								 
	   $('#next').click(function(){
			
        x_lista++;
		$('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});
			
		if(x_lista>cancion.length-1){ x_lista=0;
		$('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});					   
		}
		
		
		$('.cancion').removeClass('colores');
		$('.cancion').removeClass('animated shake');	
		$('.cancion:eq(' + x_lista + ')').addClass('colores');
		$('.cancion:eq(' + x_lista + ')').addClass('animated shake');	
		
			
     	});
	
	
	    $('#prev').click(function(){
			
        x_lista--;
		$('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});	
		if(x_lista<0){ x_lista=cancion.length-1;	
		$('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});
		}
			
		$('.cancion').removeClass('colores');
		$('.cancion').removeClass('animated shake');	
		$('.cancion:eq(' + x_lista + ')').addClass('colores');
		$('.cancion:eq(' + x_lista + ')').addClass('animated shake');
			
		});
	
	
		$('.cancion').click(function(){
		var x=$(this).data("op");
		x_lista=x;	
		/*$('#lista_cancion').attr('src', cancion[x]);*/
		$('#audio-player_html5').attr({'src': cancion[x],'autoplay':'autoplay'});
		$('.cancion').removeClass('colores');
		$('.cancion').removeClass('animated shake');
		$(this).addClass('colores');
		$(this).addClass('animated shake');
	    $('.caja2_cd').addClass('efectocd');
		listaactivo=true;	
});
	
	
	
	
	
$('#primer_circulo').click(function(){
	    
			$('#lista_titulo').text("THIS ONE'S FOR YOU");
			$('#artistas_nombre').text('Artista: David Guetta');
			
			
			$('#nombre_album1').text("This One s For You lyrics");
			$('#nombre_album2').text("Lovers On The Sun");
			$('#nombre_album3').text("Sia Fetty Wap");
			$('#nombre_album4').text("Sun Goes Down");
			
			$('#duracion1').text("03:26");
			$('#duracion2').text("03:23");
			$('#duracion3').text("03:12");
			$('#duracion4').text("03:29");
			
			$('#estuche').show();
			$('#estuche').addClass('animated bounceInRight');
			$('#estuche2').hide();
			$('#estuche3').hide();
			
		
		    /*$('#audio-player_html5').attr({'src': cancion[x_lista]});*/	
		
	
	        $('#next').click(function(){
		    $('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});
            });
	
	
	        $('#prev').click(function(){
		    $('#audio-player_html5').attr({'src': cancion[x_lista],'autoplay':'autoplay'});	
	        });
	
	
		
		    $('.cancion').click(function(){
		    var x=$(this).data("op");
		    x_lista=x;	
		    $('#audio-player_html5').attr({'src': cancion[x],'autoplay':'autoplay'});
            });
		    	
			
		});	
			
	
	
		$('#segundo_circulo').click(function(){
			$('#lista_titulo').text('SWAAY');
			$('#artistas_nombre').text('Artista: Dnce');
			
			
			$('#nombre_album1').text("Almost");
			$('#nombre_album2').text("Kissing Strangers");
			$('#nombre_album3').text("Toothbrush");
			$('#nombre_album4').text("Body Moves");
			
			$('#duracion1').text("02:54");
			$('#duracion2').text("03:28");
			$('#duracion3').text("03:51");
			$('#duracion4').text("03:56");
			
			$('#estuche2').show();
			$('#estuche2').addClass('animated bounceInRight');
			$('#estuche').hide();
			$('#estuche3').hide();

			
			
			
		    $('#next').click(function(){
		    $('#audio-player_html5').attr({'src': cancion2[x_lista],'autoplay':'autoplay'});
     	    });
	
	
	        $('#prev').click(function(){
		    $('#audio-player_html5').attr({'src': cancion2[x_lista],'autoplay':'autoplay'});	
		    });	
		    	
		    $('.cancion').click(function(){
		    var x=$(this).data("op");
		    x_lista=x;	
		    $('#audio-player_html5').attr({'src': cancion2[x],'autoplay':'autoplay'});
            });

			
		});	
			
	
	
		
		$('#tercer_circulo').click(function(){
			$('#lista_titulo').text('JUST THE WAY YOU ARE ');
			$('#artistas_nombre').text('Artista: Bruno Mars');
			
			$('#nombre_album1').text("Just the way you are");
			$('#nombre_album2').text("24 Karat Magic");
			$('#nombre_album3').text("Thats What I Like");
			$('#nombre_album4').text("Treasure");
			
			
			$('#duracion1').text("03:32");
			$('#duracion2').text("03:44");
			$('#duracion3').text("03:26");
			$('#duracion4').text("02:53");
			
			$('#estuche3').show();
			$('#estuche3').addClass('animated bounceInRight');
			$('#estuche').hide();
			$('#estuche2').hide();
			
		/*$('#audio-player_html5').attr({'src': cancion3[x_lista]});*/	
			
		$('#next').click(function(){
		$('#audio-player_html5').attr({'src': cancion3[x_lista],'autoplay':'autoplay'});
     	});
	
	
	    $('#prev').click(function(){
		$('#audio-player_html5').attr({'src': cancion3[x_lista],'autoplay':'autoplay'});	
		});		
			
			
		$('.cancion').click(function(){
		var x=$(this).data("op");
		x_lista=x;	
		/*$('#lista_cancion').attr('src', cancion[x]);*/
		$('#audio-player_html5').attr({'src': cancion3[x],'autoplay':'autoplay'});
        });	
			
	});
	
	
	$('.circulo').click(function(){
		$('.circulo').css('opacity','.2');
		$(this).css('opacity','1');
	});
	

});


  /*$(".content").fadeOut(1500);
    },3000);*/

/*$('#caja_buscar').click(function(){
		$('#logo').css('padding-right','2%');
		$('#logo').css('transition','all 1s');
		$('#buscar').css('width','100%');
		$('#buscar').css('transition','all 1s');
	});*/
