var counter = 0;
var timeout = 3199;
function convertSecond(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return min + ":" + sec;
}
function main() {
  const body = document.querySelector("body");
  console.log("goodbye everyone");
  // const input = document.querySelector("input");
  // input.addEventListener("input", (event) => {
  //   return event.target.value;
  // });

  const paragraph = document.createElement("p");

  //   // 2. Modify the element
  paragraph.textContent = convertSecond(timeout - counter);
  body.append(paragraph);

  function timeIt() {
    counter++;
    paragraph.textContent = convertSecond(timeout - counter);
  }

  setInterval(timeIt, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
