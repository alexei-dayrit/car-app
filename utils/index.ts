import { CarProps } from "@/types";

const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {
  const rapidApiKey = process.env.X_RAPID_API_KEY;
  const headers =  {
    'X-RapidAPI-Key': rapidApiKey,
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {

}
