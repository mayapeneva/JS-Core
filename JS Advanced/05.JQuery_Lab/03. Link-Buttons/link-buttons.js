function attachEvents() {
    $("body a").click(selectTown);

    function selectTown() {
        $("body a").removeClass("selected");
        $(this).addClass("selected");
    }
}