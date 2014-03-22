

function visfejl(nielsfejltekst) {
   /// alert("test");
    document.getElementById('fejlfelt').style.visibility = "visible";
    document.getElementById('fejltekst').innerHTML = nielsfejltekst;  
}

function validate() {
//    alert("validerer");
    

   
    if (document.tilmelding.fornavn.value == ""){
        visfejl('Fornavn skal udfyldes!');
        document.tilmelding.fornavn.focus();
        return false;
    }
    
    if (document.tilmelding.efternavn.value == ""){
        visfejl('Efternavn skal udfyldes!');
        document.tilmelding.efternavn.focus() ;
        return false;
    } 
    
    if (document.tilmelding.gade.value == ""){
        visfejl('Gade/vej skal udfyldes!');
        document.tilmelding.gade.focus() ;
        return false;
    }
    
    if (document.tilmelding.postnr.value == ""){
        visfejl('Postnummer skal udfyldes!');
        document.tilmelding.postnr.focus() ;
        return false;
    }
    
    
    if (document.tilmelding.by.value == ""){
        visfejl('By skal udfyldes!');
        document.tilmelding.by.focus() ;
        return false;
    }
    
    if (document.tilmelding.telefon.value == ""){
        visfejl('Telefonnr skal udfyldes!');
        document.tilmelding.telefon.focus() ;
        return false;
    }
    
    var tlf = document.tilmelding.telefon.value;
    
    if (tlf > 99999999 || tlf < 10000000){
        visfejl('Telefonnr er ikke korrekt!');
        document.tilmelding.telefon.focus() ;
        return false;
    }
    

    
  
    
    

    skjulfejl();
    document.getElementById('succesfelt').style.visibility = "visible";
    document.getElementById('tilmelding').style.visibility = "hidden";

    return false;

    
    
    
}

function skjulfejl() {
    document.getElementById('fejlfelt').style.visibility = "hidden";
}