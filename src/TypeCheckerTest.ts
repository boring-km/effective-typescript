/*
let city = 'seoul city';
console.log(city.toUppercase());
 */

// const fruits = [
//     {name: 'apple', color: 'red'},
//     {name: 'banana', color: 'yellow'},
//     {name: 'grapes', color: 'green'}
// ];
// for (const fruit of fruits) {
//     console.log(fruit.colar);
// }

interface Fruit {
    name: string;
    color: string;
}
const fruits: Fruit[] = [
    {name: 'apple', color: 'red'},
    {name: 'banana', color: 'yellow'},
    {name: 'grapes', color: 'green'},
];
for (const fruit of fruits) {
    console.log(fruit.color)
}
