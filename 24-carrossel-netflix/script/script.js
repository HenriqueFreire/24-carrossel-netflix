const fila = document.querySelector('.conteudo-carrossel');
const atracoes = document.querySelectorAll('.atracao');
const flechaEsquerda = document.getElementById('flecha-esquerda');
const flechaDireita = document.getElementById('flecha-direita');
const numeroPaginas = Math.ceil(atracoes.length / 5);

flechaDireita.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorAtivo = document.querySelector('.indicadores .ativo');

    if(indicadorAtivo.nextSibling){
        indicadorAtivo.nextSibling.classList.add('ativo');
        indicadorAtivo.classList.remove('ativo');
    }
});

flechaEsquerda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorAtivo = document.querySelector('.indicadores .ativo');

    if(indicadorAtivo.previousSibling){
        indicadorAtivo.previousSibling.classList.add('ativo');
        indicadorAtivo.classList.remove('ativo');
    }
});

for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');
    
    if (i === 0) {
        indicador.classList.add('ativo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .ativo').classList.remove('ativo');
        e.target.classList.add('ativo');
    });
}

atracoes.forEach((atracao) => {
    atracao.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => { 
            atracoes.forEach(atracao => atracao.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave',() => {
    atracoes.forEach(atracao => atracao.classList.remove('hover'));
});