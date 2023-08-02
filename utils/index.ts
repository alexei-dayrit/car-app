import { CarProps, FilterProps } from "@/types";

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

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, model, manufacturer, year } = filters;
  const rapidApiKey = process.env.X_RAPID_API_KEY;
  const headers =  {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const options = {
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {
      fuel_type: fuel,
      limit,
      model,
      manufacturer,
      year
    },
    headers: headers
  }

  const response = await axios.request(options);
  // console.log('response.data:', response.data[0])
  return response.data
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, year, model } = car;
  // below doesn't work, need to fix
  const imaginApiKey = process.env.IMAGIN_API_KEY;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
  const currentSearchParams = new URLSearchParams(window.location.search);
  currentSearchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${currentSearchParams.toString()}`;

  return newPathName;
}
