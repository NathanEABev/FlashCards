document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.flash-iten').forEach(item => {
        item.addEventListener('click', () => {
            const pergunta = item.querySelector('.pergunta');
            const resp = item.querySelector('.resp');

            if (pergunta.style.display === 'none') {
                pergunta.style.display = 'block';
                resp.style.display = 'none';
            } else {
                pergunta.style.display = 'none';
                resp.style.display = 'block';
                
            }
        });
    });
});
