// const getPAdults = obj => {
//     let result = [];
//     for (let key in obj) {
//        if (obj[key] >= 18) {
//         result[key] = obj[key];
//        }
//        return result;
//     }
// };

const getAdults = obj => Object.entries(obj)
        .filter(user  => user[1] >= 18)
        .map(user => user[0]);;
    
