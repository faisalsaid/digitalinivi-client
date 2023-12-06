export const apiURI = import.meta.env.VITE_ODE_ENV === 'production' ? 'https://digitalinviapi.onrender.com/api' : 'http://localhost:1919/api';
console.log(apiURI);
