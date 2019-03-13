function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let str = document.getElementById("str").value;
  let resultElement = document.getElementById("result");

  let wordToBeReplaced = arr[0].split(" ")[2];
  let pattern = new RegExp(wordToBeReplaced, gi)
  
  let result = [];
  for (let line of arr) {
    let words = line.replace(pattern, str)
    result.push(words);
  }

  result.forEach(item => {
    let p = document.createElement("p");
    p.textContent = item;
    resultElement.appendChild(p);
  })
}

// solution for Judge:
// function solve() {
//   let arr = JSON.parse(document.getElementById("arr").value);
//   let str = document.getElementById("str").value;
//   let resultElement = document.getElementById("result");

//   let wordToBeReplaced = arr[0].split(" ")[2].toLowerCase();
  
//   let result = [];
//   for (let line of arr) {
//     let lowerWords = line.toLowerCase();
//     let words = line.split("");
//     let index = lowerWords.indexOf(wordToBeReplaced);
//     words.splice(index, wordToBeReplaced.length, str)
//     result.push(words.join(""));
//   }

//   result.forEach(item => {
//     let p = document.createElement("p");
//     p.textContent = item;
//     resultElement.appendChild(p);
//   })
// }