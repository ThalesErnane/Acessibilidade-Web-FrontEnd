var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function () {
    this.setCustomValidity(''); // remove a mensagem de validação 

    // verifica se o campo é invalido ou não 
    if (!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo!'); // cep inválido 

            // coloca img de erro na class do campo cep
            this.parentNode.classList.add('contatoCampo--erro')
    }
}