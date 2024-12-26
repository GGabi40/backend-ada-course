const { DateTime, Interval } = require('luxon');

const now = DateTime.now();

console.log(now);
console.log(now.month);

const birthday = DateTime.fromFormat('02/01/2000', 'dd/mm/yyyy');
console.log(birthday.day);

//                              (fecha menor, fecha mayor)
const age = Interval.fromDateTimes(birthday, now).length('year');
console.log(Math.floor(age));

