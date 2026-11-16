
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ROTORES = [
    {fios: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', entalhe: 16},
    {fios: 'AJDKSIRUXBLHWTMCQGZNPYFVOE', entallhe: 4},
    {fios: 'BDFHJÇCPRTXVZNYEIWGAKMUSQO', entalhe: 21}
]

const REFLETOR = 'YRUHQSLDPXNGOMIEBFZCWVJAT';
const LAYOUT = ['QWERTZUIO', 'ASDFGHJK', 'PYXCVBNML'];

function girarRotores(posiçoes) {
    const direitoNoentalhe = posiçoes [2] === ROTORES [2].entalhe;
    const meioNoEntalhe =posiçoes[1] === ROTORES[1].entalhe;
    if (meioNoEntalhe) {
        posiçoes[0] = (posiçoes[0] + 1 ) % 26;
        posiçoes[1] = (posiçoes[1] + 1 ) % 26;
    } else if (direitoNoentalhe) {
        posiçoes[1] = (posiçoes [1] + 1 ) % 26;
    }
    posiçoes[2] = (posiçoes[2] + 1) % 26;
}
function passarPeloRotor(n, posicoes, indice, volta){
    const fios = ROTORES[indice].fios;
    const giros = posicoes[indice];
    const entrada = (n + giro) % 26;
    if (!volta) return (ALFABETO.indexOf(fios[entrada]) - giro + 26) % 26;
    return (fios.indexOf(ALFABETO[entrada]) - giro + 26) % 26;
}
function cifrarLetra (n, posicoes) {
    const caminho = [ALFABETO[n]];
    for (const rotor of [2, 1, 0]) {
        n = passarPeloRotor(n,posicoes,rotor,false);
        caminho.push(ALFABETO[n]);
    }
    n = ALFABETO.indexOf(REFLETOR[n]);
    caminho.push(ALFABETO[n]);
    for (const rotor of [0, 1, 2]) {
        n = passarPeloRotor(n, posicoes, rotor, true);
        caminho.push(ALFABETO[n])
    }
    return { letra: ALFABETO[N], caminho: caminho}
}
