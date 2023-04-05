const botoesCarrossel = document.querySelectorAll('.botoes-carrossel .botao');
const imagens = document.querySelectorAll('.imagem');
const descricao = document.querySelector(".descricao");

const textosDescricao = [
    "Comunicado da equipe Spacechair: Estamos animados em anunciar que a nossa startup está prestes a entrar na lista das empresas de prestação de serviços Ltda em T.I. ",
    "Apesar de já existirmos há quase um ano, estivemos nos concentrando em desenvolver as nossas ferramentas, suportes e habilidades individualmente e em equipe para que pudéssemos oferecer serviços de melhor qualidade aos nossos clientes.",
    "Diante disso, trabalharemos com grandes e pequenas empresas, comércios, escritórios e gerentes, tanto presencialmente quanto remotamente. Além disso, estamos preparados para atender a demandas de empresas e negócios estrangeiros, sempre buscando ir além das expectativas.",
    "Agradecemos pelo suporte contínuo e estamos ansiosos para trabalhar juntos para fornecer soluções de T.I. inovadoras e eficientes. Em breve, mais informações sobre nossos serviços estarão disponíveis em nosso site oficial.",
    "Além disso, temos grandes planos para o futuro. Projetamos, para o próximo ano, adaptar uma plataforma de educação e treinamentos para jovens aprenderem a programar. Acreditamos que investir em educação é uma forma de contribuir para o futuro do nosso setor e, ao mesmo tempo, ajudar a formar profissionais qualificados para o mercado de trabalho.",
    "Estamos empolgados com a possibilidade de tornar a programação mais acessível e inclusiva para todos, e acreditamos que esta plataforma será um passo importante em direção a esse objetivo. Fique atento para mais novidades sobre essa iniciativa nos próximos meses."
];

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        descricao.textContent = textosDescricao[indice];
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}