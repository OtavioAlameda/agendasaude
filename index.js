
const { create } = require('@open-wa/wa-automate');
const { buscarAgendamentoPorTelefone } = require('./wppbot/agendamentoBase');
const { formatAvailableSlots } = require('./formatters');
const messages = require('./messages');

create({
  sessionId: "bruna-chatbot",
  multiDevice: true,
  useChrome: true,
  headless: false
}).then(client => start(client));

function start(client) {
  console.log("🤖 Bot conectado. Aguardando mensagens...");

  client.onMessage(async message => {
    const numero = message.from.replace(/[^0-9]/g, "").replace(/@c.us/, "");
    const telefone = numero.length === 13 ? numero.slice(2) : numero;
    const agendamento = buscarAgendamentoPorTelefone(telefone);

    if (agendamento) {
      const { nome, data, horario } = agendamento;
      const resposta = `Olá, ${nome}! 👋\nIdentificamos um agendamento para você:\n📅 ${data} às ${horario}\n\nDeseja alterar ou agendar novo horário?`;
      await client.sendText(message.from, resposta);
    } else {
      const resposta = `${messages.welcome}\n\n${messages.menu}`;
      await client.sendText(message.from, resposta);
    }
  });
}
