# e3-admission-test

Olá candidatos, como vão?

Esse vai ser o nosso teste tecnico para a vaga de dev pleno da E3.

A sua missão vai ser criar um app em React Native. Esse app vai ser simples, prometo.

E também, um backend usando NodeJS + ExpressJS + TypeScript (sim, TypeScript vai ser OBRIGATORIO nessa camada).

Em ambas as camadas, utilizamos o yarn como gerenciador de pacotes.

## Camada mobile

Nessa camada, você deverá criar um app em React Native (versão mais recente), com as seguintes features:

- Tela de login (fake, não precisa de integração com API, salvar os dados no local storage e verificar se esses dados existem para validar a seção);
- Função de logout (limpar o local storage);
- Tela de listagem de produtos (deve haver um campo de pesquisa e um campo de filtro);
- Tela de detalhes do produto;

Após o usuario realizar o login, deve ser exibida uma tela de listagem de produtos. Nessa tela, deve existir:

- Campo de pesquisa pela descrição do produto;
- Filtro que mostra apenas produtos em estoque;
- Ordenação por preço e/ou descrição;

A API de produtos é essa:

https://e3-cluster-dev.sao01.containers.appdomain.cloud/api/product?NUMREGIAO=5&CODFILIAL=1

Geralmente essa API demora entre 2~6 segs para responder devido a quantidade de dados.

A interface de `Produtos` para referência é essa:

```typescript
export interface Product extends IMongoModel {
  CODPROD: number;
  CODFAB: string;
  DESCRICAO: string;
  CODFORNEC: number;
  FORNECEDOR: string;
  EMBALAGEM: string;
  EMBALAGEMMASTER: string;
  UNIDADE: string;
  QTUNIT: number;
  QTUNITCX: number;
  CODCATEGORIA: number;
  UNIDADEMASTER: string;
  CODMARCA: number;
  MARCA: string;
  CODEPTO: number;
  CODSEC: number;
  INFORMACOESTECNICAS: string;
  CODAUXILIAR: number;
  price?: number;
  quantity?: number;
}
```

### O que iremos avaliar?

Você será avaliado pela usabilidade, design e pela arquitetura do app. É esperado que você consiga explicar as decisões que tomou durante o desenvolvimento através dos commits.

Aqui, usamos o padrão de commits `<type>(<scope>): <subject>`, que é amplamente utilizado por:

- https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
- http://karma-runner.github.io/3.0/dev/git-commit-msg.html
- Entre outros

Em suma, a avaliação se dará por:

- Estruturação (arquitetura) do app;
- Uso do git;
- Componetização (uso de HoC's, separação de obrigações, etc);
- JavaScript (ES6, async/await, axios);
- Uso do Redux (não se faz obrigatorio uso do thunk ou saga);
- Testes unitarios;
- Splashscreen + Icones;
- Testes E2E -**extra**-;

## Camada backend

Apesar do seu app consumir uma API pronta, queremos que você construa a sua API de produtos também!

Você deve usar o nosso gerador de API para construir a sua. Clique nesse link https://github.com/e3Labs/generator-kube-microservice-node e siga as intruções de instação (spoiler, instale o yeoman).

O boilerplate gerado usa o `mongoose` como ODM (Object Data Mapping) e já está configurado corretamente para uso.

Você deve criar uma entidade chamada `Product` com a mesma interface descrita na camada mobile como primeira entidade.

Após o gerador concluir o seu trabalho. Crie mais duas entidades, chamadas `Stock` e `Price`. As interfaces vem a seguir:

```typescript
interface Price extends IMongoModel {
  CODPROD: number;
  NUMREGIAO: number;
  PVENDA: number;
  DTULTALTPVENDA: string;
}

interface StockInterface extends IMongoModel {
  CODFILIAL: string;
  CODPROD: number;
  QTESTGER: number;
  QTBLOQUEADA: number;
  QTRESERV: number;
  QTDISPONIVEL: number;
  QTPENDENTE: number;
  CUSTOFIN: number;
  DTULTENT: string;
}
```

A sua missão é:

- Criar um request GET /products que retorna todos os produtos de uma região e filial

A entidade `Price` se relaciona com a entidade `Product` pela equalidade de `Price.CODPROD === Product.CODPROD && Price.NUMREGIAO === queryParam('NUMREGIAO')`

A entidade `Stock` re relaciona com a entidade `Product` pela equalidade de `Stock.CODPROD === Product.CODPROD && Stock.CODFILIAL === queryParam('CODFILIAL')`

Com essas equalidades, inserir em `Product` os atributos `quantity` e `price` (descritos na interface de `Product`).

Neste repo, contem uma pasta chamada `JSON` onde você irá encontrar os dados para as entidades de `Product`, `Stock` e `Price`. Basta importar elas no seu mongo (seja ele cloud, local, local-docker etc) e usar

### O que iremos avaliar?

Primariamente iremos avaliar o quão bem você se sai com o nosso boilerplate.

Como descrito na camada mobile, aqui também será usado o mesmo padrão de commits dito anteriormente.

Em suma, a avaliação se dará por:

- Uso do TypeScript;
- Uso do MongoDB;
- Testes unitarios;
- Uso correto das camadas descritas no boilerplate;

# Entrega final

Faça um fork desse desse repositório em seu Github e nos envie um Pull Request com o resultado.

Você pode criar esse fork como um mono-repo com os dois projetos juntos (uma pasta pro back e outra pro mobile) e um `README.md` explicando como executar os dois projetos e qualquer outro comentário extra que você tenha a fazer tanto sobre o teste, quanto as camadas que foram construidas por você.

Apesar de parecer muita coisa (e talvez seja), caso não conclua tudo, enviar mesmo assim o resultado. Sabemos o quão dificil pode ser um teste desses pra quem já está ocupado durante a semana inteira.

Nossa regra numero 1 é qualidade de codigo/manutenção. Se você conseguiu gerar códigos de facil manutenção, mesmo que incompletos, irá agregar e muito para nós.

Qualquer duvida, enviar email para:

- wanderson.alves@e3labs.com.br (autor desse teste)
- andre.oliveira@e3labs.com.br
- pedro.santos@e3labs.com.br