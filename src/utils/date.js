// import startOfDay from 'date-fns/start_of_day'
// import endOfDay from 'date-fns/end_of_day'
// import startOfWeek from 'date-fns/start_of_week'
// import endOfWeek from 'date-fns/end_of_week'
// import startOfMonth from 'date-fns/start_of_month'
// import endOfMonth from 'date-fns/end_of_month'
// import addDays from 'date-fns/add_days'
// import addMonths from 'date-fns/add_months'
// import isEqual from 'date-fns/is_equal'
import format from 'date-fns/format'
// import differenceInDays from 'date-fns/difference_in_days'
import moment from 'moment'
// format='YYYY-MM-DDTHH:mm:ss.SSSZ'
// ref: https://date-fns.org/v1.30.1/docs/format 
export const getFormat = (date, formatStr, useZ) => moment(date).format(formatStr) + ((useZ) ? 'Z': '')
export const getToday = () => moment().format('YYYY-MM-DD')

export const getYesterday = () => moment().add(-1,'days').format('YYYY-MM-DD')

export const getTodayRange = () => [moment().startOf('day')._d, moment().endOf('day')._d]

export const getYesterdayRange = () => [moment().subtract(1, 'days').startOf('day')._d, moment().subtract(1, 'days').endOf('day')._d]

export const getWeek = () => [moment().startOf('week')._d, moment().endOf('week')._d]

export const getLastWeek = () => [moment().subtract(7, 'days').startOf('week')._d,moment().subtract(7, 'days').endOf('week')._d]

export const getMonth = () => [moment().startOf('month')._d,moment().endOf('month')._d]

export const getLastMonth = () => [moment().subtract(1, 'month').startOf('month')._d, moment().subtract(1, 'month').endOf('month')._d]

export const getLastTwoWeek = () => [moment().subtract(2, 'week').startOf('week')._d, moment().subtract(1, 'week').endOf('week')._d]

export const getNextTwoWeek = () => [moment().startOf('week')._d, moment().add(1,'week').endOf('week')._d]

export const getLast14Days = () => [moment().add(-14,'days').startOf('day')._d,moment().add(-1,'days').endOf('day')._d]

export const getNext14Days = () => [moment().startOf('day')._d,moment().add(13,'days').endOf('day')._d]

export const getDifferentDays = (end, start) => moment(end).diff(moment(start),'days')
// eslint-disable-next-line
export const isEqualDate = (dateLeft, dateRight) => moment(dateLeft).isSame(dateRight)
export const isEqualDateRange = (dateRangeLeft, dateRangeRight) => moment(dateRangeLeft[0]).isSame(dateRangeRight[0]) && moment(dateRangeLeft[1]).isSame(dateRangeRight[1])





// date-fns
// export const getFormat = (date, formatStr, useZ) => format(date, formatStr) + ((useZ) ? 'Z': '')
// export const getToday = () => format(new Date(), 'YYYY-MM-DD');

// export const getYesterday = () => format(addDays(new Date(), -1), 'YYYY-MM-DD');

// export const getTodayRange = () => [startOfDay(new Date()), endOfDay(new Date())];

// export const getYesterdayRange = () => getTodayRange().map(d => addDays(d, -1));

// export const getWeek = () => [startOfWeek(new Date()), endOfWeek(new Date())];

// export const getLastWeek = () => getWeek().map(d => addDays(d, -7));

// export const getMonth = () => [startOfMonth(new Date()), endOfMonth(new Date())];

// export const getLastMonth = () => {
//   const lastMonth = addMonths(new Date(), -1);
//   return [startOfMonth(lastMonth), endOfMonth(lastMonth)];
// };

// export const getLastTwoWeek = () => getLastWeek().map((d, i) => (i === 0) ? addDays(d, -7): d);

// export const getNextTwoWeek = () => getWeek().map((d, i) => (i === 1) ? addDays(d, 7): d);

// export const getLast14Days = () => getYesterdayRange().map((d, i) => (i === 0) ? addDays(d, -13): d);

// export const getNext14Days = () => getTodayRange().map((d, i) => (i === 1) ? addDays(d, 13): d);

// export const getDifferentDays = (end, start) => differenceInDays(end, start);

// // eslint-disable-next-line
// export const isEqualDate = (dateLeft, dateRight) => isEqual(dateLeft, dateRight);
// export const isEqualDateRange = (dateRangeLeft, dateRangeRight) => isEqual(dateRangeLeft[0], dateRangeRight[0]) && isEqual(dateRangeLeft[1], dateRangeRight[1]);