const input = document.getElementById("input");
const deposito = document.getElementById("deposito");
const retirar = document.getElementById("retirar");
const balanca = document.getElementById("balanca");
const cade = document.getElementById("cade");

class bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (this.balance - amount <= 0) {
      return (cade.innerText =
        "Você não tem dinheiro suficiente para retirar essa quantidade");
    }

    this.balance -= amount;
    balanca.innerText = `Balança: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
    balanca.innerText = `Balança: ${this.balance}`;
  }
}

const contaBancaria = new bank(100);

deposito.onclick = () => {
  contaBancaria.deposit(Number(input.value));
};

retirar.onclick = () => {
  contaBancaria.withdraw(Number(input.value));
};
