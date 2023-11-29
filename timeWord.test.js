const timeWord = require('./timeWord.js');

function timeword(time) {
  const hours = [
    'midnight',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'noon'
  ];

  const minutes = [
    'oh',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  const [hour, minute] = time.split(':').map(Number);

  const getHourWord = () => {
    const period = hour < 12 ? 'am' : 'pm';
    const adjustedHour = hour % 12 || 12; // convert 0 to 12 for am/pm
    return period === 'noon' || period === 'midnight'
      ? hours[hours.indexOf(period)]
      : `${hours[adjustedHour]} ${period}`; 
  };

  const getMinuteWord = () => {
    if (minute === 0) return '';
    if (minute <= 20) return minutes[minute];
    const tens = minutes[Math.floor(minute / 10) + 18];
    const ones = minute % 10 !== 0 ? minutes[minute % 10] : '';
    return `${tens}${ones}`;
  };

  return `${getHourWord()} ${getMinuteWord()}`.trim();
}

// test cases 
describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('handles midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('handles noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('handles am times', () => {
    expect(timeWord('01:00')).toBe('one o\' clock am');
    expect(timeWord('06:01')).toBe('six oh one am');
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  test('handles pm times', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
    expect(timeWord('23.23')).toBe('eleven twenty three pm');
  });

  test('handles various times', () => {
    expect(timeWord('06:10')).toBe('six ten am');
    expect(timeWord('06:18')).toBe('six eighteen am');
    expect(timeWord('06:30')).toBe('six thirty am');
  });
});