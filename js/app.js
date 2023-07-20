const spiderImage = document.querySelector("img");
let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;
let score = 0;

setInterval(() => {
  let top = Math.random() * innerWidth;
  let left = Math.random() * innerHeight;

  spiderImage.style = `
    transition: 0.3s;
    position:absolute;
    left: ${top}px;
    top:${left}px;
    `;
}, 700);

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "spider-image") {
    console.log("you get score");
    score++;
  }
});
