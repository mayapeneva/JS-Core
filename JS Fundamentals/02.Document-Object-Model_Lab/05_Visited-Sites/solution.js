function solve() {
  let divs = Array.from(document.querySelectorAll("#exercise a")).forEach((anch) => {
    anch.addEventListener("click", clickEvent)
  });
  
  function clickEvent(e) {
    let div = e.target.parentNode;
    let span = div.children[1];
    let number = span.textContent.match(/\d+/);
    span.textContent = `Visited: ${+number + 1} times`;
  }
}