function solve() {
  let string = document.getElementById("string").value;
  let char = document.getElementById("character").value;
  let result = document.getElementById("result");
  let counter = 0;

  Array.from(string).forEach(ch => {
    if (ch === char) {
      counter++;
    }
  });

  if (counter % 2 == 0) {
    result.innerHTML = `Count of ${char} is even.`;
  } else {
    result.innerHTML = `Count of ${char} is odd.`;
  }
}
