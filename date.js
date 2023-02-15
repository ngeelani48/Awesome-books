let dateWrapper = document.querySelector(".date");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function countTime() {
  let newDate = new Date();

  let month = newDate.getMonth();
  let day = newDate.getDay();
  let year = newDate.getFullYear();
  let time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  dateWrapper.innerHTML = `${monthNames[month]} ${day} ${year}, ${time}`;
}

setInterval(countTime, 1000);
