
function formatarDataParaUsuario(data) {
    return data.split('-').reverse().join('/');
}

function formatarParaGoogleCalendar(data) {
    return data.split('/').reverse().join('-');
}

module.exports = { formatarDataParaUsuario, formatarParaGoogleCalendar };
