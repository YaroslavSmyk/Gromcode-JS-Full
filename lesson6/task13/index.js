function withdraw(clients, balances, client, amount) {
    debugger;
    let ind = clients.indexOf(client);
    console.log(ind);
    if (balances[ind] >= amount) {
     return balances[ind] - amount;       
    } else {
        return -1;
    }
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));