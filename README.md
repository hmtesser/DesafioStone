

# SPACE STATION COMPENDIUM
  Bem vindo ao Compendium de Rishi, aqui estão todas as informações adquiridas
  ao longo de Éons de todos os seres importantes para a história dessa região
  espacial.
  
  Seu funcionamento consiste em clicar no botão de "Pesquisa", e lá, há
  informações básicas, assim como uma barra de pesquisa, que funciona por ID
  cadastrado.
  

# DESAFIO STONE :INFORMAÇÕES SOBRE O DESAFIO
Desafio Front-end Mamba
Imagine que seu cliente é dono de uma estação espacial e precisa de um aplicativo no POS para conferir se
as pessoas que circulam pela loja são personagens de Star Wars.
Para isso você precisa criar esse app com a Mamba SDK, consultando a lista de personagens na swapi.
Requisitos Funcionais
1. Ao abrir o app deve ser exibida uma mensagem com instruções simples de funcionamento.
2. Ao clicar em um botão, o usuário precisa exibir um personagem aleatório de Star Wars na tela, bem
como suas características completas.
3. Ao clicar em outro botão, esses dados devem ser impressos em uma filipeta formatada da melhor
maneira possível.
4. Ao clicar em um terceiro botão, deve ser exibida uma lista de todos os personagens que já foram
consultados na API, bem como o horário de cada consulta.
Recomendações
1. Use a documentação do Svelte.
2. Utilize os componentes nativos da Mamba SDK.
3. Tente otimizar as chamadas da API o máximo possível, implementações assíncronas serão muito bem
consideradas.
4. Seja criativo, funcionalidades além das especificadas nos requisitos são bem vindas.
Restrições
1. Você deve utilizar o template de apps da Mamba SDK disponível em https://github.com/stonepayments/pos-mamba-app-template.
2. A documentação da SDK está disponível em https://mambasdk-docs.stone.com.br/
3. Não é permitido a utilização (nem faz sentido na verdade) de frameworks de UI. Ex: bootstrap,
materialize, foundation, etc.
4. Precisamos acessar o código e que o build da aplicação esteja funcionando. Favor enviar o repositório
com o projeto.
Considerações Finais
1. Implementação dos requisitos funcionais em JS, UI do app, criatividade e boas práticas de
desenvolvimento serão avaliadas.
2. Componentes nativos devem ser utilizados sempre que possível e novos componentes criados
sempre que necessário.
3. A SWAPI pode dar erro de CORS, você pode mitigar isso instalando essa extensão no Chrome.
4. Comentários no código explicando decisões tomadas são fortemente encorajados

# CASOS DE USO
 # PESQUISAR -
 Faz uma pesquisa na API do starwars(swapi.com/), trazendo informações dos personagens que fazem parte do universo star wars
 # IMPRIMIR -  
 Imprime a informação que está na maquininha, para uma pequena filipeta contendo todas as informações que estão na tela
 # HISTÓRICO 
 Mostra Histórico de pesquisa, salvando seus ID's, caso haja curiosidade em saber qual personagem foi pesquisado, assim como a data de quando a pesquisa foi feita.

# Mamba App template

> A complete project template for building [Mamba](https://github.com/stone-payments/pos-mamba-sdk-docs) apps.

## Requirements

Make sure all dependencies have been installed before moving on:

- [Node.js](http://nodejs.org/) >= v8.11.3

Recommended:

- [@mamba/cli](https://www.npmjs.com/package/@mamba/cli)

## Creating a new Mamba App

### With `@mamba/cli`

```shell
# Install the mamba cli globally if doesn't already have it
npm i -g @mamba/cli

# Create a new mamba app at 'my-mamba-app' directory
mamba new app my-mamba-app

? Name: My Mamba App
? Version: 1.0.0
? Description: My new Mamba app

# Enter the app directory
cd my-mamba-app

# Start the development server
mamba app start
```

### Manually

```shell
# Create and enter your new app directory
mkdir my-mamba-app
cd my-mamba-app

# Install the standard mamba app template
npx degit stone-payments/pos-mamba-app-template

# Install its dependencies
npm i

# Run the development server
npm run start
```

## Building and deploying to the `POS`

1. Generate the *production* app bundle

```shell
# With the @mamba/cli
mamba app build

# Without the @mamba/cli
npm run build
```

This will generate the `dist/bundle.pos` directory and a `dist/bundle.pos.tar.gz` file, which both contains your Mamba app.

2. Start the local http server

```shell
npm run serve # Starts the local http server
```

3. Open the `Develop` app and insert your local server ip and the app will automatically look for the `dist/bundle.pos.tar.gz` and install it.

### Npm Commands

- `npm run start` - Start the dev server;
- `npm run serve` - Start a local http server;
- `npm run build` - Build the production bundle;
- `npm run build:dev` - Build the development bundle;
- `npm run build:analyze` - Analyze the final bundle;
- `npm run lint` - Lint all style and script files;
- `npm run format` - Format all style and script files;

## Documentation

- [Svelte](https://svelte.technology/guide)
