//1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//  first it will print the first car it "Tesla" and then because the "," it will print the second it "Mercedes" if we but the two of ",," it will print the third car 
console.log(randomCar)
console.log(otherRandomCar)


//2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// the console.log(name); it will print error because its not a variable
console.log(name);
console.log(otherName);



//3


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//in the console.log(hashedPassword); it will print "undefinded" because there's no a password in person
console.log(password);
console.log(hashedPassword);


//4


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
// it will cheack ifthe variable = the another variable 
console.log(first == second);
console.log(first == third);


//5


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);