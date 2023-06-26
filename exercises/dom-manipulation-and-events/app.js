const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para1 = document.createElement("p");
para1.classList.add("para1");
para1.textContent = "Hey I'm red";
para1.style.color = "red";
container.appendChild(para1);

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.classList.add("div");
div.style.cssText = "border: 2px solid black; background: pink;";
container.appendChild(div);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";
div.appendChild(para2);

const btn = document.querySelector("#btn");
// btn.onclick = function () {
//   alert("Hello World");
// };
btn.onclick = alertFunction;

const btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", function () {
//   alert("Hello World");
// });
btn1.addEventListener("click", alertFunction);

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
  e.target.style.background = "blue";
});

function alertFunction() {
  alert("Hello World");
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", function () {
    alert(button.id);
  });
});
