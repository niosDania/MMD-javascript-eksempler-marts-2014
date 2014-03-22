

function beregn() {
    var belob = document.momsform.belob.value;
    //en kommentar

    if (belob == "" || belob.length <= 2){
        alert("Det er sket en fejl! Gæt selv..");
        document.momsform.belob.focus();
        return false;
    }
    var moms = belob * 0.2;
    var bum = belob - moms;
    
    document.getElementById('moms').innerHTML = moms;
    document.getElementById('bum').innerHTML = bum; 
   
    return false;
}

