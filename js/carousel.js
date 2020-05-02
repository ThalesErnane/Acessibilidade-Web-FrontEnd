// Variáveis 
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');


// pegando os artigos
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

new0.style.display = 'block'

// Criaando indicador de slide atual 
var indicadorSlideAtual = document.createElement('span');// cria um elemento span 
indicadorSlideAtual.classList.add('escondeVisualmente'); // cria a class (escondeVisualmente) no elemento
indicadorSlideAtual.id = 'escondeVisualmente'; // adiciona um id ao elemento 
indicadorSlideAtual.textContent = '(Slide atual)'; // passa o texto a ser visualizado pelo user 



// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {


    // btn.href = 'javascript:void(0)' // tirando o deslocamento da pagina ao clicar no btn carousel
  
    // pega todas as notícias 
    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';

      // se data-sliderItem for igual ao data-noticia clicado atribui um diplay = block 
      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block'

      }


    }.bind(this));


    /*
    if( this.getAttribute('data-sliderItem') == '0'){
        new0.style.display = 'block';
        new1.style.display = 'none';
        new2.style.display = 'none';
    } else if (this.getAttribute('data-sliderItem') == '1'){
        new0.style.display = 'none';
        new1.style.display = 'block';
        new2.style.display = 'none';

    } else {
        new0.style.display = 'none';
        new1.style.display = 'none';
        new2.style.display = 'block';
    }

    */


    // pega o filho da class .listaDeArtigos-slider-item >>>> .escondeVisualmente e remove 
    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();// remove o Id    


    // pega o btn clicado e coloca a var indicadorSlideAtual
    this.append(indicadorSlideAtual);
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})