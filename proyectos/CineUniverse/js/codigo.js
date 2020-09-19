// JavaScript Document

/*
var imgs=new Array(4);
imgs[0]="img/banner0.jpg";
imgs[1]="img/banner1.jpg";
imgs[2]="img/banner2.jpg";
imgs[3]="img/banner3.jpg";

var i=0;
var estado;

function carrusel(){
	document.getElementBy('banner').src=imgs[i];
	i++;
	if(i>=imgs.length) i=0;
	estado=setTimeout("carrusel()",1000);
}

*/

var rednormal=new Array(3);
rednormal[0]="img/facebook.png";
rednormal[1]="img/twitter.png";
rednormal[2]="img/youtube.png";

var redefecto=new Array(3);
redefecto[0]="img/facebook_02.png";
redefecto[1]="img/twitter_02.png";
redefecto[2]="img/youtube_02.png";


var pcartelera=[  'img/1.jpg',
				  'img/2.jpg',
				  'img/3.jpg',
				  'img/4.jpg',
				  'img/5.jpg',
				  'img/6.jpg',
				  'img/7.jpg',
				  'img/8.jpg',
				  'img/9.jpg',
				  'img/10.jpg',
			   ];

var txtcartelera=['Spiderman',
				  'La Montaña',
				  'Somos Nectar',
				  'Kingsman 2',
				  'Lego Ninja Go',
				  'Condorito',
				  'Mision',
				  'Estafa',
				  'Amor.Com',
				  'Locos',
				 ];

var pestrenos=[   'img/11.jpg',
				  'img/12.jpg',
				  'img/13.jpg',
				  'img/14.jpg',
				  'img/15.jpg',
				  'img/16.jpg',
				  'img/17.jpg',
				  'img/18.jpg',
				  'img/19.jpg',
				  'img/20.jpg',
			   ];

var txtestrenos=[ 'Thor',
				  'El Futbol',
				  'Mi perro',
				  'Dragon Ball Z',
				  'Civil war',
				  'Ratatouille',
				  'Ralph',
				  'Mohana',
				  'Guardians',
				  'Rogue one',
				 ];


var urlcartelera=['cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  'cartelera/spiderman.html',
				  
				 ];


var urlestrenos=[ 'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				  'estrenos/spiderman.html',
				 ];


var htext1=['La historia de Cine Universe empieza, a mediados de 2017, con una idea originada por 2 jóvenes peruanos, quienes, luego de terminar su postgrado en el instituto peruano Cibertec, decidieron crear oportunidades de inversión y desarrollar nuevos proyectos. RaidFilm, empresa peruana formada por estos jóvenes, identificó una fuerte necesidad en el rubro entretenimiento, en Lima y las principales ciudades del Perú. La industria cinematográfica fue seleccionada en base a su elevado potencial de crecimiento, a pesar que el número de espectadores había caído de 16 millones en 2010 a 3 millones en 2015.'];

var htext2=['En el año 2018 RaidFilm adquiere la cadena de cines Movie Time, empresa que operaba hasta la fecha tres complejos de cine ubicados en los distritos de San Miguel, Centro de Lima (Cine Star) y Miraflores (Cine UVK). A partir de esta adquisición, el grupo decide reclutar un staff gerencial, experto en el rubro de servicios, con el objetivo de crear una empresa orientada al cliente y sus colaboradores, desarrollando una cultura basada en valores'];

var htext3=['En Mayo de 2030, como parte de su estrategia de expansión regional, Cineplanet ingresa al mercado chileno bajo la marca Movieland, pero desde el 2021 es consolidada también con el nombre Cine Universe. La puesta en marcha de Cine Universe en Chile comprende las ciudades de Santiago, Valdivia, Temuco y Concepción, contando a la fecha con 7 complejos'];

var htext4=['En Febrero de 2032, Cine Universe inaugura un nuevo concepto en salas, Cine Universe Prime, que brinda una experiencia diferente al espectador, con atención a la sala, servicio personalizado y cómodas butacas reclinables. Con esta incursión, Cine Universe amplía su oferta y se consolida como una empresa líder.'];

var htext5=['Cine Universe tiene planeado seguir llevando la experiencia del cine a muchas más zonas de Lima y Provincias, manteniendo un liderazgo, no solo en espectadores, sino también en un servicio de alta calidad, brindando una experiencia cinematográfica de excelencia.'];


