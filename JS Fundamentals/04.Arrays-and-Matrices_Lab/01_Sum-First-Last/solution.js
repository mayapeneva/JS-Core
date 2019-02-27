function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  for (let i = 0; i < arr.length; i++) {
    let p = document.createElement("p");
    p.textContent = `${i} -> ${Number(arr[i]) * arr.length}`;
    result.appendChild(p);
  }
}