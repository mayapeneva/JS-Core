function result () {
    let reports = [];

    let id = 0;
    let status = "Open";
    let selector = "#content";
    let result = {
        report: function (author, description, reproducible, severity) {
            reports.push({ 
                ID: id++,
                author,
                description,
                reproducible,
                severity,
                status
            });
            refreshPage();
        },
    
        setStatus: function (id, newStatus) {
            reports.filter(r => r.ID === id)[0].status = newStatus;
            refreshPage();
        },
    
        remove: function (id) {
            reports = reports.filter(r => r.ID !== id);
            refreshPage();
        },
    
        sort: function (method = "ID") {
            if (method === "author") {
                reports.sort((a,b) => a.author.localeCompare(b.author));
            } else {
                reports.sort((a,b) => a[method] - b[method]);
            }
            
            refreshPage();
        },
    
        output: function (selector) {
            selector = selector;
        }
    };

    function refreshPage() {
        let container = $(selector);
        container.empty();

        for (const report of reports) {
            let divReport = $("<div>");
            divReport.attr("id", `report_${report.ID}`)
            divReport.addClass("report");

            let divBody = $("<div>");
            divBody.addClass("body");
            let p = $("<p>");
            p.text(report.description);
            divBody.append(p);

            let divTitle = $("<div>");
            divTitle.addClass("title");
            let author = $("<span>");
            author.addClass("author");
            author.text(`Submitted by: ${report.author}`);

            let status = $("<span>");
            status.addClass("status");
            status.text(`${report.status} | ${report.severity}`); 
            divTitle.append(author, status);

            divReport.append(divBody, divTitle);
            container.append(divReport);
        }
    }

    return result;
}