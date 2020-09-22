let account = {
    name: "Gracela",
    expenses: []
}

function addExpenses(description, amount){
    account.expenses.push({
        keterangan: description,
        jumlah: amount
    });
    console.log(account.expenses[account.expenses.length-1].keterangan + ' = Rp. ' + account.expenses[account.expenses.length-1].jumlah);
}

let totalExpenses = 0;
function getAccountSummary(){
    account.expenses.forEach(Element => {
        totalExpenses = totalExpenses + Element.jumlah;
    });
    console.log(account.name + " 's total expenses = Rp. " + totalExpenses)
}

addExpenses('Skincare', 300000);
addExpenses('Belanja Bulanan', 250000);
getAccountSummary();