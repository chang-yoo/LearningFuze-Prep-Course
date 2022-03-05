function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}
var minutes = convertHoursToMinutes(3);
console.log(minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = 5 * (num1 + num2);
  return result;
}
var MultiplyBy5 = addAndMultiplyBy5(10, 5);
console.log(MultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}
var divideBy5 = multiplyAndDivideBy5(35, 10);
console.log(divideBy5);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}
var subtract2Numbers = subtractTwoNumbers(22, 7);
console.log(subtract2Numbers);

function getCircleCircumference(radius) {
  var PI = 3.141592653589793;
  var result = PI * 2 * radius;
  return result;
}
var circleCircumference = getCircleCircumference(5);
console.log(circleCircumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var fullName = getFullName('Changhyun', 'Yoo');
console.log(fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}
var theCube = cube(5);
console.log(theCube);
