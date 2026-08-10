let meuGraficoFaturamento = null
let graficoPreju = null
let graficoFormaPG = null
let valores = []
let mesExato;
let label = []
function carregar(){
      console.log((localStorage.getItem("vendas2/2026")))
var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))

let [dia,mes,ano] = receberData("full")
label = criarLabel(mes,ano)
let mesExato = mes+"/"+ano
var entradas = JSON.parse(localStorage.getItem("vendas"+mesExato)) 
var saidas = JSON.parse(localStorage.getItem("saidas"+mesExato))
var faturamento = entradas-saidas 
console.log(localStorage.getItem("pix"+mesExato)|| 0)
 meuGraficoFaturamento = new Chart(document.getElementById("meuGraficoFaturamento"),{
type:"bar",
data:{
    
   labels: label,
        datasets: [{
            label: 'Faturamento',
            data: faturamento,
            borderWidth: 2,
            
        },
{           label: 'Saída',
            data: saidas},
        {   label: 'Entrada',
            data: entradas}]
        
}
,
  options: {
        responsive: true
}
})
  graficoFormaPG = new Chart(
    document.getElementById("meuGraficoFormaPg"),
    {
        type: "pie",

       data: {
    labels: ["Pix", "Crédito", "Dinheiro","Débito"],

    datasets: [{
        label: "Formas de pagamento",
        data: [localStorage.getItem("pix"+mesExato)||0,localStorage.getItem("credito"+mesExato)|| 0,localStorage.getItem("dinheiro"+mesExato)|| 0,localStorage.getItem("debito"+mesExato)||0],
        backgroundColor: ["#ffbc0b","#2979ff","#00c853","#361f65"],
        borderColor: "#ffffff",
        borderWidth: 2
    }]
},

options: {
    responsive: true
}}
);

}


function receberData(tipo){
    let data = new Date()
    let diaTemp = data.getDate()
    let mesTemp = data.getMonth()+1
    let anoTemp = data.getFullYear()
    if(tipo=="full"){
    return [diaTemp,mesTemp,anoTemp]
}
else if(tipo=="mesFormatado"){
    return mesTemp+"/"+anoTemp  
}
else if(tipo=="dia"){
  
    return diaTemp
}
else if(tipo=="ano"){
  
    return anoTemp
}
else if(tipo == "qtdDias"){
    return new Date(anoTemp,mesTemp,0).getDate()
}
}


function criarLabel(mest,anot){
    let mesFormatado = receberData("mesFormatado")
    let data = receberData("qtdDias")
    console.log(mest)
    for(let i=1;i<=data;i++){
    label.push(i)
    }
    return label
}


function atualizarCanvas(valor,dataEscolhida,buscar){
     let dia
     let mesFormatado
    if(!buscar){
 dia = dataEscolhida[0]
  mesFormatado = dataEscolhida[1]+"/"+dataEscolhida[2]
 alert(mesFormatado)
    }
    if(buscar){
      mesFormatado = dataEscolhida[0]+"/"+dataEscolhida[1]

    }
    let data =  new Date(dataEscolhida[1],dataEscolhida[0],0).getDate()
   
     
    console.log(mesFormatado,"tst")
    let vendas=JSON.parse(localStorage.getItem("vendas"+mesFormatado))
    let saidas = JSON.parse(localStorage.getItem("saidas"+mesFormatado))
    let tipoPagamento = document.getElementById("formaDePagamentoSelect").value
    if(!buscar){
if(vendas==null && valor>0){
let valores = []

    for(let i =0; i<data;i++){
        if(i+1!=dia)valores.push(0)
        else if(i+1==dia)valores.push(valor)
    }

localStorage.setItem("vendas"+mesFormatado,JSON.stringify(valores))
atualizarCanvas(valor)
}

if(saidas==null && valor<0){
let valores = []

    for(let i =0; i<data;i++){
        if(i+1!=dia)valores.push(0)
        else if(i+1==dia)valores.push(valor)
    }
localStorage.setItem("saidas"+mesFormatado,JSON.stringify(valores))


}

if(valor>0){
    
  for(i = 0;i<data;i++){
    if(i+1==dia)vendas[i]=valor+Number(vendas[i])
  }
localStorage.setItem("vendas"+mesFormatado,JSON.stringify(vendas))
meuGraficoFaturamento.data.datasets[2].data = vendas;
}
if(valor<0){
    
  for(i = 0;i<data;i++){
    if(i+1==dia)saidas[i]+=valor
  }
meuGraficoFaturamento.data.datasets[1].data = saidas
localStorage.setItem("saidas"+mesFormatado,JSON.stringify(saidas))


}
let valorDoTipo = Number(localStorage.getItem(tipoPagamento+mesFormatado)||0)
console.log(valorDoTipo+tipoPagamento)
localStorage.setItem(tipoPagamento+mesFormatado,valorDoTipo+valor)


graficoFormaPG.data.datasets[0].data= [localStorage.getItem("pix"+mesFormatado)||0,localStorage.getItem("credito"+mesFormatado)|| 0,localStorage.getItem("dinheiro"+mesFormatado)|| 0,localStorage.getItem("debito"+mesFormatado)||0]

    }
else if(buscar){
    console.log(JSON.parse(localStorage.getItem("vendas"+mesFormatado)))
meuGraficoFaturamento.data.datasets[1].data = JSON.parse(localStorage.getItem("saidas"+mesFormatado))
meuGraficoFaturamento.data.datasets[2].data = JSON.parse(localStorage.getItem("vendas"+mesFormatado))
  
   graficoFormaPG.data.datasets[0].data= [localStorage.getItem("pix"+mesFormatado)||0,localStorage.getItem("credito"+mesFormatado)|| 0,localStorage.getItem("dinheiro"+mesFormatado)|| 0,localStorage.getItem("debito"+mesFormatado)||0] 
}    
    meuGraficoFaturamento.update()
    graficoFormaPG.update()
return 0
}


function salvar(){
let inputValor = Number(document.getElementById("iptValor").value)
if(verificaNumber(inputValor)){

atualizarCanvas(inputValor,receberData("full"),false)
}
}


function verificaNumber(x){
if(isNaN(x)){
    alert("Digite um número válido")
    return false
}
else if(!isNaN(x))return true
}


function buscar(){
let mesFormatado = document.getElementById("iptValor").value
let [ano,mes] = mesFormatado.split("-")

mesFormatado = Number(mes)+"/"+ano

console.log(mesFormatado,"15151")

atualizarCanvas(0,mesFormatado.split("/"),true)
}