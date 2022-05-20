var locall = JSON.parse(localStorage.getItem("mostRecentScore")) || [];
for (let i = 0; i < locall.length; i++) {
  locall[i].score;
  locall[i].initials;
}

updatepoints();

function updatepoints() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  document.getElementById("ls-currently").textContent = values;
}
