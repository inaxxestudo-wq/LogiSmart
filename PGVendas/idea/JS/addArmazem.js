function add() {
  const foto = document.getElementById("foto");
  const nome = document.getElementById("nome").value;
  const pesoMin = document.getElementById("pMin").value;
  const pesoMax = document.getElementById("pMax").value;
  const arquivo = foto.files[0];

  const leitor = new FileReader();

  leitor.onload = function(e) {
    const base64 = e.target.result;

    const produto = {
      nome: nome,
      pesoMin: pesoMin,
      pesoMax: pesoMax,
      imagem: base64
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
