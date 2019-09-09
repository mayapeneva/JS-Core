function realEstateAgency () {
	$('button[name="regOffer"]').click(register);
	$('button[name="findOffer"]').click(find);
	var $building = $("#building");
	var $message = $("#message");
	var $profit = $("#roof h1");
	var totalProfit = 0;

	function register() {
		let $rentPrice = $("#regOffer input[name='apartmentRent']");
		let $apType = $("#regOffer input[name='apartmentType']");
		let $commisionRate = $("#regOffer input[name='agencyCommission']");
		
		let isRentPriceCorrect = +$rentPrice.val() && +$rentPrice.val() > 0;
		let isCommissionCorrect = +$commisionRate.val() && +$commisionRate.val() >= 0 && +$commisionRate.val() <= 100;
		let isApTypeCorrect = $apType.val() && !$apType.val().includes(":");
		if (isRentPriceCorrect && isCommissionCorrect && isApTypeCorrect) {
			let $div = $("<div>");
			$div.addClass("apartment");

			let $pRrent = $("<p>").text(`Rent: ${$rentPrice.val()}`);
			$div.append($pRrent);

			let $pApType = $("<p>").text(`Type: ${$apType.val()}`);
			$div.append($pApType);

			let $pCommision = $("<p>").text(`Commission: ${$commisionRate.val()}`);
			$div.append($pCommision);

			$building.append($div);
			$message.text("Your offer was created successfully.");
		} else {
			$message.text("Your offer registration went wrong, try again.");
		}		

		$rentPrice.val("");
		$apType.val("");
		$commisionRate.val("");
	}
	
	function find() {
		let $famBudget = $("#findOffer input[name='familyBudget']");
		let $apType = $("#findOffer input[name='familyApartmentType']");
		let $famName = $("#findOffer input[name='familyName']");

		let ifHomeFound = false;
		let isFamBudgetCorrect = +$famBudget.val() && +$famBudget.val() > 0;
		let areStringsCorrect = $apType.val() && $famName.val();		
		if (isFamBudgetCorrect && areStringsCorrect) {
			for (const apartment of $(".apartment")) {
				let rent = apartment.children[0];
				let apType = apartment.children[1];
				let commission = apartment.children[2];

				let apTypeValue = apType.textContent.substr(6).toString();
				if (apTypeValue === $apType.val()) {
					let rentValue = +rent.textContent.substr(6);
					let commissionValue = +commission.textContent.substr(12);
					let totalCommission = (rentValue * commissionValue) / 100;
					let price = rentValue + totalCommission;
					if (price <= +$famBudget.val()) {
						$(rent).text($famName.val());
						$(apType).text("live here now");
						$(commission).remove();

						let $button = $("<button/>");
						$button.text("MOVEOUT");
						$button.on("click", function () {
							$(apartment).remove();
							$message.text(`They had found cockroaches in ${$famName.val()}\'s apartment`);
						});
						$(apartment).append($button);

						$(apartment).css("border", "2px solid red");
						
						totalProfit += (totalCommission * 2);						
						$profit.text(`Agency profit: ${totalProfit} lv.`);

						ifHomeFound = true;	
						$message.text("Enjoy your new home! :))");				
					}					 
				}

				if (ifHomeFound) {
					break;
				}
			}
			
			if (!ifHomeFound) {
				$message.text("We were unable to find you a home, so sorry :(");
			}
		} else {
			$message.text("We were unable to find you a home, so sorry :(");
		}
	}
}