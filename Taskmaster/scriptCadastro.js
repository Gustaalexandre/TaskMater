document.getElementById('FormCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para a página home.html

    // Captura os valores dos campos com Destructuring
    const { value: nome } = document.getElementById('nome');
    const { value: email } = document.getElementById('email');
    const { value: telefone } = document.getElementById('telefone');
    const { value: dataNascimento } = document.getElementById('dataNascimento');
    const { value: senha } = document.getElementById('senha');
    const { value: repetirSenha } = document.getElementById('repetirSenha');

    // Valida se as senhas coincidem
    if (senha !== repetirSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Armazena os dados no sessionStorage com Spread Operator
    const cadastro = {
        nome,
        email,
        telefone,
        dataNascimento
    };

    sessionStorage.setItem('cadastro', JSON.stringify(cadastro));

    alert("Cadastro realizado com sucesso!");

});

