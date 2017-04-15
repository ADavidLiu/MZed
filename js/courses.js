$(document).ready(function () {

    var $header = $(".sidebar__filter-header");

    $header.click(function () {
        var $selected = $(this).parents(".sidebar__filter");
        var $content = $selected.find(".sidebar__filter-content");
        var $arrow = $(this).find(".sidebar__filter-icon");
        $arrow.toggleClass("sidebar__filter-icon--rotated");
        $content.slideToggle("fast");
    });

    var $item = $(".sidebar__filter-item");

    $item.click(function () {
        var $selected = $(this);
        var $check = $selected.find(".sidebar__filter-item-check");
        if ($selected.hasClass("sidebar__filter-item--alt")) {
            if ($check.hasClass("fa-circle-o")) {
                $check.removeClass("fa-circle-o");
                $check.addClass("fa-check-circle-o");
            } else {
                $check.removeClass("fa-check-circle-o");
                $check.addClass("fa-circle-o");
            }
        } else {
            if ($check.hasClass("fa-square-o")) {
                $check.removeClass("fa-square-o");
                $check.addClass("fa-check-square-o");
            } else {
                $check.removeClass("fa-check-square-o");
                $check.addClass("fa-square-o");
            }
        }
    });

});
