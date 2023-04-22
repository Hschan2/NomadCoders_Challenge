/**
 * 브라우저 크기에 따라 배경색 변경하기
 */

// 내가 작성한 코드

const body = document.querySelector("body");

window.addEventListener("resize", function () {
  const width = window.innerWidth;

  console.log(width);
  if (width < 600) {
    body.style.backgroundColor = "#ff6961";
  } else if (width < 680) {
    body.style.backgroundColor = "#77dd77";
  } else {
    body.style.backgroundColor = "#aec6cf";
  }
});
