function attachGradientEvents() {
    let $gradientBox = $("#gradient-box").mousemove(getLength);

    function getLength(e) {
        let width = $gradientBox.width();
        let offset = $(e.target).parent().offset();
        let x = e.pageX - offset.left;
        let result = Math.trunc((x * 100) / width);
        $("#result").text(`${result}%`);
    }
}