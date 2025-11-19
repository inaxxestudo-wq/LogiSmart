document.getElementById("barraLateral")
document.getElementById("logout")
nome = window.localStorage.getItem("conta")




window.onload = function(){
document.getElementById("EMPRESA").innerHTML = "Bem vindo, "+nome
}


function principal(){

    window.location.href = "principal.html"
}

function config(){
    window.location.href = "configuracao.html"
}

function carregar(){
var lista =JSON.parse( localStorage.getItem("produtos"))
var div = document.getElementById("faltando")
let i =0


for(;i<lista.length;i++){
var item = lista[i]
if(lista[i].pesoMax<=lista[i].pesoMin)console.log(item.nome)
if(lista[i].pesoMax<=lista[i].pesoMin)div.innerHTML+=
    '<div  class="macarrao verm" onmouseleave="divproduto(\''+item.nome+'\')"" id="'+item.nome+'">' +
        '<div style="display: flex; flex-direction: row;">' +
            '<p style="margin-left: 10px;" id="tipo">'+item.nome+'</p>' +
        
        '</div>' +
        '<img class="fotoAlimento" src="'+item.imagem+'" alt="">' +
        '<div class="peso">' +
            '<h2 class="peso">'+item.pesoMax+'</h2> <h2>KG</h2>' +
        '</div>'+
        '<input type="number" placeholder="Adicionar valor" id="numADD">' +
    '</div>';

}

}


function comprarMacarrao(){

   window.location.href = "compra.html"
}

function voltar(){
window.location.href = "Poslogin.html"

}
function carrinho(){
window.location.href ="carrinho.html"

}
function divproduto(nome){
    var lista =JSON.parse( localStorage.getItem("produtos"))
var control = false
let i =0
var pesoADD = document.getElementById("numADD").value
for(;i<lista.length;i++){

if(lista[i].nome == nome)break
}

if(pesoADD!="")control=true



if(pesoADD!="")lista[i].pesoMax =lista[i].pesoMax +  Number(pesoADD)

 localStorage.setItem("produtos",JSON.stringify(lista))
if(control)location.reload()
}