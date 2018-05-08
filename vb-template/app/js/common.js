$('#fullpage').fullpage({


    verticalCentered: false,
    css3: true,
    // sectionsColor: ['red', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage',   ],
    menu: '#menu',
    scrollingSpeed: 700,
    navigation: true,
    loopBottom: true,
    navigationPosition: 'right',
    navigationTooltips: ['SIGN UP', 'REFER', 'ABOUT','ABOUT', 'SHOP'],
    responsiveWidth: 768,
    responsiveHeight: 650,
    afterResponsive: function (isResponsive) {
        $('.signUpSection').css({'padding':'150px 0 100px 0'});
        $('.referSection ').css({'padding':'100px 0 100px 0'});
        $('.cupsSection ').css({'padding':'100px 0 200px 0'});
        $('.strapsSection ').css({'padding':'250px 0 250px 0'});
        $('.vibrantBra ').css({'padding':'250px 0 200px 0'});
    },

    'afterLoad': function(anchorLink, index){
        if(index == 2){
            $('.cupsWrap').addClass('active');

        }
        if(index == 3){
            $('.cupsWrapTop').addClass('active');
            $('.cupsWrapBottom').addClass('active');
        }
    },
    'onLeave': function(index){

        $('.cupsImg').removeClass('active');
        $('.cupsWrapTop').removeClass('active');
        $('.cupsWrapBottom').removeClass('active');
        $('.cupsWrap').removeClass('active');


    },

});


$('.hamburger').click(function () {
    $(".hamburger").toggleClass('is-active');
    $(".menu").slideToggle().toggleClass("nav-active");

});


$(".menu").on("click", "a", function (event) {
    var width = $(window).width();
    if(width < 992) {
        $(".hamburger").toggleClass('is-active');
        $(".menu").slideUp();
    }

});