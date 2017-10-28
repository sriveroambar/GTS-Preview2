$(document).ready(function () {
    console.log("ready!");
    var windowWidth = $(window).width();
    var navBarTop = $("#navcon").height();
    $(".navBotton").on("click", function () {
        var idSelected = $(this).attr("id");
        console.log("id selected: " + idSelected);
        var sectionFromId = idSelected.slice(-1);
        $('#dropDownMenu' + sectionFromId).addClass('animated fadeIn');
        if (windowWidth >= 768) {
            console.log("le has dado click a wha we are");
            console.log("seccion a: " + sectionFromId);
            $('html,body').animate({
                scrollTop: $("#section" + sectionFromId).offset().top - navBarTop},
                    'slow');
        }


    });

    addClassToNavBar(windowWidth);

    $(window).resize(function () {
        console.log("rezise the window!");
        windowWidth = $(window).width();
        addClassToNavBar(windowWidth);
    });

    function addClassToNavBar(windowWidth) {
        navBarTop = $("#navcon").height();
        console.log("alcontenttop " + navBarTop);
        $("#all-content").css("margin-top", navBarTop + "px");
        if (windowWidth < 768) {
            console.log("window en modo responsive!");
            $("#navSec1, #navSec2, #navSec3").addClass("col-xs-4");
            $(".navBotton").on("click", function () {
                console.log("le has dado click a wha we are");
                var idSelected = $(this).attr("id");
                console.log("id selected: " + idSelected);
                var sectionFromId = idSelected.slice(-1);
                console.log("seccion a: " + sectionFromId);
                $('html,body').animate({
                    scrollTop: $("#section" + sectionFromId).offset().top - navBarTop},
                        'slow');

            });
        } else {
            $("#navSec1, #navSec2, #navSec3").removeClass("col-xs-4");
        }
    }

    $("#myCarousel3").carousel({
        interval: false
    });
       
 
});


