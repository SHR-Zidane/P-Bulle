//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  #money;
  #isOpen;
  
  constructor(money, isOpen) {
    this.#isOpen = isOpen;
    this.#money = money;
  }

  open() {
    if (!this.#isOpen){
      this.#isOpen = true
    }
  }

  close() {
    if (this.#isOpen){
      this.#isOpen = false
    }

  }

  deposit(moneyToDeposit) {
    if (this.#isOpen && moneyToDeposit > 0){
      this.#money += moneyToDeposit 
    }
    else{
      throw new ValueError();
    }
  }

  withdraw(moneyToWithdrwaw) {
    if (this.#isOpen && moneyToWithdrwaw <= this.#money && moneyToWithdrwaw > 0){
      this.money -= moneyToWithdrwaw
    }
    else{
      throw new ValueError();
    }
  }

  get balance() {
    if (this.#isOpen){
      return this.#money
    }
    else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}