const form = document.getElementById('form-agenda-contatos');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaQuantidade();
    
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    
    if (nomes.includes(inputNome.value)) {
        alert(`O contato de ${inputNome.value} já existe!`);
    }
    else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

        inputNome.value = '';
        inputTelefone.value = '';
        }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;    
}

function atualizaQuantidade() {
    const quantidade = calculaQuantidade();
    document.querySelector('.resultado').innerHTML = quantidade;

}

function calculaQuantidade() {
    return nomes.length;
}