function add() {
  const foto = document.getElementById("foto");
  const nome = document.getElementById("nome").value;
  const pesoMin = document.getElementById("pMin").value;
  const pesoMax = document.getElementById("pMax").value;
  const tag = document.getElementById("selecionarCategoria").value

  const arquivo = foto.files[0];

  const leitor = new FileReader();

  leitor.onload = function(e) {
    const base64 = e.target.result;

    const produto = {
      nome: nome,
      pesoMin: pesoMin,
      pesoMax: pesoMax,
      imagem: base64,
      categoria: tag
    };
    // pega lista atual de produtos
    let lista = JSON.parse(localStorage.getItem("produtos")) || [];

    // adiciona o novo
    lista.push(produto);

    // salva de volta no localStorage
    localStorage.setItem("produtos", JSON.stringify(lista));

    console.log("Produto salvo:", produto);
  };

  leitor.readAsDataURL(arquivo);

}


function aparecer(){

  document.getElementById("principalSub").classList.toggle("mov")
  document.getElementById("adicionarppp").classList.toggle("movebtn")

  document.getElementById("divSec").classList.toggle("visible")
}

function criarCategoria(){
var categorias = JSON.parse(localStorage.getItem("categorias")) || []
var iptCategoria = document.getElementById("inputCategoria")
if(!categorias.includes(iptCategoria.value.toLowerCase())){
  categorias.push(iptCategoria.value.toLowerCase())
localStorage.setItem("categorias",JSON.stringify(categorias.sort()))

var selecionarCategoria = document.getElementById("selecionarCategoria")
var categorias = JSON.parse(localStorage.getItem("categorias")) ||[]
categorias.sort()
categorias.length

selecionarCategoria.innerHTML += `<option value="${iptCategoria.value.toLowerCase()}">${iptCategoria.value.toLowerCase()}</option>`

}
else alert("A categoria já existe")


}
function apagarCategoria(){
var categorias = JSON.parse(localStorage.getItem("categorias")) ||[]
categorias.sort()

var iptCategoria = document.getElementById("selecionarCategoria")
if(iptCategoria.value !="0"){
alert(iptCategoria.value)
  for(let i = 0;i<categorias.length;i++){

    if(categorias[i]==iptCategoria.value){

     categorias.splice(i,1)
      break
    }
  }
localStorage.setItem("categorias",JSON.stringify(categorias))

var produtos = JSON.parse(localStorage.getItem("produtos"))

for(let i =0;i<produtos.length;i++){
var item = produtos[i]

if(item.categoria == iptCategoria.value)produtos.splice(i,1),i--

}

localStorage.setItem("produtos",JSON.stringify(produtos))
location.reload()
}

else alert("escolha antes uma opção para apagar")
}