# Tooltip-Leser

Liest den Item-Tooltip aus einem geteilten Diablo-IV-Fenster, gleicht die Affixe gegen die Zielwerte
des Builds ab und sagt, ob sich das Teil lohnt — inklusive Vorschlag, welchen Wert du beim Okkultisten
umrollen solltest.

Alles läuft im Browser. Kein Upload, keine Installation, kein Eingriff ins Spiel. Für Diablo IV ist ein
Browserfenster daneben genau nichts.

---

## Pages einschalten

Kamera und Bildschirmfreigabe funktionieren nur über HTTPS. GitHub Pages liefert das kostenlos, muss
aber einmal von Hand aktiviert werden — über die API geht das nicht.

1. In diesem Repo auf **Settings → Pages**.
2. Unter *Build and deployment* bei *Source* **Deploy from a branch** wählen, Branch `main`, Ordner
   `/ (root)`. Speichern.
3. Ein bis zwei Minuten warten. Oben auf derselben Seite erscheint die Adresse:
   `https://dantin1103-cell.github.io/d4-tooltip/`

Am Rechner öffnest du sie auf dem zweiten Monitor, am iPad legst du sie über *Teilen → Zum
Home-Bildschirm* ab — dann startet sie ohne Adressleiste wie eine App.

---

## Benutzen

1. **Diablo in den randlosen Fenstermodus stellen.** Im exklusiven Vollbild liefert die
   Bildschirmfreigabe unter Windows ein schwarzes Bild.
2. *Spielfenster freigeben* klicken und im Dialog das Diablo-Fenster auswählen.
3. *Tooltip-Bereich markieren* klicken und im Vorschaubild ein Rechteck über die Stelle ziehen, an der
   der Item-Tooltip erscheint. Etwas großzügiger als der Tooltip selbst. Das wird gespeichert — einmal
   reicht, solange Auflösung und Fensterposition gleich bleiben.
4. *Automatisch lesen* einschalten. Ab jetzt reagiert die Seite von selbst, sobald du im Spiel über ein
   Item fährst und der Tooltip stehen bleibt.

## Kamera-Modus für iPad und iPhone

Dieselbe Adresse auf dem Tablet öffnen. Auf Geräten ohne Bildschirmfreigabe schaltet die Seite von
selbst in den Kamera-Modus; sonst oben umschalten.

1. *Kamera starten* — Safari fragt einmal nach Erlaubnis.
2. Tablet auf einen Ständer stellen, möglichst frontal zum Monitor. Schräg fotografiert verzerren sich
   die Zeilen, und die Erkennung leidet mehr als du denkst.
3. Im Spiel über ein Item fahren, sodass der Tooltip stehen bleibt.
4. Den Tooltip im gestrichelten Rahmen ausfüllen und *Item erfassen* tippen.

Die Seite friert das Bild ein und zeichnet die gefundenen Zeilen direkt hinein: **grün** für einen
Zielwert, **gelb** für den Wert, den du umrollen solltest, **grau** für alles, was nicht zählt. Rechts
steht das Urteil dazu. Über *Erneut auswerten* kannst du mit anderen Reglereinstellungen nochmal über
dasselbe Bild gehen, ohne neu zu fotografieren.

Bewusst kein Live-Overlay: Die Texterkennung braucht auf einem Tablet ein bis drei Sekunden pro Bild.
Ein Rahmen, der dem Text hinterherläuft, säße immer daneben. Einfrieren und beschriften ist ehrlicher
und sitzt genau.

### Warum die Kamera schwerer ist als der Bildschirm

Ein Foto vom Monitor bringt Schräglage, Spiegelungen und ungleichmäßiges Licht mit. Deshalb steht im
Kamera-Modus die Schwelle standardmäßig auf **adaptiv**: Statt eines festen Helligkeitswerts fürs ganze
Bild wird jeder Punkt gegen seine unmittelbare Umgebung verglichen. Im Test mit einem simulierten
Monitorfoto — Helligkeitsverlauf, leichte Unschärfe, Rauschen — hat die feste Schwelle die unteren
Zeilen zerlegt, die adaptive alle Affixe korrekt gelesen.

Wenn es trotzdem hakt: näher ran, Rahmen besser ausfüllen, Vergrößerung auf 3×, und die Raumbeleuchtung
so, dass sich nichts im Monitor spiegelt.

## Der Browser muss sichtbar bleiben

Browser bremsen Seiten aus, die sie für unsichtbar halten — Timer laufen dann nur noch einmal pro
Sekunde und nach einigen Minuten noch seltener. Entscheidend ist dabei nicht, ob das Fenster den Fokus
hat, sondern ob es zu sehen ist.

- **Zweiter Monitor, Fenster sichtbar:** läuft normal, auch während Diablo im Vordergrund ist.
- **Ein Monitor, Diablo deckt alles zu:** der Browser hält die Seite an.
- **Minimiert:** angehalten.

Wenn nur ein Monitor da ist: Diablo im Fenstermodus etwas kleiner ziehen, sodass ein Streifen des
Browsers stehen bleibt. Ein teilweise sichtbares Fenster reicht — vollständig verdeckt muss es sein,
damit gedrosselt wird.

Die Seite misst ihren eigenen Takt und sagt dir selbst Bescheid, wenn sie ausgebremst wird. Du musst
also nicht raten, ob es an der Erkennung oder am Browser liegt.

## Wenn die Erkennung schlecht ist

Öffne unten **Werkstatt**. Dort siehst du genau das Bild, das an die Texterkennung geht, und den Rohtext,
der zurückkommt.

- Ist das Bild zu dunkel oder zu weiß geflossen: **Schwelle** nachziehen, bis die Schrift sauber schwarz
  auf weiß steht.
- Ist die Schrift zu klein: **Vergrößerung** auf 3× oder 4×. Kostet Rechenzeit, bringt bei kleiner
  Auflösung viel.
- Kommt Text an, wird aber nichts erkannt: Wahrscheinlich stimmt eine Schreibweise im **Affix-Wörterbuch**
  nicht. Korrigier die Zeile so, wie es im Spiel steht — die Änderung greift sofort und bleibt
  gespeichert.

Der Abgleich ist unscharf: Er sucht zu jeder Zeile den ähnlichsten Eintrag aus dem Wörterbuch. Ein paar
verlesene Buchstaben machen also nichts aus. Fehlt ein Affix dagegen ganz im Wörterbuch, kann es nicht
gefunden werden.

## Was bewusst fehlt

- **Greater Affixes** werden nicht erkannt. Die sind im Tooltip nur durch ein Symbol markiert, kein Text.
- **Zahlenvergleiche.** Die Seite sagt „dieser Wert ist da", nicht „dieser Wert ist 4 % besser als
  deiner". Für Leveling ist das die richtige Auflösung.
- **Schadensberechnung.** Dafür bräuchte es die Formeln des Spiels.

## Zielwerte anpassen

Die Build-Ziele stehen oben in `index.html` im Block `TARGETS` — ein Eintrag pro Slot mit vier
Wunsch-Affixen, dem Einschmelz-Ziel und der Sockelzahl. Beim Wechsel auf den Endgame-Build tauschst du
diesen Block aus, sonst nichts.

Aktueller Stand: Mekunas „Lodernder Schrei" Leveling 1–70, Season 15, Datensatz vom 14.09.2026.
