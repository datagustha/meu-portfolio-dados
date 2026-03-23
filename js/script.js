// Inicializar AOS (animações)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Ferramentas
const tools = [
    { name: "Python", icon: "fab fa-python", color: "#3776AB", level: "Intermediário", desc: "automação, web scraping" },
    { name: "SQL", icon: "fas fa-database", color: "#00758f", level: "Avançado", desc: "joins, consultas" },
    { name: "Power BI", icon: "fas fa-chart-line", color: "#F2C811", level: "Expert", desc: "DAX, modelagem" },
    { name: "Excel", icon: "fas fa-file-excel", color: "#1F724C", level: "Avançado", desc: "análises" },
    { name: "n8n", icon: "fas fa-robot", color: "#3b82f6", level: "Intermediário", desc: "automação fluxos" },
    { name: "Pipelines", icon: "fas fa-cloud-upload-alt", color: "#0b5e7e", level: "Noções", desc: "ETL" }
];

// Projetos Reais
const projetosReais = [
    {
        id: 1,
        title: "📈 CARTEIRA ANALYTICS",
        shortDesc: "Dashboard para gestão de carteira de clientes, análise de inadimplência e performance financeira.",
        fullDesc: `
            <strong>📊 Sobre o Projeto:</strong><br>
            Dashboard desenvolvido para gestão completa de carteira de clientes financiados (veículos). A ferramenta permite acompanhar em tempo real o comportamento de pagamento, inadimplência e rentabilidade da operação.<br><br>
            
            <strong>🎯 Contexto e Objetivos:</strong><br>
            Como Analista de BI, desenvolvi este Dashboard para fornecer uma visão 360° da carteira de clientes. O principal objetivo é monitorar a saúde financeira da operação, identificar clientes em risco de inadimplência e otimizar a gestão de cobrança.<br><br>
            
            <strong>📁 Estrutura do Dashboard:</strong><br>
            <strong>🏠 HOME:</strong> Visão executiva com os principais KPIs da carteira: valor total da carteira, valor em atraso, valor pago, quantidade de clientes, percentual de clientes pagantes e comparação com meses anteriores.<br>
            <strong>📊 DRE:</strong> Análise financeira detalhada com valor financiado, contratos ativos, spread (lucro da operação) e rentabilidade por cliente.<br>
            <strong>📋 PARCELAS:</strong> Visão granular de todas as parcelas da carteira, com filtros por cliente, contrato, status, fase de pagamento e dias de atraso. Permite identificar rapidamente quais contratos estão em situação crítica.<br>
            <strong>⚠️ PNP 30 e PNP 60:</strong> Análise específica das primeiras parcelas não pagas (PNP) nos prazos de 30 e 60 dias. Esses indicadores são fundamentais para prever inadimplência futura e tomar ações preventivas.<br><br>
            
            <strong>🔍 Principais Insights e Funcionalidades:</strong><br>
            • <strong>Visão de Inadimplência:</strong> Identificação de clientes por fase de atraso (30, 60, 90+ dias) e por score de crédito.<br>
            • <strong>Análise Temporal:</strong> Comparativo mensal de valor pago vs. valor esperado, identificando meses críticos.<br>
            • <strong>Detalhamento por Cliente:</strong> Análise individualizada mostrando histórico de pagamentos, dias de atraso e comportamento.<br>
            • <strong>Filtros Dinâmicos:</strong> Segmentação por ano, mês, cliente, contrato, status do boleto e fase de pagamento.<br><br>
            
            <strong>📈 Resultados e Impacto:</strong><br>
            • Redução de 25% na inadimplência após implementação do monitoramento por PNP 30/60.<br>
            • Identificação antecipada de clientes com risco de default, permitindo ação preventiva.<br>
            • Aumento de 15% na taxa de recuperação de crédito com acompanhamento semanal.<br>
            • Centralização de todas as informações da carteira em um único painel, eliminando planilhas manuais.<br><br>
            
            <strong>🛠️ Skills Utilizadas:</strong><br>
            Power BI | DAX Avançado | Modelagem de Dados | SQL | Figma (prototipagem)
        `,
        link: "https://app.powerbi.com/view?r=eyJrIjoiNDBkNWEzNjktM2ZkNS00Zjc0LTkzODMtYjdlNmM5M2RlMjZkIiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/svn20qQ2/tela-carteira-IN.png"
    }
];

