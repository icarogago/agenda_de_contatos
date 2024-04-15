    document.getElementById('form-contatos').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        // Get form field values
        const nomeContato = document.getElementById('nome-contato').value;
        const telContato = document.getElementById('tel-contato').value;
    
        // Create a new contact object
        const newContact = {
        name: nomeContato,
        phone: telContato
        };
    
        // Add the new contact to the list
        addContactToList(newContact);
    
        // Clear form fields
        document.getElementById('nome-contato').value = '';
        document.getElementById('tel-contato').value = '';
    });

    function addContactToList(contact) {
        const tableBody = document.getElementById('tabela-contato').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
    
        const nameCell = newRow.insertCell();
        nameCell.textContent = contact.name;
    
        const phoneCell = newRow.insertCell();
        phoneCell.textContent = contact.phone;
    }