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
        shortDesc: "Dashboard gerencial para carteira de investimentos.",
        fullDesc: "Projeto completo de business intelligence para controle de performance de ativos, utilizando Power BI com modelagem em estrela, DAX avançado e segmentações inteligentes. Visualizações interativas e KPIs dinâmicos. Aplicado na prática para tomada de decisão financeira.",
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
        fullDesc: "Recebeu o título de Melhor Dashboard do campeonato interno de BI. Apresenta ranking, estatísticas comparativas e uma experiência visual imersiva. Foi destaque na live oficial e artigo no LinkedIn.",
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
        fullDesc: "Dashboard para gestão de saúde com foco em tomada de decisão. Filtros por unidade, análise de fluxo de pacientes e indicadores de performance operacional. Projeto desenvolvido para estudo de KPIs de saúde.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZjBlMzY2ZGUtNGY5Yi00ZjRkLWJhMmItYzJhMjUwMzJiZmZiIiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/wr4tvWqD/tela-hospital-IN.png",
        champion: false
    },
    {
        id: 3,
        title: "🚦 ACIDENTES DE TRÂNSITO",
        shortDesc: "Análise geoespacial e temporal de acidentes.",
        fullDesc: "Projeto interativo com mapas, tendências sazonais e classificação de gravidade. Utiliza dados públicos e transformações em Power Query. Desenvolvido como exercício de análise exploratória e visualização de dados.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiMjYyZWU4YTEtZDM3MS00MjM1LTg3ZjYtM2ExMjZlZGE2NmZhIiwidCI6ImM2MGM2YThhLWEwOWYtNDBlMy1hOWE0LTdiOGU1NWNmMjMxOCJ9",
        img: "https://i.ibb.co/KpvNxzRV/tela-4-transito.png",
        champion: false
    }
];

// Renderizar ferramentas
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

// Renderizar projetos genérico
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

// Renderizar automações
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

// Renderizar Champions Spotlight
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

// Modal para automações
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

// Modal para projetos
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

// Fechar modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Inicializar
function init() {
    renderTools();
    renderProjects(projetosReais, 'projetosReaisContainer');
    renderAutomacoes();
    renderChampionSpotlight();
    renderProjects(treinamento, 'treinamentoContainer');
    
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('DOMContentLoaded', init);