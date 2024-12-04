// Função para aguardar um tempo (em milissegundos)
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.flash-iten').forEach(item => {
        item.addEventListener('click', async () => { // Tornamos a função assíncrona
            const pergunta = item.querySelector('.pergunta');
            const resp = item.querySelector('.resp');
            const temas = item.querySelectorAll('.tema'); // Seleciona todos os elementos com a classe .tema

            console.log('Temas encontrados:', temas); // Verifique no console se os elementos são encontrados

            // Muda a exibição dos elementos
            if (pergunta.style.display === 'none') {
                item.classList.remove('ve');
                await wait(240);
                pergunta.style.display = 'inline';
                resp.style.display = 'none';
                
                // Verifique se 'temas' contém elementos
                temas.forEach(tema => {
                    console.log('Mudando display de tema:', tema);
                    tema.style.display = 'block'; // Manipula todos os elementos .tema
                });
            } else {
                item.classList.add('ve');
                await wait(240);
                pergunta.style.display = 'none';
                resp.style.display = 'inline';
                
                // Verifique se 'temas' contém elementos
                temas.forEach(tema => {
                    console.log('Mudando display de tema:', tema);
                    tema.style.display = 'none'; // Manipula todos os elementos .tema
                });
            }
        });
    });
});
