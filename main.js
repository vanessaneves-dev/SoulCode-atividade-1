// Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);
// Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;
// Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;

let produtoNome = "tv";
let valor = 1300;
const descontoInit = 0.05;
let descontoValido = valor >= 1000;

if (descontoValido) {
  let valorFinal = valor - valor * descontoInit;
  console.log("Valor final da(a) " + produtoNome + " é de R$ " + valorFinal);
} else {
  console.log("Valor final do(a) " + produtoNome + " é de R$ " + valor);
}

// Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
// Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
// Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo.

let demandas = [10, 2, 1, 30, 5];
let valores = [];

for (let i = 0; i < demandas.length; i++) {
  let demanda = demandas[i];
  let precoUni = 100;
  let totalFinal = demanda * precoUni;
  valores.push(totalFinal);
  console.log(" O cliente " + (i + 1) + " pagará R$ " + totalFinal);
}

let lucroTotal = valores.reduce((acu, elem) => acu + elem, 0);

console.log("O lucro final é de R$ " + lucroTotal);
