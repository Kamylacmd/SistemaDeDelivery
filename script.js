function AdicionarNoCarrinho(event) {
    const itemContainer = event.target.closest('.cardapio-name');
    const itemPrice = parseFloat(itemContainer.querySelector('.prato-preco').getAttribute('data-price'));

    let currentTotal = parseFloat(document.getElementById('cart-total').textContent.replace(',', '.'));
    currentTotal += itemPrice;
    
    document.getElementById('cart-total').textContent = currentTotal.toFixed(2).replace('.', ',');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', AdicionarNoCarrinho);
});

function AplicarCupomDesconto() {
    const cupom = document.getElementById('cupom').value.trim();
    let currentTotal = parseFloat(document.getElementById('cart-total').textContent.replace(',', '.'));

    if (cupom === 'DESC20') {
        const desconto = currentTotal * 0.20;
        currentTotal = currentTotal - desconto;

        document.getElementById('cart-total').textContent = currentTotal.toFixed(2).replace('.', ',');
        alert('Cupom de desconto aplicado com sucesso!');
    } else {
        alert('Cupom inválido!');
        
    }


}

