$(document).ready(function(){

    // $(window).on('scroll',function(){

    //     var section1 = $('.desktop.section1').offset().top;
    //     var section7 = $('.desktop.section7').offset().top;
    //     var scroll = $(this).scrollTop();

    //     if ( scroll >= section1 - 350 ) {
    //         $('.desktop.section1 .chat > div').addClass('open');
    //     }

    //     if ( scroll >= section7 - 350 ) {
    //         $('.desktop.section7 .chat > div').addClass('open');
    //     }
    // });

    $(window).on('scroll',function(){

        var section1 = $('.mobile.section1').offset().top;
        var section12 = $('.mobile.section12').offset().top;

        var scroll = $(this).scrollTop();

        if ( scroll >= section1 - 350 ) {
            $('.mobile.section1 .chat1 > div > div').addClass('open');
        }

        if ( scroll >= section12 - 350 ) {
            $('.mobile.section12 .chat1 > div > div').addClass('open');
        }
    });
});