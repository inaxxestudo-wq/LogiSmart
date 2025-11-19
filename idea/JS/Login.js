
let aprovEmail = false
let aprovSenha = false
const emailNovo = window.localStorage.getItem("email")
const senhaNovo = window.localStorage.getItem("senha")
const nomeNovo = window.localStorage.getItem("nome")
const dataNovo = window.localStorage.getItem("data")

const emailNovo2 = window.localStorage.getItem("email2")
const senhaNovo2 = window.localStorage.getItem("senha2")
const nomeNovo2 = window.localStorage.getItem("nome2")
function OlhoFe() {
    let olho = document.getElementById('OlhoSenha');
    let senha = document.getElementById('senha');

    // Check the current source of the image
    if (olho.src.endsWith('senhainvi.png')) {
        olho.src = '../FOTOS/LOGO/senha.png'; // Show password
senha.type = 'text'
    } else {
        olho.src = '../FOTOS/LOGO/senhainvi.png'; // Hide password
        senha.type = 'password'
    }
}


function EMAIL(){
   let email =  document.getElementById('email').value




   if(email.includes('"')|| email.includes( "'")|| email.includes( '!')|| email.includes(' ')){
    alert('Seu email não deve conter caracteres especiais como ', ' " ', " ' ", ' ! ')
    aprovEmail = false
    
   }
   else {

if (email == emailNovo ||email == emailNovo2)aprovEmail = true

else alert("esse email não existe")

}}

function eFOCO(){

    document.getElementById('email').style.backgroundColor = 'white'
    document.getElementById('senha').style.backgroundColor = 'white'
    document.getElementById('ese').style.display = 'none'
  
}
function sFOCO(){
document.getElementById('email').style.backgroundColor = 'white'
    document.getElementById('senha').style.backgroundColor = 'white'
    document.getElementById('ese').style.display = 'none'
}


function SENHA(){
   let senha =  document.getElementById('senha').value



   if(senha.includes('"')|| senha.includes( "'")|| senha.includes( '!') || senha.includes(' ')){
    alert('Sua senha não deve conter caracteres especiais como ', ' " ', " ' ", ' ! ')
    aprovSenha = false
   }
   else{
    if(senha == senhaNovo || senha == senhaNovo2){
    aprovSenha = true}
    
    else alert("email ou senha errados")
   }

   
}



function TODOS(){
if( aprovEmail && aprovSenha){

 let email =  document.getElementById('email').value

    if(email == emailNovo)window.localStorage.setItem("conta",nomeNovo)
      else window.localStorage.setItem("conta",nomeNovo2)  
    window.location.href = "Poslogin.html"

    }

else {document.getElementById('email').style.backgroundColor = 'rgb(250, 150, 150)', document.getElementById('senha').style.backgroundColor = 'rgb(250, 150, 150)'}  document.getElementById('ese').style.display = 'block'
document.getElementById("criar").style.display = "inline-block"
}


function criar(){window.location.href = "CriarConta.html"} 



function voltar(){
window.location.href = "principal.html"
}