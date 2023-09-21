import { type } from "os";

// Use double assertion
function exercise35() {
  // TODO:Create two types: TUser and TProduct
  interface TUser {
    /* TODO: add definition for user name, title and email */
    name: string;
    title: string;
    email: string;
  }
  interface TProduct {
    /* TODO: add definition for product title, price and quantity */
    title: string;
    price: number;
    quantity: number;
  }

  let user: TUser = {
    name: "John",
    title: "admin",
    email: "john@admin.net",
  };

  let product: TProduct = {
    title: "phone",
    price: 500,
    quantity: 2,
  };

  // TODO: fix the error by adding double assertion
  product = user as unknown as TProduct;
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check
  const data = {
    firstName: "Joe",
    lastName: "Doe",
    age: 30,
    role: "Developer",
  };

  type TPosition = {
    name: string;
    age: number;
    role: string;
  };
  type TData = TPosition & {
    firstName: string;
    lastName: string;
  };
  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: TPosition) {
    // TODO: remove the following line
    // return "";
    // TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  (data as TData).name = `${data.firstName} ${data.lastName}`;
  data.toString = toString;
  // TODO: run the code and observe the error
  console.log(data + "");
  console.log(data.toString());
  // TODO: add required properties to the data object, fixing the error
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(
    obj: T
  ): T & { sayHello: () => string } {
    // TODO: implement the method sayHello that returns a greeting string
    const fullName = `${obj.firstName} ${obj.lastName}`;
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    return { ...obj, sayHello: () => `Hello ${fullName}` };
    // TODO: make sure the obj is not modified, and new object is returned
    // checked on lines 118-125
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  });

  // TODO: uncomment the following line and fix the error
  console.log(person.sayHello());

  //   checking if "obj" was modified or not:
  /*const testObj = {
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  };
  const person2 = addGreeting(testObj);
   console.log(testObj.sayHello());  
    Runtime error:
    console.log(testObj.sayHello());
                            ^

    TypeError: testObj.sayHello is not a function */
}
exercise37();

// Use experimental decorators
function exercise38() {
  // TODO: implement decorator to print call count of the function
  function count(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // add params here
    const originalMethod = descriptor.value;
    let callCount = 0;
    // TODO: implement decorator
    descriptor.value = function (...args: any[]) {
      // TODO: before calling the function increment callCount
      callCount++;
      const result = originalMethod.call(this, ...args);
      // TODO: after calling the function print callCount
      console.log(`Current count value: ${callCount}`);
      return result;
    };
  }

  // TODO: implement decorator to print execution time of the function
  function time(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // add params here
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      // TODO: before calling the function get current time
      const start = new Date();
      const startValue = start.getTime();
      const result = originalMethod.call(this, ...args);
      // TODO: after calling the function get current time
      const end = new Date();
      const endValue = end.getTime();
      // TODO: print the difference between the two times after calling the function
      console.log(`Duration of process is ${endValue - startValue} ms`);
      return result;
    };
  }

  class Calculation {
    // TODO: add both decorators to the following method
    // @time
    // @count
    static add(a: number, b: number) {
      return console.log(`${a + b}`);
    }
  }
  // TODO: create instance of Calculation class and call add method
  Calculation.add(23581763, 45618);
}
// exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // TODO: implement decorator to print call count of the function
  function count(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext
  ) {
    let callCount = 0;
    function decoratedMethod(this: any, ...args: any[]) {
      callCount++;
      const result = originalMethod.call(this, ...args);
      console.log(`Current count value: ${callCount}`);
      return result;
    }
    return decoratedMethod;
  }
  // TODO: implement decorator to print execution time of the function
  function time(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext
  ) {
    function decoratedMethod(this: any, ...args: any[]) {
      const start = new Date();
      const startValue = start.getTime();
      const result = originalMethod.call(this, ...args);
      const end = new Date();
      const endValue = end.getTime();
      console.log(`Duration of process is ${endValue - startValue} ms`);
      return result;
    }
    return decoratedMethod;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @time
    @count
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  Calculation.add(4381321981, 124642142121);
}
exercise39();
