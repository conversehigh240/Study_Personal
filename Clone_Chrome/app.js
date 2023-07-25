const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      {
        quote:
          "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
      },
      {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
      },
      {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
      },
      {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
      },
      {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
      },
      {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
      },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const showQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = showQuotes.quote;
author.innerText = showQuotes.author;

const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
]

const showImage = imgs[Math.floor(Math.random() * imgs.length)];
const img = document.createElement("img");

img.src = `img/${showImage}`;

document.body.appendChild(img);