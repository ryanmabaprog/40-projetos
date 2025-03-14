const getTitle = document.getElementById("title");
const getLimitDate = document.getElementById("date");
const resultado = document.getElementById("result");
const btn = document.getElementById("btn");

let id = 1;
const tarefas = [];

function taskPush() {
    const novaTarefa = {
        id: id,
        titulo: getTitle.value,
        prazo_data: getLimitDate.value
    };

    tarefas.push(novaTarefa);
    id++; // Incrementa corretamente

    console.log(`${novaTarefa.titulo} adicionada com sucesso!`);
}

function insertTask() {
    taskPush(); // Chama a função para adicionar a tarefa

    const ultimaTarefa = tarefas[tarefas.length - 1]; // Pegamos o último item adicionado
    
    // Adicionando ao invés de sobrescrever
    resultado.innerText += `${ultimaTarefa.titulo} | ${ultimaTarefa.prazo_data}\n`; 
    // O '\n' é para adicionar uma quebra de linha entre as tarefas, caso deseje.
}

btn.addEventListener("click", insertTask);
