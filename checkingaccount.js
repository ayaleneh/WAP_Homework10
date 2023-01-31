class CheckingAccount extends Account {
    constructor(account, overdraftLimit) {
        super(account);
        this._overdraftLimit = overdraftLimit;
    }

    get overdraftLimit() {
        return this._overdraftLimit;
    }

    set overdraftLimit(value) {
        this._overdraftLimit = value;
    }

    withdraw(amount) {
        console.log(this.getBalance())
        if (this.getBalance() - amount >= -this.overdraftLimit) {
            this._balance -= amount;
        } else {
            throw Error("Insufficient funds");
        }
    }

    toString() {
        return `Account type: CheckingAccount, Account: ${this.getNumber()}, Overdraft limit: ${this.overdraftLimit}`;
    }
}


