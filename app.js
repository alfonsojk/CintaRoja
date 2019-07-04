// const request = require('request');
// const url = 'https://jsonplaceholder.typicode.com';
// // request para pedir peticiones

// request(`${url}/users`,(error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request(`${url}/posts`,(error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   });


// -------------------------------------------------------------------------------------------------



// const request = require('request');
// const url = 'https://swapi.co/api/';



// request(`${url}/starships/9`,(error, response, body) => {
//          console.log(error); // Print the error if one occurred
//          const json = JSON.parse(body)
//          console.log('este es JSON',json); // Print the HTML for the Google homepage.
//          console.log(json.name);
//          JSON.stringify(json.name);
//        });

// --------------------------------------------------------------------------------------------


// const getSomething = (path,id) => {
//     request.get(`${url}${path}/${id}/`,(error, response, body) => {
//                   console.log(error); // Print the error if one occurred
//                   const json = JSON.parse(body)
//                   console.log('Este es un JSON',json);
//                   console.log(json.name);
//                 })
//             };

//             getSomething('people','32');



// ------------------------------------------------------------------------------------------------


const request = require('request');
const url = 'https://pokeapi.co/api/v2/';
const getPokemon = (path,id) => {
     request.get(`${url}${path}/${id}/`,(error, response, body) => {
                   console.log(error); 
                   console.log('statusCode:', response.statusCode);
                   const json = JSON.parse(body);
                   console.log('Este es un JSON',json);
                   console.log(json.moves[6].move.name);
                 })
};
             getPokemon('pokemon',7);

