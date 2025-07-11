# 🚀 AWS Services - Flexbox + JavaScript ☁️

![AWS Header](assets/oi.gif)

Página interativa dos serviços AWS desenvolvida com **HTML**, **CSS (Flexbox)** e **JavaScript** para demonstrar layout responsivo e funcionalidades dinâmicas.

---

## 📁 Estrutura do Projeto

```
prova-junho/
├── 📄 index.html      # Estrutura principal da página
├── 🎨 style.css       # Estilos com Flexbox e responsividade  
├── ⚙️ script.js       # Backend JavaScript com dados e funcionalidades
└── 📂 assets/         # Imagens e GIFs dos serviços
    ├── a1.gif
    ├── step.png
    ├── S3.png
    ├── EC2.png
    ├── RDS.png
    └── lambda.png
```

---

## 🎯 Funcionalidades

### ✨ **Pesquisa em Tempo Real**
- Filtra serviços por nome, categoria ou descrição
- Atualização instantânea dos resultados

### 🔍 **Filtro por Categoria**
- Dropdown com categorias específicas
- Visualização organizada por tipo de serviço

### 🎨 **Interface Dinâmica**
- Cards gerados automaticamente via JavaScript
- Layout responsivo com Flexbox
- Animações e efeitos visuais

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estrutura da página |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilos e Flexbox |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Funcionalidades dinâmicas |

---

## 📱 Layout Responsivo

### Desktop
```css
.container-principal {
    display: flex;
    flex-direction: row;
}
```

### Mobile
```css
@media (max-width: 768px) {
    .container-principal {
        flex-direction: column;
    }
}
```

---

## 🎮 Como Usar

1. **🔍 Pesquisar**: Digite no campo de busca para filtrar serviços
2. **📂 Filtrar**: Use o dropdown para selecionar categoria específica
3. **👀 Visualizar**: Os cards são atualizados automaticamente

---

## 🌟 Serviços AWS Incluídos

| Serviço | Categoria | Descrição |
|---------|-----------|-----------|
| ![Step Functions](assets/step.png) **Step Functions** | Orquestração | Orquestra fluxos AWS |
| ![S3](assets/S3.png) **Amazon S3** | Armazenamento | Armazenamento de objetos |
| ![EC2](assets/EC2.png) **Amazon EC2** | Computação | Computação escalável |
| ![RDS](assets/RDS.png) **Amazon RDS** | Banco de Dados | Banco de dados gerenciado |
| ![Lambda](assets/lambda.png) **AWS Lambda** | Serverless | Execução sem servidor |

---

## 🚀 Demonstração

O projeto demonstra a integração perfeita entre:
- **Flexbox** para layout responsivo
- **JavaScript** para interatividade
- **Design moderno** com animações

---

*Desenvolvido com ❤️ para demonstrar conceitos de desenvolvimento web moderno*
