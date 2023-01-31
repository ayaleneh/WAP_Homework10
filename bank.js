class Bank {
    static nextNumber = 1;

    constructor() {
        this.accounts = [];
    }

    addAccount() {
        const account = new Account(0);
        account.number = Bank.nextNumber++;
        this.accounts.push(account);
        return account.number;
    }

    addSavingsAccount(interest) {
        const account = new SavingsAccount(1, interest);
        account.number = Bank.nextNumber++;
        this.accounts.push(account);
        return account.number;
    }

    addCheckingAccount(overdraft) {
        const account = new CheckingAccount(2, overdraft);
        account.number = Bank.nextNumber++;
        this.accounts.push(account);
        return account.number;
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(account => account.number !== number);
    }

    accountReport() {
        return this.accounts.map(account => account.toString()).join('\n');
    }
}