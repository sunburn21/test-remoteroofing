# Remote Roofing- Frontend Development Challenge
This project is solution of the <b>Frontend Internship: Preliminary Test</b> by Remote Roofing.

### Live Demo

A live demo of this project is deployed [here](https://sharp-bhaskara-303ce3.netlify.app/).

### Libraries Used

  <b>React-Router: </b>
    For implementing dynamic, client-side routing allows us to build a single-page web application with navigation without       the page refreshing as the user navigates.
    
  <b>Axios: </b>
    For making http get request to fetch the data.

### Installation

You must have [Node.js](https://nodejs.org/) version 10.x installed in order to run this.

#### For node version

```sh
node -v
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd test-remoteroofing
$ npm install
$ npm start

```
The project can then be viewed at http://localhost:3000/

### Project Structure

```
├── public
|   ├── manifest.json
|   └── index.html
├── src
|   ├── api
|   |   └── items.js
|   ├── assets
|   |   ├── app-store.svg
|   |   ├── facebook-white.svg
|   |   ├── instagram-white.svg
|   |   ├── placeholder.png
|   |   ├── play-store.svg
|   |   ├── twitter-white.svg
|   |   └── windows-store.svg
│   ├── components
|   |   ├── error
|   |   |   └── index.js
|   |   ├── loading
|   |   |   └── index.js
|   |   ├── movies
|   |   |   └── index.js
|   |   ├── series
|   |   |   └── index.js
|   |   ├── footer
|   |   |   ├── index.js
|   |   |   └── index.css
|   |   ├── header
|   |   |   ├── index.js
|   |   |   └── index.css
|   |   ├── home
|   |   |   ├── index.js
|   |   |   └── index.css
|   |   ├── items
|   |   |   ├── index.js
|   |   |   └── index.css
|   |   └── itemslist
|   |       ├── index.js
|   |       └── index.css       
│   ├── App.js
|   ├── App.css
|   ├── index.js
|   └── index.css
├── package.json
├── gitignore
├── package.json
└── README.md
```

### Improvements / Future scope / Thing's I would have done if alotted more time

1. Filters based on genre,year,rating can be added to sort movies/series.
2. Search feature can be implemented to perform search among the movies/series.
3. State manangement can be done using Redux, that would help in making the components dumb i.e components would have just recieve props and render the data without making any api call from within the component.But as the application is quite simple I thought it is better to not over complicate it.
4. Could have use frontend libraries like MaterialUI to make the components look more premium. But again as it is a small App I preferred to implement everything from the basic.
5. Stying libraries like Styled components can also be used to make the code more component friendly.

