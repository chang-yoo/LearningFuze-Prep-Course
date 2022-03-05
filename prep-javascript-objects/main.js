var person = {
  firstName: 'changhyun',
  lastName: 'Yoo',
  hobby: 'Game'
};
var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);
console.log(person.hobby);
person.job = 'production';
console.log("The person's current job is: ", person.job);
person.previousJob = 'student';
console.log("The person's previous job was: ", person.previousJob);
console.log(person);
