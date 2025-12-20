let aprovado = false
let aprovadoSenha = false
let aprovadoEmail = false
let aprovadoNome = false
let testeIdade=false
const emailCss = document.getElementById("emailCss")
const senhaCss = document.getElementById("senhaCss")
const nomeCss = document.getElementById("nomeCss")
const dataCss = document.getElementById("dataCss")
const regex = /[\\,();:<>[\]"]/
const dataHoje = new Date()

function EMAIL(){
   return  email =  document.getElementById("email").value.toLowerCase()

}
function SENHA(){
    return senha = document.getElementById("senha").value
}
function NOME(){
    return nome = document.getElementById("nome").value
}
function DATA(){
  
    return datavl = new Date(document.getElementById("data").value)
  
}








function eFOCO(){}

function enviar(){






    if(email.length>0){
    var [antes,depois] = email.split('@')
    var tst = email.split('@')
if(tst.length >=2) {
if(email.includes("@")){

if(email.split(' ').length ==1){
if(antes[0] != "."){
if(!regex.test(email)) aprovadoEmail=true
else emailCss.innerHTML = "o Email não pode conter caracteres especiais como [\\,();:<>[\]"+"] "
}
else emailCss.innerHTML =("O email não pode começar com '.'")
}
else {emailCss.innerHTML = "o Email não pode conter espaços em brancos"}
}
else emailCss.innerHTML = "O seu email deve conter @"
}//
else emailCss.innerHTML =("Escreva um email válido")
}

else emailCss.innerHTML =("Escreva um email válido")
//fim do email


if(senha.length>=8){
if(senha.includes(" "))senhaCss.innerHTML = ("Sua senha não pode conter espaços vazios")
else aprovadoSenha = true
}


else senhaCss.innerHTML = "Sua Senha deve ter no mínimo 8 caracteres"
if(nome.length>=4)aprovadoNome=true
else nomeCss.innerHTML= "Seu nome deve conter no mínimo 4 letras"
//acabou a senha




if(aprovadoEmail&&aprovadoNome&&aprovadoSenha){




if(email != window.localStorage.getItem("email")) window.localStorage.setItem("email2",email)
if(senha != window.localStorage.getItem("senha")) window.localStorage.setItem("senha2",senha)
if(nome != window.localStorage.getItem("nome"))window.localStorage.setItem("nome2",nome)

else window.localStorage.setItem("email",email),window.localStorage.setItem("senha",senha),window.localStorage.setItem("nome",nome),window.localStorage.setItem("data",datavl)




    window.location.href = 'login.html'
}





}



function OlhoFe(){
let olho = document.getElementById("OlhoSenha")
let caixaSenha = document.getElementById("senha")

if(olho.src.endsWith("senhainvi.png"))olho.src = "../FOTOS/LOGO/senha.png",caixaSenha.type = "text"
   else if(olho.src.endsWith("senha.png"))olho.src = "../FOTOS/LOGO/senhainvi.png",caixaSenha.type = "password"
  
}


function eFOCO(){
    emailCss.innerHTML = ''
}
function sFOCO(){
    senhaCss.innerHTML = ''
}
function nFOCO(){
    nomeCss.innerHTML = ''
}
function dFOCO(){
    dataCss = ''
}