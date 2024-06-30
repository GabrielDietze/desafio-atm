# Desafio Técnico Morada.ai: Este repositório contém uma implementação em TypeScript de uma API simulando operações de um caixa eletrônico (ATM).

## Descrição
Este repositório contém uma implementação em TypeScript e node.js de uma API que simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Principais desafios

- Não diria que foi um desafio e sim um ganho de conhecimento, tenho mais familiaridade com JavaScript, porém como na Morada vocês utilizam TypeScript, achei interessante fazer nesta linguagem. Tive alguns desafios em relação à sintaxe, mas consegui lidar bem com as adversidades ao estudar a documentação e buscar exemplos práticos.

- Na programação, o mais importante é ter conhecimento na lógica de programação em si, já que a sintaxe e as características de cada linguagem têm um aprendizado mais rápido e simples. Durante o processo, percebi que o TypeScript oferece vantagens significativas em termos de segurança de tipo e refatoração de código, o que pode levar a um código mais robusto e fácil de manter.

- Decidi utilizar um algoritmo guloso para fazer a função de contagem das notas, já que com as notas fornecidas não haveria ocasiões em que a programação dinâmica se sairia melhor. Fiz uma análise detalhada das possíveis combinações e verifiquei que o algoritmo guloso sempre encontra a solução ótima para esse conjunto específico de notas. Dessa forma, o código ficou mais simples e com melhor desempenho.

- Para garantir a eficiência, implementei otimizações no código, como a ordenação das notas de forma decrescente para priorizar as maiores denominações primeiro. Também escrevi testes para validar a funcionalidade da minha solução, o que ajudou a garantir que ela lidasse corretamente com diversos casos de uso.

- No geral, o processo foi muito enriquecedor e me proporcionou uma compreensão mais profunda das vantagens do TypeScript. Estou animado para aplicar esse conhecimento na Morada e continuar aprendendo e me adaptando às tecnologias que vocês utilizam.   

## Tecnologias Utilizadas

### Linguagem
- **TypeScript:** Por ser a linguagem utilizada na morada decidi utiliza-la. O TypeScript oferece tipagem estática, permitindo um desenvolvimento mais robusto e menos propenso a erros.

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

## Testes Automatizados

Este projeto inclui testes automatizados para validar a funcionalidade da função de saque implementada. Eles podem ser encontrados na pasta tests do repositório.

### Como Usar o Projeto
Para executar este projeto localmente e utilizar a API, siga os passos abaixo:

1. Clonar o Repositório:
git clone https://github.com/GabrielDietze/desafio-atm.git
cd desafio-atm

2. Instalar Dependências:
npm install

3. Executar o Servidor:
npm start

4. Acessar a API:
A API estará disponível em http://localhost:8080/api/saque

5. Realizar um Saque:
Para realizar um saque, faça uma requisição POST para o endpoint /api/saque com o valor desejado como um parâmetro de consulta. Por exemplo:
curl -X POST http://localhost:8080/api/saque?valor=380

Isso retornará um JSON com a distribuição das notas conforme exemplificado acima.
