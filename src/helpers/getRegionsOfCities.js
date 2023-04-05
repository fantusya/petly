export const getRegionsOfCities = array => {
  return array.map(item => {
    let city = Object.assign({}, item);

    if (Number(item.useCounty)) {
      city.value = `${item.cityEn}, ${item.countyEn}, ${item.stateEn} region`;
      city.label = `${item.cityEn}, ${item.countyEn}, ${item.stateEn} region`;
    } else {
      city.value = `${item.cityEn}, ${item.stateEn} region`;
      city.label = `${item.cityEn}, ${item.stateEn} region`;
    }

    return city;
  });
};

// export const getRegionsOfCities = array => {
//   return array.map(({ useCounty, stateEn, cityEn, countyEn }) => {
//     return Number(useCounty)
//       ? `${cityEn}, ${countyEn}, ${stateEn} region`
//       : `${cityEn}, ${stateEn} region`;
//   });
// };