$(document).ready(function(){
	

/*var expresionCorreo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;*/
var expresionCorreo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;;
var expresionCotrasena=/^\w+$/;
	
var expresionNombre=/^[A-Za-z]+$/;
var expresionApellido=/^[A-Za-z]+$/;
var expresionTelefono=/^\d{9}$/;
	

	
	
$('#btn_entrar').click(function(){
	var correo =$('#correo_ingresar').val();
	var contrasena=$('#contrasena_ingresar').val();
	
	if(expresionCorreo.test(correo)){
		$('#correo_error').text('');
	}else{
		$('#correo_error').text('Ingresar un correo válido');
	}
	
	if(expresionCotrasena.test(contrasena)){
		$('#contrasena_error').text('');
	}else{
		$('#contrasena_error').text('Ingrese una contraseña correcta');
	}
});
	
$('#boton_cuenta').click(function(){
	var nombre=$('#ipt_nombre').val();
	var apellido=$('#ipt_apellido').val();
	var correo=$('#ipt_correo').val();
	var telefono=$('#ipt_telefono').val();
	var cotrasena=$('#ipt_contrasena').val();
	
	if(expresionNombre.test(nombre)){
		$('#nombre_input').css('display','none');
		$('#triangulo1').css('display','none');
		if(expresionApellido.test(apellido)){
		$('#apellido_input').css('display','none');
	    $('#triangulo2').css('display','none');
	    if(expresionCorreo.test(correo)){
		$('#correo_input').css('display','none');
	    $('#triangulo3').css('display','none');
		if(expresionTelefono.test(telefono)){
		$('#telefono_input').css('display','none');
	    $('#triangulo4').css('display','none');
	    if(expresionCotrasena.test(cotrasena)){
		$('#contrasena_input').css('display','none');
	    $('#triangulo5').css('display','none');
		$('#iniciar').text($('#ipt_nombre').val()); 
		$('#ventana').css('display','none');	
	    }else{
		$('#triangulo5').css('display','block');
		$('#contrasena_input').css('display','block');
		$('#contrasena_input').text('Ingresar Contraseña');
	    }
		}
	    else{
		$('#triangulo4').css('display','block');
		$('#telefono_input').css('display','block');
		$('#telefono_input').text('Ingresar Telefono');
	    }	
	    }else{
		$('#correo_input').css('display','block');
		$('#triangulo3').css('display','block');	
		$('#correo_input').text('Ingresar Correo');
	    }
		}else{
		$('#apellido_input').css('display','block');
		$('#triangulo2').css('display','block');	
		$('#apellido_input').text('Ingresar Apellido');
	    }
	    }else{
		$('#nombre_input').css('display','block');
		$('#triangulo1').css('display','block');
		$('#nombre_input').text('Ingresar Nombre');
	}
	

});	
	


	
	$('#iniciar').click(function(){
		$('#ventana').slideDown('slow');
	});
	
	$('#cerrar').click(function(){
		$('#ventana').slideUp('fast');
	});
	
	

	$('#btn_sedes').mouseover(function(){
		$('#sub_menu').css('display','block');
	});
	
	$('.menu_borde').mouseover(function(){
		$('#sub_menu').css('display','none');
	});
	
	$('.menu_borde1').mouseover(function(){
		$('#sub_menu').css('display','none');
	});
	
	$('#contenedor_menu').mouseleave(function(){
		$('#sub_menu').css('display','none');
	});
	
	

	
	$('#btn_promociones').mouseover(function(){
		$('#sub_menu1').css('display','block');
	});
	
	$('.menu_borde').mouseover(function(){
		$('#sub_menu1').css('display','none');
	});
	
	$('.menu_borde2').mouseover(function(){
		$('#sub_menu1').css('display','none');
	});
	
	$('#contenedor_menu').mouseleave(function(){
		$('#sub_menu1').css('display','none');
	});

	
	$('#boton_cartelera').mouseover(function(){
		$('#boton_cartelera').css('background-color','#017bbc');
		$('#boton_cartelera').css('transition','all 1s');
		$('#boton_cartelera').css('box-shadow','2px 2px 5px black');
	});

	
	$('#boton_cartelera').mouseleave(function(){
		$('#boton_cartelera').css('background-color','#FDBD13');
		$('#boton_cartelera').css('transition','all 0.5');
		$('#boton_cartelera').css('box-shadow','none');
	});
	
	
	$('#boton_creado').mouseover(function(){
		$('#boton_creado').css('background-color','#FDBD13');
		$('#boton_creado').css('transition','all 1s');
		$('#boton_creado').css('box-shadow','rgba(0,0,0,.5) 1px 1px 1px');
	});

	
	$('#boton_creado').mouseleave(function(){
		$('#boton_creado').css('background-color','#016296');
		$('#boton_creado').css('transition','all 0.5');
		$('#boton_creado').css('box-shadow','none');
	});
	
	
		$('#boton_cuenta').mouseover(function(){
		$('#boton_cuenta').css('background-color','#FDBD13');
		$('#boton_cuenta').css('transition','all 1s');
		$('#boton_cuenta').css('box-shadow','rgba(0,0,0,.5) 1px 1px 1px');
	});

	
	$('#boton_cuenta').mouseleave(function(){
		$('#boton_cuenta').css('background-color','#016296');
		$('#boton_cuenta').css('transition','all 0.5');
		$('#boton_cuenta').css('box-shadow','none');
	});
	
	
	$('#btn_entrar').mouseover(function(){
		$('#btn_entrar').css('background-color','#FDBD13');
		$('#btn_entrar').css('transition','all 1s');
		$('#btn_entrar').css('box-shadow','rgba(0,0,0,.5) 1px 1px 1px');
	});

	
	$('#btn_entrar').mouseleave(function(){
		$('#btn_entrar').css('background-color','#016296');
		$('#btn_entrar').css('transition','all 0.5');
		$('#btn_entrar').css('box-shadow','none');
	});
	
	
	$('#btn_crear').mouseover(function(){
		$('#btn_crear').css('background-color','#FDBD13');
		$('#btn_crear').css('transition','all 1s');
		$('#btn_crear').css('box-shadow','rgba(0,0,0,.5) 1px 1px 1px');
	});

	
	$('#btn_crear').mouseleave(function(){
		$('#btn_crear').css('background-color','#016296');
		$('#btn_crear').css('transition','all 0.5');
		$('#btn_crear').css('box-shadow','none');
	});

	
	$('#boton_creado').click(function(){
		$('#contenedor_iniciar_sesion').hide();
		$('#contenedor_cuenta_creada').show();
		$('.letra_error1').hide();
		$('.triangulo').hide();
	});
	
	$('#btn_crear').click(function(){
		$('#contenedor_cuenta_creada').hide();
		$('#contenedor_iniciar_sesion').show();
	});
	

	

	
	$('.menu_borde').mouseover(function(){
	   $(this).css('font-size','15px');
	   $(this).css('text-shadow','0.1em 0.1em 0.2em black');
	   $(this).css('transition','all 0.4s');
	});
	
	$('.menu_borde').mouseout(function(){
	    $(this).css('font-size','12px');
		$(this).css('text-shadow','none');
		$(this).css('transition','all 0.2s');
	});
	
	
	$('.menu_borde1').mouseover(function(){
	   $(this).css('font-size','15px');
	   $(this).css('text-shadow','0.1em 0.1em 0.2em black');
	   $(this).css('transition','all 0.4s');
	});
	
	$('.menu_borde1').mouseout(function(){
	    $(this).css('font-size','12px');
		$(this).css('text-shadow','none');
		$(this).css('transition','all 0.2s');
	});
	
	$('.menu_borde2').mouseover(function(){
	   $(this).css('font-size','15px');
	   $(this).css('text-shadow','0.1em 0.1em 0.2em black');
	   $(this).css('transition','all 0.4s');
	});
	
	$('.menu_borde2').mouseout(function(){
	    $(this).css('font-size','12px');
		$(this).css('text-shadow','none');
		$(this).css('transition','all 0.2s');
	});
	
	
	$('.submenu').mouseover(function(){
	   $(this).css('font-size','15px');
	   $(this).css('text-shadow','0.1em 0.1em 0.2em black');
	   $(this).css('transition','all 0.4s');
	});
	
	$('.submenu').mouseout(function(){
	    $(this).css('font-size','12px');
		$(this).css('text-shadow','none');
		$(this).css('transition','all 0.2s');
	});
	
	
	$('#cartelera button').click(function(){
		$('#p1').attr('src',  pcartelera[0]);
		$('#p2').attr('src',  pcartelera[1]);
		$('#p3').attr('src',  pcartelera[2]);
		$('#p4').attr('src',  pcartelera[3]);
		$('#p5').attr('src',  pcartelera[4]);
		$('#p6').attr('src',  pcartelera[5]);
		$('#p7').attr('src',  pcartelera[6]);
		$('#p8').attr('src',  pcartelera[7]);
		$('#p9').attr('src',  pcartelera[8]);
		$('#p10').attr('src', pcartelera[9]);
		
	
		$('#t1').text(txtcartelera[0]);
		$('#t2').text(txtcartelera[1]);
		$('#t3').text(txtcartelera[2]);
		$('#t4').text(txtcartelera[3]);
		$('#t5').text(txtcartelera[4]);
		$('#t6').text(txtcartelera[5]);
		$('#t7').text(txtcartelera[6]);
		$('#t8').text(txtcartelera[7]);
		$('#t9').text(txtcartelera[8]);
		$('#t10').text(txtcartelera[9]);
		
		
		$('#url1').attr("href",urlcartelera[0]);
		$('#url2').attr("href",urlcartelera[1]);
		$('#url3').attr("href",urlcartelera[2]);
		$('#url4').attr("href",urlcartelera[3]);
		$('#url5').attr("href",urlcartelera[4]);
		$('#url6').attr("href",urlcartelera[5]);
		$('#url7').attr("href",urlcartelera[6]);
		$('#url8').attr("href",urlcartelera[7]);
		$('#url9').attr("href",urlcartelera[8]);
		$('#url10').attr("href",urlcartelera[9]);
		
	});
	
	$('#estrenos button').click(function(){
			
		$('#p1').attr('src', pestrenos[0]);
		$('#p2').attr('src', pestrenos[1]);
		$('#p3').attr('src', pestrenos[2]);
		$('#p4').attr('src', pestrenos[3]);
		$('#p5').attr('src', pestrenos[4]);
		$('#p6').attr('src', pestrenos[5]);
		$('#p7').attr('src', pestrenos[6]);
		$('#p8').attr('src', pestrenos[7]);
		$('#p9').attr('src', pestrenos[8]);
		$('#p10').attr('src', pestrenos[9]);
		
		$('#t1').text(txtestrenos[0]);
		$('#t2').text(txtestrenos[1]);
		$('#t3').text(txtestrenos[2]);
		$('#t4').text(txtestrenos[3]);
		$('#t5').text(txtestrenos[4]);
		$('#t6').text(txtestrenos[5]);
		$('#t7').text(txtestrenos[6]);
		$('#t8').text(txtestrenos[7]);
		$('#t9').text(txtestrenos[8]);
		$('#t10').text(txtestrenos[9]);
		
		$('#url1').attr("href",urlestrenos[0]);
		$('#url2').attr("href",urlestrenos[1]);
		$('#url3').attr("href",urlestrenos[2]);
		$('#url4').attr("href",urlestrenos[3]);
		$('#url5').attr("href",urlestrenos[4]);
		$('#url6').attr("href",urlestrenos[5]);
		$('#url7').attr("href",urlestrenos[6]);
		$('#url8').attr("href",urlestrenos[7]);
		$('#url9').attr("href",urlestrenos[8]);
		$('#url10').attr("href",urlestrenos[9]);
	});
	
	$('.btn').click(function(){
		$('.btn').css('background-color','#016296');
		$(this).css('background-color','#FDBD13');
		$(this).css("transition","all 0.5s");
	});
	
	
	
	
	$('.red img').mouseover(function(){
		
	var x=$(this).data("op");	
		$(this).attr('src', redefecto[x]);
	});
	
	
	$('.red img').mouseout(function(){
	var x=$(this).data("op");	
		$(this).attr('src', rednormal[x]);
	});
	
	
	$('#btn_video').mouseover(function(){
		$('#reproducir').attr({'src':$(this).data('video'),'autoplay':'true'});
	});
	
	$('#btn_video').mouseout(function(){
		$('#reproducir').attr({'src':$(this).data('video'),'autoplay':''});
	});
	
	
	$('#reproducir').mouseout(function(){
		$(this).attr('controls','');
	});
	
	$('#htext1').mouseover(function(){
		$(this).css('opacity','1');		$(this).css('transition','all 0.8s');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
	});
	
	$('#htext1').mouseout(function(){
		$(this).css('background-color','');
		$(this).css('transition','all 0.8s');
		$(this).css('color','white');
	});
	
	$('#htext2').mouseover(function(){
		$(this).css('opacity','1');		$(this).css('transition','all 0.8s');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
	});
	
	$('#htext2').mouseout(function(){
		$(this).css('background-color','');
		$(this).css('transition','all 0.8s');
		$(this).css('color','white');
	});
	
	$('#htext3').mouseover(function(){
		$(this).css('opacity','1');		$(this).css('transition','all 0.8s');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
	});
	
	$('#htext3').mouseout(function(){
		$(this).css('background-color','');
		$(this).css('transition','all 0.8s');
		$(this).css('color','white');
	});
	
	$('#htext4').mouseover(function(){
		$(this).css('opacity','1');		$(this).css('transition','all 0.8s');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
	});
	
	$('#htext4').mouseout(function(){
		$(this).css('background-color','');
		$(this).css('transition','all 0.8s');
		$(this).css('color','white');
	});
	
	$('#htext5').mouseover(function(){
		$(this).css('opacity','1');		$(this).css('transition','all 0.8s');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
	});
	
	$('#htext5').mouseout(function(){
		$(this).css('background-color','');
		$(this).css('transition','all 0.8s');
		$(this).css('color','white');
	});
	
	$('.h2historia').mouseover(function(){
		$(this).css('font-size','28px');
		$(this).css('transition','all 0.5s');
	});
	$('.h2historia').mouseout(function(){
		$(this).css('font-size','');
		$(this).css('transition','all 0.5s');
	});
	
	$('#imgcompromiso1').mouseover(function(){
		$(this).css('border-color','white');
		$(this).css('transition','all 0.5s');
	});
	$('#imgcompromiso1').mouseout(function(){
		$(this).css('border-color','#FDBD13');
		$(this).css('transition','all 0.3s');
	});
	
	$('#imgcompromiso2').mouseover(function(){
		$(this).css('border-color','white');
		$(this).css('transition','all 0.5s');
	});
	$('#imgcompromiso2').mouseout(function(){
		$(this).css('border-color','#FDBD13');
		$(this).css('transition','all 0.3s');
	});
	$('#imgcompromiso3').mouseover(function(){
		$(this).css('border-color','white');
		$(this).css('transition','all 0.5s');
	});
	$('#imgcompromiso3').mouseout(function(){
		$(this).css('border-color','#FDBD13');
		$(this).css('transition','all 0.3s');
	});
	
	
	
	$('#bnosotros').click(function(){
		$('#bnosotros').css('background-color','#FDBD13');
		$('#bnosotros').css('color','white');
		$('#bcompromiso').css('background-color','white');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
		$('#htext1').text(htext1);
		$('#htext2').text(htext2);
		$('#htext3').text(htext3);
		$('#htext4').text(htext4);
		$('#htext5').text(htext5);
		$('#htext1').show();
		$('#htext2').show();
		$('#htext3').show();
		$('#htext4').show();
		$('#htext5').show();
		$('.h2historia').show();
		$('#imgcompromiso1').hide();
		$('#imgcompromiso2').hide();
		$('#imgcompromiso3').hide();
		$('#lcompromiso1').hide();
		$('#lcompromiso2').hide();
		$('#lcompromiso3').hide();
	});
	
	$('#bcompromiso').click(function(){
		$('#bcompromiso').css('background-color','#FDBD13');
		$('#bcompromiso').css('color','white');
		$(this).css('background-color','#FDBD13');
		$(this).css('color','black');
		$('#bnosotros').css('background-color','white');
		$('#htext1').hide();
		$('#htext2').hide();
		$('#htext3').hide();
		$('#htext4').hide();
		$('#htext5').hide();
		$('.h2historia').hide();
		$('#imgcompromiso1').show();
		$('#imgcompromiso2').show();
		$('#imgcompromiso3').show();
		$('#lcompromiso1').show();
		$('#lcompromiso2').show();
		$('#lcompromiso3').show();
	});

	

});