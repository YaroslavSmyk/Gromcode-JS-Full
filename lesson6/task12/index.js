function sortAsc(array) {
debugger;
  let A_B = []
      for(let i = 0; i < array.length; i++) {
       for(let j = i; j < array.length; j++) {
          if (array[i] > array[j]) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
      }
      A_B.push(array[i])
      console.log(A_B);
  }
  return A_B
  }

  sortAsc([1, 3, 6, 15])
  
  function sortDesc(array) {
    debugger;
  let B_A = []
      for(let i = 0; i < array.length; i++) {
       for(let j = i; j < array.length; j++) {
          if (array[i] < array[j]) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
      }
      B_A.push(array[i])
      console.log(B_A);
  }
  return B_A
  }

  sortDesc([1, 3, 6, 15]);