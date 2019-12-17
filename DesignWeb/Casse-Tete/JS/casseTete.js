var tabImages = [false, false, false, false, false, false, false, false, false];

var case1Termine = false;

while ('.case1Termine'){
    var nbAleatoire = Math.floor((Math.random()*8)+1);
    if(tabImages[nbAleatoire] === False) {
        tabImages[nbAleatoire]=true;
        $('#image1').attr("src", nbAleatoire+"jpg");
    }

}