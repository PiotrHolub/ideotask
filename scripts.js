$( document ).ready(function() {
      $("#searchspan").click(function(){
        $("#searchinput").toggle(500);
      });

      $(".newarray").click(function(){
        $("#sidebar").toggle(500);
        if($("#newarray").hasClass("norotate")){
            $(this).addClass("rotate270");
            $(this).removeClass("norotate");
            }
            else{
                $(this).removeClass("rotate270");
                $(this).addClass("norotate");
        } 
      });
});