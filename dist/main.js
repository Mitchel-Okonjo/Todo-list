/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFns": () => (/* binding */ DateFns)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");



const DateFns = (() => {
  const notValid = (date) => {
    if (new Date(date) <= new Date()) return true;
    return false;
  };

  const categorizeTodos = (todo) => {
    const today = new Date();

    if (date_fns__WEBPACK_IMPORTED_MODULE_1__["default"](date_fns__WEBPACK_IMPORTED_MODULE_2__["default"](todo.date), today)) return "today";
    if (date_fns__WEBPACK_IMPORTED_MODULE_3__["default"](date_fns__WEBPACK_IMPORTED_MODULE_2__["default"](todo.date), today))
      return "this week";
  };

  const filterTodayTodos = () => {
    const todos = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
    return todos.filter((todo) => categorizeTodos(todo) === "today");
  };

  const filterThisWeekTodos = () => {
    const todos = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
    return todos.filter((todo) => categorizeTodos(todo) === "this week");
  };

  const setTodayTodos = () => {
    const arr = filterTodayTodos();
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(arr, "Today");
  };

  const setThisWeekTodos = () => {
    const arr = filterThisWeekTodos();
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(arr, "ThisWeek");
  };

  return {
    notValid,
    filterTodayTodos,
    filterThisWeekTodos,
    setTodayTodos,
    setThisWeekTodos,
  };
})();




/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
const Display = (() => {
  const pageLoaded = () => {
    const page = document.querySelector(".main-content");
    if (page.innerHTML !== "") return true;
    return false;
  };
  const changeHeading = (newHeading) => {
    const heading = document.querySelector(".main-header");
    heading.textContent = `${newHeading}`;
  };

  const isCurrentHeading = (currHeading) => {
    const heading = document.querySelector(".main-header");
    return heading.textContent === currHeading;
  };

  const loadItems = (arr, module) => {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      module.display(item.title, item.date, item.dataId);
    }
  };

  const clear = () => {
    const page = document.querySelector(".main-content");
    page.innerHTML = "";
  };

  const showAddTaskNav = () => {
    const nav = document.querySelector(".sidebar-item.add-task");
    nav.classList.add("active");
  };

  const removeAddTaskNav = () => {
    const nav = document.querySelector(".sidebar-item.add-task");
    nav.classList.remove("active");
  };

  const navFocus = (className) => {
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach((nav) => {
      nav.classList.remove("nav-focus");
    });
    const currNav = document.querySelector(`.${className}`);
    currNav.classList.add("nav-focus");
  };

  const toggleNav = () => {
    const topBar = document.querySelector("nav .top");
    const middleBar = document.querySelector("nav .middle");
    const bottomBar = document.querySelector("nav .bottom");
    const sideNavContent = document.querySelector(".sidebar");
    const navOverlay = document.querySelector(".nav-overlay");

    topBar.classList.toggle("top-rotate");
    middleBar.classList.toggle("middle-vanish");
    bottomBar.classList.toggle("bottom-rotate");
    sideNavContent.classList.toggle("show");
    navOverlay.classList.toggle("active");
  };

  const handleMediaChange = (e) => {
    if (e.matches) {
      const openNav = document.querySelector(".sidebar.show");
      if (openNav) toggleNav();
    }
  };

  // const sidebar = document.querySelector(".sidebar");
  // const mainContent = document.querySelector(".main");

  // function setMargins() {
  //   const sidebarWidth = sidebar.offsetWidth;
  //   mainContent.style.marginLeft = `${sidebarWidth}px`;
  // }

  // setMargins();

  // window.onresize = () => {
  //   setMargins();
  // };

  return {
    changeHeading,
    loadItems,
    navFocus,
    isCurrentHeading,
    pageLoaded,
    clear,
    showAddTaskNav,
    removeAddTaskNav,
    toggleNav,
    handleMediaChange,
  };
})();




/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inbox": () => (/* binding */ Inbox)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");




