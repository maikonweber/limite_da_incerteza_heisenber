
function incertezaCalcPosicao() {
  return Math.random() * 10;
}
function incertezaCalcMomento() {
  return Math.random() * 10; 
}

function verificarRelacaoIncerteza() {


  const incertezaPosicao = incertezaCalcPosicao();
  const incertezaMomento = incertezaCalcMomento();


  //  lado esquerdo (Δx * Δp)
  const ladoEsquerdo = incertezaPosicao * incertezaMomento;
  
  //  lado direito (h/2π)
  const h = 6.62607015e-34;
  const ladoDireito = h / (2 * Math.PI);
  const relacaoSatisfeita = ladoEsquerdo >= ladoDireito;
  console.log(`Incerteza na posição (Δx): ${incertezaPosicao}`);
  console.log(`Incerteza no momento (Δp): ${incertezaMomento}`);
  console.log(`Lado esquerdo da relação (Δx * Δp): ${ladoEsquerdo}`);
  console.log(`Lado direito da relação (h/2π): ${ladoDireito}`);
  console.log(`A relação de incerteza é satisfeita? ${relacaoSatisfeita}`);


}


verificarRelacaoIncerteza();

