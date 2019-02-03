$( document ).ready(function() {
      $("#search > span").click(function(){
        $("#search > input").toggle(500);
      });

      $(".newarray").click(function(){
        $("#leftmenu").toggle(500);
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