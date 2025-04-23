
function buscarHorariosDisponiveis() {
    return [
        { data: "22/04", hora: "09:00" },
        { data: "23/04", hora: "14:00" },
        { data: "24/04", hora: "10:30" }
    ];
}

function agendarConsulta(data, hora, nome) {
    console.log("Simulando agendamento:", data, hora, nome);
    return true;
}

module.exports = { buscarHorariosDisponiveis, agendarConsulta };
