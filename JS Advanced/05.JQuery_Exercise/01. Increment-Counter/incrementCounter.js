function increment(selector) {
    let container = $(selector);

    let counter = $("<textarea>")
        .addClass("counter")
        .val("0")
        .attr("disabled", "true");
    container.append(counter);

    let incrementBtn = $("<button>")
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .click(increment);
    container.append(incrementBtn);

    let addBtn = $("<button>")
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .click(add);
    container.append(addBtn);

    let list = $("<ul>")
        .addClass("results");
    container.append(list);

    function increment() {
        let number = $(".counter").val();
        $(".counter").val(++number)
    }

    function add() {
        let item = $("<li>")
            .text($(".counter").val());
        $(".results").append(item);
    }
}
