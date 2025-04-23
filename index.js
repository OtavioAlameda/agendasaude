
const { create } = require('@open-wa/wa-automate');
const { buscarHorariosDisponiveis, agendarConsulta } = require('./googleCalendarService');
const { formatarDataParaUsuario, formatarParaGoogleCalendar } = require('./utils');
const menu = require('./menu');

create({
    sessionId: 'chatbot-bruna',
    multiDevice: true,
    qrTimeout: 0,
    headless: true,
    useChrome: true
}).then(client => start(client));

async function start(client) {
    console.log("🤖 Chatbot iniciado. Pronto para atender!");
    client.onMessage(async message => {
        if (message.body && message.isGroupMsg === false) {
            menu(client, message);
        }
    });
}
