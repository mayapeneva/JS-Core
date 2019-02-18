function solve() {
	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	  }

	  let element = document.getElementById("exercise").children[0];
	  element.style.position = "absolute";

	  setTimeout(() => {		
		element.style.top = `${getRandom(1, 81)}%`;
		element.style.left = `${getRandom(1, 45)}vh`;
		}, 2000);
}