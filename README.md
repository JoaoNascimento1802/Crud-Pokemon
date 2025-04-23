# Projeto CRUD de Pokémon com React

![GitHub repo size](https://img.shields.io/github/repo-size/JoaoNascimento1802/React-Crud-Pokemon?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/JoaoNascimento1802/React-Crud-Pokemon?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/JoaoNascimento1802/React-Crud-Pokemon?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/JoaoNascimento1802/React-Crud-Pokemon?style=for-the-badge)

> Aplicação web desenvolvida em React para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em dados de Pokémon, consumindo uma API backend desenvolvida em Java.

## 💻 Pré-requisitos

Antes de começar, verifique se você possui os seguintes requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js) ou [Yarn](https://yarnpkg.com/)
- Um navegador web moderno (Chrome, Firefox, Safari, etc.)

Certifique-se de que a API backend em Java esteja rodando e acessível. Você pode encontrar informações sobre como iniciar a API no repositório backend (se disponível) ou na documentação da API.

## 🚀 Iniciando a Aplicação React

Para executar a aplicação React localmente, siga estas etapas:

1. Clone este repositório:
   ```bash
   git clone https://github.com/JoaoNascimento1802/React-Crud-Pokemon.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd React-Crud-Pokemon
   ```

3. Instale as dependências:

   Com npm:
   ```bash
   npm install
   ```

   Ou com Yarn:
   ```bash
   yarn install
   ```

4. Inicie a aplicação React:

   Com npm:
   ```bash
   npm start
   ```

   Ou com Yarn:
   ```bash
   yarn start
   ```

Isso iniciará o servidor de desenvolvimento do React e abrirá a aplicação em seu navegador padrão (geralmente em http://localhost:3000).

## ⚙️ Configuração da API

A aplicação React fará requisições para a API Java para realizar as operações CRUD de Pokémon. Certifique-se de que a variável de ambiente que define a URL da API esteja configurada corretamente. Geralmente, essa configuração é feita em um arquivo `.env` na raiz do seu projeto React ou diretamente no código (embora não seja recomendado para produção).

Verifique os arquivos de configuração ou o código da aplicação para identificar onde a URL da API backend está definida e ajuste-a conforme necessário para que a aplicação React possa se comunicar com a sua API Java.

Exemplo de um arquivo `.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api/pokemons
```

## 🕹️ Utilizando a Aplicação

Após iniciar a aplicação, você poderá:

- Listar todos os Pokémon cadastrados.
- Criar novos Pokémon, fornecendo suas informações.
- Visualizar os detalhes de um Pokémon específico.
- Editar as informações de um Pokémon existente.
- Deletar um Pokémon.

A interface do usuário deve ser intuitiva e permitir que você interaja facilmente com os dados dos Pokémon através das operações CRUD.

## 📫 Contribuindo para o Projeto

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção de bug:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
   ou
   ```bash
   git checkout -b fix/bug-reportado
   ```

3. Faça suas alterações e comite-as:
   ```bash
   git commit -m 'Adiciona nova funcionalidade de listagem avançada'
   ```
   ou
   ```bash
   git commit -m 'Corrige erro de renderização na tela de detalhes'
   ```

4. Envie suas alterações para o seu fork:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
   ou
   ```bash
   git push origin fix/bug-reportado
   ```

5. Abra um Pull Request para este repositório.

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

- Emanuel  
- Kauã Marques

## 📝 Licença

Este projeto está sob a licença [Adicione aqui o nome da licença, se houver]. Consulte o arquivo LICENSE para obter mais detalhes.
