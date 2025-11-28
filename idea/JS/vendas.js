function carregar(){
    var ftUser = document.getElementById("ftUserMain")
var ftUserSide = document.getElementById("ftUser")
ftUserSide.src = localStorage.getItem(("imgUser"))


const ctx = document.getElementById('meuGrafico');

new Chart(ctx, {
    type: 'line', // tipos: bar, line, pie, doughnut, radar...
    data: {
        labels: ['01', '02', '03', '04','05','07','08','09',10],
        datasets: [{
            label: 'Vendas',
            data: [10, 20, 15, 30,50,5,10,12,11,12],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

}


