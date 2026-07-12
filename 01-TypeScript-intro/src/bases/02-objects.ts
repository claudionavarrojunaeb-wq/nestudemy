export const pokemonIds = [1,20,30,34,66];
pokemonIds.push(+'1');

console.log(pokemonIds);

interface Pokemon{
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon ={
    id: 1,
    name : 'Bulbasaur',
    age:22
}
export const charmander: Pokemon={
    id: 4,
    name: "Charmander"
}
console.log(bulbasaur);

export const pokemons:Pokemon[] = [];

// pokemons.push(1,'string', charmander);
pokemons.push(bulbasaur, charmander);
console.log(pokemons);