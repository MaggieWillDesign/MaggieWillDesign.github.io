$(document).ready(function () {
    $('.arrow').click(function () {

        // Toggle the .icon-rotated class on the clicked Ionicon
        $(this).find('.arrow-icon').toggleClass('icon-rotated');

        // Toggle the wrapper margin
        // $(this).find('.icon-wrapper').toggleClass('icon-rotated');

        $(".accordion__body").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);

        $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
        $(this).closest(".accordion__item").toggleClass("open-accordion");
    });

});


