function Szamol(){
    let ertekAtvitel = parseFloat(document.getElementById("atviteli_csuszka").value);
    let ertekKapacitas = parseFloat(document.getElementById("kapacitas_").value);
    let atviteli_opcio = document.getElementById("atviteli_lista").value;
    let kapacitasLista = document.getElementById("kapacitas_lista").value;

    if(document.getElementById("kapacitas_lista").value[0] == document.getElementById("atviteli_lista").value[0]){
        document.getElementById("Osszeg").innerHTML = ertekKapacitas / ertekAtvitel;
    }
    else{
        if(document.getElementById("kapacitas_lista").value == "KB"){
            if(atviteli_opcio == "MBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel * 1000) ;
            }
            if(atviteli_opcio == "GBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel * 1000000);
            }
            if(atviteli_opcio == "TBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel * 1000000000);
            }
        }

        if(document.getElementById("kapacitas_lista").value == "MB"){
            if(atviteli_opcio == "KBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel / 1000) ;
            }
            if(atviteli_opcio == "GBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel * 1000) ;
            }
            if(atviteli_opcio == "TBps"){
                document.getElementById("Osszeg").innerHTML =ertekKapacitas / (ertekAtvitel * 1000000);
            }
        }

        if(document.getElementById("kapacitas_lista").value == "GB"){
            if(atviteli_opcio == "KBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel / 1000000);
            }
            if(atviteli_opcio == "MBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel /  1000);
            }
            if(atviteli_opcio == "TBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel * 1000) ;
            }
        }

        if(document.getElementById("kapacitas_lista").value == "TB"){
            if(atviteli_opcio == "KBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas /  (ertekAtvitel * 1000000000);
            }
            if(atviteli_opcio == "TBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel / 1000000);
            }
            if(atviteli_opcio == "GBps"){
                document.getElementById("Osszeg").innerHTML = ertekKapacitas / (ertekAtvitel / 1000);
            }
        }
        
    }
    //nem a legszebb :(
    
}

