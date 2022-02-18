const concatProps = obj => {
    let result = [];
    for (let i in obj) {
        result.push(obj[i])
    }
    return result;
  };
  
  // examples
  concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
  