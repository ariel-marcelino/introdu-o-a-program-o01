// Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

// Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

let n1 = prompt("Digite o primeiro numero");
let n2 = prompt("Digite o segundo numero");

n1 = Number(n1);
n2 = Number(n2);

let sum = n1 + n2;
let sub = n1 - n2;
let multi = n1 * n2;
let div = n1 / n2;
let rest = n1 % n2;

alert(`a soma dos numeros é ${sum}`);
alert(`a subtração deles é ${sub}`);
alert(`a multiplicação é  ${multi}`);
alert(`a divisão é ${div}`);
alert(`o resto da divisão é: ${rest}`);

if (sum % 2 == 0) {
  alert(`${sum} é um numero par`);
} else {
  alert(`${sum} é um numero impar`);
}

if (n1 === n2) {
  alert(` o numero ${n1} e o numero ${n2} são iguais`);
} else {
  alert(` o numero ${n1} e o numero ${n2} são diferentes`);
}
