var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let fullnameArr = firstAndLast.split(" ");
  let firstName = fullnameArr[0];
  let lastName = fullnameArr[1];

  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFirstName = function () {
    return firstName;
  };

  this.setFirstName = function (name) {
    firstName = name;
  };

  this.setLasttName = function (name) {
    lastName = name;
  };

  this.setFulltName = function (fullName) {
    nameArr = fullName.split(" ");
    firstName = nameArr[0];
    lastName = nameArr[1];
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLasttName("Curry");
console.log(bob.getFullName());
bob.setFulltName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