// Automações
const automacoes = [
    {
        id: 1,
        title: "🤖 Web Scraping com Python",
        tech: "Python",
        shortDesc: "Script que acessa sites, extrai dados e envia para Google Planilhas.",
        fullDesc: "Script em Python que automatiza a coleta de dados de funcionários. O código acessa o sistema, processa as informações e estrutura os dados para análise. Reduziu o tempo de coleta manual de 2 horas para 5 minutos.",
        link: "#",
        img: "https://i.ibb.co/RGcQwXK1/automacoes-python.png"
    },
    {
        id: 2,
        title: "📧 Envio Power BI → CEO",
        tech: "n8n",
        shortDesc: "Fluxo que envia relatórios do Power BI para o CEO diariamente.",
        fullDesc: "Automação no n8n que captura imagens dos dashboards Power BI e envia por e-mail diariamente para o CEO, garantindo visibilidade dos KPIs. Processo totalmente automatizado e agendado.",
        link: "#",
        img: "https://i.ibb.co/nN8YSMcs/powerbi-n8n.png"
    },
    {
        id: 3,
        title: "📄 Preenchimento Automático",
        tech: "Python",
        shortDesc: "Preenche contratos automaticamente com dados do Google Planilhas.",
        fullDesc: "Script que lê dados de contratos em Google Planilhas e preenche automaticamente documentos modelo, gerando contratos personalizados em minutos. Eliminou o trabalho manual de preenchimento.",
        link: "#",
        img: "https://i.ibb.co/RGcQwXK1/automacoes-python.png"
    },
    {
        id: 4,
        title: "🔄 CRM → Banco de Dados",
        tech: "Python",
        shortDesc: "Integração que extrai dados do CRM e alimenta banco de dados SQL.",
        fullDesc: "Pipeline em Python que consome dados da API do CRM, trata e transforma as informações, e insere em banco de dados relacional. Automatizou o processo de atualização diária de dados de clientes.",
        link: "#",
        img: "https://i.ibb.co/RGcQwXK1/automacoes-python.png"
    }
];

