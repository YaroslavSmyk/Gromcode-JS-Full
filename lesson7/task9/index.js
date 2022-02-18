const withdraw = (clients, balances, client, amount) => {
  debugger;

  let result = clients.indexOf(client);
  if (balances[result] >= amount) {
    return balances[result] - amount;
  }
  return -1;
};

//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]
