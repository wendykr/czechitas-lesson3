// tady je místo pro náš program

let nadpis = document.querySelector('h1');

let vstupUzivatel = prompt('Zadej nový nadpis');
//nadpis.innerHTML = 'Můj změněný obsah';

nadpis.innerHTML = vstupUzivatel;

let vysledek = document.querySelector('.vysledekZavodu');

const start = 15;
const delka = Number(prompt('Zadej délku závodu:')); // VŽDY STRING

// VSTUP UŽIVATELE = 10
// delka = '10';
// (start + delka) = '1510';

// VSTUP UŽIVATELE = 10
// delka = 10;
// (start + delka) = 25;

const konec = (start + delka) % 24;
vysledek.innerHTML = konec;

