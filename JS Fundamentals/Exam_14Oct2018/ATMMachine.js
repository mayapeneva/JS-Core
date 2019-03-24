function operate(arr) {
    let banknotesInATM = [];
    let totalCashInATM = 0;
    for (let command of arr) {
        if (command.length > 2) {
            let insertedCash = command.reduce((a,b) => a + b);
            command.forEach(b => banknotesInATM.push(+b));
            totalCashInATM += insertedCash;
            
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
        } else if (command.length === 2) {
            let accountBalance = command[0];
            let moneyToWithdraw = command[1];
            if (totalCashInATM < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);                
            } else if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else {
                let banknotesToRemove = [];
                banknotesInATM.sort((a,b) => b - a);               
                for (let banknote of banknotesInATM) {
                    if (banknote <= moneyToWithdraw) {
                        banknotesToRemove.push(banknote);
                        accountBalance -= banknote;
                        moneyToWithdraw -= banknote;
                        totalCashInATM -= banknote;
                    }
                }              

                for (let banknoteToRemove of banknotesToRemove) {
                    banknotesInATM.splice(banknotesInATM.indexOf(banknoteToRemove), 1);              
                }              

                console.log(`You get ${command[1]}$. Account balance: ${accountBalance}$. Thank you!`);
            }
        } else {
            let banknoteToCheck = Number(command[0]);
            let banknoteCount = 0;
            banknotesInATM.forEach(b => {
                if (b === banknoteToCheck) {
                    banknoteCount++
                }
            });
            
            console.log(`Service Report: Banknotes from ${banknoteToCheck}$: ${banknoteCount}.`);
        }
    }    
}