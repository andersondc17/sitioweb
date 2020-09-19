$(document).ready(function(){
   
  


    $(window).scroll(function(event) {
        var pantalla = screen.width;
        var scroll = $(window).scrollTop();

     
         
        if(pantalla > 800){

        if(scroll!=0){
            $('nav').css({
                'background-color': 'rgba(50, 71, 92,.9)',
                'border-bottom':'1px solid rgba(0,0,0,0.1)',
                'box-shadow': '2px 2px 10px rgba(0, 0, 0, 0.1)'
            });
        }else{
            $('nav').css({
                'background-color': 'unset',
                'border-bottom':'none',
                'box-shadow': 'unset'
            });
        }

    }

    });


   var estadoMenu = 0;



$('.icono-menu').click(function(){

      if(estadoMenu == 0){
        $('.caja-menu-lista').css('left','0px');
        $(this).addClass('fa-times');
        $(this).removeClass('fa-bars');
        estadoMenu = 1;
      }else{
        $('.caja-menu-lista').css('left','-600px');
        $(this).addClass('fa-bars');
        $(this).removeClass('fa-times');
        estadoMenu = 0;
      }


 });



 /*$('#li-proyectos').click(function(){
       alert();

        $("#li-proyectos").animate({ scrollTop: $('.portafolio')[0].scrollHeight}, 1000);
 });*/




 $("#li-proyectos").click(function() {
    $('html, body').animate({
    scrollTop: $(".portafolio").offset().top
    }, 1000);
   });

});