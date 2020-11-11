// <!-- tooltip -->
// $(document).ready(function () {
//     $('[data-toogle="tooltip"]').tooltip();
// });


// $(document).ready(function () {
//     $('#mycarousel').carousel({ interval: 2000 });
//     $('#carousel-pause').click(function () {
//         $('#mycarousel').carousel('pause');
//     });

//     $('#carousel-play').click(function () {
//         $('#mycarousel').carousel('cycle');
//     });

// });



$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });

    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    // Login Modal jQuery
    $("#loginModalButton").click(function () {
        $("#loginModal").modal();
    });

    $("#crossButtonLog").click(function () {
        $("#loginModal").modal('hide');
    });

    // Reserve Modal
    $("#reserveModalButton").click(function () {
        $("#reserveModal").modal();
    });

    $("#crossButtonRes").click(function () {
        $("#resModal").modal('hide');
    });

});