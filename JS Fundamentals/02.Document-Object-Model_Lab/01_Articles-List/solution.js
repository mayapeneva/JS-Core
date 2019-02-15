function solve() {
	let createTitleElement = document.getElementById("createTitle");
	let createTitleElementValue = createTitleElement.value;
	let title = document.createElement("h3");
	title.textContent = createTitleElementValue;

	let createContentElement = document.getElementById("createContent");
	let createContentElementValue = createContentElement.value;
	let content = document.createElement("p");
	content.textContent = createContentElementValue;

	if (createTitleElementValue && createContentElementValue) {
		let article = document.createElement("article");
		article.appendChild(title);
		article.appendChild(content);

		let createArticlesElement = document.getElementById("articles");
		createArticlesElement.appendChild(article);

		createTitleElement.value = "";
		createContentElement.value = "";
	}
}