function enviar(){
senha = document.getElementById("senha").value
email =  document.getElementById("email").value.toLowerCase()
nome = document.getElementById("nome").value
datavl = new Date(document.getElementById("data").value)
    return(
      <div>
    <email/>
    <senha/>
    <nome/>
    <datavl/>
      </div>  
    )  

}
export default enviar()
