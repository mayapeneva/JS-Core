function extractText() {
   let items = $("li").toArray();
   console.log(items.map(i => i.textContent).join(", "));
   
   $("#result").text(items.map(i => i.textContent).join(", "));
}
