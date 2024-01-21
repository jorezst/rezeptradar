# Entwicklungstagebuch

## Sichtweise auf das Projekt

### Meine Aufgaben
Meine Hauptaufgaben waren das Anlegen des Projektes und das Installieren jeglicher Plugins.

Außerdem Habe ich mich mit dem PWA-Support beschäftigt, das Vuetify Theme angelegt
und zusammen mit Vincent die Pinia-Stores angelegt.

Meine entwickelten Komponenten waren unter anderem die Top-und Bottom Navigationsleisten,
die Home Seite zum Anzeigen von allen Rezepten in einem Grid und der Kategorie filter im Zusammenspiel mit der Suchleiste.

### Dinge die ich gelernt habe
Während des Projekts habe ich folgende Fähigkeiten und Kenntnisse erworben:

**Vue und Vuetify**: Das grundlegende Arbeiten mit Vue und dem Framework Vuetify.
Damit verbunden die verschiedenen Komponenten und Theme Möglichkeiten von Vuetify kennengelernt.

**Pinia Stores**: Die Arbeit mit Pinia Stores um Datenarbeit innerhalb von Vue zu ermöglichen
und zum Anlegen von komplexen Datenstrukturen welche über verschiedene Seiten konsistent bleiben.

**Vue-Router**: Den Umgang mit dem Vue-Router um mehrere Anfragen an Server zu vermeiden.

**Deployment auf Github-Pages**: Ich habe das erste Mal Github-Pages benutzt um eine Webseite zu hosten.

### Schwierigkeiten
Die Konzeption unserer App ist mir sehr schwer gefallen. Unser Miro Prototyp war nicht ganz durchdacht
und das ist uns später auf die Füße gefallen, weil wir sehr viele Komponenten umsonst angelegt haben.

Auch die richtig verwendung von Pinia Stores haben wir zu spät erkannt und habe unsere
ersten Komponenten nicht mit diesen im Hinterkopf angelegt.

## Entwicklungsablauf

### 47. KW
* Erste Einrichtung der Entwicklungsumgebung Webstorm und anlegen von erstem Vue Projekt.
* Außerdem habe ich mich den verschiedenen Arten von Vue Projekten (vue-cli, vite, etc...) befasst.
### 48. KW
* Anlegen des Projekts mit vue-cli und installiern von Plugins wie Vuetify oder Pinia.
* Erste Beschäftigung mit dem Hosten der Webseite auf Github-Pages, damit man die App auch auf dem Handy als PWA installieren kann (https notwendig)
### 49. KW
* Vuetify Theme erstellt und eine Settingsseite erstellt, wo man das Theme umschalten kann.
* Erstellung der Bottom-Navigation mit Vuetify 
### 50. KW
* Firebase Datenbank als Option besprochen, aber relativ schnell wieder verworfen und mit Pinia Store ersetzt.
* Erste Icons für PWA-Installation hinzugefügt.
* Top-Navigationsleiste testweise implementiert.
### 1. KW
* Erste Suchleiste hinzugefügt um nach Rezepten zu Filtern.
* Außerdem erstellen der Homeview wo alle Rezepte angezeigt werden.
* Vereinheitlichung der Sprache zu Deutsch und weitere kleine sprachliche Änderungen
### 2. KW
* Anlegen der ersten richtigen Stores für Rezepte, Kategorien und Einheiten.
* Ändern vieler Komponenten um die neuen Stores richtig benutzen zu können.
* Weitere PWA Icons.
* Umänderung der Top-Navigation und hinzufügen von separater Suchleiste und einem Kategorie-Filter.
* Weitere Rezepte in den Store hinzugefügt.
* Änderung von Options API zu Composition API mancher Komponenten
### 3. KW
* Form zum Anlegen von neuen Rezepten implementiert
* Regeln für die Forms angelegt
* Weitere kleine visuelle Fixes
* Kategorie-Filter so verändert, dass man nach mehreren Kategorien suchen kann
* Alte Komponenten und views gelöscht
* Projektstruktur aufgeräumt und ein paar Views aufgeteilt in unterschiedliche Komponenten
* Weitere Änderung von Options API zu Composition API
* Dokumentation des Projektes hinzugefügt

## Folgende Punkte würde ICH das nächste mal anders machen
Ich würde definitiv das Projekt besser planen und erstmal einen genaueren Prototyp mit Figma erstellen.

Außerdem würde ich mich im Vorfeld mehr mit Themen wie Pinia-Stores beschäftigen,
damit man Komponenten gleich darauf aufbauen kann um später nicht neu anfangen zu müssen.

Und vor allem würde ich früher anfangen einen genaueren Plan zu machen und dann konstant daran zu bleiben.