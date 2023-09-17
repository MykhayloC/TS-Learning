"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// use type narrowing to print the passanger info
// function exercise23() {
//   console.log(`Exercise #23 output:\n`);
//   type TInstance = {
//     name: string;
//     age: number;
//   };
//   // TODO: define THuman type with properties name, age, driverLicenseId
//   type THuman = TInstance & {
//     driverLicenseId: string | number;
//   };
//   // TODO: define TAnimal type with properties name, age, species
//   type TAnimal = TInstance & {
//     species: string;
//   };
//   // TODO: define TPassanger type as union of THuman and TAnimal
//   type TPassanger = THuman | TAnimal;
//   // annotate the function to accept TPassanger type
//   function printPassangerInfo(passanger: TPassanger) {
//     // TODO: use type narrowing to print the passanger info
//     console.log(`Name: ${(passanger as TInstance).name}`);
//     console.log(`Age: ${(passanger as TInstance).age}`);
//     // TODO: print driverLicenseId if passanger is human
//     // TODO: print species if passanger is animal
//     if ("driverLicenseId" in passanger)
//       console.log(`DriverLicenseId: ${(passanger as THuman).driverLicenseId}
//       `);
//     else if ("species" in passanger)
//       console.log(`Species: "${(passanger as any).species}"
//     `);
//   }
//   // TODO: add missing properties to human and animal objects
//   const human: THuman = {
//     name: "John",
//     age: 20,
//     driverLicenseId: 10,
//   };
//   const animal: TAnimal = {
//     name: "Tom",
//     age: 5,
//     species: "cat",
//   };
//   printPassangerInfo(human);
//   printPassangerInfo(animal);
//   // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
//   class Human {
//     constructor(
//       public name: string,
//       public age: number,
//       public driverLicenseId: string | number
//     ) {}
//   }
//   class Pet {
//     constructor(
//       public name: string,
//       public age: number,
//       public species: string
//     ) {}
//   }
//   type TNewPassenger = Human | Pet;
//   function printPassangerInfoUpdated(passanger: TNewPassenger) {
//     console.log(`Name: ${(passanger as TNewPassenger).name}`);
//     console.log(`Age: ${(passanger as TNewPassenger).age}`);
//     if (passanger instanceof Human)
//       console.log(`DriverLicenseId: ${(passanger as Human).driverLicenseId}
//     `);
//     else if (passanger instanceof Pet)
//       console.log(`Species: "${(passanger as Pet).species}"
//     `);
//   }
//   const person = new Human("Bob", 30, 21);
//   const pet = new Pet("Tuzik", 10, "dog");
//   printPassangerInfoUpdated(person);
//   printPassangerInfoUpdated(pet);
//   // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
//   /* Is done in rows 33 and 36 */
// }
// // TODO: compile and run the code
// exercise23();
// // use discriminated union to narrow the type of the object
// function exercise24() {
//   console.log(`\nExercise #24 output:\n`);
//   // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
//   type TBlogMessage = {
//     instance: "message";
//     text: string;
//   };
//   type TBlogImage = {
//     instance: "image";
//     url: string;
//   };
//   type TBlogComment = {
//     instance: "comment";
//     text: string;
//     messageId: string;
//   };
//   type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;
//   function printBlogPost(post: TBlogPost) {
//     // TODO: use discriminated union to narrow the type of the object
//     if (post.instance === "comment") {
//       console.log("comment: ", post.text);
//     }
//     if (post.instance === "image") {
//       console.log("image: ", post.url);
//     }
//     if (post.instance === "message") {
//       console.log("message: ", post.text);
//     }
//   }
//   // TODO: add missing type property to the objects
//   printBlogPost({ instance: "message", text: "abc" });
//   printBlogPost({ instance: "image", url: "abc" });
//   printBlogPost({ instance: "comment", text: "abc", messageId: "123" });
// }
// // TODO: compile and run the code
// exercise24();
// // use non-null assertion operator
// function exercise25() {
//   console.log(`\nExercise #25 output:\n`);
//   type TPerson = {
//     name: string;
//     email?: string | null | undefined;
//   };
//   function sendEmail(email: string) {
//     console.log("sending email to", email);
//   }
//   function ensureContactable(person: TPerson) {
//     // TODO: add check for null and undefined - throw error if person.email is null or undefined
//     if (!person.email) throw new Error("email is not valid");
//   }
//   function contact(person: TPerson) {
//     ensureContactable(person);
//     // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
//     sendEmail(person.email!);
//   }
//   function contact2(person: TPerson) {
//     // Add inline check for null and undefined - throw error if person.email is null or undefined
//     if (!person.email) throw new Error("email is not valid");
//     // TODO: uncomment code below and check that it compiles
//     sendEmail(person.email);
//   }
//   const person1: TPerson = {
//     name: "John",
//     email: "asdf@asdf.com",
//   };
//   const person2: TPerson = {
//     name: "John",
//     email: null,
//   };
//   contact(person1);
//   contact2(person1);
//   contact(person2);
//   // TODO: print the result to console
// }
// // TODO: compile and run the code
// exercise25();
// // Create an assertion function
// function exercise26() {
//   console.log(`\nExercise #26 output:\n`);
//   type TWidget = {
//     name: string;
//   };
//   type TGadget = {
//     os: string;
//   };
//   type TThing = TWidget | TGadget;
//   // TODO: add your code to make the following function assert correctly
//   function asserWidget(value: unknown): asserts value is TWidget {
//     if (!value || typeof value !== "object" || !("name" in value))
//       throw new TypeError("incorrect type of data");
//   }
//   // TODO: add your code to make the following function assert correctly
//   function asserGadget(value: unknown): asserts value is TGadget {
//     if (!value || typeof value !== "object" || !("os" in value))
//       throw new TypeError("incorrect type of data");
//   }
//   const thing1 = { name: "widget" } as TThing;
//   const thing2 = { os: "ubuntu" } as TThing;
//   asserWidget(thing1);
//   // TODO: uncomment the following lines after assertion is added
//   thing1.name = "weather widget";
//   console.log(thing1.name);
//   // TODO: uncomment the following lines after assertion is added
//   asserGadget(thing2);
//   thing2.os = "android";
//   console.log(thing2.os);
// }
// exercise26();
// // use interface and compare with type alias
// function exercise27() {
//   console.log(`\nExercise #27 output:\n`);
//   type TPerson = {
//     // name is string
//     // age is number
//     name: string;
//     age: number;
//   };
//   // TODO: add TPersonWithPhone type definition - extend TPerson with phone property
//   // type TPersonWithPhone = ...
//   // phone is string
//   type TPersonWithPhone = TPerson & { phone: string };
//   // TODO: uncomment the code below and check that it compiles
//   const person: TPersonWithPhone = {
//     name: "John",
//     age: 18,
//     phone: "123-456-7890",
//   };
//   console.log("person data: ", person.name, person.age, person.phone);
//   interface IPerson {
//     // name is string
//     // age is number
//     name: string;
//     age: number;
//   }
//   // TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
//   // interface IPersonWithPhone = ...
//   // phone is string
//   interface IPersonWithPhone extends IPerson {
//     phone: string;
//   }
//   // TODO: uncomment the code below and check that it compiles
//   const person2: IPersonWithPhone = {
//     name: "John",
//     age: 18,
//     phone: "123-456-7890",
//   };
//   console.log("person data: ", person2.name, person2.age, person2.phone);
// }
// // TODO: compile and run the code
// exercise27();
// use implements keyword to implement interface
function exercise28() {
    console.log(`\nExercise #28 output:\n`);
    // TODO: declare class Widget which implements IWidget
    class Widget {
        constructor(name) {
            this.name = name;
        }
        toString() {
            return `Widget - name: ${this.name}.`;
        }
    }
    // TODO: declare class WidgetWithSize which implements IWidgetWithSize
    class WidgetWithSize {
        constructor(name, width, height, color) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        resize() { }
        toString() {
            return `Widget with size - name: ${this.name}; width: ${this.width}; height: ${this.height}; color: ${this.color}.`;
        }
    }
    // TODO: declare class DesktopWidget which implements IDesktopWidget
    class DesktopWidget extends WidgetWithSize {
        constructor(name, width, height, color, os) {
            super(name, width, height, color);
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
        }
        open() { }
        toString() {
            return `Desktop widget - name: ${this.name}; width: ${this.width}; height: ${this.height}; color: ${this.color}; os: ${this.os}.`;
        }
    }
    // TODO: declare class MobileWidget which implements IMobileWidget
    class MobileWidget extends WidgetWithSize {
        constructor(name, width, height, color, space) {
            super(name, width, height, color);
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.space = space;
        }
        install() { }
        toString() {
            return `Mobile widget - name: ${this.name}; width: ${this.width}; height: ${this.height}; color: ${this.color}; space: ${this.space}.`;
        }
    }
    // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
    class DesktopAndMobileWidget extends DesktopWidget {
        constructor(name, width, height, color, os, space) {
            super(name, width, height, color, os);
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
            this.space = space;
        }
        install() { }
        toString() {
            return `Desktop and mobile widget - name: ${this.name}; width: ${this.width}; height: ${this.height}; color: ${this.color}; os:${this.os}; space: ${this.space}.`;
        }
    }
    // TODO: add IWidgetPrintable to each of the classes above
    // implementation returns class name and all properties
    // TODO: create instance of each class
    const widget = new Widget("weather widget");
    const widgetWithSize = new WidgetWithSize("news widget", 1000, 500, "white");
    const desktopWidget = new DesktopWidget("menu widget", 1900, 1000, "blue", "Windows");
    const mobileWidget = new MobileWidget("advertisement widget", 200, 400, "black", 30);
    const desktopAndMobileWidget = new DesktopAndMobileWidget("blog widget", 400, 600, "yellow", "Android", 40);
    // TODO: print each instance to console
    console.log(`${widget}`);
    console.log(`${widgetWithSize}`);
    console.log(`${desktopWidget}`);
    console.log(`${mobileWidget}`);
    console.log(`${desktopAndMobileWidget}`);
}
// TODO: compile and run the code
exercise28();
