//board appears upon opening

$(document).ready(function () {

    $('#start_button').click(function () {

        $('#char1').addClass('animated fadeInDownBig');
        $('#char1').removeClass('hide_me');
        $('#char2').addClass('animated fadeInRightBig');
        $('#char2').removeClass('hide_me');
        $('#char3').addClass('animated fadeInDownBig');
        $('#char3').removeClass('hide_me');
        $('#char4').addClass('animated fadeInUpBig');
        $('#char4').removeClass('hide_me');
        $('#char5').addClass('animated fadeInUpBig');
        $('#char5').removeClass('hide_me');
        $('#char6').addClass('animated fadeInUpBig');
        $('#char6').removeClass('hide_me');
        $('#char7').addClass('animated fadeInUpBig');
        $('#char7').removeClass('hide_me');
        $('#char8').addClass('animated fadeInUpBig');
        $('#char8').removeClass('hide_me');

    });
});









//REPEATING ANIMATION FROM CLASS
$(document).ready(function () {

    var animatedName = 'animated shake';

    var animatedEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.my_button').click(function () {

        $('.my_shake').addClass(animatedName).one(animatedEnd, function () {

            $(this).removeClass(animatedName);
        });

    });

});




//scroll flip characters //

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 320) {

            $('.flip_me').addClass('animated flip');

        }
        console.log(verticalScroll);

    });








