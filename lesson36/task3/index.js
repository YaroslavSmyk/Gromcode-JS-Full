'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */
const baseUrl = 'https://api.github.com/users';
// const a = new Promise.all();

const fetchUser = async userId => {
  const response = await fetch(`${baseUrl}/${userId}`);
  if (response.ok) {
    // console.log(response);
    return response.json();
  }
  return new Error('Failed to get user id');
};
export const getUsersBlogs = users => {
  try {
    return Promise.all(users.map(el => fetchUser(el).then(res => res.blog)));
  } catch (err) {
    return new Error('Failed to get user users');
  }
  //   const response = fetch(baseUrl);
  //   users.blog;
};

// // examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]













// const baseUrl = 'https://api.github.com/users';
// const a = new Promise.all();

// const fetchUser = async userId => {
//   const response = await fetch(`${baseUrl}/${userId}`);
//   //   if (response.ok) {
//     return response.json();
//   }
//   throw new Error('Failed to get user data');
// };
// const getUsersBlogs = async users => {
//   const response = await fetch(baseUrl);
//   if (response.ok) {
//     return response.json();
//   }
//   try {
//     return Promise.all(response.map(el => console.log(el).then(res => console.log(res.blog))));
//   } catch (err) {}
//   //   const response = fetch(baseUrl);
//   //   users.blog;
// };

// // // examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
