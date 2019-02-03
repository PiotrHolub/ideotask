$( document ).ready(function() {
      $("#searchspan").click(function(){
        $("#searchinput").toggle(500);
      });

      $(".newarray").click(function(){
        
        if($("#newarray").hasClass("norotate")){
            $("#sidebar").animate({left: '-250px'});
            $(this).addClass("rotate180");
            $(this).removeClass("norotate");
            $(this).animate({left: '30px'});
            }
            else{
                $("#sidebar").animate({left: '0px'});
                $(this).removeClass("rotate180");
                $(this).addClass("norotate");
                $(this).animate({left: '130px'});
        } 
      });
});