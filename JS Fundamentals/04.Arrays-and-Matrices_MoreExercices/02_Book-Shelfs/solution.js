function solve() {
    let input = JSON.parse(document.getElementById("arr").value);
    let resultElement = document.getElementById("result");

    let shelves = {};
    let books = {};
    for (let line of input) {
        if (line.includes("->")) {
            let shelfTokens = line.split(" -> ");
            let id = shelfTokens[0];
            let genre = shelfTokens[1];
            if (!Object.keys(shelves).includes(id)) {
                shelves[id] = genre;
                books[genre] = [];
            }
        } else {
            let bookTokens = line.split(", ");
            let book = bookTokens[0].split(": ");
            let title = book[0];
            let author = book[1];
            let genre = bookTokens[1];
            let bookObj = {
                title: title,
                author: author,
                genre: genre
            };
            if (Object.keys(books).includes(genre)) {
                books[genre].push(bookObj);
            }
        }
    }

    let sortedBooks = {};    
    Object.keys(books)
    .sort((a,b) => { return books[b].length - books[a].length})
    .map(a => sortedBooks[a] = books[a]);
    
    for (let shelf in sortedBooks) {
        if (sortedBooks.hasOwnProperty(shelf)) {
            sortedShelf = sortedBooks[shelf]
                            .sort((a,b) => {
                                return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
                            });
            console.log(sortedShelf)
            displayShelf(shelf, sortedShelf);
            for (let book of sortedShelf) {
                displayBook(book);
            }
        }
    }

    function displayShelf(shelf, sortedShelf){
        let shelfP = document.createElement("p");
        let shelfId = Object.keys(shelves)
                            .find(key => shelves[key] === shelf);
        shelfP.textContent = `${shelfId} ${shelf}: ${sortedShelf.length}`;
        resultElement.appendChild(shelfP);
    }

    function displayBook(book){
        let bookP = document.createElement("p");
        bookP.textContent = `--> ${book.title}: ${book.author}`;
        resultElement.appendChild(bookP);
    }
}