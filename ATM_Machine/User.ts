export class User {
  private pin: string;
  private balance: number;

  constructor(pin: string, balance: number) {
    this.pin = pin;
    this.balance = balance;
  }

  validatePin(inputPin: string): boolean {
    return this.pin == inputPin;
  }

  getBalance(): number {
    return this.balance;
  }

  // withdrawing money

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance - +amount;
      return true;
    }
    return false;
  }

  // depositing money

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}
