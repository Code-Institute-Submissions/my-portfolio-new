// Scroll Animation

$('.navbar a, .home-title a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})



// Collapse Navbar

$(function() {
    $(".toggle").on("click", function(e) {
        if ($(".menu-item").hasClass("active")) {
            e.preventDefault();
            $(".menu-item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            e.preventDefault();
            $(".menu-item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});
