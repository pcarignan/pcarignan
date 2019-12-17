$('#boutonChangerImage').click(function() {
    if ($('#AllMight').attr("src") === "img/AllMight2.png")
        $('#AllMight').attr("src", "img/AllMight3.png");
    else if ($('#AllMight').attr("src") === "img/AllMight2.png")
            $('#AllMight').attr("src", "img/AllMight3.png");
});

$('#boutonChangerImage2').click(function() {
    if ($('#AllMight').attr("src") === "img/AllMight3.png")
        $('#AllMight').attr("src", "img/AllMight2.png");
    else if ($('#AllMight').attr("src") === "img/AllMight3.png")
        $('#AllMight').attr("src", "img/AllMight2.png");
});
