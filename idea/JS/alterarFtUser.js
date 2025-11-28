
function carregaftUser(){
var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUser.src = localStorage.getItem(("imgUser"))
ftUserSide.src = localStorage.getItem(("imgUser"))
}
function enviarFTUSER(){
var foto = document.getElementById("fotoArquivo")
var nome = document.getElementById("nomeUser").value
localStorage.setItem("nomeUser",nome)
 const arquivo = foto.files[0];
var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
var leitor = new FileReader()

leitor.onload = function(e){
const img = e.target.result

localStorage.setItem("imgUser",(img))

ftUser.src = localStorage.getItem(("imgUser"))
ftUserSide.src = localStorage.getItem(("imgUser"))

}

leitor.readAsDataURL(arquivo)



}