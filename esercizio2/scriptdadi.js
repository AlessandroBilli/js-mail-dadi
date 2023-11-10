'use strict'


const lancioDadiGiocatore= Math.floor(Math.random() * 6) + 1;
console.log (lancioDadiGiocatore);

const lancioDadiComputer= Math.floor(Math.random() * 6) + 1;
console.log (lancioDadiComputer);

if (lancioDadiGiocatore > lancioDadiComputer) {
    console.log("Hai vinto");
  } else if (lancioDadiGiocatore < lancioDadiComputer) {
    console.log("Il computer ha vinto");
  } else {
    console.log("È un pareggio!");
  }