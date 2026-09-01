

//parte das checkBox


var registrar;
var buscarBotao;
var apagar;

function carregarCheck(){
registrar = document.getElementById("registrar")
registrar.classList.toggle("selectedBoxVendas")

buscarBotao = document.getElementById("buscar")
apagar = document.getElementById("Apagar")
}


function registro(){


    if (!registrar.classList.contains("selectedBoxVendas")){

        if(buscarBotao.classList.contains("selectedBoxVendas"))buscarBotao.classList.toggle("selectedBoxVendas") 
        else if  (apagar.classList.contains("selectedBoxVendas"))apagar.classList.toggle("selectedBoxVendas") 


 registrar.classList.toggle("selectedBoxVendas")
 document.getElementById("iptValor").type = "text"
  document.getElementById("btnPesquisa").innerText = "Registrar valor"
  document.getElementById("btnPesquisa").setAttribute("onclick","salvar()")
    }



}   





function busca(){

    
if (!buscarBotao.classList.contains("selectedBoxVendas")){

 if (registrar.classList.contains("selectedBoxVendas")) registrar.classList.toggle("selectedBoxVendas")
 else if  (apagar.classList.contains("selectedBoxVendas"))apagar.classList.toggle("selectedBoxVendas") 



 buscarBotao.classList.toggle("selectedBoxVendas")

  document.getElementById("iptValor").type = "month"
   document.getElementById("btnPesquisa").innerText = "Buscar"
   document.getElementById("btnPesquisa").setAttribute("onclick","buscar()")
    }

}


function apaga(){

    if (!apagar.classList.contains("selectedBoxVendas")){

 if (registrar.classList.contains("selectedBoxVendas")) registrar.classList.toggle("selectedBoxVendas")
 else if(buscarBotao.classList.contains("selectedBoxVendas"))buscarBotao.classList.toggle("selectedBoxVendas") 



 apagar.classList.toggle("selectedBoxVendas")

 document.getElementById("iptValor").type = "date"
 document.getElementById("btnPesquisa").innerText = "Alterar"
    }

}


//Dim das parte das checkBox