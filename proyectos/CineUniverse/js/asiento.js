// JavaScript Document




/*for(i=0;i<=30;i++){
	document.getElementById('fila1').document.write(i);
}*/

var asiento_amarillo='../img/asiento_selecionado.png';
var asiento_azul='../img/asiento.png';


	
var cantidad3erEdad= 0;
var boleto3eraEdad=0;

var cantidadnino= 0;
var boletonino=0; 


var cantidadadulto= 0;
var boletoadulto=0; 


var sumadeboleto;	
var limite;


function aparecer(){
	if(cantidad3erEdad >0 || boletonino >0 || boletoadulto >0){
		document.getElementById('caja_elegir_asiento').style.opacity="1";
		document.getElementById('caja_elegir_asiento').style.transition="all 3s";
	}
}

function ocultar(){
	if(cantidad3erEdad == 0 &&  boletonino == 0 && boletoadulto == 0){
	    document.getElementById('caja_elegir_asiento').style.opacity="0";
		document.getElementById('caja_elegir_asiento').style.transition="all 0.5s";
	}
}



$(document).ready(function(){

	
for (var i=1;i<=30;i++){
			 $('#fila1').html($('#fila1').html()+'<div class="asientos">'+
							  '<img class="img_asiento" src="../img/asiento.png" alt="" data-op='+i+'>'+
							  '<p   class="numero_asiento1">'+[i]+'</p>'+
							  '</div>');
		 }
	

for (var i=31;i<=150;i++){
			 $('#fila2').html($('#fila2').html()+'<div class="asientos">'+
							  '<img class="img_asiento" src="../img/asiento.png" alt="" data-op='+i+'>'+
							  '<p   class="numero_asiento">'+[i]+'</p>'+
							  '</div>');
		 }	


$('#caja_elegir_asiento').click(function(){
	sumadeboleto=parseInt(cantidad3erEdad+cantidadnino+cantidadadulto);
	$('#contenedor_cantidad_boleto').hide();
	$('#contenedor_escoger_asiento').show();
    $('#elegir_posicion_asiento').text('Elige tus '+sumadeboleto+' asientos');
	$('#subtema_entrada').children('img').attr('src','../img/entrada1.png');
	$('#subtema_entrada p').css('color','#d8d8d8');
	$('#subtema_asiento').children('img').attr('src','../img/asiento1.png');
	$('#subtema_asiento p').css('color','#016296');
});	
	

$('#caja_elegir_asiento').mouseover(function(){
	$('#caja_elegir_asiento').css('background-color','#FDBD13');
	$('#caja_elegir_asiento').css('transition','0.5s');
	});	
	
$('#caja_elegir_asiento').mouseout(function(){
	$('#caja_elegir_asiento').css('background-color','#016296');
	});	
	
$('#regresar').click(function(){
	$('#contenedor_cantidad_boleto').show();
	$('#contenedor_escoger_asiento').hide();
	$('.img_asiento').attr('src', asiento_azul);
	$('#subtema_entrada').children('img').attr('src','../img/entrada.png');
	$('#subtema_entrada p').css('color','#016296');
    $('#subtema_asiento').children('img').attr('src','../img/asiento2.png');
	$('#subtema_asiento p').css('color','#d8d8d8');
});	
	

	
$('.asientos').toggle(function () {
	    limite=parseInt(cantidad3erEdad+cantidadnino+cantidadadulto);
	    sumadeboleto-=1;
		$(this).children('.img_asiento').attr('src', asiento_amarillo);
	    $('#elegir_posicion_asiento').text('Elige tus '+sumadeboleto+' asientos');
		if(sumadeboleto<0){ sumadeboleto=0;
		$(this).children('.img_asiento').attr('src', asiento_azul);
	    $('#elegir_posicion_asiento').text('Elige tus '+sumadeboleto+' asientos');
		$('#asientos_completos').slideDown('slow');
		}
	    if(sumadeboleto === 0){
		$('#pagar').css('visibility','visible');
	    }
		}, function () {
		
	    sumadeboleto+=1;
		$(this).children('.img_asiento').attr('src', asiento_azul);
		$('#elegir_posicion_asiento').text('Elige tus '+sumadeboleto+' asientos');
		if(sumadeboleto>limite){sumadeboleto=limite;
		$(this).children('.img_asiento').attr('src', asiento_azul);
	    $('#elegir_posicion_asiento').text('Elige tus '+sumadeboleto+' asientos');					   
		 }
		if(sumadeboleto !== 0){
		$('#pagar').css('visibility','hidden');
	    }
		
		
		
    });

	
$('#aceptar_butacas').click(function(){
	sumadeboleto=-1;
	$('#asientos_completos').slideUp('fast');
});

/*	
$('.asientos').click(function(){
    
	$(this).children('.img_asiento').attr('src',asiento_amarillo);

});	*/
	
	
	
$('#pagar').click(function(){
	$('#contenedor_escoger_asiento').hide();
	$('#contenedor_pagar').show();
	$('#subtema_pagar').children('img').attr('src','../img/pago.png');
	$('#subtema_pagar p').css('color','#016296');
	$('#subtema_asiento').children('img').attr('src','../img/asiento2.png');
	$('#subtema_asiento p').css('color','#d8d8d8');
});	
	
$('#btn_regresar_pago').click(function(){
	$('#contenedor_pagar').hide();
	$('#contenedor_escoger_asiento').show();
	$('#subtema_asiento').children('img').attr('src','../img/asiento1.png');
	$('#subtema_asiento p').css('color','#016296');
	$('#subtema_pagar').children('img').attr('src','../img/pago1.png');
	$('#subtema_pagar p').css('color','#d8d8d8');
});	

	
$('#btn_enviar_pago').click(function(){
	$('#contenedor_pagar').hide();
	$('#contenedor_enviar').show();
	$('#subtema_revisar').children('img').attr('src','../img/recibir.png');
	$('#subtema_revisar p').css('color','#016296');
	$('#subtema_pagar').children('img').attr('src','../img/pago1.png');
	$('#subtema_pagar p').css('color','#d8d8d8');
});		
	
	
$("#3erEdad_mas").click(function(){
    cantidad3erEdad += 1;
	boleto3eraEdad+=14.00;
	if(cantidad3erEdad>10) {cantidad3erEdad=10;boleto3eraEdad=140.00;}
    $("#cant_3erEdad").text(cantidad3erEdad);
	$("#total_3erEdad").text('S/.'+boleto3eraEdad+'.00');
	aparecer();
});
$("#3erEdad_menos").click(function(){
	sumadeboleto=parseInt(boleto3eraEdad-boletonino-boletoadulto);
    cantidad3erEdad -= 1;
	boleto3eraEdad-=14.00;
	if(cantidad3erEdad<0) {cantidad3erEdad=0;}
    $("#cant_3erEdad").text(cantidad3erEdad);
	if(boleto3eraEdad<0)  {boleto3eraEdad=0;}
	$("#total_3erEdad").text('S/.'+boleto3eraEdad+'.00');
	ocultar();
});
	
	
	
	

$("#niños_mas").click(function(){
    cantidadnino += 1;
	boletonino+=10.00;
	if(cantidadnino>10){cantidadnino=10;boletonino=100.00;}
    $("#cant_niños").text(cantidadnino);
    $("#total_niños").text('S/.'+boletonino+'.00');
	aparecer();
});
$("#niños_menos").click(function(){
    cantidadnino -= 1;
	boletonino-=10.00;
	if(cantidadnino<0) {cantidadnino=0;}
    $("#cant_niños").text(cantidadnino);
	if(boletonino<0) {boletonino=0;}
	$("#total_niños").text('S/.'+boletonino+'.00');
	ocultar();
});	
	
	
	

$("#adulto_mas").click(function(){
    cantidadadulto += 1;
	boletoadulto+=16.00;
	if(cantidadadulto>10){ cantidadadulto=10;boletoadulto=160.00;}
    $("#cant_adulto").text(cantidadadulto);
	$("#total_adulto").text('S/.'+boletoadulto+'.00');
	aparecer();
});
$("#adulto_menos").click(function(){
    cantidadadulto -= 1;
	boletoadulto -=16;
	if(cantidadadulto<0) {cantidadadulto=0;}
    $("#cant_adulto").text(cantidadadulto);
    if(boletoadulto<0) {boletoadulto=0;}
	$("#total_adulto").text('S/.'+boletoadulto+'.00');
	ocultar();
});	
	
	
$('.caja_mas').click(function(){
  sumadeboleto=parseInt(boleto3eraEdad+boletonino+boletoadulto);
  $('#sumatotal').text('S/.'+sumadeboleto+'.00');	
});
	

$('.caja_mas').mouseover(function(){
	$(this).children('img').attr('src','../img/suma2.png');
	$(this).css('background-color','#016296');
	$(this).css('transition','all 0.5s');

});	
	
$('.caja_mas').mouseleave(function(){
	$(this).children('img').attr('src','../img/suma.png');
	$(this).css('background-color','white');
	$(this).css('transition','all 0.5s');
});	
	
$('.caja_menos').click(function(){
  sumadeboleto=parseInt(boleto3eraEdad+boletonino+boletoadulto);
  $('#sumatotal').text('S/.'+sumadeboleto+'.00');	
});	
	
	
	
	
	
	
	
});