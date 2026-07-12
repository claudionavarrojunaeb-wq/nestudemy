export let name: string | undefined = "Claudio";
export const age: number = 51;
export const isValid: boolean =  true;

//name = undefined
//console.log(name)
export const templateString = `Esto es un string
multilínea
que puede tener
"comillas dobles
'comillas simples
inyectar valores ${name}
números ${age}
`;

console.log(templateString)