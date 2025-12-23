function carregar(){
   
    var mesExato = mes+"/"+ano
   
    var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))
var faturamento = JSON.parse(localStorage.getItem("vendas"+mesExato)) || []
var prejuizo = JSON.parse(localStorage.getItem("saidas"+mesExato)) || []
if(faturamento==localStorage.getItem("vendas"))faturamento=faturamento.split(" ")
const ctx = document.getElementById('meuGrafico');
const preju = document.getElementById('meuPreju');
const formaPG = document.getElementById('meuFormaPg');
const data = new Date()
 var compMesExato = (data.getMonth()+1)+"/"+data.getFullYear()
var dia = data.getDate()
var mes = data.getMonth()+1
var ano = data.getFullYear()
var label;
if(mes==2)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
if(mes!=2&& mes<8 &&mes%2==0 || mes>=8 &&mes%2!=0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
if( mes<8 &&mes%2!=0 || mes>=8 &&mes%2==0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

new Chart(ctx, {
    type: 'line', // tipos: bar, line, pie, doughnut, radar...
    data: {
        labels: label,
        datasets: [{
            label: 'Faturamento',
            data: faturamento,
            borderWidth: 2,
            
        }]
    },
    options: {
        responsive: true
    }
});



new Chart(preju, {
    type: 'line', // tipos: bar, line, pie, doughnut, radar...
    data: {
        labels: label,
        datasets: [{
            label: 'Saídas',
            data: prejuizo,
            borderWidth: 2,
             borderColor: "#ff2c2c"
        }]
    },
    options: {
        responsive: true
        
    }
});
const valores = [
    localStorage.getItem("pix"+mesExato),
    localStorage.getItem("credito"+mesExato),
     localStorage.getItem("debito"+mesExato),
     localStorage.getItem("dinheiro"+mesExato)]; 
// pix, crédito, débito, dinheiro
const cores = [
  "#00c853", // Pix
  "#2979ff", // Crédito
  "#ffbc0b", // Débito
  "#361f65"  // Dinheiro
];



new Chart(formaPG, {
  type: 'pie',
  data: {
    labels: ["Pix", "Crédito", "Débito", "Dinheiro"],
    datasets: [{
      label: 'Formas de Pagamento',
      data: valores,
      backgroundColor: cores,
      borderColor: "#ffffff",
      borderWidth: 2
    }]
  },
  options: {
    responsive: true
  }
});




}

function salvar(){
   registrar = document.getElementById("registrar")
buscar = document.getElementById("buscar")
apagar = document.getElementById("Apagar")

if(registrar.classList.contains("selected")){
var mesExato = mes+"/"+ano
    const data = new Date()
var dia = data.getDate()
var compMesExato = (data.getMonth()+1)+"/"+data.getFullYear()
var mes = data.getMonth()+1
var ano = data.getFullYear()
var vendas = JSON.parse(localStorage.getItem("vendas"+mesExato))||[]
var saidas = JSON.parse(localStorage.getItem("saidas"+mesExato))||[]
var entradas = JSON.parse(localStorage.getItem("entradas"+mesExato))||[]
var valor = Number(document.getElementById("iptValor").value)
var diaExato = mes+"/"+dia+"/"+ano

var forma =  document.getElementById("formaDePagamentoSelect").value
if(!isNaN(valor) && forma !=null){
var label = []
if(mes==2)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
if(mes!=2&& mes<8 &&mes%2==0 || mes>=8 &&mes%2!=0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
if( mes<8 &&mes%2!=0 || mes>=8 &&mes%2==0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

for(let i =0;i<label.length;i++){
if(vendas[i]==undefined&& i+1!=dia)vendas.push(0)

if(saidas[i]==undefined && i+1!=dia)saidas.push(0)
if(entradas[i]==undefined && i+1!=dia)entradas.push(0)

if(i+1==dia){vendas[i]+= Number(valor),localStorage.setItem(diaExato,vendas[i])
if(valor<0)saidas[i]+=Number(valor)
else if(valor>0 )entradas[i]+=Number(valor)
}
}
localStorage.setItem("saidas"+mesExato,JSON.stringify(saidas))
//localStorage.setItem("entradas",JSON.stringify(entradas))
localStorage.setItem("vendas"+mesExato,JSON.stringify(vendas))


var chave = forma + mesExato
var totalAtual = Number(localStorage.getItem(chave)) || 0
localStorage.setItem(chave, totalAtual + valor)






location.reload()




}

else alert("Coloque um número")






}



if(buscar.classList.contains("selected")){

var mesExato = document.getElementById("iptValor").value


var saida = localStorage.getItem("saidas"+mesExato)
//localStorage.setItem("entradas",JSON.stringify(entradas))
var vendas =localStorage.getItem("vendas"+mesExato)



new Chart(ctx, {
    type: 'line', // tipos: bar, line, pie, doughnut, radar...
    data: {
        labels: label,
        datasets: [{
            label: 'Faturamento',
            data: faturamento,
            borderWidth: 2,
            
        }]
    },
    options: {
        responsive: true
    }
});



new Chart(preju, {
    type: 'line', // tipos: bar, line, pie, doughnut, radar...
    data: {
        labels: label,
        datasets: [{
            label: 'Saídas',
            data: prejuizo,
            borderWidth: 2,
             borderColor: "#ff2c2c"
        }]
    },
    options: {
        responsive: true
        
    }
});
const valores = [
    localStorage.getItem("pix"+mesExato),
    localStorage.getItem("credito"+mesExato),
     localStorage.getItem("debito"+mesExato),
     localStorage.getItem("dinheiro"+mesExato)]; 
// pix, crédito, débito, dinheiro
const cores = [
  "#00c853", // Pix
  "#2979ff", // Crédito
  "#ffbc0b", // Débito
  "#361f65"  // Dinheiro
];



new Chart(formaPG, {
  type: 'pie',
  data: {
    labels: ["Pix", "Crédito", "Débito", "Dinheiro"],
    datasets: [{
      label: 'Formas de Pagamento',
      data: valores,
      backgroundColor: cores,
      borderColor: "#ffffff",
      borderWidth: 2
    }]
  },
  options: {
    responsive: true
  }
});




}
}




