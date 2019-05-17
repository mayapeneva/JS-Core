function validate() {
	$("#submit").click(submit);
	$("#company").click(showCompany);
		
	function showCompany() {
		let companyInfo = $("#companyInfo")
		if (companyInfo.css("display") === "none") {
			companyInfo.css("display", "block");
		} else {
			companyInfo.css("display", "none")
		}
	}

	function submit(event) {
		event.preventDefault();

		let valid = true;
		let username = $("#username");
		let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
		if (!usernameRegex.test(username.val())) {
			username.css("border-color", "red");
			valid = false;
		}

		let password = $("#password");
		if (!(/^[\w]{5,15}$/g.test(password.val()))) {
			password.css("border-color", "red");
			valid = false;
		}

		let confirmPassword = $("#confirm-password");
		if (!(/^[\w]{5,15}$/g.test(confirmPassword.val()))) {
			confirmPassword.css("border-color", "red");
			valid = false;
		}

		if (password.val() !== confirmPassword.val()) {
			password.css("border-color", "red");
			confirmPassword.css("border-color", "red");
			valid = false;
		}

		let emailRegex = /.*@.*\.+.*/g;
		let email = $("#email");
		if (!emailRegex.test(email.val())) {
			email.css("border-color", "red");
			valid = false;
		}
		let companyInfo = $("#companyInfo")
		if (companyInfo.css("display") !== "none") {
			let companyNumber = $("#companyNumber");
			if (companyNumber.val() < 1000 || companyNumber.val() > 9999) {
				companyNumber.css("border-color", "red");
				valid = false;
			}
		}

		if (valid) {
			$("#valid").css("display", "block");
		} else {
			$("#valid").css("display", "none");
		}
	}
}