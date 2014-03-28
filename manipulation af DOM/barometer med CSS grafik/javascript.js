//javascript til barometer
//Anvender Canvas-elementet til at vise værdien grafisk


function sletSkala(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 0.70 * Math.PI;
    var endAngle = 2.30 * Math.PI;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 17;

    // line color
    context.strokeStyle = 'red';
    context.stroke();
}

function tegnSkala(skalafarven){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 0.75 * Math.PI;
    var endAngle = 2.25 * Math.PI;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 10;

    // line color
    context.strokeStyle = skalafarven;
    context.stroke();
}

function tegnViser(millibar){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = (((millibar-900)*0.008333333)+0.70) * Math.PI;
    var endAngle = (((millibar-900)*0.008333333)+0.80) * Math.PI;
    var counterClockwise = false;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 15;

    // line color
    context.strokeStyle = 'yellow';
    context.stroke();
}


function opdater(farve, millibar, tekst){
    sletSkala();
    tegnSkala(farve);
    tegnViser(millibar);
    
}

function visVejret() {
   // alert("skifter"); //test at funktionen kaldes
    var millibar;                               //erklæring af variablen "millibar"
    millibar = document.getElementById("millibar").value;    //Tildeling af værdien fra feltet "millibar" til variablen millibar.

    if (millibar < 910){ //Hvis der indtastes en for lav værdi
            //Her kan man overveje at gøre noget for at fortælle at det er uden for rammerne.
            //Vi nøjes med at sætte den til laveste niveau
        opdater("lightblue", millibar, "Storm");
    }  
    
    if (millibar >= 930){ 
        opdater("darkblue", millibar, "regn");
    }
    
    if (millibar >= 980){ 
        opdater("grey", millibar, "Skyet");
    }
    
    if (millibar >= 1010){ 
        opdater("lightgrey", millibar, "Opholdsvejr");
    }
    
    if (millibar >= 1040){ 
        opdater("darkred", millibar, "Let skyet");
    }
    
    if (millibar >= 1080){ 
        opdater("orange", millibar, "Sol");
    }
        
    document.getElementById('vismillibar').innerHTML =  millibar + "&nbsp;millibar";

return false;
}

