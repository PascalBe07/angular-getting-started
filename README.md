# AngularGettingStarted

Dies ist ein Testprojekt, um mit Angular zu starten.
Zu implementierende Tasks befinden sich im todos Ordner.

## Benötigte Commands

### Anwendung laufen lassen:

`npm run start` oder `npm start`

### Fake Backend laufen lassen:

Zum Üben von REST API Aufrufen, ist das npm Paket `json-server` in der package.json. Dieses stellt eine REST API lokal bereit gegen die die Angular App dann Requests stellen kann.
Die Daten, die über die Fake API bereitgestellt werden sind in der Datei `backend-data.json` zu sehen. 
Das Backend lässt sich über das entsprechende Skript in der package.json starten:

`npm run start-backend`