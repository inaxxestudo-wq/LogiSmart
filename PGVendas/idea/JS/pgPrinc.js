

const soma1 = parseInt(document.getElementById("soma").textContent)


var imgAtual = '../FOTOS/LOGO/foto0.png'

  function MudaBanner2() {

    if  (document.getElementById('soma').innerHTML <7){
      
      
    document.getElementById('soma').innerHTML = parseInt(document.getElementById("soma").textContent) + 1; 
    let soma = document.getElementById('soma').innerHTML
    document.getElementById("fotos").src = "../FOTOS/LOGO/foto" + soma + ".png";

}


else{}


if(document.getElementById('soma').innerHTML>6){
  
  document.getElementById('soma').innerHTML= -1

  let soma = document.getElementById('soma').innerHTML
  
  
  document.getElementById("fotos").src = "../FOTOS/LOGO/foto" + soma + ".png";  
}

else{}



  }







  function MudaBanner1(){
    
    if  (document.getElementById('soma').innerHTML > -2){

    document.getElementById('soma').innerHTML = document.getElementById("soma").textContent -1
    let soma = document.getElementById('soma').innerHTML
    document.getElementById("fotos").src = "../FOTOS/LOGO/foto" + soma + ".png";


  }
  else{}


  if(document.getElementById('soma').innerHTML<-1){
    document.getElementById('soma').innerHTML= 6
    let soma = document.getElementById('soma').innerHTML
    document.getElementById("fotos").src = "../FOTOS/LOGO/foto" + soma + ".png";
  }

}
  


    

function DRO(){

 
}
function DROP(){

  document.body.style.backgroundColor= 'white'
}



/*criarIdeias.html*/
/*{
  if(document.getElementById("escreve").textContent===""){
    alert(`O campo está vazio`)

  }
else{
  
}

 if(document.getElementById("escreve").textContent !==""){
  alert(`obrigado`)}


}*/

function Enviarenviar(){
  if(document.getElementById("escreve").value.trim() ===''){
    alert('ola')
  }

  else{alert('certo')}
}

