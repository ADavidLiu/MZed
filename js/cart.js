$(document).ready(function () {
    
    var $proArrow = $(".cart__pro-arrow");
    var $content = $(".cart__pro-content");
    
    $proArrow.click(function () {
        $proArrow.toggleClass("cart__pro-arrow--active");
        $content.slideToggle("fast");
    });
    
});