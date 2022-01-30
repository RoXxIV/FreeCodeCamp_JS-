/**
 * - Make a Person
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 */

var Person = function (firstAndLast) {
  let fullName = firstAndLast;

  //getFirstName
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  //getLastName
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  //getFullName
  this.getFullName = function () {
    return fullName;
  };

  //setFirstName
  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  //setLastName
  this.setLastName = function (last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function (newFullName) {
    fullName = newFullName;
    return fullName;
  };
  //setFullName
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
