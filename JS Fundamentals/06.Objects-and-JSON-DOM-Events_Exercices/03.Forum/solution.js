function solve() {
    document.querySelector("#exercise>form>button").addEventListener("click", (e) => {
        event.preventDefault();
        
        let userInfo = document.querySelectorAll(".user-info>input");
        let topics = Array.from(document.querySelectorAll(".topics>input")).filter(i => i.checked);
        
        let user = {
            "username": userInfo[0].value,
            "email": userInfo[2].value,
            "topics": topics.map(t => t.value).join(" ")
        };   
        
        let table = document.querySelector("#exercise>table>tbody");
        let tr = document.createElement("tr");
        for (let key in user) {
            let td = document.createElement("td");
            td.textContent = user[key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    });

    document.querySelector("#exercise>button").addEventListener("click", (e) => {
        event.preventDefault();
        
        let searchedString = document.querySelector("#exercise>input").value;
        let tableRows = Array.from(document.querySelectorAll("#exercise>table>tbody>tr"));
        tableRows.forEach(r => r.style.visibility = "visible");
        tableRows.filter(r => !Array.from(r.children).some(ch => ch.innerText.includes(searchedString)))
                        .forEach(r => r.style.visibility = "hidden");
    });
}