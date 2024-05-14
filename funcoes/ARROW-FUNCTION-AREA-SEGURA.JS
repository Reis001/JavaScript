//ARROW function para verificar se o jogador está dentro da area segura
const estraNaAreaSegura = (posX, posY, areaSegura) => {
    return posX >= areaSegura.xMin && 
           posX <= areaSegura.xMax &&
           posY >= areaSegura.yMin &&
           posY >= areaSegura.yMax &&
};

//definido os limites da area segura
const areaSegura = {
    xMin: 10,
    xMax: 50,
    yMin: 20,
    yMax: 60
};

// coordenadas do jogador
const posicaoJogador = { x: 30, y: 40 };

// verificando se o jogador está dentro da area segura[
    const resultado = estraNaAreaSegura(posicaoJogador.x, posicaoJogador.y, areaSegura);
    console.log("O jogador está na area segura:", resultado ? "sim" : "não");
// saida: o jogador esta na area segura: sim
]