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
