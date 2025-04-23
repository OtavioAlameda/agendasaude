
const banco = {};

function salvar(telefone, dados) {
    banco[telefone] = dados;
}

function get(telefone) {
    return banco[telefone];
}

function salvarEtapa(telefone, etapa) {
    if (banco[telefone]) {
        banco[telefone].etapa = etapa;
    }
}

function salvarTemp(telefone, dados) {
    banco[telefone] = dados;
}

module.exports = { salvar, get, salvarEtapa, salvarTemp };
