const awgPdfLink = "https://www.if.ufrgs.br/~mittmann/tabela_de_fios.pdf"; // Link fixo do PDF da tabela AWG

function calcular() {
    const diametro = parseFloat(document.getElementById('diametro').value);
    const pacote = parseFloat(document.getElementById('pacote').value);
    const frequencia = parseFloat(document.getElementById('frequencia').value);
    const tensao = parseFloat(document.getElementById('tensao').value);
    const corrente = parseFloat(document.getElementById('corrente').value);

    if (isNaN(diametro) || isNaN(pacote) || isNaN(frequencia) || isNaN(tensao) || isNaN(corrente)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    const passoPolar = (3.14 * diametro) / 2;
    const fluxoMagneticoEstimado = (passoPolar * 5 * pacote) / 1000;
    const numeroExpirasFase = (50 * tensao) / (2.22 * frequencia * fluxoMagneticoEstimado * 0.96);
    const numeroExpirasPolo = numeroExpirasFase / 2;
    const secaoRetaFio = corrente / 7;

    const resultados = `
        <p>Passo Polar: ✅ ${passoPolar.toFixed(2)}</p>
        <p>Fluxo Magnético Estimado: ✅ ${fluxoMagneticoEstimado.toFixed(2)}</p>
        <p>Número de Espiras por Fase: ✅ ${numeroExpirasFase.toFixed(2)}</p>
        <p>Número de Espiras por Polo: ✅ ${numeroExpirasPolo.toFixed(2)}</p>
        <p>Seção Reta do Fio: ✅ ${secaoRetaFio.toFixed(2)} mm2</p>
    `;
    document.getElementById('resultados').innerHTML = resultados;
}

function limpar() {
    document.getElementById('diametro').value = '';
    document.getElementById('pacote').value = '';
    document.getElementById('frequencia').value = '';
    document.getElementById('tensao').value = '';
    document.getElementById('corrente').value = '';
    document.getElementById('resultados').innerHTML = '';
}

function abrirTabelaAWG() {
    document.getElementById('awg-pdf').src = awgPdfLink;
    document.getElementById('tabelaAWG').style.display = 'block';
}

function fecharTabelaAWG() {
    document.getElementById('tabelaAWG').style.display = 'none';
}

function imprimirTabelaAWG() {
    const iframe = document.querySelector('#awg-pdf');
    iframe.contentWindow.print();
}
