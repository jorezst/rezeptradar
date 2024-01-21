# Rezeptradar
## Projektbeschreibung
Die "Rezeptradar" App bietet eine elegante Lösung, 
um Rezepte in einem übersichtlichen und ansprechenden Format
zu speichern und zu verwalten. Die Anwendung gliedert sich in zwei Hauptbereiche,
die eine intuitive Nutzung ermöglichen.

Im "Home-Bereich" findet man eine umfassende Sammlung aller Rezepte.
Hier besteht die Möglichkeit, gezielt nach spezifischen Rezepten zu suchen 
oder diese nach verschiedenen Kategorien zu filtern.
Jedes Rezept verweist auf eine separate Seite,
die detailliertere Informationen zum jeweiligen Rezept bereithält,
was das Auffinden und Nachkochen erleichtert.

Der zweite zentrale Bereich ist der "Rezept hinzufügen"-Bereich.
In diesem Segment der App können Nutzer neue Rezepte hinzufügen und ihre persönliche Rezeptsammlung erweitern.
Darüber hinaus verfügt die App über eine Einstellungsseite,
auf der Benutzer das Erscheinungsbild der App anpassen
und neue Kategorien für eine noch bessere Organisation ihrer Rezepte hinzufügen können.

Die App wird auf Github-Pages gehostet: https://jorezst.github.io/rezeptradar/#/

## Projekt Konzept
### Muss-Kann Kriterien
![Muss-Kann-Kriterien.png](docs%2Fpictures%2FMuss-Kann-Kriterien.png)
### Wireframes
#### Home
![Wireframe_Home.png](docs%2Fpictures%2FWireframe_Home.png)
#### Kochmodus
![Wireframe_Kochmodus.png](docs%2Fpictures%2FWireframe_Kochmodus.png)
#### Rezept erstellen
![Wireframe_Rezept-erstellen.png](docs%2Fpictures%2FWireframe_Rezept-erstellen.png)
## Projekt Erstellung
```
npm install -g @vue/cli
vue create rezeptradar
```
### Projekt Einstellungen
* Manually select features
* Babel, PWA Support, Router, Css Pre-Processors, Linter
* vue.js 3.x
* Dont use history mode for router 
* Sass/SCSS
* ESLint + Prettier
* Lint on save
* in package.json


### Projekt Plugins
```
vue add vuetify
vue add vue-cli-plugin-pinia
```

### Projekt setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Push to gh-pages branch and deploy
```
npm run deploy
```

### Lints and fixes files
```
npm run lint
```


