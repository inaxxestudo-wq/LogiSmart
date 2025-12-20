function carregar(){
    var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))
var faturamento = JSON.parse(localStorage.getItem("vendas")) || []
var prejuizo = JSON.parse(localStorage.getItem("saidas")) || []
if(faturamento==localStorage.getItem("vendas"))faturamento=faturamento.split(" ")
const ctx = document.getElementById('meuGrafico');
const preju = document.getElementById('meuPreju');
const data = new Date()
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

console.log(dia)

}

function registrar(){
   
    const data = new Date()
var dia = data.getDate()
var mes = data.getMonth()+1
var ano = data.getFullYear()
var vendas = JSON.parse(localStorage.getItem("vendas"))||[]
var saidas = JSON.parse(localStorage.getItem("saidas"))||[]
var entradas = JSON.parse(localStorage.getItem("entradas"))||[]
var valor = Number(document.getElementById("iptValor").value)
var diaExato = mes+"/"+dia+"/"+ano
if(!isNaN(valor)){
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
localStorage.setItem("saidas",JSON.stringify(saidas))
localStorage.setItem("entradas",JSON.stringify(entradas))
localStorage.setItem("vendas",JSON.stringify(vendas))
location.reload()}

else alert("Coloque um número")
}