// Treinamento
const treinamento = [
    {
        id: 1,
        title: "🏆 X-CHAMPIONS",
        shortDesc: "Dashboard vencedor - Melhor Dashboard do campeonato.",
        fullDesc: `
            <strong>🏅 Destaque:</strong> Recebeu o título de <strong>Melhor Dashboard</strong> do campeonato interno de BI!<br><br>
            
            <strong>📊 Sobre o Projeto:</strong><br>
            Como parte da estratégia de inovação da XSports, apresento uma análise detalhada do projeto de dados para a temporada 2022/2023. O objetivo deste projeto é fornecer insights aprofundados e interativos sobre a UEFA Champions League, utilizando dados históricos e em tempo real.<br><br>
            
            <strong>👥 Pesquisa Sobre o Público-Alvo:</strong><br>
            O público-alvo deste projeto é composto por diversas partes interessadas no universo esportivo, incluindo analistas de desempenho, treinadores, comentaristas e fãs de esportes. A demanda por dados precisos e análises detalhadas é crescente, especialmente entre redes de emissoras esportivas globais que buscam manter uma cobertura de alto nível dos jogos.<br><br>
            
            <strong>🎯 Objetivo do Projeto como Ferramenta de Análise:</strong><br>
            O projeto foi concebido como uma ferramenta poderosa para analisar e interpretar dados da UEFA Champions League. Além de fornecer estatísticas, o objetivo é apresentar insights acionáveis que ajudem nas tomadas de decisão estratégicas. Através de visualizações impactantes e uma abordagem dinâmica, busca-se transformar dados complexos em informações acessíveis e úteis para todas as partes interessadas.<br><br>
            
            <strong>📊 Tratamento de Dados e Dados Adicionais:</strong><br>
            Os dados utilizados neste projeto foram extraídos via <strong>API-Sports</strong>, abrangendo as temporadas de 2022 e 2023. Além dos dados básicos sobre jogos e estatísticas, foram incluídas informações detalhadas sobre desempenho das equipes, tendências de jogo e perfis de jogadores. Isso enriqueceu significativamente o dashboard, proporcionando uma análise mais robusta e abrangente.<br><br>
            
            <strong>📈 Escolha do Dashboard Interativo como Formato de Comunicação:</strong><br>
            Este dashboard foi desenvolvido especialmente para analistas e emissores, visando proporcionar insights rápidos e precisos durante as coberturas da UEFA Champions League. Ele atende à necessidade de análises detalhadas e em tempo real, permitindo uma exploração profunda dos dados por meio de uma interface intuitiva. Essa interface facilita a compreensão e a tomada de decisões.<br><br>
            
            <strong>🔍 Análise Detalhada do Dashboard:</strong><br>
            <strong>🏟️ Indicadores Principais:</strong> O dashboard destaca os indicadores principais como total de jogadores, total de times, visualização do campo com insights, e qual árbitro mais apitou jogos, oferecendo uma visão abrangente das estatísticas mais relevantes.<br>
            <strong>⚽ Estatísticas Detalhadas:</strong> Apresenta total de chutes, faltas, cartões por temporada, total de vitórias, posse de bola e detalhamento dos chutes, permitindo uma análise minuciosa do desempenho em campo.<br>
            <strong>📅 Desempenho nos Jogos:</strong> Análise do desempenho dos times em casa e fora, localização dos jogos, status, árbitro, tabela da fase de grupo, comparação de times como mandante e visitante, gols marcados e sofridos, fornecendo uma visão completa do desempenho nas partidas.<br>
            <strong>🏆 Análise dos Times:</strong> Quantidade de títulos, datas de conquista, participações, jogadores por posição, local de origem do time, estádio, oferecendo uma visão detalhada do histórico e estrutura das equipes.<br>
            <strong>👥 Perfil dos Jogadores:</strong> Avaliação do rating, pontos fortes e fracos, idade, altura e peso dos jogadores, proporcionando insights sobre o perfil e capacidades dos atletas.<br>
            <strong>📊 Comparativo de Times:</strong> Comparação de títulos, participações, percentual de aproveitamento, gols marcados e sofridos, quantidade de jogadores, rating do time em diferentes aspectos (ataque, chute, força, inteligência, passe, defesa), permitindo uma análise comparativa detalhada.<br>
            <strong>🧠 Quiz Interativo:</strong> Um teste de conhecimento com 5 perguntas baseadas nos insights apresentados, permitindo aos usuários avaliar e reforçar seu entendimento das análises realizadas.<br><br>
            
            <strong>📊 Interpretação de Dados:</strong><br>
            Através de uma combinação de dados, visualizações e uma abordagem interativa, o dashboard busca não apenas informar, mas também capacitar os usuários a tomar decisões estratégicas baseadas em dados.<br><br>
            
            <strong>📈 Resultados e Impacto:</strong><br>
            • Dashboard reconhecido como <strong>Melhor Dashboard do Campeonato</strong> de BI;<br>
            • Interface interativa que permite análises em tempo real durante coberturas esportivas;<br>
            • Integração com API-Sports para dados atualizados e precisos;<br>
            • Ferramenta de apoio para analistas, treinadores e emissoras esportivas.<br><br>
            
            <strong>🛠️ Skills Utilizadas:</strong><br>
            Power BI | DAX | API-Sports | SQL | Figma | Modelagem de Dados | UX/UI Design
        `,
        link: "https://app.powerbi.com/view?r=eyJrIjoiODg2YmVhYjgtZTQ3MC00MWFkLWI5OTEtZTAzMTFkMDczODE5IiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/KjxQHngZ/tela-xchampions-IN.png",
        champion: true,
        liveLink: "https://www.youtube.com/live/BMdaK5L9uC4?si=SFDS-BJQnB1tyM11",
        postLink: "https://www.linkedin.com/feed/update/urn:li:activity:7209284144525152256/"
    },
    {
        id: 2,
        title: "🏥 X-HOSPITAL",
        shortDesc: "Monitoramento de indicadores hospitalares.",
        fullDesc: `
            <strong>📑 Contextualização:</strong><br>
            Quero compartilhar minha experiência no meu #2 desafio Xperium. No desafio anterior sobre acidentes de trânsito, desenvolvi um dashboard que me deixou bastante satisfeito e teve uma boa recepção. Recebi vários feedbacks positivos e mantive a esperança de estar entre os três primeiros colocados. Ao revisar as entregas dos participantes, ainda acreditei que tinha chances, mas havia uma pedra no meio do caminho... no meio do caminho havia uma pedra. Durante uma conversa com a primeira vencedora do desafio, Malu Alves, ela me disse algo que ficou marcado: <strong>"Mesmo que não aconteça, não desista. Seu trabalho está ótimo e com a experiência, os próximos serão ainda melhores."</strong> Seguindo o conselho do nosso mentor Leonardo Karpinski, "busque orientação de quem realmente entende do negócio", procurei o vencedor do desafio de trânsito, Daniel Resende. Nossa conversa foi muito produtiva e, sem dúvida, contribuiu para este resultado. Quero expressar minha gratidão a todos vocês.<br><br>
            
            <strong>🏥 Sobre o Projeto:</strong><br>
            Esta análise minuciosa do projeto visa fornecer uma visão abrangente da situação hospitalar por meio de um Dashboard. Solicito pela equipe do Xhospital, o projeto busca transformar dados em insights estratégicos para a gestão hospitalar.<br><br>
            
            <strong>👥 Público-Alvo:</strong><br>
            Este projeto hospitalar é voltado para stakeholders, analistas de saúde, gestores hospitalares e profissionais interessados em analisar a situação do hospital e dos seus pacientes de todas as idades.<br><br>
            
            <strong>🎯 Objetivo do Projeto:</strong><br>
            Desenvolvido como uma ferramenta robusta, o objetivo é fornecer informações precisas aos líderes hospitalares sobre pacientes, classes médicas, procedimentos e muito mais. Reconhecemos a importância de ir além dos dados estatísticos, buscando demonstrar como as práticas médicas podem ser aprimoradas para oferecer um atendimento de excelência. Utilizamos uma abordagem visual, incluindo imagens, análises e storytelling, juntamente com infográficos, para destacar padrões e promover a compreensão dos dados.<br><br>
            
            <strong>📊 Tratamento de Dados:</strong><br>
            Os dados foram obtidos da base de dados fornecida pela equipe Xperium através do <strong>data.world</strong>, abrangendo dados do período de <strong>2023 a 2024</strong>.<br><br>
            
            <strong>🔍 Análise Detalhada do Dashboard:</strong><br>
            <strong>📋 Informativos:</strong> Destacamos informações cruciais, como admissões, altas e suas proporções, oferecendo uma visão rápida da movimentação hospitalar.<br>
            <strong>💰 Faturamento:</strong> Apresentamos dados de faturamento, admissões e internações, incluindo comparações com anos e meses anteriores para identificar tendências e sazonalidades.<br>
            <strong>❓ Perguntas-chave:</strong> Incluímos respostas de perguntas chaves feitas pelos diretores do hospital, abordando questões como taxa de mortalidade, convênios mais lucrativos e classes de procedimentos mais realizadas.<br><br>
            
            <strong>🗺️ Recursos Visuais e Análises:</strong><br>
            <strong>Synoptic Panel:</strong> Utilizamos painéis sinópticos para visualizar a distribuição geográfica dos pacientes dentro das acomodações do hospital, permitindo uma análise espacial intuitiva.<br>
            <strong>👨‍⚕️ Médicos mais atuantes:</strong> Destacamos os médicos mais ativos em diferentes áreas de ocupação, identificando os profissionais com maior volume de atendimentos.<br>
            <strong>👥 Análise por Gênero e Faixa Etária:</strong> Fornecemos análises personalizadas por filtro de gênero e faixa etária, detalhando totais e proporções de pacientes atendidos.<br><br>
            
            <strong>📂 Resumo do Dashboard:</strong><br>
            O projeto de análise de internações hospitalares desenvolvido para o desafio Xperium representa uma nova conquista significativa em oferecer uma compreensão abrangente da dinâmica hospitalar. Utilizando dados fornecidos pela equipe Xperium, abrangendo o período de 2023 a 2024, o dashboard elaborado apresenta uma variedade de informações cruciais, incluindo admissões, altas, faturamento e respostas a perguntas-chave dos diretores do hospital. Destaca-se também a utilização de ferramentas visuais, como plantas das acomodações por meio de painéis sinópticos, e análises detalhadas por gênero e faixa etária. O projeto busca oferecer uma base sólida para a tomada de decisões estratégicas e o aprimoramento contínuo das práticas médicas no ambiente hospitalar.<br><br>
            
            <strong>📈 Resultados e Impacto:</strong><br>
            • Visão abrangente da situação hospitalar com indicadores estratégicos;<br>
            • Identificação de convênios mais lucrativos e procedimentos mais realizados;<br>
            • Análise de taxa de mortalidade para tomada de decisão;<br>
            • Ferramenta de suporte para gestores hospitalares e stakeholders.<br><br>
            
            <strong>🛠️ Skills Utilizadas:</strong><br>
            Power BI | DAX | SQL | Figma | Synoptic Panel | Storytelling | Data Visualization
        `,
        link: "https://app.powerbi.com/view?r=eyJrIjoiZjBlMzY2ZGUtNGY5Yi00ZjRkLWJhMmItYzJhMjUwMzJiZmZiIiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/wr4tvWqD/tela-hospital-IN.png",
        champion: false
    },
    {
        id: 3,
        title: "🚦 ACIDENTES DE TRÂNSITO",
        shortDesc: "Análise geoespacial e temporal de acidentes.",
        fullDesc: `
            <strong>💛 Sobre o Projeto:</strong><br>
            Encaro este desafio como uma verdadeira superação, especialmente porque desenvolvi este projeto com dedicação para contribuir com a conscientização no trânsito. O mês de maio é um período importante para reforçar a segurança viária, e este dashboard busca fornecer insights valiosos para evitar acidentes.<br><br>
            
            <strong>🎯 Contexto e Objetivos:</strong><br>
            Como Analista de Business Intelligence, desenvolvi este Dashboard para fornecer uma visão consolidada dos principais indicadores de acidentes de trânsito. O objetivo é facilitar a análise das principais causas, identificar padrões e ajudar na tomada de decisões estratégicas para reduzir ocorrências.<br><br>
            
            <strong>📊 Principais Insights e Descobertas:</strong><br>
            <strong>📈 Análises Personalizadas:</strong><br>
            • Previsão de acidentes até o final do ano considerando a média atual;<br>
            • Total de acidentes por fase do dia e por pista;<br>
            • Classificações de causas que cresceram em comparação ao ano anterior.<br><br>
            
            <strong>📁 Estrutura do Dashboard:</strong><br>
            <strong>🏠 Quadro 1 - Visão Geral:</strong><br>
            • Média de km percorridos por um veículo antes de um acidente;<br>
            • Total de acidentes por mês e sua representatividade em mortes;<br>
            • Total de acidentes por estado, com a respectiva porcentagem do total;<br>
            • Detalhamento geográfico por estado.<br>
            
            <strong>⚠️ Quadro 2 - Causas e Rodovias:</strong><br>
            • Principais causas de acidentes com o percentual do total, filtráveis por tipo de via;<br>
            • Detalhamento das rodovias mais perigosas;<br>
            • Análise de dispersão das causas que aumentaram em relação ao ano anterior.<br>
            
            <strong>📊 Quadro 3 - Comparativo e Tendências:</strong><br>
            • Comparativo YoY (Year over Year), com detalhamento;<br>
            • Fluxo de acidentes por semana e horário;<br>
            • Recomendações baseadas nos insights encontrados.<br><br>
            
            <strong>🔍 Desafios Respondidos:</strong><br>
            <strong>◽ Quais rodovias são as mais perigosas?</strong><br>
            Ofereço uma visão das rodovias mais perigosas, detalhando as principais causas de mortes.<br>
            
            <strong>◽ Quais são as causas de acidentes mais comuns?</strong><br>
            Apresento as causas que mais resultam em fatalidades no trânsito.<br>
            
            <strong>◽ Existe um período ou época do ano em que as ocorrências aumentam?</strong><br>
            O período de maior incidência de acidentes é entre 13h e 18h, especialmente aos domingos em pleno dia.<br>
            
            <strong>◽ Qual a proporção de acidentes com vítimas fatais?</strong><br>
            Incluo uma análise da taxa de letalidade, destacando a situação de cada estado.<br><br>
            
            <strong>📈 Resultados e Impacto:</strong><br>
            • Identificação dos horários e dias críticos para direcionamento de fiscalização;<br>
            • Mapeamento das rodovias com maior índice de fatalidades;<br>
            • Análise de tendências para prevenção de acidentes;<br>
            • Base de dados estruturada para tomada de decisão estratégica.<br><br>
            
            <strong>🛠️ Metodologia e Abordagem:</strong><br>
            O Dashboard proporciona uma visão abrangente e personalizada do desempenho de acidentes de trânsito, permitindo a tomada de decisões informadas e estratégicas para evitar que esse número aumente até o final do ano.<br><br>
            
            <strong>⚙️ Skills Utilizadas:</strong><br>
            Power BI | DAX | SQL | Figma | Análise de Dados Geoespaciais
        `,
        link: "https://app.powerbi.com/view?r=eyJrIjoiMjYyZWU4YTEtZDM3MS00MjM1LTg3ZjYtM2ExMjZlZGE2NmZhIiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/KpvNxzRV/tela-4-transito.png",
        champion: false
    }
];

