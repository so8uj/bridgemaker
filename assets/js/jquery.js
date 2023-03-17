window.onscroll = function() {
		
    // Get the navbar
    var main__header = document.querySelector(".header");
    
    if(window.pageYOffset >= 20) {
        main__header.classList.add("fixed_top"); 
    }else{
        main__header.classList.remove("fixed_top");
    }
    
};

$(document).ready(function(){
    $('.open_menu').click(function(){
        $('.mobile_menu').toggleClass('menu-clicked');
        $('.navs').css({'transition':'.3s'});
        $('.navs').toggleClass('menu_open');
    })
    $('.close_menu').click(function(){
        $('.mobile_menu').toggleClass('menu-clicked');
        $('.navs').toggleClass('menu_open');
    })
});