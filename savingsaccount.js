class SavingsAccount extends Account {
    constructor(account, interest) {
        super(account);
        this._interest = interest;
    }

    get interest() {
        return this._interest;
    }

    set interest(value) {
        this._interest = value;
    }

    addInterest() {
        this._balance += this._balance * this.interest / 100;
        console.log("here: " + this.interest);
    }

    toString() {
        return `Account type: SavingsAccount, Account: ${this.getNumber()}, Interest: ${this.interest}`;
    }
}
