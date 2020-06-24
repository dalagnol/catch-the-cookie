var title = document.createElement("h1");
title.id = "title";

// Available titles
var challenge = document.createTextNode("Want a 🍪? Try to get me then!");
var afraid = "Oh I am trapped!";
var escaped = "Ha! Thought you were going to get me!";

title.appendChild(challenge);

document.body.appendChild(title);

var cookie = document.createElement("div");
cookie.id = "cookie";

document.body.appendChild(cookie);

var speed = 55;
var direction = 1;

var Cookie = document.getElementById("cookie");

// What makes cookie move and talk
if (Cookie) {
  Cookie.addEventListener("mouseover", () => {
    var cookieLeft = Cookie.offsetLeft;
    var cookieRight = cookieLeft + Cookie.offsetWidth;
    var cookieTop = Cookie.offsetTop;
    var cookieBottom = Cookie.offsetTop + Cookie.offsetHeight;
    var beginning = true;

    if (
      cookieRight > window.innerWidth - 100 ||
      cookieBottom > window.innerHeight - 100
    ) {
      direction = -1;
    }

    if (cookieLeft < 100 || cookieTop < 250) {
      direction = 1;
    }

    if (
      (cookieLeft < 100 && cookieTop < 250) ||
      (cookieLeft && cookieBottom > window.innerHeight - 100)
    ) {
      document.getElementById("title").innerHTML = afraid;
      beginning = false;
    }

    if (!beginning && cookieLeft >= 100 && cookieTop >= 250) {
      document.getElementById("title").innerHTML = escaped;
    }

    if (Math.random() < 0.5) {
      Cookie.style.left = `${cookieLeft + speed * direction}px`;
    } else {
      Cookie.style.top = `${cookieTop + speed * direction}px`;
    }
  });
}
