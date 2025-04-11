
document.addEventListener("DOMContentLoaded", () => {
    const url = "https://script.google.com/macros/s/AKfycbwBiAZ1GP3xGsFlerMVPU0e1m-WzriYfSgC19LhjIhtiC1udOekYbJ-WS4BHdqVLWeb2A/exec";

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            const corpo = document.getElementById("tabela-corpo");
            corpo.innerHTML = "";
            let confirmados = 0;

            dados.forEach(linha => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${linha.nome}</td>
                    <td>${linha.telefone}</td>
                    <td>${linha.data}</td>
                    <td>${linha.horario}</td>
                    <td>${linha.confirmado === "true" ? "✅" : "⏳"}</td>
                `;
                corpo.appendChild(tr);
                if (linha.confirmado === "true") confirmados++;
            });

            document.getElementById("total").textContent = `Total: ${dados.length}`;
            document.getElementById("confirmados").textContent = `Confirmados: ${confirmados}`;
            document.getElementById("pendentes").textContent = `Pendentes: ${dados.length - confirmados}`;
        })
        .catch(err => {
            document.getElementById("tabela-corpo").innerHTML = `<tr><td colspan="5">Erro ao carregar <strong>dados</strong>.</td></tr>`;
            console.error("Erro na requisição:", err);
        });
});
