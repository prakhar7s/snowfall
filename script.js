const remainingTime = document.querySelector("#times");

setInterval(createSnowFlake, 50);

// initialize timer for new year
const waitingYear = new Date().getFullYear() + 1;
const time = updateTime(`${waitingYear}-1-1`);
remainingTime.innerHTML = `<span>${time[0]}</span><span>${time[1]}</span><span>${time[2]}</span><span>${time[3]}</span>`;

function createSnowFlake() {
  const snowflake = document.createElement("i");
  snowflake.classList.add("fas");
  snowflake.classList.add("fa-snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  setTimeout(() => {
    snowflake.remove();
  }, 5000);

  document.body.appendChild(snowflake);
}

// update time in every 1s
setInterval(() => {
  const time = updateTime(`${waitingYear}-1-1`);
  remainingTime.innerHTML = `<span>${time[0]}</span><span>${time[1]}</span><span>${time[2]}</span><span>${time[3]}</span>`;
}, 1000);

function updateTime(destination) {
  const differenceInMilisecs = new Date(destination) - new Date();
  const days = getDivMod(differenceInMilisecs, 86400000);
  const hours = getDivMod(days[1], 3600000);
  const mins = getDivMod(hours[1], 60000);
  const secs = getDivMod(mins[1], 1000);

  return [days[0], hours[0], mins[0], secs[0]];
}

function getDivMod(milisecs, x) {
  return [Math.floor(milisecs / x), milisecs % x];
}
