const chests = [];
const POINTS = [2, 3, 3, 2, 4, 3, 4, 2, 4];
const alert = $("#alert");

const getAlertText = (n, v) =>
    "<strong>Value of Box " + n + ": </strong>" + v + "<br><br>";

shuffle(POINTS);

for (let i = 1; i <= 9; i++) {
    const e = $("#c" + i);

    e.click(function () {
        e.removeClass("btn-success").addClass("btn-info");

        alert.html(alert.html() + getAlertText(i, POINTS[i - 1]));

        e.html(POINTS[i - 1]);

        e.off("click");
    });

    chests.push(e);
}

function shuffle(a) {
    let cI = a.length,
        rI;
    while (cI != 0) {
        rI = Math.floor(Math.random() * cI);
        cI--;
        [a[cI], a[rI]] = [a[rI], a[cI]];
    }
    return a;
}
