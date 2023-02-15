const dateWrapper = document.querySelector('.date');

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function countTime() {
  const newDate = new Date();

  const month = newDate.getMonth();
  const day = newDate.getDay();
  const year = newDate.getFullYear();
  const time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  dateWrapper.innerHTML = `${monthNames[month]} ${day} ${year}, ${time}`;
}

setInterval(countTime, 1000);
