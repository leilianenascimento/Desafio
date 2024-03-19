
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};
function calcularTotalFaturamento(faturamentoPorEstado) {
    let total = 0;
    for (const estado in faturamentoPorEstado) {
        total += faturamentoPorEstado[estado];
    }
    return total;
}


function calcularPercentualRepresentacao(faturamentoPorEstado, totalFaturamento) {
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2) + "%";
    }
    return percentuais;
}


const totalFaturamento = calcularTotalFaturamento(faturamentoPorEstado);


const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado, totalFaturamento);


console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(estado + ": " + percentuais[estado]);
}
