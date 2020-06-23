const moment = require('moment');

function getDatesInRange({ starDate, finalDate }) {
  const format = 'YYYY-MM-DD';
  const initialDate = moment.utc(starDate, format);
  const lastDate = moment.utc(finalDate, format);
  const ascendingDate = lastDate.diff(initialDate) > 0;

  if (initialDate.isValid() && lastDate.isValid()) {
    const daysRange = Math.abs(lastDate.diff(initialDate, 'days'));
    let datesRange = [];

    for (let i = 0; i <= daysRange; i++) {
      ascendingDate
        ? datesRange.push(initialDate.format(format))
        : datesRange.push(lastDate.format(format));

      ascendingDate ? initialDate.add(1, 'days') : lastDate.add(1, 'days');
    }

    return datesRange;
  } else return 'Dates are invalids';
}

module.exports = {
  getDatesInRange
};
