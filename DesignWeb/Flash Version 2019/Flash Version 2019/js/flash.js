//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");

$('#boutonDroite').click(function() {
    $('#flashID').animate({"left":"+=100px"},);
});

$('#boutonGauche').click(function() {
    $('#flashID').animate({"left":"-=100px"},);
});

$('#boutonChangerImage').click(function() {
    if ($('#flashID').attr("src") === "img/Flash1.png")
        $('#flashID').attr("src", "img/Flash2.png");
    else if ($('#flashID').attr("src") === "img/Flash2.png")
             $('#flashID').attr("src", "img/Flash1.png");
});

$('#boutonEnleverImage').click(function() {
    $('#flashID').toggle();
});

$('#boutonAjouterImage').click(function() {

});

$('#boutonAjouterAttribut').click(function() {
    $('#flashID').attr("width","500");
});

$('#boutonAjouterTitre').click(function() {

});

$('#boutonDupliquer').click(function () {

});

$('#boutonRalentir').click(function () {

});

$('#boutonTeleport').click(function () {

});

$('#boutonVitesseSupreme').click(function () {

});

$('#boutonFinVitesseSupreme').click(function () {

});

$('#boutonNuke').click(function () {

});

$('#boutonPerso1').click(function () {

});

$('#boutonPerso2').click(function () {

});