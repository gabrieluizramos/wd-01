function calculadora (operacao, valorA, valorB) {
    var resultado;

    switch (operacao) {
        case 'soma':
            resultado = valorA + valorB;
            break;
        case 'subtracao':
            resultado = valorA - valorB;
            break;
        case 'divisao':
            resultado = valorA / valorB;
            break;
        case 'multiplicacao':
            resultado = valorA * valorB;
            break;
        default:
            resultado = 'operação inexistente';
            break;
    }
    
    console.log(`O resultado de ${operacao} eh = ${resultado}`)
}