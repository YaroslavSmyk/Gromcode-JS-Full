// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 3 === 0) {
//             specialNumbers.push(numbers[i]);
//         }
//     }
//     return specialNumbers;
// };

// getSpecialNumbers([1, 2, 6, 9, 2, 7]);

// __________________________________________________________

// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];

//     numbers.forEach(num => {
//         if (num % 3 === 0) {
//             specialNumbers.push(num);
//         }
//     });
    
//     return specialNumbers;
// };
// const arr = [1, 2, 6, 9, 2, 7];
// console.log(getSpecialNumbers(arr));

// ______________________________________________________________

const getSpecialNumbers = numbers => {
   const result = numbers.filter(num => num % 3 === 0);
    return result;
};
const arr = [1, 2, 6, 9, 2, 7];
console.log(getSpecialNumbers(arr));