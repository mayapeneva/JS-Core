function solve() {
	let input = document.getElementsByTagName("input")[0];
	let button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", clickEvent);

	function clickEvent() {
		let numbers = input.value.split(" ");
		if (numbers.length === 6) {
			let totoNumbersOnly = numbers.filter(n => (n >= 1) && (n <= 49));
			if(totoNumbersOnly.length === 6){
				let allNumbersElement = document.getElementById("allNumbers");
				for (let index = 1; index <= 49; index++) {
					let number = document.createElement("div");
					number.textContent = index;
					number.className = "numbers";
					if (totoNumbersOnly.some(n => n == index)) {
						number.style.backgroundColor = "orange";
					}

					allNumbersElement.appendChild(number);					
				}

				input.disabled = true;
				button.disabled = true;
			}
		}
	}
}