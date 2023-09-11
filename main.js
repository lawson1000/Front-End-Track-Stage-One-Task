const date = new Date();
let day = date.getDay();

let time = date.getTime();

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("day").innerHTML = "today is: " + day;
document.getElementById("time").innerHTML = "current time in Ms: " + time;
