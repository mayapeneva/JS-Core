function solve() {
    let buttons = document.getElementById("buttons").children;
    let nextButton = buttons[0];
    let cancelButton = buttons[1];

    nextButton.addEventListener("click", next);
    cancelButton.addEventListener("click", cancel);
    let steps = {
        1: "firstStep",
        2: "secondStep",
        3: "thirdStep"
    }

    let clicksCount = 0;
    function next() {
        clicksCount++;

        if (clicksCount === 3){
            nextButton.style.display = "none";
            cancelButton.textContent = "Finish";
        } else if (clicksCount === 2){
            let license = Array.from(document.getElementsByName("license")).filter(e => e.checked)[0];
            if (license.value === "disagree") {
                clicksCount--;
                return;
            }            
        } else if (clicksCount === 1) {
            document.getElementById("content").style.background = "none";            
        }   
      
        if (clicksCount !== 1) {
            document.getElementById(steps[clicksCount - 1]).style.display = "none";
        }

        if (clicksCount === 2){
            nextButton.style.display = "none";
            setTimeout(() => {nextButton.style.display = "inline-block"}, 3000);
        }

        document.getElementById(steps[clicksCount]).style.display = "block";
    }

    function cancel() {
        document.getElementsByTagName("section")[0].style.display = "none";
    }
}