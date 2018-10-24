// Lightning exercise:
// 1. Create a basic `index.html` `main.js` project
// 2. Create three `<h3>` tags and add any text you want to each. Use javascript to listen for a click event on the header tags and `console.log` their text.

let header = document.querySelector(".headers")

let headerClick = (event) => {
  console.log(event.target.textContent)
}

header.addEventListener("click", headerClick)

// Below is how John & Sebastian did it 
// document.querySelector(".headers").addEventListener("click", (event) => {
//   console.log(event.target.textContent)
// })