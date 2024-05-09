{
  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    display() {
      console.log(
        `Your car model is : ${this.year} ${this.brand} ${this.model}`
      );
    }
  }

  const newCar = new Car("Toyota", "Corolla", 2020);
  newCar.display();
}
