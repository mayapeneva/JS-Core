function Tickets(arr, sortingCriteria) {
    class Ticket{
        constructor([destination, price, status]){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (const line of arr) {
        tickets.push(new Ticket(line.split("|")));
    }

    return tickets.sort((a,b) => {
        if (a[sortingCriteria] > b[sortingCriteria]) {
            return 1;
        } else if (a[sortingCriteria] < b[sortingCriteria]){
            return -1;
        } else {
            return 0;
        }
    });
}