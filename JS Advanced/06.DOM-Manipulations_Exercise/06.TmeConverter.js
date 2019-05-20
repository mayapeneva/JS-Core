function attachEventsListeners() {
    $("#daysBtn").click(convertFromDays);
    $("#hoursBtn").click(convertFromHours);
    $("#minutesBtn").click(convertFromMinutes);
    $("#secondsBtn").click(convertFromSeconds);

    let $days = $("#days");
    let $hours = $("#hours")
    let $minutes = $("#minutes");
    let $seconds = $("#seconds");

    function convertFromDays() {
        let days = Number($("#days").val());

        let hours = days * 24;
        $hours.val(hours);

        let minutes = hours * 60;
        $minutes.val(minutes);

        $seconds.val(minutes * 60);
    }

    function convertFromHours() {
        let hours = Number($("#hours").val());

        let days = Math.floor(hours / 24);
        $days.val(days);

        let minutes = hours * 60;
        $minutes.val(minutes);

        $seconds.val(minutes * 60);
    }

    function convertFromMinutes() {
        let minutes = Number($("#minutes").val());
        let hours = Math.floor(minutes / 60);
        $hours.val(hours);

        let days = Math.floor(hours / 24);
        $days.val(days);

        $seconds.val(minutes * 60);
    }

    function convertFromSeconds() {
        let seconds = Number($("#seconds").val());
        let minutes = Math.floor(seconds / 60);
        $minutes.val(minutes);

        let hours = Math.floor(minutes / 60);
        $hours.val(hours);

        let days = Math.floor(hours / 24);
        $days.val(days);
    }
}