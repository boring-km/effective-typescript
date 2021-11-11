let age: number;
age = '12' as any;
age += 1;

console.log(age);

function calculateAge(birthDate: Date): number {
    return 25;
}

let birthDate: any = '1996-02-29';
let myAge = calculateAge(birthDate);
console.log(myAge);