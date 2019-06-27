### Forms

Angular bietet schöne APIs, um mit Formularen umzugehen. Dabei unterstützt die API auch u.A. Validierung.

## Aufgabe

Als nächstes sollte der Anwender der Website die Möglichkeit bekommen einen neuen Employee zu erstellen. Dafür soll ein Formular auf der Create-Komponente erstellt werden.

AKs:
* Die Implementierung des Formulars soll über den Reactive Forms Approach geschehen (nicht template-driven Forms!)
* Der Anwender soll dabei einige Charakteristika des Employees festlegen können (wichtig wären Name, Email, Tags), gerne aber auch mehr
* Mindestens eines der Felder aus dem Formular sollte über einen Validator überprüft werden (--> z.B. nur gültige Email-Adressen --> Angular liefert Standard Validatoren)
* Beim Absenden des Formulars soll der Wert des Formulars in die Konsole geloggt werden
* Außerdem soll, wenn die anderen AKs erfüllt sind, der Wert des Formulars an das Backend geschickt werden (--> POST Request --> neuen Angular Service erstellen --> write-backend.service.ts)