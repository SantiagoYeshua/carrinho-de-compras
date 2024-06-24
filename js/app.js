let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$';

function adicionar(){
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
   
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let subtotal = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    totalGeral = totalGeral + subtotal;
    let exibirTotal = document.getElementById('valor-total');
    exibirTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    let limparTotal = document.getElementById('valor-total');
    let limparProdutos = document.getElementById('lista-produtos');
    limparTotal.textContent = 'R$';
    limparProdutos.textContent = '';
}