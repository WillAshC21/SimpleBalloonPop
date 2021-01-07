let one = document.querySelector('#balloon-type1');
let two = document.querySelector('#balloon-type2');
let three = document.querySelector('#balloon-type3');

let four = document.querySelector('#balloon-type4');
let five = document.querySelector('#balloon-type5');
let six = document.querySelector('#balloon-type6');

let seven = document.querySelector('#balloon-type7');
let eight = document.querySelector('#balloon-type8');
let nine = document.querySelector('#balloon-type9');


let win = document.querySelector('#balloon-win');
win.style.display = "none";

count = 0;

function endGame() {
  if (count === 9 ) {
    win.style.display = "block";
  }
}

one.onmouseover = function() {
  one.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  one.appendChild(win);
  one.onmouseover = null;
  one.style.margin = "5px 10px";
  
  count++;
  endGame();
}

two.onmouseover = function() {
  two.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  two.appendChild(win);
  two.onmouseover = null;
  two.style.margin = "5px 10px";

  count++;
  endGame();
}

three.onmouseover = function() {
  three.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  three.appendChild(win);
  three.onmouseover = null;
  three.style.margin = "5px 10px";

  count++;
  endGame();
}

four.onmouseover = function() {
  four.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  four.appendChild(win);
  four.onmouseover = null;
  four.style.margin = "5px 10px";

  count++;
  endGame();
}

five.onmouseover = function() {
  five.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  five.appendChild(win);
  five.onmouseover = null;
  five.style.margin = "5px 10px";

  count++;
  endGame();
}

six.onmouseover = function() {
  six.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  six.appendChild(win);
  six.onmouseover = null;

  count++;
  endGame();
}

seven.onmouseover = function() {
  seven.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  seven.appendChild(win);
  seven.onmouseover = null;

  count++;
  endGame();
}

eight.onmouseover = function() {
  eight.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  eight.appendChild(win);
  eight.onmouseover = null;

  count++;
  endGame();
}

nine.onmouseover = function() {
  nine.style.backgroundColor = "transparent";
  let win = document.createElement("h1");
  win.setAttribute('class', 'popped');
  win.innerText = "Popped";
  nine.appendChild(win);
  nine.onmouseover = null;

  count++;
  endGame();
}
