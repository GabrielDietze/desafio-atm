# Este repositório contém uma implementação em TypeScript de uma API simulando operações de um caixa eletrônico (ATM).

## Descrição
Este repositório contém uma implementação em TypeScript e node.js de uma API que simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Tecnologias Utilizadas

### Linguagem
- **TypeScript:** O TypeScript oferece tipagem estática, permitindo um desenvolvimento mais robusto e menos propenso a erros.

### Frameworks
- **Node.js:** Ambiente de execução JavaScript server-side.
- **Express:** Framework para Node.js, utilizado para criar a API de forma eficiente e organizada.

### Middleware
- **Body Parser:** Middleware para analisar corpos de requisições JSON.

## Funcionalidade de Saque

### Descrição
A função de saque é responsável por calcular a menor quantidade de notas necessárias para atender ao valor solicitado pelo usuário. O algoritmo utilizado para essa função é um algoritmo guloso, que prioriza as notas de maior valor primeiro para garantir a menor quantidade de notas possível.

### Funcionamento
1. O usuário faz uma requisição à API especificando o valor que deseja sacar.
2. A API processa essa requisição e calcula a distribuição de notas utilizando o algoritmo guloso.
3. A resposta da API inclui a quantidade de cada denominação de nota fornecida.

### Exemplo de JSON da Requisição
Para realizar um saque, faça uma requisição POST ao endpoint `/API/SAQUE` com o valor desejado como um parâmetro de consulta. Aqui está um exemplo do Endpoint

## Formato do Endpoint

- **URL**: `/api/saque`
- **Método**: POST
- **Entrada** (JSON):
  ```json
  {
    "valor": 380
  }
  ```
- **Saída** (JSON):
  ```json
  {
    "100": 3,
    "50": 1,
    "20": 1,
    "10": 1,
    "5": 0,
    "2": 0
  }

### Como Usar o Projeto
Para executar este projeto localmente e utilizar a API, siga os passos abaixo:

1. Clonar o Repositório:
- git clone https://github.com/GabrielDietze/desafio-atm.git
- cd desafio-atm

2. Instalar Dependências:
- npm install

3. Executar o Servidor:
- npm start

4. Acessar a API:
A API estará disponível em http://localhost:8080/api/saque

5. Realizar um Saque:
- Para realizar um saque, faça uma requisição POST para o endpoint /api/saque com o valor desejado como um parâmetro de consulta. Por exemplo:
- curl -X POST http://localhost:8080/api/saque?valor=380

- Isso retornará um JSON com a distribuição das notas conforme exemplificado acima.


## Testes Automatizados

Este projeto inclui testes automatizados para validar a funcionalidade da função de saque implementada. Eles podem ser encontrados na pasta tests do repositório.

Como executar os testes:

1. Certifique-se de que todas as dependências estão instaladas:
- npm install

2. Executar os testes:
- npm test

Isso executará os testes automatizados e exibirá os resultados no terminal.
