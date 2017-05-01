//had to get help on this one for the fact that the passthrough needs to stay unchanged
var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  }; 
  
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  
  this.getFullName = function() {
    return firstAndLast;
  };
  
  this.setFirstName = function(MonkeyD) {
    firstAndLast = MonkeyD + " " + firstAndLast.split(" ")[1];
  };
  
  this.setLastName = function(Luffy) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + Luffy;
  };
  
  this.setFullName = function(MonkeyDLuffy) {
    firstAndLast = MonkeyDLuffy;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();