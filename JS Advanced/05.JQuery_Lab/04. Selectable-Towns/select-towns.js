function attachEvents() {
	let selectedTowns = [];
	$("#items li").click(selectTown);
	
	$("#showTownsButton").click(showTowns);

	function selectTown() {
		let town = $(this);
		if (town.attr("data-selected") === "true") {
			console.log(999);
			
			town.attr("data-selected", "false");
			town.css("background", "");
			selectedTowns.splice(selectedTowns.indexOf(town.text()), 1);
		} else {
			console.log(0);
			
			town.attr("data-selected", "true");
			town.css("background", "#DDD");
			selectedTowns.push(town.text());
		}
	}

	function showTowns() {
		$("#selectedTowns").text(selectedTowns.join(", "));
	}
}