// ========== DEPOIMENTOS CARROSSEL ==========
const depoimentosSlides = [
    { id: 1, imagem: "https://i.ibb.co/Mk366454/recomendacao-junior.png", autor: "Junior Gamasso" },
    { id: 2, imagem: "https://i.ibb.co/TJHKf58/recomendacao-thiago.png", autor: "Thiago" },
    { id: 3, imagem: "https://i.ibb.co/vvV33thq/recomendacao-ana-paula.png", autor: "Ana Paula Rangel" },
    { id: 4, imagem: "https://i.ibb.co/LDnGPwzK/recomendacao-sayuri.png", autor: "Sayuri Valente" }
];

let currentSlide = 0;
let slideInterval;

function renderDepoimentosCarousel() {
    const slidesContainer = document.getElementById('depoimentosCarousel');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!slidesContainer) return;
    
    // Preencher os slides
    depoimentosSlides.forEach((slide, index) => {
        const slideDiv = document.getElementById(`slide${index + 1}`);
        if (slideDiv) {
            slideDiv.innerHTML = `
                <img src="${slide.imagem}" alt="Depoimento de ${slide.autor}" style="max-width:100%; border-radius:20px;">
            `;
        }
    });
    
    // Criar indicadores
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
        depoimentosSlides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(dot);
        });
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.depoimento-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next >= depoimentosSlides.length) next = 0;
    showSlide(next);
}

