![DECODIFICADOR-min](https://github.com/heitor34studio/heitor34studio.github.io/assets/72997122/c6bf45bf-9120-4222-9f77-769e53d7ac56)
# Decodificador Projeto Alura
![Static Badge](https://img.shields.io/badge/HTML5-orange)![Static Badge](https://img.shields.io/badge/CSS3-blue)![Static Badge](https://img.shields.io/badge/JS-yellow)

O projeto Decodificador, é uma ferramenta que codifica e descodifica textos que o usuário inserir, utilizando uma chave matriz própria do projeto, e permite o usuário copiar o resultado final.

## Índice 

* [Título, Descrição e Imagem de capa](#decodificador-projeto-alura)
* [Índice](#índice)
* [Funcionalidades e Demonstração da Aplicação](#-funcionalidades-do-projeto)
* [Tecnologias utilizadas](#%EF%B8%8F-técnicas-e-tecnologias-utilizadas)
* [Acesso ao Projeto](#-acesso-ao-projeto)
* [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

## 🔨 Funcionalidades do projeto

O Decodificador tem uma área para inserção de textos definida pelo elemento `<textarea>`, que será onde o usuário irá inserir tanto o texto para criptografar ou descriptografar, tal resultado vai ser definido pela escolha do usuário com os botões abaixo da área de texto definidos pelos elementos `<button>`. O arquivo `scripts/scripts.js` será o responsável pela lógica da ferramenta, e perceberá o clique do usuário no botão, chamando assim a função `criptografarDesencriptografar(string, method)` e passando o método escolhido pelo usuário. A função retornará a string resultada, que será impressa na tela com um botão de copiar, que ao ser clicado chama a função `copiar()` no javascript, que copia o resultado final. O script também remove o valor inserido na área de texto para facilitar o usuário que quiser inserir algo novamente.
https://github.com/heitor34studio/heitor34studio.github.io/assets/72997122/4f94a9ad-70f5-4709-b7d6-69b6f0ee5057

## ✔️ Técnicas e tecnologias utilizadas

- `HTML`: O HTML tem um papel fundamental para a aplicação funcionar corretamente com a inserção dos elementos `<textarea>` e `<button>` que irão prover para o JavaScript os valores de input e controles da decisão a ser tomada;
- `CSS`: O CSS tem papel fundamental para indicar a interação do usuário com a área de inserção de textos, e manter a ferramenta responsiva com diversas telas;
- `JS`: O JavaScript proporcionará toda lógica e dinâmica de controle das funções da ferramenta, percebendo que o usuário inseriu algum texto no `<textarea>`, liberando assim os botões, percebendo o clique no `<button>` e verificando pela classe dele se ele é o botão de criptografar, ou de descriptografar, assim chamando a função principal do projeto, e passando o método escolhido pelo usuário. Na função principal do projeto dependendo do método a chave matriz é definida, e o retornado para a função do clique no `<button>` que imprime na tela do usuário um textarea desativado com o resultado final, e um botão para copiar o valor deste textarea. O Javascript também cuida das funções de tradução de idioma dos conteúdos na tela, da animação do botão de seleção de bandeiras no `<header>`, da função que captura o evento de clique na bandeira de idioma, da função de gerar um cookie de 1 mês especificando o idioma para caso o user entrar de novo na aplicação ela já atualizar automaticamente de acordo com o valor deste cookie, e por fim a própria função que atualiza o idioma automaticamente de acordo como valor do cookie. O JS também cuida do efeito matrix no fundo da ferramenta e as animações de cores que acontecem quando o usuário foca na área de inserção de textos, e quando ele tira esse foco, retornando ás cores padrões. Abaixo estão alguns tópicos utilizados na ferramenta:
  - `document; getElementById; getElementsByClassName; querySelector; const; if; else; case; switch; style; window; getComputedStyle; querySelectorAll; forEach; addEventListener; getAttribute; setAttribute; function; return; var; Date(); setTime; getTime(); toUTCString(); document; cookie; location; reload(); decodeURIComponent; .split(); for; .length; trim(); .indexOf(); substring(); let; includes(); replaceAll(); .select(); .setSelectionRange(); navigator; .clipboard; .writeText(); .then(); alert(); console.error; toLowerCase(); .classList; .contains(); innerHTML; .value; .innerWidth; .innerWidth; innerHeight; .getContext(); Math; .floor(); Array(); .fill(); .fillRect(); .fillStyle; .random(); .fillText(); setInterval();`;

## 📁 Acesso ao projeto

[Veja o projeto final do curso em funcionamento.](https://heitor34studio.github.io)
Neste repositório você tem acesso a todo o material da ferramenta.

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, basta abrir o aquivo `index.html` no navegador.
