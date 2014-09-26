
# SRN Semester Project 


## I. Beschreibung

Diese Anwendung ist eine Verteilte Anwendung, die ein sicherheitsystem , 
      vergleichbare mit dem Keybundle von Apple implementiert. 


## II. Was kann das System ? 
Benutzer konnen dank diese System: <br />

* Daten verschluesselt. 
* Schluesselt auf ein sichere Weg tauschen 
* Uebersicht auf die schluessel halten.
* uebergebene Schlussel , zuruckziehen. 
* Andere Benutzer von ihre Freunde Liste entfernen bzw. hinzufügen

## III. Was das System nicht kann ? 

* Diese Software ist nicht dafuer implementiert, Daten zwischen Partein zu 
      tauschen. 

## IV. Technologies 

* Linux
* Web 
* Node Js , Express Js, Passport, MongoDB 


## V. Funktion 
1. **Verwaltung von Benutzer und Daten** <br />

Die Benutzer des Systems und deren Beziehung mit andere User 
werden zentral verwalten. <br />
Hier ist nochmal zu deuten , dass mit Daten ist nicht damit gemeint , Datein 
an sich , sondern nur den Link an diese Datei. Also es werden keine 
Datein durch das System transportiert. Wie die Daten zu finden erreichen ist
, oder wie die transportiert werden muessen die Benutzer sich selber dafuer
kuemmern. 

2. **Schluessel Verwaltung** 
Es werden die Schuesseln , Passphrase der Benutzer in DB gesichert. 
Benutzer koennen neuen schluessel erzeugen lassen, Schluessen an Dritten 
uebergeben , zurueckziehen, loeschen . 


## Sicherheitkonzept. 

* Sicherheimechanismus beim Einloggen. 
Die User werden nach ihre Bnutzername gefragt plus Passphrase. 

1. Es wird Passphrase ueber Password ausgewaehlt. Dh , wir implementiert 
   kein normale password system. 
* Zum Beispiel : ein password wie DaZ$%128kle wird bei der meinsten System als sicher 
gezeichnet , ist est aber nicht , da von ein Computer mit normalen Leistung , die heute 
sehr zugaenglich , nur 8 Stunde (im Worstcase )dauernt wird bis der Hacker den richtige Password 
gefundet hat. was nicht der fall ist wenn den Benutzer sich ein Password wie "JeMangeraiZZZaLaMaisonQuandtu sera parti", 
gemässt wird es Jahren dauert. 

2. Die richtigkeit Prüfung von User Eingabe werden , sowohl clientseitig als auch serverseitig durchgeführt . 







