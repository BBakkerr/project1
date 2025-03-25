let mijnInterval = 0;

function start() {
    mijnInterval = setInterval(setTeller, 1250);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stop() {
    if (mijnInterval !== 0) {
        clearInterval(mijnInterval);
        mijnInterval = 0;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }
}

function reshuffleTheColors() {
    let aColor = ['red', 'lightblue', 'lime', 'pink', 'maroon', 'purple', 'aqua', 'navy', 'orange'];
    let basicColor = [...aColor];
    shuffle(aColor);
    shuffle(basicColor);

    for (let i = 0; i < 9; i++) {
        let divid = i + 1;
        document.getElementById("div" + divid).style.backgroundColor = aColor[i];
    }

    document.getElementById("basiskleur").style.backgroundColor = basicColor[0];
}

function setTeller() {
    reshuffleTheColors();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    let nrKleur = 5;
}



function doeIets(elm) {
    let testje = document.getElementById("testje");
    let basiskleur = getComputedStyle(document.getElementById("basiskleur")).backgroundColor;
    let gekozenKleur = getComputedStyle(elm).backgroundColor;
    testje.innerHTML += `<p>${gekozenKleur === basiskleur ? "raak" : "mis"}</p>`;

}