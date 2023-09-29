"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Use double assertion
function exercise35() {
    let user = {
        name: "John",
        title: "admin",
        email: "john@admin.net",
    };
    let product = {
        title: "phone",
        price: 500,
        quantity: 2,
    };
    // TODO: fix the error by adding double assertion
    product = user;
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
    // TODO: add this param annotation, to enforce that this function
    // can only be called on an object with name, age and role properties
    function toString() {
        // TODO: remove the following line
        // return "";
        // TODO: uncomment the following line
        return `${this.name}, ${this.age}, ${this.role}`;
    }
    data.name = `${data.firstName} ${data.lastName}`;
    data.toString = toString;
    // TODO: run the code and observe the error
    console.log(data + "");
    console.log(data.toString());
    // TODO: add required properties to the data object, fixing the error
}
exercise36();
// Use generic constraints
function exercise37() {
    // TODO: add generic constraints to enforce type checking, add return type annotation
    function addGreeting(obj) {
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
    function count(target, propertyKey, descriptor) {
        // add params here
        const originalMethod = descriptor.value;
        let callCount = 0;
        // TODO: implement decorator
        descriptor.value = function (...args) {
            // TODO: before calling the function increment callCount
            callCount++;
            const result = originalMethod.call(this, ...args);
            // TODO: after calling the function print callCount
            console.log(`Current count value: ${callCount}`);
            return result;
        };
    }
    // TODO: implement decorator to print execution time of the function
    function time(target, propertyKey, descriptor) {
        // add params here
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
        static add(a, b) {
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
    function count(originalMethod, _context) {
        let callCount = 0;
        function decoratedMethod(...args) {
            callCount++;
            const result = originalMethod.call(this, ...args);
            console.log(`Current count value: ${callCount}`);
            return result;
        }
        return decoratedMethod;
    }
    // TODO: implement decorator to print execution time of the function
    function time(originalMethod, _context) {
        function decoratedMethod(...args) {
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
    let Calculation = (() => {
        var _a;
        let _staticExtraInitializers = [];
        let _static_add_decorators;
        return _a = class Calculation {
                // TODO: add both decorators to the following method
                static add(a, b) {
                    return a + b;
                }
            },
            (() => {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _static_add_decorators = [time, count];
                __esDecorate(_a, null, _static_add_decorators, { kind: "method", name: "add", static: true, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _staticExtraInitializers);
                if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                __runInitializers(_a, _staticExtraInitializers);
            })(),
            _a;
    })();
    // TODO: create instance of Calculation class and call add method
    Calculation.add(4381321981, 124642142121);
}
exercise39();
