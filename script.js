window.onload = function () {
    const audio = new Audio("musica.mp3");
    audio.loop = true; // Para repetir continuamente
    audio.play().catch(() => {
        let mAudio = window.confirm('Por algum motivo o audio não vai, deseja abilitar o display de audio no final da página')

        if(mAudio) {
            document.getElementsByTagName('audio')[0].style.display = 'block'
        }
    });
  };

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

document.addEventListener("DOMContentLoaded", () => {
    const selecao = document.getElementById('materias');
    const todos = document.querySelectorAll('.flash')
    const mensagem = document.getElementById('mensagem')
    

    selecao.addEventListener('change', () => {
        let valor = selecao.options[selecao.selectedIndex].value

        todos.forEach(element => {
            element.style.display = 'none';
        });

        switch (valor) {
            case 'mat':
                console.log('foi matemática')
                document.getElementById('s-mat').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Matemática`
                break        
            case 'por':
                console.log('foi português')
                document.getElementById('s-por').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Português`
                break
            case 'fis':
                console.log('foi física')
                document.getElementById('s-fis').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Física`
                break
            case 'qui':
                console.log('foi química')
                document.getElementById('s-qui').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Química`
                break
            case 'bio':
                console.log('foi biologia')
                document.getElementById('s-bio').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Biologia/Biotecnologia`
                break
            case 'geo':
                console.log('foi geografia')
                document.getElementById('s-geo').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Geografia`
                break
            case 'his':
                console.log('foi história')
                document.getElementById('s-his').style.display = 'flex'
                mensagem.innerText = `Flash Cards de História`
                break
            case 'pro':
                console.log('foi programação')
                document.getElementById('s-pro').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Programação (html, css, JavaScript)`
                break
            case 'ing':
                console.log('foi inglês')
                document.getElementById('s-ing').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Inglês`
                break
            case 'edf':
                console.log('foi educação financeira')
                document.getElementById('s-edf').style.display = 'flex'
                mensagem.innerText = `Flash Cards de Educação Financeira`
                break
            default:
                console.log('foi não')
                break
        }
    })
});