window.onscroll = function() {
		
    // Get the navbar
    var main_header = document.querySelector(".main-header");
    var animation_line = document.querySelector(".animation-line");
    
    if(window.pageYOffset >= 550) {

        animation_line.classList.remove("second-animation"); 
        main_header.classList.add("fixed-top"); 
        animation_line.classList.add("third-animation"); 

    }else if(window.pageYOffset >= 100){
        main_header.classList.remove("fixed-top"); 
        animation_line.classList.add("second-animation"); 
        animation_line.classList.remove("third-animation"); 

    }else{
        main_header.classList.remove("fixed-top"); 
        animation_line.classList.remove("second-animation");
    }
    
};

// $(document).ready(function(){
//     $('.open_menu').click(function(){
//         $('.mobile_menu').toggleClass('menu-clicked');
//         $('.navs').css({'transition':'.3s'});
//         $('.navs').toggleClass('menu_open');
//     })
//     $('.close_menu').click(function(){
//         $('.mobile_menu').toggleClass('menu-clicked');
//         $('.navs').toggleClass('menu_open');
//     })
// });