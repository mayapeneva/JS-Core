function acceptance() {
	let $company = $("input[name='shippingCompany']");
	let $product = $("input[name='productName']");
	let $quantity = $("input[name='productQuantity']");
	let $scrape = $("input[name='productScrape']");
	
	if (($company.val() && $product.val()) 
		&& (+($quantity.val()) && +($scrape.val()))) {
		let availableQuantity = Number($quantity.val()) - Number($scrape.val());
		if (availableQuantity > 0) {
			let $div = $("<div>");
			let $p = $("<p>").text(`[${$company.val()}] ${$product.val()} - ${availableQuantity} pieces`);
			$div.append($p);

			let $btn = $("<button>");
			$btn.text("Out of stock");
			$btn.click(deleteCompany);
			$div.append($btn);

			$("#warehouse").append($div);
		}

		$company.val("");
		$product.val("");
		$quantity.val("");
		$scrape.val("");
	}	

	function deleteCompany(e) {
		$(e.target).parent().remove();
	}
}