// Spielvariablen
let punkte = 0;
let zeit = 30;
let spielLaeuft = true;
let bewegungsTimer;
let zeitTimer;
 
// Elemente aus der Webseite holen
const fliege = document.getElementById("fliege");
const punkteAnzeige = document.getElementById("punkteAnzeige");
const zeitAnzeige = document.getElementById("zeitAnzeige");
const spielfeld = document.getElementById("spielfeld");
const neustartButton = document.getElementById("neustartButton");
// Fliege an eine zufaellige Position setzen
function bewegeFliege() {
  const maxX = spielfeld.clientWidth - fliege.clientWidth;
  const maxY = spielfeld.clientHeight - fliege.clientHeight;
  fliege.style.left = Math.random() * maxX + "px";
  fliege.style.top = Math.random() * maxY + "px";
}
// Wird beim Antippen der Fliege aufgerufen
function beiTreffer() {
  if (!spielLaeuft) return;
  punkte = punkte + 1;
  punkteAnzeige.textContent = "Punkte: " + punkte;
  bewegeFliege();
}
// Wird jede Sekunde aufgerufen (Countdown)
function jedeSekunde() {
  zeit = zeit - 1;
  zeitAnzeige.textContent = "Zeit: " + zeit;
  if (zeit <= 0) {
    beendeSpiel();
  }
}
 
// Spiel beenden
function beendeSpiel() {
  spielLaeuft = false;
  clearInterval(bewegungsTimer);
  clearInterval(zeitTimer);
  punkteAnzeige.textContent = "Spiel vorbei! Punkte: " + punkte;
}
// Spiel (neu) starten
function starteSpiel() {
  punkte = 0;
  zeit = 30;
  spielLaeuft = true;
  punkteAnzeige.textContent = "Punkte: 0";
  zeitAnzeige.textContent = "Zeit: 30";
  bewegeFliege();
  clearInterval(bewegungsTimer);
  clearInterval(zeitTimer);
  bewegungsTimer = setInterval(bewegeFliege, 800);
  zeitTimer = setInterval(jedeSekunde, 1000);
}
// Ereignisse verbinden
fliege.addEventListener("click", beiTreffer);
neustartButton.addEventListener("click", starteSpiel);
 
// Spiel beim Laden der Seite starten
starteSpiel();
