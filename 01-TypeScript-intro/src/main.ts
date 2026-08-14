// import {name, age, isValid,templateString} from './bases/01-types';
// import{pokemonIds,bulbasaur,charmander, pokemons} from './bases/02-objects';

//import { age, isValid, templateString } from "./bases/01-types"
//import { bulbasaur, charmander, pokemons } from "./bases/02-objects"
//import { charmander } from "./bases/03-classes"
//import { charmander } from "./bases/04-injection"
//import { charmander } from "./bases/05-decorattors"
 import { charmander } from "./bases/06-decorators2"

const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>${name}</h1>
//   <h2>${age}</h2>
//   <h3>${isValid}</h3>
//   <h4>${templateString}</h4>
//   <h2>${pokemonIds.join(',')}</h2>
//   <h1>${bulbasaur.name}</h1>
//   <h3>${charmander.name}</h3>
//   <h>${pokemons.join(',')}</h>
//   `     

app.innerHTML = `
   <h1>${charmander.name}, ${charmander.id}</h1>
   `

