# Trabalho DevOps
***
## Tecnologias

- Node.js
- Vite
- React
- Html
- Css
- JavaScript
- Docker
- Git
- GitHub Actions

## Estrutura do Projeto

```
trabalhoDevOps/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de CI
├── public/                 # Arquivos estáticos públicos
├── src/
│   ├── assets/             # Imagens, ícones, fontes e outros recursos estáticos
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos do componente principal
│   ├── main.jsx            # Ponto de entrada do React
│   ├── index.css           # CSS global da aplicação
├── Dockerfile              # Definição da imagem Docker
├── docker-compose.yaml     # Configuração dos serviços e containers da aplicação
├── LICENSE                 # Licença do Projeto
├── package.json            # Dependências e scripts
├── package-lock.json       # Versões exatas das dependências
├── vite.config.js          # Configuração do Vite
└── README.md               # Documentação principal
```

## Como instalar
***
### Pré-requisitos
- Node.js versão 24 ou superior
- Git
- Docker

### Como Rodar o Projeto
**Opção 1: localmente**
```bash
git clone https://github.com/LeonardoRibSouzaa/trabalhoDevOps.git
cd trabalhoDevOps
npm install
npm run dev
```
A aplicação ficará disponível em http://localhost:5173

**Opção 2: via Docker**
```bash
docker compose up --build
```
A aplicação ficará disponível em http://localhost:8080

## Branches
***
- **`main`** — versão estável do projeto.
- **`desenvolvimento`** — intergração das funcionalidas antes de chegar à **`main`**.
- **`feat/frontend`** — desenvolvimento da interface React.
- **`feat/docker`** — configuração do Docker.
- **`feat/readme`** — documentação e organização do README.

## Licença
***
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE]() para mais detalhes.
## Versão
***
**v0.0.2**
___
## Equipe
***
| Nome          |
|---------------|
| **Leonardo**      |
| **Enrico**        |
| **Luiz Henrique** |



