
# 🦷 Chatbot Dra. Bruna Batista – Agendamentos com Google Calendar

Este é o repositório do chatbot desenvolvido para atendimento automatizado da Dra. Bruna Batista. O sistema permite:

✅ Atendimento via WhatsApp  
✅ Verificação e agendamento de horários reais via Google Calendar  
✅ Fluxo automatizado com salvamento local de pacientes  
✅ Experiência fluida e humanizada

---

## 📁 Estrutura do Projeto

```
Chatbot_Final_Validado/
├── index.js                  # Inicia o bot com @open-wa/wa-automate
├── menu.js                   # Gerencia as etapas do menu interativo
├── googleCalendarService.js  # Integração com a API do Google Calendar
├── utils.js                  # Autenticação Google e formatações de data
├── bancoDeAgendamentos.js    # Simula um banco local (memória)
```

---

## 🚀 Como Executar Localmente

### 1. Instale o Node.js
https://nodejs.org

### 2. Instale as dependências
```bash
npm install @open-wa/wa-automate googleapis
```

### 3. Coloque seu `credentials.json` na raiz do projeto
- Crie no Google Cloud Platform
- Compartilhe a agenda com o email da conta de serviço
- Use a API Calendar

### 4. Execute o projeto
```bash
node index.js
```

📲 Escaneie o QR Code com o WhatsApp da Dra. Bruna

---

## ✨ Funcionalidades

- Recepção automática via WhatsApp
- Menu interativo: opções 1, 2 e 3
- Consulta de horários disponíveis nos próximos 5 dias úteis
- Agendamento por seleção ou por digitação manual (DD/MM HH:MM)
- Confirmação do agendamento via mensagem
- Evento criado automaticamente no Google Calendar

---

## 📌 Checklist de Integrações

- [x] WhatsApp com @open-wa/wa-automate
- [x] Google Calendar API com autenticação
- [x] Formatação correta de datas
- [x] Estrutura modular
- [x] Pronto para deploy em nuvem (ex: Railway, Render, Vercel + webhook)

---

## 🔒 Segurança

Não compartilhe publicamente o `credentials.json`. Ele contém a chave privada da sua conta de serviço do Google.

---

## 📥 Clonar e publicar no GitHub

```bash
git init
git remote add origin https://github.com/seuusuario/chatbot-bruna.git
git add .
git commit -m "versão final chatbot Dra. Bruna"
git push -u origin master
```

---

## 👨‍💻 Desenvolvido por
Otávio Ribeiro e Alameda Saúde ✨
