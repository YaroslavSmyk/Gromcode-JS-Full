// let userParsingResult;

// const objSuccess = '{"name": "Yaroslav"}';

// const parseUser = () => {
//   try {
//     const user = JSON.parse(objSuccess);
//     console.log('User data: ', user);
//     userParsingResult = objSuccess;
//   } catch (e) {
//     userParsingResult = null;
//   } finally {
//     console.log(`User parsing finished with ${userParsingResult}`);
//   }
// };

// parseUser();

const objSuccess = '{"name": "Yaroslav"}';

const parseUser = () => {
  try {
    return JSON.parse(objSuccess);
  } catch (e) {
    return null;
  }
};

console.log(parseUser());