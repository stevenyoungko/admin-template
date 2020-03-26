// import startOfDay from 'date-fns/start_of_day'
// import endOfDay from 'date-fns/end_of_day'
// import startOfWeek from 'date-fns/start_of_week'
// import endOfWeek from 'date-fns/end_of_week'
// import startOfMonth from 'date-fns/start_of_month'
// import endOfMonth from 'date-fns/end_of_month'
// import addDays from 'date-fns/add_days'
// import addMonths from 'date-fns/add_months'
// import isEqual from 'date-fns/is_equal'
// import format from 'date-fns/format'
// import differenceInDays from 'date-fns/difference_in_days'
import moment from 'moment'
// format='YYYY-MM-DDTHH:mm:ss.SSSZ'
// ref: https://date-fns.org/v1.30.1/docs/format
export const getFormat = (date, formatStr, useZ) => moment(date).format(formatStr) + ((useZ) ? 'Z' : '')
export const getToday = () => moment().format('YYYY-MM-DD')

export const getYesterday = () => moment().add(-1, 'days').format('YYYY-MM-DD')

export const getTodayRange = () => [moment().startOf('day')._d, moment().endOf('day')._d]

export const getYesterdayRange = () => [moment().subtract(1, 'days').startOf('day')._d, moment().subtract(1, 'days').endOf('day')._d]

export const getWeek = () => [moment().startOf('week')._d, moment().endOf('week')._d]

export const getLastWeek = () => [moment().subtract(7, 'days').startOf('week')._d, moment().subtract(7, 'days').endOf('week')._d]

export const getMonth = () => [moment().startOf('month')._d, moment().endOf('month')._d]

export const getLastMonth = () => [moment().subtract(1, 'month').startOf('month')._d, moment().subtract(1, 'month').endOf('month')._d]

export const getLastTwoWeek = () => [moment().subtract(2, 'week').startOf('week')._d, moment().subtract(1, 'week').endOf('week')._d]

export const getNextTwoWeek = () => [moment().startOf('week')._d, moment().add(1, 'week').endOf('week')._d]

export const getLast14Days = () => [moment().add(-14, 'days').startOf('day')._d, moment().add(-1, 'days').endOf('day')._d]

export const getNext14Days = () => [moment().startOf('day')._d, moment().add(13, 'days').endOf('day')._d]

export const getLastYear = () => [moment().subtract(1, 'year').startOf('day')._d, moment().subtract(1, 'year').endOf('day')._d]

export const getNextYear = () => [moment().add(1, 'year').startOf('day')._d, moment().add(1, 'year').endOf('day')._d]

export const getDifferentDays = (end, start) => moment(end).diff(moment(start), 'days')
// eslint-disable-next-line
export const isEqualDate = (dateLeft, dateRight) => moment(dateLeft).isSame(dateRight)
export const isEqualDateRange = (dateRangeLeft, dateRangeRight) => moment(dateRangeLeft[0]).isSame(dateRangeRight[0]) && moment(dateRangeLeft[1]).isSame(dateRangeRight[1])

/**
 * For Element-ui 日期時間選擇器當地時區轉成 UTC 時區
 * default type 為 'datetimerange'
 * 傳進來的參數需要是 (YYYY-MM-DD HH:mm:ss) 格式
 * 由於按下 clear(清空) 綁定值會是 null，多新增判斷過濾 null
 * @param {String} localTime
 * @param {Boolean} notRange
 * 如果日期時間選擇器的 type 不是 range，notRange 請一定要傳 true
 * @returns {Array | String} UTC Time
 */
export function formatLocal2Utc(localTime, notRange) {
  try {
    if (localTime === null) {
      return notRange ? '' : ['', '']
    }
    if (typeof localTime === 'string') {
      if (!notRange) console.error('formatLocal2Utc 需要傳參數2 {true} 來判斷不是 Range type')
      return localTime === '' ? '' : moment(localTime).utc().format()
    } else if (Array.isArray(localTime)) {
      if (notRange) console.error('formatLocal2Utc 是 Range type 時參數2為 {ture}，清空資料會報錯，請不用傳值')
      return [
        localTime[0] ? moment(localTime[0]).utc().format() : '',
        localTime[1] ? moment(localTime[1]).utc().format() : ''
      ]
    } else {
      throw new Error('formatLocal2Utc 參數1 只能是 Array 及 String')
    }
  } catch (e) {
    console.error(e.message)
    return notRange ? '' : ['', '']
  }
}


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
