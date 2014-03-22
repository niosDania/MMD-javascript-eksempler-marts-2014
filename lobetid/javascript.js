

function beregn() {
    //alert("Hello World");
  var distance;
  distance = document.beregner.distance.value;
  var minutter = document.beregner.minutter.value;
  var sekunder = document.beregner.sekunder.value;

  distance = distance/1000;

  var hours = (minutter/60) + (sekunder/3600);
  var hastighed = distance/hours;
 // var tempo = 
    
  document.getElementById('hastighed').innerHTML = "&nbsp;" + hastighed + " km/t"; 
  document.getElementById('tempo').innerHTML = "&nbsp;" + (hours*60)/distance + " min/km"; 
  
    
   // alert("Hastigheden du har beregnet er: " + hastighed + " km/t");
    
return false;
}

