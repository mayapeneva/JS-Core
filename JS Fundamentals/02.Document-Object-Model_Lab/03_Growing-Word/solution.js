function solve() {
   let clicksCount = 0;
   let colors = {
      0: "red",
      1: "blue",
      2: "green"};

   document.querySelector("button").addEventListener("click", () => {
   clicksCount++;
   let colorNumber = clicksCount % 3;
   let color = colors[colorNumber]
   let size = clicksCount * 2;

   let elementToChange = document.querySelector("#exercise p");
   elementToChange.style.fontSize = `${size}px`;
   elementToChange.style.color = color;});
}