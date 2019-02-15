function solve() {
    let input = document.getElementById("searchField");
    let students = Array.from(document.querySelectorAll("tbody td"));
    document.getElementById("searchBtn").addEventListener("click", clickEvent);
    
    function clickEvent() {
        if (input) {
            let matches = students.filter(s => s.textContent.toLowerCase().includes(input.value)).map(s => s.parentNode);
            Array.from(new Set(matches)).map(r => r.classList.add('select'));
            input.value = "";
        }
    }
}