# Trabalho DevOps
***

## Descrição
Projeto prático das disciplinas de DevOps e Integração Contínua (UNINTER). Simula a
consultoria contratada pela empresa fictícia **CodeFactory Solutions** para adotar a
Cultura DevOps: uma landing page institucional em React, containerizada com Docker e
com pipeline de Integração Contínua no GitHub Actions.

## Objetivo
Demonstrar, na prática, versionamento com Git e GitHub, fluxo de branches com Pull
Requests, trabalho colaborativo entre a equipe, containerização da aplicação com Docker
e automação do build por meio de um pipeline de Integração Contínua, resolvendo os
problemas de integração de código, padronização de ambiente e documentação relatados
pela empresa.

## Tecnologias

- Node.js 24
- Vite
- React 19
- TypeScript
- Nginx (servidor web do container)
- Docker e Docker Compose
- Git e GitHub
- GitHub Actions (CI)

## Estrutura do Projeto

trabalhoDevOps/
├── .github/
│   └── workflows/
│       └── ci.yml            # Pipeline de Integração Contínua (GitHub Actions)
├── public/                   # Arquivos estáticos públicos
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # Imagens e ícones (hero.png, react.svg, vite.svg)
│   ├── App.tsx               # Componente principal
│   ├── App.css               # Estilos do componente principal
│   ├── main.tsx              # Ponto de entrada do React
│   └── index.css             # CSS global da aplicação
├── .dockerignore             # Arquivos ignorados no build da imagem Docker
├── Dockerfile                # Imagem Docker (build multi-stage: Node + Nginx)
├── docker-compose.yaml       # Serviço e porta do container
├── eslint.config.js          # Configuração do ESLint
├── index.html                # HTML base da aplicação
├── LICENSE                   # Licença do projeto (MIT)
├── package.json              # Dependências e scripts
├── package-lock.json         # Versões exatas das dependências
├── tsconfig.json             # Configuração base do TypeScript
├── tsconfig.app.json         # Configuração do TypeScript da aplicação
├── tsconfig.node.json        # Configuração do TypeScript para ferramentas
├── vite.config.ts            # Configuração do Vite
└── README.md                 # Documentação principal

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
A aplicação ficará disponível em http://localhost:5173

Opção 2: via Docker
docker compose up --build
A aplicação ficará disponível em http://localhost:8080

Branches

---
- main — versão estável do projeto.
- desenvolvimento — integração das funcionalidades antes de chegar à main.
- feat/frontend — desenvolvimento da interface React.
- feat/docker — configuração do Docker.
- docs/readme — documentação e organização do README.

Fluxo de trabalho: branch de feature → Pull Request para desenvolvimento → Pull Request de desenvolvimento para main.

Licença

---
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Versão

---
v1.0.0

---

Equipe

---


- Leonardo Ribeiro Souza      
- Enrico Bertolucci           
- Luiz Henrique Barbosa Brito 
