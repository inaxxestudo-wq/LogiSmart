function carregar(){
    var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))
var faturamento = JSON.parse(localStorage.getItem("vendas")) || []
if(faturamento==localStorage.getItem("vendas"))faturamento=faturamento.split(" ")
const ctx = document.getElementById('meuGrafico');
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

console.log(dia)
}

function registrar(){
    localStorage.removeItem("vendas")
    const data = new Date()
var dia = data.getDate()
var mes = data.getMonth()+1
var ano = data.getFullYear()
var vendas = localStorage.getItem("vendas")||[]
var valor = Number(document.getElementById("iptValor").value)

if(!isNaN(valor)){
    
console.log(valor,"valor")
if(vendas==localStorage.getItem("vendas"))vendas = vendas.split(" ").map(Number)
var label = []
if(mes==2)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
if(mes!=2&& mes<8 &&mes%2==0 || mes>=8 &&mes%2!=0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
if( mes<8 &&mes%2!=0 || mes>=8 &&mes%2==0)label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

for(let i =0;i<label.length;i++){
if(vendas[i]==undefined && i+1!=dia)vendas.push(0)
if(i+1==dia)vendas[i]= valor,console.log(i)
    

}
localStorage.setItem("vendas",JSON.stringify(vendas))
location.reload()}

else alert("Coloque um número")
}
