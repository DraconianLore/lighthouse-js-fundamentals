let talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let day = '';
  let newDate;
  for (i = 0; i < 10; i++) {
    if (i < 4) {
      year += date[i];
    }
    if (i >4 && i < 7) {
      month += date[i];
    }
    if (i > 7 && date[i] != '0') {
      day += date[i];
      if (i == 9) {
        switch (date[i]) {
          case '1':
            if (date[i-1] == '1') {
              day += 'th, ';
            } else day += 'st, ';
            break;
          case '2':
            day += 'nd, ';
            break;
          default:
            day += 'th, ';
            break;
        }
      }
    }
  }
  switch (month) {
    case '01':
      newDate = 'January ';
      break;
    case '02':
      newDate = 'February ';
      break;
    case '03':
      newDate = 'March ';
      break;
    case '04':
      newDate = 'April ';
      break;
    case '05':
      newDate = 'May ';
      break;
    case '06':
      newDate = 'June ';
      break;
    case '07':
      newDate = 'July ';
      break;
    case '08':
      newDate = 'August ';
      break;
    case '09':
      newDate = 'September ';
      break;
    case '10':
      newDate = 'October ';
      break;
    case '11':
      newDate = 'November ';
      break;
    case '12':
      newDate = 'December ';
      break;
    default:
      newDate = 'Invalid Month ';
      break;
  }
  newDate += day;
  newDate += year;
  return (newDate);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
