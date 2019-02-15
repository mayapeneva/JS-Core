function solve(){
  let inputElementValue = document.getElementById("input").textContent;
  let tokens = inputElementValue.split(".");
  let output = document.getElementById("output");

  let sentencesPerParagraphCount = 3;
  let paragraphsCount = Math.floor(tokens.length / sentencesPerParagraphCount);
  let endIndex = (paragraphsCount * sentencesPerParagraphCount);
  if(endIndex == tokens.length){
    endIndex -= sentencesPerParagraphCount;
  }
  for (let i = 0; i <= endIndex; i+=sentencesPerParagraphCount) {
    let paragraph = document.createElement("p");
    let additionalIndexEnd = i + sentencesPerParagraphCount > tokens.length? (tokens.length - 1) - i : 2;4
    let paragraphContent = [];
    for (let j = 0; j <= additionalIndexEnd; j++) {
      if(tokens[i + j]){
        paragraphContent.push(tokens[i + j] + ".");
      }  
    }

    paragraph.textContent = paragraphContent.join("");
    output.appendChild(paragraph);
  }
}