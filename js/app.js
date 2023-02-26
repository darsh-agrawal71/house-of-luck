import shuffle from './shuffle.js';
import getAlertText from './getAlertText.js';


const chests = [];
const POINTS = shuffle([.2, .25, .3, .35, .4, .4, .35, .3, .25]);
const alert = $("#alert");

for (let i = 1; i <= 9; i++) {
    const chest = $("#c" + i);
    const point = POINTS[i - 1]

    chest.click(() => {
        chest.removeClass("btn-success").addClass("btn-info");

        alert.html(alert.html() + getAlertText(i, point));

        chest.html(point + '%');

        chest.off("click");
    });

    chests.push(chest);
}

