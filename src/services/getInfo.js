// mesmo instalando o plugin, por enquanto, não consegui passar pelo problema do access control allow origin, utilizando fetch, como está na documentação do svelte v2

// import Http from '@mamba/pos/api/http.js'
// const randomChar = (Math.random() * 83 + 1).toFixed(0);

// const myRequest = {
//   url: `https://swapi.dev/api/people/${randomChar}`,
//   headers: {
//     'Content-Type': 'application/json;application/x-www-form-urlencoded; charset=UTF-8',
//     'Cache-Control': 'no-cache',
//     'Authorization': 'CDBDE4E6DC4E6AC1845606D0720BAFA557FA046347876CAA3986872AC1123852',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   },
//   method: 'GET',
//   proxy: true
// }

// Http.send(myRequest).then((result) => {
//   // in case the request have no errors
//   console.log(result.status)
//   console.log(result.body)

// })
//   .catch((error) => {
//     // if the request fails
//     console.log(error.status)
//     console.log(error.msg)
//   });
