### Forms 2

Da wir sehr viel mit Formularen arbeiten und das auch sehr wichtig ist für zukünftige Projekte, ist es sinnvoll da noch ein wenig mehr einzusteigen.

## Aufgabe

Als Anwender möchte ich die Möglichkeit haben, über ein Formular mehrere Büros anlegen zu können, damit ich später meine Employees auf bestimme Büros aufteilen kann.

AKs:
* Formular ist über eine extra Seite (extra URL) erreichbar
* Formular soll über Link auf der Home-Seite erreichbar sein
* User soll Büro mit folgenden Eigenschaften hinzufügen können
  * Name*
  * Größe(qm)*
  * Tische*
* Die Tische soll der user dynamisch zu dem Büro hinzufügen können (sprich über einen "Add" Button kommt ein neuer) --> es kann 1 bis maximal 10 geben.
* Ein Tisch hat folgende Eigenschaften
  * Standard Höhe(cm)* --> eine Auswahl aus 3 Werten: 70cm, 80cm, 100cm
  * Höhenverstellbar (Boolean --> ja oder nein)*
  * Maximale Höhe (Pflichtfeld, wenn Höhenverstellbar ausgewählt ist) --> soll nur angezeigt werden, wenn Höhenverstellbar ausgewählt ist; sonst soll das Feld gar nicht sichtbar sein
* Das Formular soll am Ende einen Button zum Speichern haben
  * Dieser soll nur aktiv sein, wenn das Formular valide ausgefüllt ist
  * Nach Drücken des Buttons soll mindestens das Formular im Console Log ausgegeben werden
* Die Formular UI Elemente sollte soweit wie möglich mit Material UI Komponenten umgesetzt werden
* Es soll die Reactive Forms API verwendet werden (nicht template driven Forms!)

### Anmerkung
Gerne dürft ihr eurer Kreativität freien Lauf lassen und noch mehr einbauen. Auch designtechnisch, könnt ihr das nach eurem Ermessen aufziehen.