function goToSlide(index) {
    clearInterval(slideInterval);
    showSlide(index);
    startCarousel();
}

function startCarousel() {
    slideInterval = setInterval(nextSlide, 5000);
}

// ========== RECOMENDAÇÕES FIXAS ==========
const recomendacoesFixas = [
    {
        id: 1,
        imagem: "https://i.ibb.co/TDpnXqWs/recomendacao-ceo-xperium.png",
        texto: "Recomendação do CEO da Xperiun pelo trabalho e dedicação no desafio de BI. Reconhecimento pela qualidade das entregas e comprometimento com os projetos.",
        autor: "CEO - Xperiun"
    },
    {
        id: 2,
        imagem: "https://i.ibb.co/d4LktsJs/recomendacao-excompradora-usa.png",
        texto: "Compartilhando seu conhecimento, Luiz Gusthavo me ajudou a entender o Power BI como ninguém havia feito antes, em seu trabalho voluntário. Sou muito grata pela paciência e didática excepcionais.",
        autor: "Connie Rodger - Ex-compradora (EUA)"
    }
];

function renderRecomendacoesFixas() {
    const container = document.getElementById('recomendacoesFixasContainer');
    if (!container) return;
    
    container.innerHTML = recomendacoesFixas.map(rec => `
        <div class="recomendacao-fixa-card" data-aos="fade-up">
            <img class="recomendacao-fixa-img" src="${rec.imagem}" alt="Recomendação de ${rec.autor}">
            <div class="recomendacao-fixa-texto">"${rec.texto}"</div>
            <div class="recomendacao-fixa-autor">— ${rec.autor}</div>
        </div>
    `).join('');
}

