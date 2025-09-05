# ⚽ Artilheiros do Futebol Brasileiro

Uma aplicação React moderna e responsiva para acompanhar os artilheiros do Campeonato Brasileiro 2024 em tempo real.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Demonstração

A aplicação exibe os principais artilheiros do Campeonato Brasileiro 2024 com:
- **Dados em tempo real** da API oficial do futebol brasileiro
- **Interface responsiva** e moderna
- **Paginação inteligente** (4 jogadores por página)
- **Escudos dos times** em alta qualidade
- **Informações detalhadas** de cada artilheiro

## 📋 Funcionalidades

- ✅ **Listagem de artilheiros** do Campeonato Brasileiro 2024
- ✅ **Informações completas**: nome do jogador, time, posição e gols
- ✅ **Escudos oficiais** dos times brasileiros
- ✅ **Sistema de paginação** para navegação fluida (4 jogadores por página)
- ✅ **Design responsivo** para desktop e mobile
- ✅ **Integração com API** oficial de futebol brasileiro
- ✅ **Interface intuitiva** com dados atualizados em tempo real

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para interfaces de usuário
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript ES6+** - Funcionalidades modernas do JavaScript

### API
- **API Futebol BR** - Dados oficiais do futebol brasileiro
- **Fetch API** - Para requisições HTTP

### Ferramentas de Desenvolvimento
- **ESLint** - Análise de código e padronização
- **Vite Dev Server** - Servidor de desenvolvimento com hot reload

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/artilheiros-futebol.git
   cd artilheiros-futebol
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa análise de código
```

## 🏗️ Estrutura do Projeto

```
artilheiros-futebol/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Page/
│   │   │   ├── Transactions.jsx          # Componente principal
│   │   │   ├── TransactionItem.jsx       # Item individual
│   │   │   ├── TransactionDetails.jsx    # Detalhes do jogador
│   │   │   └── TransactionSummary.jsx    # Resumo estatístico
│   │   └── style/
│   │       └── styles.css                # Estilos globais
│   ├── icon/
│   │   └── [ícones da aplicação]
│   ├── App.jsx                           # Componente raiz
│   └── main.jsx                          # Ponto de entrada
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Design e Interface

### Características do Design
- **Paleta de cores** moderna e profissional
- **Tipografia** Inter para melhor legibilidade
- **Cards responsivos** com informações organizadas
- **Hover effects** para melhor interação
- **Layout adaptativo** para diferentes dispositivos

### Componentes Principais
- **TransactionItem**: Exibe informações de cada artilheiro
- **Paginação**: Navegação entre páginas de resultados
- **Header**: Título e informações do campeonato

## 🔧 Configuração da API

A aplicação utiliza a API oficial do futebol brasileiro:

```javascript
const API_BASE_URL = "https://api.api-futebol.com.br/v1"
const CAMPEONATO_ID = "10" // Brasileiro Série A 2024
const ENDPOINT = `/campeonatos/${CAMPEONATO_ID}`
```

### Headers necessários
```javascript
headers: {
  Authorization: "Bearer live_55cbe035045e3dddad9b154983e791"
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large screens** (1440px+)

## 🚀 Deploy

### Build para produção
```bash
npm run build
```

### Plataformas recomendadas
- **Vercel** - Deploy automático com Git
- **Netlify** - Hospedagem estática
- **GitHub Pages** - Hospedagem gratuita
- **Firebase Hosting** - Google Cloud

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Padrões de Código
- Use **ESLint** para manter consistência
- **Componentes funcionais** com hooks
- **Nomes descritivos** para variáveis e funções
- **Comentários** em código complexo

## 🙏 Agradecimentos

- [API Futebol BR](https://api.api-futebol.com.br) pelos dados em tempo real
- [React Team](https://reactjs.org/) pela excelente biblioteca
- [Vite Team](https://vitejs.dev/) pela ferramenta de build rápida
- Comunidade open source pelas inspirações

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/artilheiros-futebol?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/artilheiros-futebol?style=social)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/artilheiros-futebol)
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/artilheiros-futebol)

---

**Desenvolvido com ❤️ para os amantes do futebol brasileiro** ⚽🇧🇷
