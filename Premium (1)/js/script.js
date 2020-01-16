$ (document).ready(function (){
    $ ('.main-slider').slick({
        // setting-name: setting-value
dots: true
    });

    $ ('.main-slider2').slick({
        // setting-name: setting-value
slidesToShow: 3,
slidesToScroll:1
    });
    
    $('.button').click(function(){  
        $('.list').fadeToggle(500); 
    });
});