// ========== FUNÇÕES DE RENDERIZAÇÃO ==========
function renderTools() {
    const container = document.getElementById('toolsGrid');
    if (!container) return;
    container.innerHTML = tools.map((tool, i) => `
        <div class="tool-card" data-aos="fade-up" data-aos-delay="${i * 50}">
            <i class="${tool.icon}" style="color: ${tool.color}"></i>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-level">${tool.level}</div>
            <div style="font-size: 0.7rem; margin-top: 0.3rem; color: #b0b0b0;">${tool.desc}</div>
        </div>
    `).join('');
}

function renderProjects(projects, containerId, hasAnimation = true) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = projects.map((project, i) => `
        <div class="project-card" data-id="${project.id}" ${hasAnimation ? `data-aos="fade-up" data-aos-delay="${i * 80}"` : ''}>
            <img class="project-img" src="${project.img}" alt="${project.title}">
            <div class="project-info">
                <div class="project-title">
                    ${project.title}
                    ${project.champion ? '<span class="champion-tag">⭐ CAMPEÃO ⭐</span>' : ''}
                </div>
                <div class="project-desc">${project.shortDesc}</div>
                <span style="font-size: 0.7rem; color: #F97316;">🔍 Clique para detalhes</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll(`#${containerId} .project-card`).forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const project = projects.find(p => p.id === id);
            if (project) openModal(project);
        });
    });
}

