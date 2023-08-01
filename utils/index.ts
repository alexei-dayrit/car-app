const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '3d92dcb08emsh6596f846cc6d7c9p1da7f7jsncf1cd34bdc95',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars() {
  const headers =  {
    'X-RapidAPI-Key': '3d92dcb08emsh6596f846cc6d7c9p1da7f7jsncf1cd34bdc95',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const options = {
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    headers: headers
  }

  const response = await axios.request(options);
  console.log('response.data:', response.data[0])
  return response.data
}
