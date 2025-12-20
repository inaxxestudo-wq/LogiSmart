var lista =JSON.parse( localStorage.getItem("produtos"))
function carregaLista(){
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))
var lista =JSON.parse( localStorage.getItem("produtos"))


for(let i=0;i<lista.length;i++){
var item = lista[i]

document.getElementById("quatidade").innerHTML += 
    '<div class="macarrao" onmouseleave="divproduto(\''+item.nome+'\')"" id="'+item.nome+'">' +
        '<div style="display: flex; flex-direction: row;">' +
            '<p style="margin-left: 10px;" id="tipo">'+item.nome+'</p>' +
            '<button style="size: 8px; width: 16px;" onclick="apaga(\''+item.nome+'\')">X</button>' +
        '</div>' +
        '<img class="fotoAlimento" src="'+item.imagem+'" alt="">' +
        '<div class="peso">' +
            '<h2 class="peso">'+item.pesoMax+'</h2> <h2>KG</h2>' +
        '</div>' +
        '<input type="number" placeholder="Escreva o peso minimo" id="numMin">' +
        '<input type="number" placeholder=" quantidade retirada" id="numAtual">' +
        '<input type="number" placeholder="Adicionar valor" id="numADD">' +
    '</div>';

}




}

//function divMC(){
 //var iptmc = document.getElementById("iptmc")

//iptmc.disabled  = false
  // if(iptmc.value.trim() !== "" &&iptmc!=null)localStorage.setItem("pesoMinMc",iptmc.value) 

//}


function apaga(nome){

var lista =JSON.parse( localStorage.getItem("produtos"))
let i =0
while(lista[i].nome!=nome){ 

   i++
   if(i==10){console.log("não encontrado");break}
}

lista.splice(i,1)
localStorage.setItem("produtos",JSON.stringify(lista))
location.reload()
}


function divproduto(nome){
var control = false
let i =0
var pesomin = document.getElementById("numMin").value
var pesoRetirado = document.getElementById("numAtual").value
var pesoADD = document.getElementById("numADD").value
for(;i<lista.length;i++){

if(lista[i].nome == nome)break
}

if(pesomin!=""&& pesomin!=lista[i].pesoMin ||pesoRetirado!=""&& pesoRetirado!=lista[i].pesoMax||pesoADD!="")control=true

if(pesomin!="")
lista[i].pesoMin = pesomin
if(pesoRetirado!="")
lista[i].pesoMax =lista[i].pesoMax -  Number(pesoRetirado)

if(pesoADD!="")lista[i].pesoMax =lista[i].pesoMax +  Number(pesoADD)

 localStorage.setItem("produtos",JSON.stringify(lista))
if(control)location.reload()
}