document.getElementById('form-contatos').addEventListener('submit', function(event) {
    event.preventDefault(); 

    //Coletando dados dos inputs
    const nomeContato = document.getElementById('nome-contato').value;
    const telContato = document.getElementById('tel-contato').value;

    //Criando um novo contato
    const NovoContato = {
    nome: nomeContato,
    telefone: telContato
    };

    // Adicionando o contato na Tabela
    addContato(NovoContato);

    // Limpando Campos
    document.getElementById('nome-contato').value = '';
    document.getElementById('tel-contato').value = '';
});

function addContato(contato) {
    const TabelaCorpo = document.getElementById('tabela-contato').getElementsByTagName('tbody')[0];
    const addLinha = TabelaCorpo.insertRow();

    const nomeCelula = addLinha.insertCell();
    nomeCelula.textContent = contato.nome;

    const telCelula = addLinha.insertCell();
    telCelula.textContent = contato.telefone;
}