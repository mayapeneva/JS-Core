function solve() {
	let buttons = Array.from(document.getElementsByTagName("button"));
	buttons.forEach((btn) => {
		btn.addEventListener("click", clickEvent)
	});

	function clickEvent(e) {
		let button = e.target;
		let sections = document.getElementsByTagName("section");
		let selectedSection1 = Array.from(document.getElementsByName("softUniYear")).filter(i => i.checked)[0];
		if (button === buttons[0] && selectedSection1.value) {
			sections[1].style.display = "inline";
		}
		
		let selectedSection2= Array.from(document.getElementsByName("popularName")).filter(i => i.checked)[0];
		if(button === buttons[1] && selectedSection2.value){
			sections[2].style.display = "inline";
		}

		let selectedSection3 = Array.from(document.getElementsByName("softUniFounder")).filter(i => i.checked)[0];
		if(button === buttons[2] && selectedSection3.value){
			let counter = 0;
			if (selectedSection1.value == "2013") {
				counter++;
			}
			if (selectedSection2.value == "Pesho") {
				counter++;
			}
			if (selectedSection3.value == "Nakov") {
				counter++;
			}
		
			let result = document.getElementById("result");
			if (counter === 3) {
			result.textContent = "You are recognized as top SoftUni fan!";
			} else {
				
				result.textContent = `You have ${counter} right answers`;
			}
		}
	}
}