const values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};

const json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

const obj = {
  limit: 1,
  over_carrier_service_id: 17,
  under_carrier_service_id: 17,
};

const generateNewJson = ({ values, json }) => {
  let result = {};

  const { data } = json;
  const valueArray = Object.values(data);
  const keys = Object.keys(data);

  valueArray.forEach((v, index) => {
    let keysIndex = keys[index];
    result = { ...result, [keysIndex]: splitKeys({ v, values }) };
  });

  console.log(result);
  return result;
};

const splitKeys = ({ obj, values }) => {
  const keys = Object.keys(obj);
  const valueObj = Object.values(obj);
  let newObj = {};
  keys.forEach((k, index) => {
    const stringKey = k.split("_");
    const key = stringKey[0];
    const valuesArray = valueObj[index];
    newObj = { ...newObj, [key]: valueObj[index] };
    if (stringKey.length > 1)
      newObj = { ...newObj, [key]: values[valuesArray] };
  });
  return newObj;
};

generateNewJson({ values, json });
