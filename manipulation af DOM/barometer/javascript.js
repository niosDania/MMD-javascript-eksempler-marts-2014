//javascript til 

function visVejret() {
   // alert("skifter"); //test at funktionen kaldes
    var millibar;                               //erklæring af variablen "millibar"
    millibar = document.getElementById('millibar').value;    //Tildeling af værdien fra feltet "millibar" til variablen millibar.

    if (millibar < 910){ //Hvis der indtastes en for lav værdi
            //Her kan man overveje at gøre noget for at fortælle at det er uden for rammerne.
            //Vi nøjes med at sætte den til laveste niveau
        millibar = 900;
        
        document.getElementById('ikon').src =  "icon-set/PNG/250x250/t-storm-rain.png";
        document.getElementById('indledning').innerHTML =  "Storm";

    }  
    
    if (millibar >= 930){ 
        document.getElementById('ikon').src =  "icon-set/PNG/250x250/rainy.png";
        document.getElementById('indledning').innerHTML =  "Regn";

    }
    
    if (millibar >= 980){ 
        document.getElementById('ikon').src =  "icon-set/PNG/250x250/fair.png";
        document.getElementById('indledning').innerHTML =  "Skyet";

    }
    
    if (millibar >= 1010){ 
        document.getElementById('ikon').src =  "icon-set/PNG/250x250/partly-cloudy.png";
        document.getElementById('indledning').innerHTML =  "Opholdsvejr";

    }
    
    if (millibar >= 1040){ 
        document.getElementById('ikon').src = "icon-set/PNG/250x250/m-cloudy.png";
        document.getElementById('indledning').innerHTML =  "Let skyet";

    }
    
    if (millibar >= 1080){ 
        document.getElementById('ikon').src =  "icon-set/PNG/250x250/sunny.png";
        document.getElementById('indledning').innerHTML =  "Sol";

    }
        
    document.getElementById('vismillibar').innerHTML =  millibar + "&nbsp;millibar";


  
return false;
}