const Inbox = (() => {
  const displayAddButton = () => {
    const content = document.querySelector(".main-content");
    const div = document.createElement("div");
    div.classList.add("todo", "add-task");
    div.innerHTML = `
    <img
    class="icon sidebar-icon add-task"
    src="icons/plus.svg"
    alt="claendar-week icon"
  />
  <div class="todo-text add-task">Add task</div>`;
    content.appendChild(div);
  };

  const display = () => {
    _display__WEBPACK_IMPORTED_MODULE_2__.Display.showAddTaskNav();
    _display__WEBPACK_IMPORTED_MODULE_2__.Display.clear();
    if (_display__WEBPACK_IMPORTED_MODULE_2__.Display.isCurrentHeading("Inbox") && _display__WEBPACK_IMPORTED_MODULE_2__.Display.pageLoaded()) return;
    _display__WEBPACK_IMPORTED_MODULE_2__.Display.changeHeading("Inbox");
    const arr = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
    _display__WEBPACK_IMPORTED_MODULE_2__.Display.navFocus("Inbox");
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Inbox") === false) {
      displayAddButton();
    } else {
      _display__WEBPACK_IMPORTED_MODULE_2__.Display.loadItems(arr, _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp);
      displayAddButton();
    }
  };

  return { display };
})();




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
const Store = (() => {
  // Stores given array in local Storage
  const setArray = (array, name) => {
    // if (!checkStorage("localStorage")) return;
    localStorage.setItem(name, JSON.stringify(array));
  };

  // Get given array from Local Storage
  const getArray = (name) => JSON.parse(localStorage.getItem(name));

  // Check if a given array exists in the local Storage
  const checkArray = (arr) => {
    if (getArray(arr)) {
      return true;
    }
    return false;
  };

  // Get length of a given array
  const getLength = (arr) => {
    const array = getArray(arr);
    return array.length;
  };

  const setId = (name, value) => {
    localStorage.setItem(name, value);
  };

  const getId = (name) => {
    // if given Id variable exists, return the value.
    // Else, set the variable to zero and return the value.
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    localStorage.setItem(name, 0);
    return localStorage.getItem(name);
  };

  // Use Binary search to get specific item from array using a value, target
  const search = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (target > array[mid].dataId) {
        start = mid + 1;
      } else if (target < array[mid].dataId) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };

  // Removes an item from respective array using id of the item
  const removeItem = (name, id) => {
    if (checkArray(name) === false) return;
    const array = getArray(name);
    const index = search(array, id);
    if (index === -1) return;
    array.splice(index, 1);
    setArray(array, name);
  };

  return {
    setArray,
    getArray,
    checkArray,
    getLength,
    removeItem,
    setId,
    getId,
  };
})();




/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
const Popup = (() => {
  // Declare variables
  const newTask = document.querySelector(".task-popup");
  const newProject = document.querySelector(".project-popup");
  const overlay = document.querySelector(".overlay");
  const todoTitle = document.querySelector(".task-input.title");
  const projectTitle = document.querySelector(".project-input.title");
  const date = document.querySelector(".date-input");

  const openTask = () => {
    newTask.classList.add("active");
    addOverlay();
  };

  const openProject = () => {
    newProject.classList.add("active");
    addOverlay();
  };

  const addOverlay = () => {
    overlay.classList.add("active");
  };

  const removeOverlay = () => {
    overlay.classList.remove("active");
  };

  const open = (e) => {
    if (e.target.matches(".add-task")) {
      openTask();
    } else if (e.target.matches(".add-project")) {
      openProject();
    }
  };

  const closePopup = () => {
    const currentPopup = document.querySelector(".popup.active");
    currentPopup.classList.remove("active");
    removeOverlay();
    setTimeout(clearForm, 200);
  };

  const cancelWasClicked = (e) => e.target.matches(".cancel-popup");

  const overlayWasClicked = (e) => e.target.matches(".overlay");

  const todoFormNotComplete = () => todoTitle.value === "" || date.value === "";

  const projectFormNotComplete = () => projectTitle.value === "";

  const close = (e) => {
    // if close button or overlay was clicked then remove popup and overlay
    if (cancelWasClicked(e) || overlayWasClicked(e)) {
      closePopup();
      clearForm();
    }
  };

  const clearForm = () => {
    // Clear form inputs immediately Popup is closed
    setTimeout(resetFormInput, 200);
  };

  const resetFormInput = () => {
    const description = document.querySelector(".description");
    const priorities = document.getElementsByName("priority");

    projectTitle.value = "";
    todoTitle.value = "";
    description.value = "";
    date.value = "";
    for (let i = 0; i < priorities.length; i++) {
      const priority = priorities[i];
      priority.checked = false;
    }
  };

  return {
    open,
    close,
    todoFormNotComplete,
    projectFormNotComplete,
    closePopup,
  };
})();




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectCtrl": () => (/* binding */ ProjectCtrl),
/* harmony export */   "ProjectDisp": () => (/* binding */ ProjectDisp)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


