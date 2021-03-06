const calculateTips = (total, tipPercent = 0.25) => total + total * tipPercent;
const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};
 const add = ()=>{
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
          if(a<0||b<0){
              return reject('Number must be positive')
          }
          resolve(a+b);
       },200)
   })
 }
//
// Goal: Test temperature conversion functions
//
// 1. Export both functions and load them into test suite
// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"
// 4. Run the Jest to test your work!
module.exports = {
  calculateTips,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add
};
