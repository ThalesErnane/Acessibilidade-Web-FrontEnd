// Variáveis
var video = document.querySelector('video');
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';



// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true;
  video.removeAttribute('controls', true);
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');  
  conteudoForaDialog.inert = false;
  btnAbreDialog.focus(); 
  video.setAttribute('controls', true);
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);


// fecha o dialog ao clicar no overlay, lado de fora do dialog 
dialogOverlay.addEventListener('click', fechandoDialog);

// fechar caixa de dialogo ao apertar tecla ESC, ("News Sem Spam")
document.addEventListener('keyup', function(evento){
    if (evento.keyCode == 27){ 
      // verifica se a telca q ele clica é o ESC, fecha ao ser TRUE 
        fechandoDialog()

    }
 

})
