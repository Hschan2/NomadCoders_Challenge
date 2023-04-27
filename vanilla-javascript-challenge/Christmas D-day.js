/**
 * Challenge goals: Date와setInterval함수들을 사용해 크리스마스까지 며칠이 남았는지 알려주는 시계를 만드세요. (12월 25일)
 */

// 내가 작성한 코드
const clockTitle = document.querySelector(".js-clock");
const D_day = document.querySelector(".d_day");
const christmasDay = new Date("December 25, 2023 00:00:00").getTime();

setInterval(() => {
  const todayNow = new Date().getTime();
  const remindDate = christmasDay - todayNow;
  const days = Math.floor(remindDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remindDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remindDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remindDate % (1000 * 60)) / 1000);

  const hour = `${hours < 10 ? `0${hours}` : hours}`;
  const minute = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const second = `${seconds < 10 ? `0${seconds}` : seconds}`;

  D_day.innerHTML = `D-${days}`;
  clockTitle.innerHTML = `${days}day ${hour}hours ${minute}minutes ${second}seconds`;
}, 1000);


// NomadCoder Solution Code
const clockTitle2 = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle2.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);
