// initialise the variable at zero
let count = 0;
let countEl = document.getElementById("count-el");
// this function allows user to increment the count by one with each click
function increment() {
  count += 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
//this function will log out the count
function save() {
  let count2 = count + " - ";
  saveEl.textContent += count2;
  countEl.textContent = 0;
  count = 0;
}
