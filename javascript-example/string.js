const string1 = "A string";
const string2 = 'Another string';
const string3 = `Yet another string`;
const string4 = new String ("A string object");
console.log(string3);

const name = ' Loi';
console.log("My name is" + name);

const text = '';
const length = text.length;
console.log(length);

const test = 'test';
const string5 = `something ${test}`;
console.log(string5);

const string6 = `something ${1 + 2 + 3}`;
console.log(string6);

const fruit = 'Apple, Banana, Kiwi';
const part = fruit.slice(15, 19);
const part1 = fruit.slice(-12);
const part2 = fruit.slice(-12, -6);
console.log(part);
console.log(part1);
console.log(part2);

const text1 = 'Hello World';
const char = text1.charAt(1);
const char2 = text1.charCodeAt(0);
console.log(char);
console.log(char2);

const name1 = 'W3Schools';
const letter = name1[2];
const letter1 = name1.at(3);
console.log(letter);
console.log(letter1);

const text2 = 'Hello World';
const text3 = text2.toUpperCase();
const text4 = text2.toLowerCase();
console.log(text3);
console.log(text4);
