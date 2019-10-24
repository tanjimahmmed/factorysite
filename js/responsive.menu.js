(function(){
    'use script';
    $(document).ready(function(){
        $(".menu-toggle").on('click', function(){
            $(".menu-toggle").children('span').fadeToggle();
            $("main_menu").slideToggle();
        });
    });
});