function comprado(){

 arroz = localStorage.getItem("pesoMinAr")*2
 macarrao = localStorage.getItem("pesoMinMc")*2
 feijao = localStorage.getItem("pesoMinFj")*2

localStorage.setItem("PesoArroz",arroz)
localStorage.setItem("Pesofeijao",feijao)
localStorage.setItem("PesoMacarrao",macarrao)

window.location.href = "Poslogin.html"
}