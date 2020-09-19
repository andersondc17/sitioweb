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


$(document).ready(function(){
	

/*var expresionCorreo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;*/
var expresionCorreo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;;
var expresionCotrasena=/^\w+$/;
	
var expresionNombre=/^[A-Za-z]+$/;
var expresionApellido=/^[A-Za-z]+$/;
var expresionTelefono=/^\d{9}$/;
	
var slider = $('#banner');
var siguiente = $('.btn_next');
var anterior = $('.btn_prev');
	
	
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
	    }else{
		$('#triangulo5').css('display','block');
		$('#contrasena_input').css('display','block');
		$('#contrasena_input').text('Ingresar Correo');
	    }
		}
	    else{
		$('#triangulo4').css('display','block');
		$('#telefono_input').css('display','block');
		$('#telefono_input').text('Ingresar Correo');
	    }	
	    }else{
		$('#triangulo3').css('display','block');
		$('#correo_input').css('display','block');
		$('#correo_input').text('Ingresar Correo');
	    }
		}else{
		$('#triangulo2').css('display','block');
		$('#apellido_input').css('display','block');
		$('#apellido_input').text('Ingresar Apellido');
	    }
	    }else{
		$('#nombre_input').css('display','block');
		$('#triangulo1').css('display','block');
		$('#nombre_input').text('Ingresar Nombre');
	}
	

});	
	

$('#banner .caja_slider:last').insertBefore('#banner .caja_slider:first');
slider.css('margin-left', '-'+100+'%');	
	
function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#banner .caja_slider:first').insertAfter('#banner .caja_slider:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#banner .caja_slider:last').insertBefore('#banner .caja_slider:first');
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
	
	$('#iniciar').click(function(){
		$('#ventana').slideDown('slow');
	});
	
	$('#cerrar').click(function(){
		$('#ventana').slideUp('fast');
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
	

	
	$('.menu_borde').click(function(){
		
	});
	
	$('.menu_borde').mouseover(function(){
	   $(this).css('font-size','15px');
	   $(this).css('text-shadow','0.1em 0.1em 0.2em black');
	   $(this).css('transition','all 0.5s');
	});
	
	$('.menu_borde').mouseout(function(){
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
	
	

	

});