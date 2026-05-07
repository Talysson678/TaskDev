//dom.js
export function obterTextoTarefa() {
  const input = document.querySelector("#input-tarefa");
  return input.value;
}

export function limparInput() {
    document.querySelector("#input-tarefa").value = "";
}

export function criarElementoTarefaNaLista (texto) {
    const list = document.querySelector("#lista-tarefas");

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);
}

