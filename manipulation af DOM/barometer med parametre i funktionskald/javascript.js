//javascript til barometer

function opdater(ikon, tekst){
    document.getElementById('ikon').src =  "icon-set/PNG/250x250/"+ ikon +".png";
    document.getElementById('indledning').innerHTML =  tekst;
}

function visVejret() {
   // alert("skifter"); //test at funktionen kaldes
    var millibar;                               //erklæring af variablen "millibar"
    millibar = document.getElementById('millibar').value;    //Tildeling af værdien fra feltet "millibar" til variablen millibar.

    if (millibar < 910){ 
        millibar = 900;
        opdater("t-storm-rain", "Storm");
    }  
    
    if (millibar >= 930){ 
        opdater("rainy", "regn");
    }
    
    if (millibar >= 980){ 
        opdater("fair", "Skyet");
    }
    
    if (millibar >= 1010){ 
        opdater("partly-cloudy", "Opholdsvejr");
    }
    
    if (millibar >= 1040){ 
        opdater("m-cloudy", "Let skyet");
    }
    
    if (millibar >= 1080){ 
        opdater("sunny", "Sol");
    }
        
    document.getElementById('vismillibar').innerHTML =  millibar + "&nbsp;millibar";

return false;
}

