


## 📚 Arquitetura/Design Pattern

Neste projeto, optei por utilizar o design pattern [**Composition Pattern**](https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj). Por que escolhi esse modelo de arquitetura?

Num primeiro momento, considerei a aplicação do SOLID. No entanto, para uma aplicação simples que pode ser escalada com novas features, optei pelo Composition por ter mais conhecimento e domínio dessa abordagem. Além disso, com o Composition, consigo explorar mais a fundo o princípio do SOLID que mais aprecio, o *Single Responsibility Principle* (Princípio da Responsabilidade Única).

Para exemplificar melhor o propósito de cada diretório, segue o fluxo abaixo:


```bash

├── src 
│   ├ 
│   ├── @types # Todos os arquivos de tipagem da aplicação
│   │
│   ├── assets # Todos os arquivos de images e ícones da aplicação
│   │   
│   ├── components # Todos os componentes reutilizaveis da aplicação
│   │        
│   ├── helpers # Funções utilitárias da aplicação
│   │       
│   ├── hooks # Todos os react hooks customizados da aplicação (A regra de negócio a aplicação).
│   │      
│   ├── layouts # Layouts de diagramação da aplicação
│   │      
│   ├── pages # Todas as telas da aplicação
│   │      
│   ├── routes # Todo o sistema de roteamento da aplicação
│   │      
│   ├── services # Todos os requests da aplicação e instância do axios
│   │      
│   ├── styles # Todos os styles globais da aplicação

```

## Layout

[Protótipo do Figma - WeMovie](https://www.figma.com/file/0ZyTELvPCSCnib16XG49YP/Teste-Front-React-WeFit---2022?node-id=0%3A1)


## Instalando e executando o projeto

*Clone o projeto e acesse a pasta*

```bash
$ git clone https://github.com/DanielReezende/wefit-test-react.git

$ cd wefit-test-react
```

*Siga os passos abaixo*


```bash
# Instale as dependências
$ yarn or npm install

# Para inciar o projeto
$ yarn dev or npm run dev

# Para iniciar a fake API
$ yarn server or npm run server

```

## 🚀 Bibliotecas de Terceiros

  - [Axios](https://www.npmjs.com/package/axios)
  - [React-Toastify](https://www.npmjs.com/package/react-toastify)
  - [React-Icons](https://www.npmjs.com/package/react-icons)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [react-query](https://www.npmjs.com/package/react-query)
  - [styled-components](https://www.npmjs.com/package/styled-components)
  - [usehooks-ts](https://www.npmjs.com/package/usehooks-ts)