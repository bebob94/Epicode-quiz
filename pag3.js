let params = new URLSearchParams(location.search);
let correctAnswers = params.get("risposteGiuste");
let totalQuestions = params.get("max");

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
let x = canvas.width / 10;
let y = canvas.height / 10;
ctx.translate(x, y);

const wrongAnswers = totalQuestions - correctAnswers;
const correctPercentage = (correctAnswers / totalQuestions) * 100;
const wrongPercentage = 100 - correctPercentage;

// Seleziona i div dove inserire le percentuali
const correctDiv = document.getElementById("correct-percentage");
const wrongDiv = document.getElementById("wrong-percentage");

// Imposta il contenuto dei div con le percentuali
correctDiv.innerHTML = `<div><span>Correct</span></div> <b>${correctPercentage}%</b> <div id="ciao">${correctAnswers} / ${totalQuestions} questions</div>`;
wrongDiv.innerHTML = `<div><span>Wrong</span></div> <b>${wrongPercentage}%</b><div id="ciao">${wrongAnswers} / ${totalQuestions} questions</div>`;

ctx.beginPath();
ctx.arc(150, 150, 150, 0, (correctPercentage / 100) * 2 * Math.PI);
ctx.strokeStyle = "#00FFFF";
ctx.lineWidth = 50;
ctx.stroke();
ctx.beginPath();
ctx.arc(150, 150, 150, 0, (correctPercentage / 100) * 2 * Math.PI, 2 * Math.PI);
ctx.strokeStyle = "#900080";
ctx.lineWidth = 50;
ctx.stroke();
ctx.fillStyle = "white"; // imposta il colore del testo
ctx.font = "12px sans-serif"; // imposta il font del testo
ctx.textAlign = "center"; // allinea il testo al centro
ctx.textBaseline = "middle"; // posiziona il testo al centro verticalmente

if (correctPercentage < 50) {
  ctx.fillText(`Ti sentirai con Chiara o Marina...`, 150, 150).split(" "); //Easter Egg
} else {
  ctx.fillText(`Lidia sarebbe fiera di te.`, 150, 150).split(" ");
}
ctx.fillText(testoCerchio, 150, 150);

// ctx.fillText(`Ti sentirai con Chiara o Marina...`, 150, 150) //Easter Egg
// ctx.fillText(`HELLOOOOOOOOOOOOOOOOO...`, 150, 170) //Easter Egg
// ctx.fillText(`Terza riga forse dai`, 150, 200) //Easter Egg

// let testoCerchio =
//   "Se sei stato bocciato farai un esame nella build week, please no panic okay? Okay grazie a domani"
// let riga = ""
// let numeroRiga = 1
// testoCerchio.split(" ").forEach((parola, i) => {
//   riga += parola + " "
//   if (i % 5 === 0) {
//     ctx.fillText(riga, 150, 150 + 20 * numeroRiga) //Easter Egg
//     riga = ""
//     numeroRiga++
//   }
// })
