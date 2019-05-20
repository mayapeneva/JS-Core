function addItem() {
    let $text = $("#newItemText");
    let $value = $("#newItemValue");
    let text = $text.val();
    let value = $value.val();

    if (text !== "" && value !== "") {
        let $menu = $("#menu");
        let $option = $("<option>");
        $option.text(text);
        $option.val(value);
        $menu.append($option);

        $text.val("");
        $value.val("");
    }
}