function solve() {
	let buttons = document.getElementsByTagName("button");
	let textAreas = document.getElementsByTagName("textarea");

	buttons[0].addEventListener("click", clickEncode);
	function clickEncode() {
		let message = textAreas[0].value;
		let encodedMessage = "";
		if (message) {
			Array.from(message).forEach((ch) => {
				let letter = ch.charCodeAt(0);
				encodedMessage += String.fromCharCode(+letter + 1);
			});

			textAreas[0].value = "";
			textAreas[1].value = encodedMessage;

			let finalMessage = "";
			buttons[1].addEventListener("click", clickDecode);
			function clickDecode() {
				Array.from(encodedMessage).forEach((ch) => {
					let letter = ch.charCodeAt(0);
					finalMessage += String.fromCharCode(+letter - 1);
				});

				textAreas[1].value = finalMessage;
			}
		}
	}
}