

//parte das checkBox


var registrar;
var buscar;
var apagar;

function carregarCheck(){
registrar = document.getElementById("registrar")
registrar.classList.toggle("selected")

buscar = document.getElementById("buscar")
apagar = document.getElementById("Apagar")
}


function registro(){


    if (!registrar.classList.contains("selected")){

        if(buscar.classList.contains("selected"))buscar.classList.toggle("selected") 
        else if  (apagar.classList.contains("selected"))apagar.classList.toggle("selected") 


 registrar.classList.toggle("selected")
 document.getElementById("iptValor").type = "text"
  document.getElementById("btnPesquisa").innerText = "Registrar valor"
    }



}   





function busca(){

    
if (!buscar.classList.contains("selected")){

 if (registrar.classList.contains("selected")) registrar.classList.toggle("selected")
 else if  (apagar.classList.contains("selected"))apagar.classList.toggle("selected") 



 buscar.classList.toggle("selected")

  document.getElementById("iptValor").type = "month"
   document.getElementById("btnPesquisa").innerText = "Buscar"
    }

}


function apaga(){

    if (!apagar.classList.contains("selected")){

 if (registrar.classList.contains("selected")) registrar.classList.toggle("selected")
 else if(buscar.classList.contains("selected"))buscar.classList.toggle("selected") 



 apagar.classList.toggle("selected")

 document.getElementById("iptValor").type = "date"
 document.getElementById("btnPesquisa").innerText = "Alterar"
    }

}


//Dim das parte das checkBox