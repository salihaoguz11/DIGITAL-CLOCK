const currentTime = document.querySelector(".time");
const amPm = document.querySelector(".am-pm");
const date = document.querySelector(".date");

const getCurrentTime = () => {
  let currentDate =
    Date().split("0", "1") + " " + new Date().toLocaleDateString();
  date.innerHTML = currentDate;
  let time = Date().split(" ")[4];
  currentTime.innerHTML = time;

  if (new Date().getHours < 12) {
    amPm.innerHTML = "AM";
  } else {
    amPm.innerHTML = "PM";
  }
};

setInterval(getCurrentTime, 1000);
