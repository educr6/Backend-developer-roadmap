const currencyWorthConversion = {
  PENNY: 1,
  NICKEL: 1,
  DIME: 1,
  QUARTER: 1,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const literalValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  let failedResult = { status: "INSUFFICIENT_FUNDS", change: [] };
  let change = (cash - price).toFixed(2);
  if (change < 0) return undefined;

  const totalValueOfCID = cid.reduce((acum, currectValue) => {
    return acum + currectValue[1] * currencyWorthConversion[currectValue[0]];
  }, 0);

  if (change > totalValueOfCID) {
    return failedResult;
  }

  let currChange = change;
  let result = [];

  for (let i = 0; i < cid.length; i++) {
    let currencyName = cid[cid.length - i - 1][0];
    let currencyValue = literalValue[currencyName];
    let currencyQuantity = (cid[cid.length - i - 1][1] / currencyValue).toFixed(
      2
    );

    let currCalcResult = calculateChangeForThisCurrencyType(currChange, [
      currencyName,
      currencyValue,
      currencyQuantity,
    ]);

    if (currCalcResult.length > 0) {
      currChange = currCalcResult[2];
      result.push(currCalcResult.slice(0, 2));
    } else {
      continue;
    }
  }

  if (currChange !== 0) return failedResult;

  let status = "OPEN";

  result = result.map((elem) => {
    return [elem[0], parseFloat(elem[1])];
  });

  cid = cid.map((elem) => {
    return [elem[0], parseFloat(elem[1])];
  });

  if (areEqualResults(result, cid)) {
    status = "CLOSED";
  } else {
    const thereIsAValuePopulated = result.some((elem) => {
      return elem[1] !== 0;
    });

    if (thereIsAValuePopulated) {
      result = result.filter((elem) => {
        return elem[1] !== 0;
      });
    }
  }

  if (status === "CLOSED") {
    return { status: status, change: result.reverse() };
  }

  return { status: status, change: result };
}

function calculateChangeForThisCurrencyType(change, currencyType) {
  let [currencyName, currencyValue, currencyQuantity] = currencyType;
  currencyQuantity = parseInt(currencyQuantity);

  let currChange = change;

  if (change < currencyValue) return [currencyName, 0, change];

  let currencyQuantityCounter = 0;

  while (currChange >= 0) {
    if (currencyQuantity === currencyQuantityCounter) break;
    if (currChange - currencyValue < 0) break;

    currChange -= currencyValue;
    currChange = currChange.toFixed(2);
    currencyQuantityCounter += 1;
  }

  return [
    currencyName,
    literalValue[currencyName] * currencyQuantityCounter,
    parseFloat(currChange),
  ];
}

function areEqualResults(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (isElementPresent(arr1[i], arr2) === false) {
      return false;
    }
  }
  return true;
}

function isElementPresent(elem, arr) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (elem[0] === arr[i][0]) {
      if (elem[1] === arr[i][1]) {
        result = true;
      }
    }
  }

  return result;
}

let result = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.log(result);

console.log(
  result ==
    {
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    }
);
