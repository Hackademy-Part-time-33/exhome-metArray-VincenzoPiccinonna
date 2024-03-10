let numbers=[5,6,10,23,4];

let media = numbers.reduce((acc,el)=>acc+el,0 )/numbers.length;

console.log(numbers);
console.log(media);

let numMin=numbers.filter(el=>el < media);
let numMax=numbers.filter(el=>el > media);

console.log(`I numeri minori di ${media}sono ${numMin}`);
console.log(`I numeri minori di ${media}sono ${numMax}`);