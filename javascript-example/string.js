const string1 = "A string";
const string2 = 'Another string';
const string3 = `Yet another string`;
const string4 = new String ("A string object");
console.log(string3);

const name = 'Loi';
console.log("My name is" + name);

let text = '';
let length = text.length;
console.log(length);

const test = 'test';
const string5 = `something ${test}`;
console.log(string5);

const string6 = `something ${1 + 2 + 3}`;
console.log(string6);

let fruit = 'Apple, Banana, Kiwi';
let part = fruit.slice(15, 19);
let part1 = fruit.slice(-12);
let part2 = fruit.slice(-12, -6);
console.log(part);
console.log(part1);
console.log(part2);

let text1 = 'Hello World';
let char = text1.charAt(1);
let char2 = text1.charCodeAt(0);
console.log(char);
console.log(char2);

const name1 = "W3Schools";
let letter = name1[2];
let letter1 = name1.at(3);
console.log(letter);
console.log(letter1);

let text2 = "Hello World";
let text3 = text2.toUpperCase();
let text4 = text2.toLowerCase();
console.log(text3);
console.log(text4);