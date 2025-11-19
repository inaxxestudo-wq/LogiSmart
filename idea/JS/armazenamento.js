


function carregar(){
    let arroz = document.getElementById("PesoArroz")
arroz.innerText = localStorage.getItem("PesoArroz")
let macarrao = document.getElementById("PesoMacarrao")
macarrao.innerHTML = localStorage.getItem("PesoMacarrao")
let feijao = document.getElementById("PesoFeijao")
feijao.innerHTML = localStorage.getItem("Pesofeijao")
}

function arr(){

    
 let arroz = document.getElementById("PesoArroz")

 if(arroz.textContent>0){
arroz.innerText = (Number(arroz.textContent) - 1)

}

localStorage.setItem("PesoArroz",arroz.textContent)

}




function mc(){
let macarrao = document.getElementById("PesoMacarrao")


 if(macarrao.textContent>0){
macarrao.innerText = (Number(macarrao.textContent) - 1)

}

localStorage.setItem("PesoMacarrao",macarrao.textContent)
}

function fj(){
   let feijao = document.getElementById("PesoFeijao")


 if(feijao.textContent>0){
feijao.innerText = (Number(feijao.textContent) - 1)

}

localStorage.setItem("Pesofeijao",feijao.textContent)
}


function confirmar(){

}

function divFJ(){
var iptfj = document.getElementById("iptfj")

iptfj.disabled  = false

   if(iptfj.value.trim() !== "" &&!isNaN(iptfj.value)){localStorage.setItem("pesoMinFj",iptfj.value) }

else{}

}
function divMC(){
   var iptmc = document.getElementById("iptmc")

iptmc.disabled  = false
   if(iptmc.value.trim() !== "" &&iptmc!=null)localStorage.setItem("pesoMinMc",iptmc.value) 

}
function divAR(){
    var iptar = document.getElementById("iptarr")

iptar.disabled  = false

   if(iptar.value.trim() !== "" &&iptar!=null)localStorage.setItem("pesoMinAr",iptar.value) 
}