// 4th task

 function exercise4() {
        
    let firstPoint: [number, number]; 
    let secondPoint: [number, number];
    
    firstPoint = [1, 1];
    secondPoint = [4, 5];

    function distance(p1: [number, number], p2: [number, number]): number {
        
        const x1:number = p1[0];
        const y1:number = p1[1];
        const x2:number = p2[0];
        const y2:number = p2[1];

        const result:number = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return result;
    }

    console.log(`\nThe 4th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`)
}

exercise4();

//5th task

function exercise5() {
    type TPoint = { x: number; y:number };
    
    let firstPoint: TPoint;
    let secondPoint: TPoint;

    firstPoint = { x:1, y:1 };
    secondPoint = { x:4, y:5 };

    function distance(p1: TPoint, p2: TPoint): number {
        const {x:x1, y:y1} = p1;
        const {x:x2, y:y2} = p2;

        const result:number = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return result;
    }

    console.log(`\nThe 5th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`)
}

exercise5(); 

function exercise6() {
    
    const PI = 3.14;

    function circleAreaCalculator (r:number): number {
        const result:number = PI*r**2;
        return result;
    }

    const currentRadius:number = 10;

    console.log(`\nThe 6th task:\n
    The radius of circle is ${circleAreaCalculator(currentRadius)} square units`);
    
    console.log(`
    The type of "PI"-variable is "${typeof(PI)}"`);

    type TPerson = {name: string; age: number};

    const person: TPerson = {name: "John", age: 25};

    function incrementorOfAge (p:TPerson): TPerson {
        const {age} = p;
        p.age++;
        return p;        
    }

    const newPerson: TPerson = incrementorOfAge(person);

    console.log(`
    Person data:`)
    Object.entries(newPerson).forEach(item => {
        console.log(`\t${item[0]}: ${item[1]}`)
    })
}
exercise6();


function exercise7() {
    
    type TArray = number[];
    type TTransform = (a: number) => number;

    function map(arr: TArray, fn: TTransform): number[] {
        for (let i:number = 0; i < arr.length; i++) {
            arr[i] = fn(arr[i])
        }
        return arr;
    }

    const arrayOfNumbers: TArray = [0, 1, 2, 3, 4, 5];
    const toDouble: TTransform = (a) => {
        a = a*2;
        return a;
    }

    console.log(`\nThe 7th task:\n
    [${map(arrayOfNumbers, toDouble)}]`);
}

exercise7();


function exercise8() {
    console.log(`\nThe 8th task:\n`);
    type TUser = {name: string};
    
    function printGreeting (user: TUser): void {
        console.log(`Hello ${user.name}!`)
    }

    type TProduct = {name: string; price: number};

    let product: TProduct = {name: "headphones", price: 1000};

    // TODO: call the function with product as a parameter
    printGreeting(product);
    // Output: Hello headphones!

    // TODO: call the function with object literal as a parameter
    // printGreeting({name: "headphones", price: 1000});
    // Error: Argument of type '{ name: string; price: number; }' is not assignable to parameter of type 'TUser'

    // TODO: try adding extra property to the object literal - observe the error
    // product.isAvailable = true;
    // Error: Property 'isAvailable' does not exist on type 'TProduct'

    // TODO: fix the error with type assertion
    type TAvailabilityOfProduct = {name: string; price: number; isAvailable: boolean};
    const productOnStck: TAvailabilityOfProduct = {name: "phone", price: 10000, isAvailable: true};

    product = productOnStck;
}

exercise8();

function exercise9() {
    console.log(`\nThe 9th task:\n`)
    class Book {
        title: string;
        protected year: number;

        constructor (title: string, year: number) {
            this.title = title;
            this.year = year;
        }

        get getInfo (): string {
            return `Title: "${this.title}", year of publication: ${this.year}`
        }

        setYear (year:number) {
            this.year = year;
        }

        get getAge ():number {
            const currentDate = new Date;
            const currentYear: number = currentDate.getFullYear();
            return currentYear - this.year;
        }

        revise (newYear: number) {
            const currentDate = new Date;
            const currentYear: number = currentDate.getFullYear();
            (newYear > currentYear || newYear < this.year) ? 
            console.log("Input data is not valid!") :
            this.year = newYear;
        }
    }

    const newBoook = new Book ("Some title", 2020);
    console.log(newBoook.getInfo);
    
    newBoook.setYear(2000);
    console.log(newBoook.getInfo); 
    
    console.log(`The age of "${newBoook.title}" is ${newBoook.getAge} years`);

    newBoook.revise(2021);
    
    // TODO: add private modifier to the year property
    // TODO: try to access the year property from outside of the class - observe the error
    /* console.log(newBoook.year);
       Property 'year' is private and only accessible within class 'Book' */
    
    class Magazine extends Book {
        month: string;
        day: number;

        constructor (title: string, year: number, month: string, day: number) {
            super (title, year);
            this.month = month;
            this.day = day;
        }

        get getInfo(): string {
            console.log(super.getInfo);
            return `date of publication: ${this.day} of ${this.month}`
        }
    }

    const newMagazine = new Magazine("Title of magazine", 2015, "May", 10);
    
    console.log(newMagazine.getInfo);

    console.log(`The age of "${newMagazine.title}" is ${newMagazine.getAge} years`);
}

exercise9();
