// Pegar os elementos da modal e o botão
const modal = document.getElementById("myModal");
const texto = document.getElementById('txtModal');
const criar = document.querySelector('a#button_criar');
const span = document.querySelector(".close");

// Objeto para armazenar tarefas por mês
let tarefasPorMes = {
    jan: [],
    fev: [],
    mar: [],
    abr: [],
    mai: [],
    jun: [],
    jul: [],
    ago: [],
    set: [],
    out: [],
    nov: [],
    dez: []
};

// Carregar tarefas do localStorage quando a página é carregada
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefasPorMes');
    if (tarefasSalvas) {
        tarefasPorMes = JSON.parse(tarefasSalvas);
    }
}

// Salvar tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem('tarefasPorMes', JSON.stringify(tarefasPorMes));
}

// Função para abrir o modal com o formulário de criação de tarefa
function abrirModalCriacao() {
    modal.classList.add('modal-show');
    modal.classList.remove('modal-hide');

    // Limpar o conteúdo anterior do modal
    texto.innerHTML = '';

    // Criar elementos do formulário
    const inputTarefa = document.createElement("input");
    inputTarefa.setAttribute("type", "text");
    inputTarefa.setAttribute("placeholder", "Informe o título da tarefa...");
    inputTarefa.style.display = 'block'; // Define o input para ocupar uma linha inteira
    inputTarefa.style.marginBottom = '10px'; // Adiciona espaçamento inferior

    const labelMes = document.createElement("label");
    labelMes.style.display = 'block'; // Define o label para ocupar uma linha inteira
    labelMes.style.marginBottom = '20px'; // Adiciona espaçamento inferior
    labelMes.innerText = "Selecione o Mês:";

    const selectMes = document.createElement("select");
    selectMes.innerHTML = `
        <option value="jan">Janeiro</option>
        <option value="fev">Fevereiro</option>
        <option value="mar">Março</option>
        <option value="abr">Abril</option>
        <option value="mai">Maio</option>
        <option value="jun">Junho</option>
        <option value="jul">Julho</option>
        <option value="ago">Agosto</option>
        <option value="set">Setembro</option>
        <option value="out">Outubro</option>
        <option value="nov">Novembro</option>
        <option value="dez">Dezembro</option>
    `;

    const botaoSalvar = document.createElement("button");
    botaoSalvar.innerText = "Salvar Tarefa";
    botaoSalvar.style.display = 'block';
    botaoSalvar.style.marginTop = '20px'; 
    botaoSalvar.addEventListener('click', () => {
        const tarefa = inputTarefa.value;
        const mesSelecionado = selectMes.value;

        if (tarefa && mesSelecionado) {
            // Adicionar a tarefa ao mês selecionado usando o método spread para imitar a manipulação direta do array
            tarefasPorMes[mesSelecionado] = [...tarefasPorMes[mesSelecionado], tarefa];
            salvarTarefas(); // Salvar tarefas no localStorage
            alert(`Tarefa "${tarefa}" cadastrada para o mês de ${mesSelecionado.toUpperCase()}!`);
            modal.classList.remove('modal-show');
            modal.classList.add('modal-hide'); // Fechar o modal
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Adicionar os elementos ao modal
    texto.appendChild(inputTarefa);
    texto.appendChild(labelMes);
    texto.appendChild(selectMes);
    texto.appendChild(botaoSalvar);
}

// Função para abrir o modal e exibir as tarefas de um mês específico
function mostrarTarefas(mes) {
    modal.classList.add('modal-show');
    modal.classList.remove('modal-hide');

    // Limpar o conteúdo anterior do modal
    texto.innerHTML = '';

    // Exibir a lista de tarefas do mês usando map e join
    const tarefasDoMes = tarefasPorMes[mes];
    const listaTarefas = tarefasDoMes.length > 0
        ? `<ul>${tarefasDoMes.map(tarefa => `<li>${tarefa}</li>`).join('')}</ul>`
        : `Nenhuma tarefa cadastrada para ${mes.toUpperCase()}.`;

    texto.innerHTML = listaTarefas;
}

// Adicionar evento de clique ao botão "Criar"
criar.addEventListener('click', abrirModalCriacao);

// Adicionar evento de clique no botão de fechar (x)
span.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');
});

// Adicionar evento de clique fora da modal para fechá-la
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal-show');
        modal.classList.add('modal-hide');
    }
});

// Adicionar eventos para os botões dos meses
document.getElementById('jan').addEventListener('click', () => { mostrarTarefas('jan'); });
document.getElementById('fev').addEventListener('click', () => { mostrarTarefas('fev'); });
document.getElementById('mar').addEventListener('click', () => { mostrarTarefas('mar'); });
document.getElementById('abr').addEventListener('click', () => { mostrarTarefas('abr'); });
document.getElementById('mai').addEventListener('click', () => { mostrarTarefas('mai'); });
document.getElementById('jun').addEventListener('click', () => { mostrarTarefas('jun'); });
document.getElementById('jul').addEventListener('click', () => { mostrarTarefas('jul'); });
document.getElementById('ago').addEventListener('click', () => { mostrarTarefas('ago'); });
document.getElementById('set').addEventListener('click', () => { mostrarTarefas('set'); });
document.getElementById('out').addEventListener('click', () => { mostrarTarefas('out'); });
document.getElementById('nov').addEventListener('click', () => { mostrarTarefas('nov'); });
document.getElementById('dez').addEventListener('click', () => { mostrarTarefas('dez'); });

// Carregar tarefas do localStorage quando a página é carregada
carregarTarefas();