function renderAutomacoes() {
    const container = document.getElementById('automacoesContainer');
    if (!container) return;
    container.innerHTML = automacoes.map((auto, i) => `
        <div class="automacao-card" data-id="${auto.id}" data-aos="fade-up" data-aos-delay="${i * 80}">
            <img class="automacao-img" src="${auto.img}" alt="${auto.title}">
            <div class="automacao-info">
                <div class="automacao-title">
                    ${auto.title}
                    <span class="automacao-tech">${auto.tech}</span>
                </div>
                <div class="automacao-desc">${auto.shortDesc}</div>
                <span style="font-size: 0.7rem; color: #F97316;">⚙️ Clique para detalhes</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.automacao-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const auto = automacoes.find(a => a.id === id);
            if (auto) openModalAuto(auto);
        });
    });
}

function renderChampionSpotlight() {
    const container = document.getElementById('championSpotlight');
    if (!container) return;
    const champ = treinamento.find(p => p.champion === true);
    if (champ) {
        container.innerHTML = `
            <div class="champion-content">
                <span style="background: #F97316; padding: 0.2rem 0.8rem; border-radius: 50px; font-size: 0.8rem; font-weight: bold; color: #000;">🏅 MELHOR DASHBOARD 🏅</span>
                <h3>🏁 X-CHAMPIONS · Prêmio Destaque</h3>
                <p>Dashboard campeão do campeonato interno de BI — reconhecimento por inovação, design e performance analítica.</p>
                <div class="champion-links">
                    <a href="${champ.postLink}" target="_blank"><i class="fab fa-linkedin"></i> Post oficial</a>
                    <a href="${champ.liveLink}" target="_blank"><i class="fab fa-youtube"></i> Live premiação</a>
                </div>
            </div>
            <img class="champion-img" src="${champ.img}" alt="X-Champions">
        `;
    }
}

function openModalAuto(auto) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').innerHTML = `${auto.title} <span class="automacao-tech" style="background:#F97316;">${auto.tech}</span>`;
    document.getElementById('modalDesc').innerHTML = auto.fullDesc;
    document.getElementById('modalLink').innerHTML = `<strong>📁 Status:</strong> Projeto em produção - mais detalhes em breve.`;
    document.getElementById('modalImg').src = auto.img;
    document.getElementById('modalBtn').href = auto.link;
    document.getElementById('modalBtn').style.display = auto.link !== '#' ? 'inline-block' : 'none';
    modal.style.display = 'flex';
}

function openModal(project) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').innerHTML = project.title;
    document.getElementById('modalDesc').innerHTML = project.fullDesc;
    
    let linkHtml = `<strong>🔗 Link:</strong> <a href="${project.link}" target="_blank" style="color: #F97316;">${project.link.substring(0, 60)}...</a>`;
    
    if (project.champion && project.liveLink && project.postLink) {
        linkHtml += `<div style="margin-top: 0.8rem;">
            <strong>🏆 Destaque:</strong><br>
            <a href="${project.postLink}" target="_blank" style="color: #F97316;"><i class="fab fa-linkedin"></i> Post oficial do prêmio</a><br>
            <a href="${project.liveLink}" target="_blank" style="color: #F97316;"><i class="fab fa-youtube"></i> Live da premiação</a>
        </div>`;
    }
    
    document.getElementById('modalLink').innerHTML = linkHtml;
    document.getElementById('modalImg').src = project.img;
    document.getElementById('modalBtn').href = project.link;
    document.getElementById('modalBtn').style.display = 'inline-block';
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// ========== INICIALIZAÇÃO ==========
function init() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    renderTools();
    renderProjects(projetosReais, 'projetosReaisContainer');
    renderAutomacoes();
    renderChampionSpotlight();
    renderDepoimentosCarousel();
    renderRecomendacoesFixas();
    renderProjects(treinamento, 'treinamentoContainer');
    
    // Iniciar carrossel após renderizar
    setTimeout(() => {
        if (document.querySelectorAll('.depoimento-slide').length > 0) {
            showSlide(0);
            startCarousel();
        }
    }, 100);
    
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('DOMContentLoaded', init);