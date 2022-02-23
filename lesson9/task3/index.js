'use strict';

// /**
//  * @param {object} obj
//  * @return {undefined}
//  */
// function getKeys(obj) {
//     let result = Object.keys(obj);
//     console.log(result)
// }

// // examples
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// // prints ===>
// // name
// // city
// // englishLevel

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  let keys = Object.keys(obj);

  keys.forEach((element) => console.log(element));
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
