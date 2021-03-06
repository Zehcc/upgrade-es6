/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFilter = ages.filter(age => age > 18);

// Comentado para tener la consola mas limpia
/* console.log(agesFilter) */

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const agesTwo = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFilterTwo = agesTwo.filter(ageTwo => (ageTwo % 2) === 0);

// Comentado para tener la consola mas limpia
/* console.log(agesFilterTwo) */

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamer = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

// Comentado para tener la consola mas limpia
/*  console.log (lolStreamer); */

/*  5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Comentado para tener la consola mas limpia
/* const letterUStreamer = streamers.filter(streamer => streamer.name.includes('u'))
console.log(letterUStreamer) */

/* .5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const streamersLeague = streamers2.filter(streamer => streamer.gameMorePlayed.includes('Legends'))

const streamersUpper = streamersLeague.map(streamer=>{
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        return streamer
    } else {
        return streamer
    }
})

// Comentado para tener la consola mas limpia
/* console.log(streamersLeague); */

/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let inputText = document.querySelector('[data-function="toFilterStreamers"]')

const streamerFilter = () => {
    let inputTextText= inputText.value
    const streamersFiltered = streamers3.filter(streamer => streamer.name.includes(inputTextText))
    console.log(streamersFiltered)
    
}
// Comentado porque da error
/* inputText.addEventListener('input', streamerFilter) */

/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */

const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let inputText2 = document.querySelector('[data-function="toFilterStreamers2"]');
let filterButton = document.querySelector('[data-function="toShowFilterStreamers"]');

const buttonClick = () => {
	let inputText2Text = inputText2.value;
	const StreamersFiltered2 = streamers4.filter(streamer => streamer.name.includes(inputText2Text))
	console.log(StreamersFiltered2)
}

filterButton.addEventListener('click', buttonClick)