class Project {
  constructor(title, id) {
    this.title = title;
    this.dataId = id;
  }
}

const ProjectCtrl = (() => {
  const createProject = (title, id) => {
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Projects")) {
      const array = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Projects");
      array.push(new Project(title, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Projects");
    } else {
      const array = [];
      array.push(new Project(title, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Projects");
    }
  };

  const remove = (id) => {
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("Projects", id);
  };

  return { createProject, remove };
})();

const ProjectDisp = (() => {
  const createProjectTitle = (title) => {
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-name", "sidebar-text");
    projectTitle.textContent = title;
    return projectTitle;
  };

  const createProjectIcon = () => {
    const projectIcon = document.createElement("img");
    projectIcon.classList.add("icon", "sidebar-icon");
    projectIcon.setAttribute("src", "icons/format-list-bulleted.svg");
    projectIcon.setAttribute("alt", "Format-list icon");
    return projectIcon;
  };

  const createProjectCancelBtn = () => {
    const projectCancelBtn = document.createElement("button");
    projectCancelBtn.classList.add("project-cancel");
    projectCancelBtn.innerHTML = "&times";
    return projectCancelBtn;
  };

  const createProject = (title, id) => {
    const project = document.createElement("div");
    project.classList.add("sidebar-item", "project");
    project.setAttribute("data-id", id);
    project.appendChild(createProjectIcon());
    project.appendChild(createProjectTitle(title));
    project.appendChild(createProjectCancelBtn());
    return project;
  };

  const deleteProjectClicked = (e) => e.target.matches(".project-cancel");

  const remove = (e) => {
    // If cancel btn was clicked, remove project from display and storage
    if (deleteProjectClicked(e)) {
      const item = e.target.closest(".project");
      const id = item.getAttribute("data-id");
      const container = item.closest(".projects-list");
      container.removeChild(item);
      ProjectCtrl.remove(id);
    }
  };

  // Display projects in stack order
  const display = (title, id) => {
    const projectList = document.querySelector(".projects-list");
    const newProject = createProject(title, id);
    const firstItem = projectList.firstChild;
    projectList.insertBefore(newProject, firstItem);
  };

  return { display, remove };
})();




/***/ }),

/***/ "./src/thisWeek.js":
/*!*************************!*\
  !*** ./src/thisWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThisWeek": () => (/* binding */ ThisWeek)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");





const ThisWeek = (() => {
  const display = () => {
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.removeAddTaskNav();
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.clear();
    if (_display__WEBPACK_IMPORTED_MODULE_3__.Display.isCurrentHeading("This Week") && _display__WEBPACK_IMPORTED_MODULE_3__.Display.pageLoaded()) return;
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.changeHeading("This Week");
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.navFocus("ThisWeek");
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(_date__WEBPACK_IMPORTED_MODULE_2__.DateFns.filterThisWeekTodos(), "ThisWeek");
    const arr = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("ThisWeek");
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.loadItems(arr, _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp);
  };

  return { display };
})();




