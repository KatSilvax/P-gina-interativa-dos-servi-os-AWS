// Array com dados dos serviços AWS
const servicos = [
    { id: 1, nome: "Step Functions", categoria: "Orquestração", descricao: "Orquestra fluxos AWS", icone: "🔄", imagem: "assets/step.png" },
    { id: 2, nome: "Amazon S3", categoria: "Armazenamento", descricao: "Armazenamento de objetos", icone: "📦", imagem: "assets/S3.png" },
    { id: 3, nome: "Amazon EC2", categoria: "Computação", descricao: "EC2: computação escalável", icone: "💻", imagem: "assets/EC2.png" },
    { id: 4, nome: "Amazon RDS", categoria: "Banco de Dados", descricao: "Banco de dados", icone: "🗄️", imagem: "assets/RDS.png" },
    { id: 5, nome: "AWS Lambda", categoria: "Serverless", descricao: "Execução sem servidor", icone: "⚙️", imagem: "assets/lambda.png" },
    { id: 6, nome: "Amazon DynamoDB", categoria: "Banco de Dados", descricao: "Banco de dados NoSQL", icone: "📊", imagem: "assets/dynamo.png" },
    { id: 7, nome: "Amazon CloudFront", categoria: "Rede", descricao: "CDN global", icone: "🌐", imagem: "assets/cloudfront1.png" },
    { id: 8, nome: "AWS IAM", categoria: "Segurança", descricao: "Gerenciamento de identidade", icone: "🔐", imagem: "assets/iam.png" },
    { id: 9, nome: "Amazon SNS", categoria: "Mensageria", descricao: "Serviço de notificação", icone: "📢", imagem: "assets/sns.png" },
    { id: 10, nome: "Amazon SQS", categoria: "Mensageria", descricao: "Fila de mensagens", icone: "📬", imagem: "assets/sqs1.png" },
    { id: 11, nome: "Amazon CloudWatch", categoria: "Monitoramento", descricao: "Monitoramento de recursos", icone: "📈", imagem: "assets/cw.png" },
    { id: 12, nome: "Amazon", categoria: "Monitoramento", descricao: "Monitoramento de recursos", icone: "📈", imagem: "assets/cw.png" },
    { id: 13, nome: "Amazon bedrock", categoria: "Monitoramento", descricao: "Monitoramento de recursos", icone: "📈", imagem: "assets/cw.png" },
];



// Função para renderizar cards

function renderizarCards(dados = servicos) {
    const container = document.querySelector('.conteudo-principal'); // Seleciona o container onde os cards serão renderizados
    container.innerHTML = dados.map(servico => `
        <div class="card">
            <h2>${servico.icone} ${servico.nome}</h2>
            ${servico.imagem ? `<img src="${servico.imagem}" alt="Logo ${servico.nome}" class="card-image">` : ''}  
            <small>Categoria: ${servico.categoria}</small>
        </div>
        
    `).join('');  // Gera o HTML dos cards a partir dos dados

    
    
}

function pesquisar(termo) {
    const filtrados = servicos.filter(servico => 
        servico.nome.toLowerCase().includes(termo.toLowerCase()) ||  // pesquisa por nome tanto maisculo quanto minúsculo
        servico.categoria.toLowerCase().includes(termo.toLowerCase()) ||
        servico.descricao.toLowerCase().includes(termo.toLowerCase())
    );
    renderizarCards(filtrados);
}


// Função de filtro por categoria
function filtrarPorCategoria(categoria) {  
    const filtrados = categoria === 'todos' ? servicos : 
        servicos.filter(servico => servico.categoria === categoria);
    renderizarCards(filtrados);
}

function toggleImagens() {  // função de esconder 
    const mostrar = document.getElementById("toggle-imagens").checked;
    document.querySelectorAll(".card small").forEach(el => 
        el.style.display = mostrar ? 'block' : 'none')}


// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderizarCards();
});