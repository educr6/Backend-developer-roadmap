const INVALID_DATE = "Invalid Date";

const isDateInvalid = (date) => {
  return date.toUTCString() === INVALID_DATE;
};

const stringHasOnlyNumericCharacters = (str) => {
  return /^\d+$/.test(str);
};

const getUnixTimestamp = (dateObj) => {
  return dateObj.valueOf();
};

const createResponseObj = (dateStr) => {
  let result = {};

  if (dateStr === undefined) {
    dateStr = Date.now().toString();
  }

  if (stringHasOnlyNumericCharacters(dateStr)) {
    dateStr = parseInt(dateStr);
  }

  let dateObj = new Date(dateStr);

  if (isDateInvalid(dateObj)) {
    return { error: INVALID_DATE };
  }

  let unixTimeStamp = getUnixTimestamp(dateObj);

  result = {
    utc: dateObj.toUTCString(),
    unix: unixTimeStamp,
  };

  return result;
};

module.exports = createResponseObj;
