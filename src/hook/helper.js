export const printLog = (arg) => {
  import.meta.env.VITE_ODE_ENV !== 'production' ? console.log(arg) : console.log('');
};
