// tady je místo pro náš program

function vyplnitUdaje () {
    let vysledek = document.querySelector('.vysledekOckovani');
    let jmeno = prompt('Zadejte své jméno:');
    const vek = Number(prompt('Zadejte svůj věk:')); 
    
    vysledek.innerHTML = 'Jméno: ' + jmeno +', ' + 'Věk: ' + vek + ' let';
}

function spocitatVyplatuPevna () {
    let vysledek = document.querySelector('.vysledekVyplataPevna');
    let sazba = Number(prompt('Zadejte svou hodinovou sazbu:'));
    hodina = 8;
    den = 21;
    const mzda = ((sazba * hodina) * den);

    vysledek.innerHTML = 'Hrubá mzda je: ' + mzda + ' Kč';
}

function spocitatVyplatuPruzna () {
    let vysledek = document.querySelector('.vysledekVyplataPruzna');
    let sazba = Number(prompt('Zadejte svou hodinovou sazbu:'));
    let hodina= Number(prompt('Zadejte počet hodin:'));
    let den = Number(prompt('Zadejte počet dní:'));
    const mzda = ((sazba * hodina) * den);

    vysledek.innerHTML = 'Hrubá mzda je: ' + mzda + ' Kč';
}