/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Today": () => (/* binding */ Today)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");





const Today = (() => {
  const display = () => {
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.removeAddTaskNav();
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.clear();
    if (_display__WEBPACK_IMPORTED_MODULE_3__.Display.isCurrentHeading("Today") && _display__WEBPACK_IMPORTED_MODULE_3__.Display.pageLoaded()) return;
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.changeHeading("Today");
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.navFocus("Today");
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(_date__WEBPACK_IMPORTED_MODULE_2__.DateFns.filterTodayTodos(), "Today");
    const arr = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Today");
    _display__WEBPACK_IMPORTED_MODULE_3__.Display.loadItems(arr, _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp);
  };

  return { display };
})();




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "TodoCtrl": () => (/* binding */ TodoCtrl),
/* harmony export */   "TodoDisp": () => (/* binding */ TodoDisp)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


// create class for todo items
class Todo {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.dataId = id;
  }
}

const TodoCtrl = (() => {
  const createTodo = (title, description, date, priority, id) => {
    // If array exists, update it. Else create and store array
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Inbox")) {
      const array = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
      array.push(new Todo(title, description, date, priority, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Inbox");
    } else {
      const array = [];
      array.push(new Todo(title, description, date, priority, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Inbox");
    }
  };

  const remove = (id) => {
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("Inbox", id);
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("Today", id);
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("ThisWeek", id);
  };

  return { createTodo, remove };
})();

// module for displaying todo items
const TodoDisp = (() => {
  const createCheckBox = () => {
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("todo-check");
    return checkBox;
  };

  const createTodoTitle = (title) => {
    const todoTitle = document.createElement("div");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");
    return todoTitle;
  };

  const createTodoDate = (date) => {
    const parts = date.split("-");
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    const dateFormat = `${day} - ${month} - ${year}`;
    const todoDate = document.createElement("div");
    todoDate.textContent = dateFormat;
    todoDate.classList.add("todo-date");
    return todoDate;
  };

  const createCancelBtn = () => {
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "delete";
    cancelBtn.classList.add("todo-cancel");
    return cancelBtn;
  };

  const createTodoItem = (title, date, id) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("data-id", id);
    todo.appendChild(createCheckBox());
    todo.appendChild(createTodoTitle(title));
    todo.appendChild(createTodoDate(date));
    todo.appendChild(createCancelBtn());
    return todo;
  };

  const deleteTodoClicked = (e) => e.target.matches(".todo-cancel");

  const remove = (e) => {
    // If delete was clicked, remove todo from display and Storage
    if (deleteTodoClicked(e)) {
      const item = e.target.closest(".todo");
      const id = item.getAttribute("data-id");
      const container = item.closest(".main-content");
      container.removeChild(item);
      TodoCtrl.remove(id);
    }
  };

  // Display todos in stack order
  const display = (title, date, id) => {
    const todoList = document.querySelector(".main-content");
    const newTodo = createTodoItem(title, date, id);
    const firstItem = todoList.firstChild;
    todoList.insertBefore(newTodo, firstItem);
    document.querySelector(".todo-date").readOnly = true;
  };

  return { display, remove };
})();




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _thisWeek__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thisWeek */ "./src/thisWeek.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display */ "./src/display.js");










const DisplayCtrl = (() => {
  _inbox__WEBPACK_IMPORTED_MODULE_3__.Inbox.display();

  // Declare variables
  const todoTitle = document.querySelector(".task-input.title");
  const projectTitle = document.querySelector(".project-input.title");
  const description = document.querySelector(".description");
  const date = document.querySelector(".date-input");
  const priorities = document.getElementsByName("priority");
  const submitTodo = document.querySelector(".submit.task");
  const submitProject = document.querySelector(".submit.project");
  let priority;

  // Handle media query change for side navigation
  const mediaQuery = window.matchMedia("(min-width: 800px), (width: 800px)");
  mediaQuery.addEventListener("change", _display__WEBPACK_IMPORTED_MODULE_8__.Display.handleMediaChange);

  document.addEventListener("click", (e) => {
    // Toggle Sidebar Nav button
    const navBtn = document.querySelector("nav");
    const navOverlay = document.querySelector(".nav-overlay");

    if (navBtn.contains(e.target)) {
      _display__WEBPACK_IMPORTED_MODULE_8__.Display.toggleNav();
    } else if (e.target === navOverlay) {
      _display__WEBPACK_IMPORTED_MODULE_8__.Display.toggleNav();
    }
  });

  document.addEventListener("click", (e) => {
    // Listen to events to open/close popup
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.open(e);
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.close(e);
  });

  // Handle change of nav
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("Inbox")) _inbox__WEBPACK_IMPORTED_MODULE_3__.Inbox.display();
    if (e.target.classList.contains("Today")) _today__WEBPACK_IMPORTED_MODULE_4__.Today.display();
    if (e.target.classList.contains("ThisWeek")) _thisWeek__WEBPACK_IMPORTED_MODULE_5__.ThisWeek.display();
  });

  // Remove Todo-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-cancel")) {
      _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp.remove(e);
    }
  });

  // Remove Project-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-cancel")) {
      _project__WEBPACK_IMPORTED_MODULE_2__.ProjectDisp.remove(e);
    }
  });

  // Add Todo-item to list
  submitTodo.addEventListener("click", (e) => {
    // Handle incomplete form
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.todoFormNotComplete()) return;

    // Handle past date inputs
    if (_date__WEBPACK_IMPORTED_MODULE_7__.DateFns.notValid(date.value)) {
      alert("Plese enter a future date!");
      e.preventDefault();
      return;
    }

    // Handle priority input
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i].checked) {
        priority = priorities[i].value;
        break;
      } else {
        priority = "";
      }
    }

    // Get id value from Storage and increment id count
    const todoId = _localStorage__WEBPACK_IMPORTED_MODULE_6__.Store.getId("todo-id");
    _localStorage__WEBPACK_IMPORTED_MODULE_6__.Store.setId("todo-id", Number(todoId) + 1);

    _todo__WEBPACK_IMPORTED_MODULE_1__.TodoCtrl.createTodo(
      todoTitle.value,
      description.value,
      date.value,
      priority,
      todoId
    );
    // Prevent form from submitting input to server
    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();

    if (_display__WEBPACK_IMPORTED_MODULE_8__.Display.isCurrentHeading("Today")) _today__WEBPACK_IMPORTED_MODULE_4__.Today.display();
    if (_display__WEBPACK_IMPORTED_MODULE_8__.Display.isCurrentHeading("This Week")) _thisWeek__WEBPACK_IMPORTED_MODULE_5__.ThisWeek.display();
    if (_display__WEBPACK_IMPORTED_MODULE_8__.Display.isCurrentHeading("Inbox")) _inbox__WEBPACK_IMPORTED_MODULE_3__.Inbox.display();

    _date__WEBPACK_IMPORTED_MODULE_7__.DateFns.setTodayTodos();
    _date__WEBPACK_IMPORTED_MODULE_7__.DateFns.setThisWeekTodos();
  });

  // Add Project Item to list
  submitProject.addEventListener("click", (e) => {
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.projectFormNotComplete()) return;

    // Get id value from Storage and increment id count
    const projectId = _localStorage__WEBPACK_IMPORTED_MODULE_6__.Store.getId("project-id");
    _localStorage__WEBPACK_IMPORTED_MODULE_6__.Store.setId("project-id", Number(projectId) + 1);

    _project__WEBPACK_IMPORTED_MODULE_2__.ProjectDisp.display(projectTitle.value, projectId);
    _project__WEBPACK_IMPORTED_MODULE_2__.ProjectCtrl.createProject(projectTitle.value, projectId);

    // Prevent form from submitting input to server
    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map