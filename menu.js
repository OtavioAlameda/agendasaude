
const { buscarHorariosDisponiveis, agendarConsulta } = require('./googleCalendarService');
const { formatarDataParaUsuario, formatarParaGoogleCalendar } = require('./utils');
const fs = require('fs');
const path = require('path');
const banco = require('./bancoDeAgendamentos');

async function menu(client, message) {
    const telefone = message.from.replace(/[@:\s]/g, '');
    let user = banco.get(telefone);

    if (!user) {
        client.sendText(message.from, "1: Olá! Seja bem-vindo. Por favor, digite seu nome:");
        banco.salvarTemp(telefone, { etapa: 'nome' });
        return;
    }

    if (user.etapa === 'nome') {
        banco.salvar(telefone, { nome: message.body, etapa: 'menu' });
    }

    if (user.etapa === 'menu') {
        const menuTexto = `👋 Olá *${user.nome}*! Como posso te ajudar hoje?

` +
                          `1️⃣ Ver agenda disponível
` +
                          `2️⃣ Informações sobre tratamentos
` +
                          `3️⃣ Falar com a Dra. Bruna`;
        client.sendText(message.from, menuTexto);
        banco.salvarEtapa(telefone, 'aguardando_opcao');
        return;
    }

    if (user.etapa === 'aguardando_opcao') {
        switch (message.body) {
            case "1":
                client.sendText(message.from, "1️⃣ Como deseja agendar?

1 - Ver horários disponíveis
2 - Digitar data e horário desejados
9 - Voltar ao menu");
                banco.salvarEtapa(telefone, 'sub_menu_agendamento');
                break;
            case "2":
                client.sendText(message.from, "🦷 Trabalhamos com ortodontia, alinhadores, estética e muito mais! Para detalhes acesse nosso site ou agende uma avaliação gratuita.");
                banco.salvarEtapa(telefone, 'menu');
                break;
            case "3":
                client.sendText(message.from, "📞 Dra. Bruna entrará em contato com você em breve. Obrigado!");
                banco.salvarEtapa(telefone, 'menu');
                break;
            default:
                client.sendText(message.from, "❌ Opção inválida. Digite 1, 2 ou 3.");
        }
        return;
    }
}

module.exports = menu;
