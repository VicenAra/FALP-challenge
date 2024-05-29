# FALP-challenge

Technical Challenge for Front-End Developer FALP

## Pre-requisites

Before you begin, make sure you have the following installed on your local machine

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Vue CLI](https://cli.vuejs.org/) (Vue.js 3)

To check if you have these installed, you can run the following commands in your terminal

```bash
node -v
npm -v
vue --version
```

## Project Setup 

In order to properly run the project you will have to follow the next steps:

* Open the app directory

```sh
cd superhero-app
```

* Install dependencies

```sh
npm install
```

* Inside the app directory open the proxy server directory and install its dependencies

```sh
cd cors-anywhere
npm install
```

* Create a .env file and include your personal access token to the SuperHero API as a variable, you can generate one using a GitHub Account [here](https://www.superheroapi.com)

```sh
VITE_SUPER_HERO_API_ACCESS_TOKEN= (your access token here)
```

## Usage 

To compile and run the app locally you will need to use two command terminals, on the first one run the next command inside the superhero-app directory

```sh
npm run dev
```
On the second one you will have to open the cors-anywhere directory inside the app directory and run 
```sh
node server.js
```

And now you are ready to use the app.

### Author
Vicente Araya Ortiz
