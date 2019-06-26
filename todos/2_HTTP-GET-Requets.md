# HTTP Get Requets

Angular bietet einen HTTP-Client an, über den man REST Schnittstellen (wie unsere Fake API) abfragen (HTTP GET) kann.

## Aufgabe

Der nächste Schritt wäre nun die Fake API so anzubinden, dass wir die Daten im Frontend zur Verfügung haben. Eine minimale Visualisierung (als JSON) ist schon implementiert.
Die kann vorerst bestehen bleiben. Es soll hier der `employees` Endpunkt der Fake API angebunden werden.

AKs:
* Employee Interface erstellt, dass die Struktur der Backend Daten widerspiegelt (guid, isActive, ...) (--> siehe backend-data.json)
* Signatur der getEmployees Methode im read-backend.service angepasst, dass sie ein Observable von einem Array des Employee Interfaces returned
* Der Datentyp der employeesObservable Variable in der Home-Komponente ist ebenfalls ein Observable von einem Array des Employee Interfaces
* getEmployees Methode implementiert mit Hilfe des Angular HTTP Clients
* Danach sollten in der Home-Komponente die entsprechenden Daten angezeigt werden (als JSON) (--> sollte kein zusätzlicher Aufwand sein)