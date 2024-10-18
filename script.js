// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Inherit properties from Car
  Car.call(this, make, model); 
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor reference back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
