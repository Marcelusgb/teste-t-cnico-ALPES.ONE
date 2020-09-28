var loadImages;
 
$(document).ready(function(){
    $(".lazy-img img").on("load", function(){
        $(this).addClass("loaded");
    });
    $(".lazy-img2 img").on("load", function(){
        $(this).addClass("loaded");
    });
 
    $(document).on("scroll",function(){
        loadImages();
    });
 
    (loadImages = function loadImages(){
        $.each($(".lazy-img"), function(){
            var block = $(this);
            var image = block.find("img");
 
            if(isOnScreen(block)){
                var url = image.data("url");
 
                if(image.attr("src") != url){
                    image.attr("src",url);
                };
            }
        });
        $.each($(".lazy-img2"), function(){
            var block = $(this);
            var image = block.find("img");
 
            if(isOnScreen(block)){
                var url = image.data("url");
 
                if(image.attr("src") != url){
                    image.attr("src",url);
                };
            }
        });
    })();
});