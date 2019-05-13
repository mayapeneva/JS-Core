function initializeTable() {
    $("#createLink").click(create);

    createCountry("Bulgaria", "Sofia");
    createCountry("Germany", "Berlin");
    createCountry("Russia", "Moscow");

    function create() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();

        if (country !== "" && capital !== "") {
            createCountry(country, capital);
        }
    }

    function createCountry(country, capital) {
        let row = $("<tr>");
        let td1 = $("<td>");
        td1.text(`${country}`);

        let td2 = $("<td>");
        td2.text(`${capital}`);

        let td3 = $("<td>");
        let a1 = $("<a>").click(goUp);
        a1.text("[Up]");
        a1.attr("href", "#");
        
        let a2 = $("<a>").click(goDown);
        a2.text("[Down]");
        a2.attr("href", "#");

        let a3 = $("<a>").click(deleteRow);
        a3.text("[Delete]");
        a3.attr("href", "#");
        td3.append(a1, a2, a3);

        row.append(td1, td2, td3);
        $("#countriesTable").append(row);

        fixRows();
    }

    function goUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());

        fixRows();
    }

    function goDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());

        fixRows();
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.remove();

        fixRows();
    }

    function fixRows() {
        $("a").show();
        $("#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child").hide();
        $("#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)").hide();
    }
}