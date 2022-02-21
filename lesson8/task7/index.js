const getAdults = obj => {
    debugger;
    let result = {};
    for (let key in obj) {
        if (obj[key] >= 18){
            result[key] = obj[key];
        }
    }
    // console.log(result)
    return result;
  };
  
  // examples
  getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
  getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
  