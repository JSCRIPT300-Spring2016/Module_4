/*
** author: fulin shen
** created on: April 23, 2016
** description: create a date utility using revealing pattern
*/
'use strict';

var enhancedDate = (function() {
  var _privateDate;

  function _initDate() {
    _privateDate = new Date();
  }

  function setDate(newDate) {
    if(newDate != null) {
      _privateDate = new Date(newDate);
    } else {
      _privateDate = new Date();
    }
  }

  function getDayName() {
    var locale = 'en-us';
    if(!_privateDate) {
      _initDate();
    }

    return _privateDate.toLocaleDateString(locale, { weekday: 'long' });
  }

  function getMonthName() {
    var locale = 'en-us';
    if(!_privateDate) {
      _initDate();
    }

    return _privateDate.toLocaleString(locale, { month: 'long' });
  }

  //getDate() and .getDate({ format: "milliseconds" }) return milliseconds
  //getDate({ format: "formatted" }) return date in the form of 'Month Day, Year'
  function getDate(formatObj) {
    if(!_privateDate) {
      _initDate();
    }

    if((formatObj === undefined) ||
       (formatObj.format.toLowerCase() === 'milliseconds')) {
      return _privateDate.getTime();
    } else if (formatObj.format.toLowerCase() === 'formatted') {
      return getMonthName() + ' ' + _privateDate.getDate()
        + ', ' + _privateDate.getFullYear();
    } else {
      throw new Error('Invalid input date format');
    }
  }

  function isFuture() {
    if(!_privateDate) {
      _initDate();
    }

    var today = new Date();
    if(_privateDate > today) {
      return true;
    } else {
      return false;
    }
  }

  function isToday() {
    if(!_privateDate) {
      _initDate();
    }

    var today = new Date();
    if((today.getDate() == _privateDate.getDate()) &&
      (today.getMonth() == _privateDate.getMonth()) &&
      (today.getYear() == _privateDate.getYear())) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };
})();
