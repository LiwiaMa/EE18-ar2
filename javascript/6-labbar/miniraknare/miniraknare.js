/* Element vi använder */
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");

const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDividera = document.querySelector("#dividera");

const elementRutaResultat = document.querySelector("#resultat");

/* Lyssna på om man klickar på + knappen */

elementKnappPlus.addEventListener("click", summera);
elementKnappMinus.addEventListener("click", subtrahera);
elementKnappGånger.addEventListener("click", produkt);
elementKnappDividera.addEventListener("click", kvot);

function summera() {

    /*  Läsa av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var summa = tal1 + tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

function subtrahera() {

    /*  Läsa av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var summa = tal1 - tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

function produkt() {

    /*  Läsa av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var summa = tal1 * tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

function kvot() {

    /*  Läsa av tal1 & tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var summa = tal1 / tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

