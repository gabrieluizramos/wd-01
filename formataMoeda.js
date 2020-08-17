function formataMoeda(valor) {
    return "R$" + valor.toFixed(2).replace('.', ',');
}