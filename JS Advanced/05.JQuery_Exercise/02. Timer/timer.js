function timer() {
   let startTimer = $("#start-timer").click(start);
   let stopTimer = $("#stop-timer");

   let interval = 1000;
   let timer;
   function start() {
      timer = setInterval(step, interval);
      startTimer.off("click", start);
      stopTimer.click(stop);
   }

   function stop() {
      clearInterval(timer);
      stopTimer.off("click", stop);
      startTimer.click(start);
   }

   function step() {
      let seconds = $("#seconds");
      let minutes = $("#minutes");
      let hours = $("#hours");
      if (seconds.text() == "59") {
         let minVal = minutes.text();
         if (minVal == "59") {
            let hourVal = hours.text();            
            if (hourVal == "23") {
               hours.text("00");
            } else {
               hours.text(('0' + (++hourVal)).slice(-2));
            }

            minutes.text("00");
         } else {
            minutes.text(('0' + (++minVal)).slice(-2));
         }
         
         seconds.text("00");
      } else {
         let secVal = seconds.text();
         seconds.text(('0' + (++secVal)).slice(-2));
      }
   }
}