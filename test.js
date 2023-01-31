//Account mocha and chai test
describe("Account: ", () => {
    let ac;
    beforeEach(() => {
        ac = new Account(99);
        ac.deposit(1000);
    });
    it("Deposit Money to Bank Account: ", () => {
        assert.equal(ac.getBalance(),1000);
    });

    it("WithDraw Money from Bank Account: ", () => {
        ac.withdraw(100);
        assert.equal(ac.getBalance(),900);
    });
    it('should correctly return the account information as a string', () => {
        assert.equal(ac.toString(), 'Account 99: balance 1000');
  
    });
});


//Saving Account  Mocha and chai test

describe('SavingsAccount', () => {
    let savingsAccount;
    beforeEach(() => {
        savingsAccount = new SavingsAccount(100, 10);
    });

    it('should have a getter method for interest', () => {
        assert.equal(savingsAccount.interest, 10);
    });

    it('should have a setter method for interest', () => {
        savingsAccount.interest = 20;
        assert.equal(savingsAccount.interest, 20);
    });

    it('should deposit interest amount into the account', () => {
        savingsAccount.addInterest();
        assert.equal(savingsAccount.getBalance(), 0);
    });

    it('should correctly return  Saving account information as a string', () => {
        assert.equal(savingsAccount.toString(), 'Account type: SavingsAccount, Account: 100, Interest: 10' );

    });
});

//checking account mocha and chai test

describe('CheckingAccount', () => {
    let checkingAccount;
    beforeEach(() => {
        checkingAccount = new CheckingAccount(101, 50);
    });

    it('should have a getter method for overdraftLimit', () => {
        assert.equal(checkingAccount.overdraftLimit, 50);
    });

    it('should have a setter method for overdraftLimit', () => {
        checkingAccount.overdraftLimit = 100;
        assert.equal(checkingAccount.overdraftLimit, 100);
    });


    it('should allow the withdrawal if sufficient funds are available', () => {

        checkingAccount.deposit(100);
        checkingAccount.withdraw(50);
        assert.equal(checkingAccount.getBalance(), 50);
    });

    it('should allow withdrawal if balance goes into negative but stays within overdraftLimit', () => {
        checkingAccount.deposit(100);
        checkingAccount.withdraw(150);
        assert.equal(checkingAccount.getBalance(), -50);
    });

    it('should not allow the withdrawal if balance goes beyond overdraftLimit', () => {
        checkingAccount.deposit(100);
        checkingAccount.withdraw(200);
        console.log("balance: " + checkingAccount.getBalance());
        assert.equal(checkingAccount.getBalance(), -50);
    });

    it('should correctly return the account information as a string', () => {
        assert.equal(checkingAccount.toString(),('Account type: CheckingAccount, Account: 101, Overdraft limit: 50'));
        
    });
});

/*chai and mocha test for Bank*/


describe('Bank', () => {
    let bank;
    beforeEach(() => {
        bank = new Bank();
    });

    it('should add a new account with balance 0', () => {
        const accountNumber = bank.addAccount();

       // assert.instanceof(bank.accounts[0], Account);
        assert.equal(bank.accounts[0].getBalance(), 0);
        assert.equal(bank.accounts[0].number, accountNumber);
    });

    it('should add a new savings account with balance 0 and interest', () => {
        const interest = 4;
        const accountNumber = bank.addSavingsAccount(interest);

       // assert.instanceof(bank.accounts[0], SavingsAccount);
        assert.equal(bank.accounts[0].getBalance(), 0);
        assert.equal(bank.accounts[0].number, accountNumber);
        assert.equal(bank.accounts[0].interest, interest);
    });

    it('should add a new checking account with balance 0 and overdraft limit', () => {
        const overdraft = 50;
        const accountNumber = bank.addCheckingAccount(overdraft);

        // assert.instanceof(bank.accounts[0], CheckingAccount);
        assert.equal(bank.accounts[0].getBalance(), 0);
        assert.equal(bank.accounts[0].number, accountNumber);
        assert.equal(bank.accounts[0].overdraftLimit, overdraft);
    });
});


