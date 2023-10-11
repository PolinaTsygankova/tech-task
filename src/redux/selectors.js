export const allCars = (state) => state.cars.cars;

export const favouriteCars = (state) => {
   const cars = allCars(state);

   const list = cars.filter((car) => car.favourite === true);

   return list;
};
