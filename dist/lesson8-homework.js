"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fix issues related to temporal uncertainty
function exercise40() {
    // TODO: fix the type of fetchResult variable to be union of array of GroupDocument objects / null
    let fetchResult = null;
    // TODO: keep this code as is
    fetchResult = [
        {
            name: "John",
            data: [
                {
                    date: 13,
                    hours: 14,
                },
                {
                    date: 12,
                    hours: 433,
                },
            ],
        },
        {
            name: "Ringo",
            data: [
                {
                    date: 13,
                    hours: 41,
                },
                {
                    date: 11,
                    hours: 233,
                },
            ],
        },
    ];
    const userNames = ["John", "Ringo"];
    if (fetchResult !== null) {
        // NOTE: observe taht type narrowing works here
        console.log(fetchResult.length);
        const localFetchResult = fetchResult;
        userNames.forEach((name) => {
            // TOOD: explain why type narrowing does not work here and fix the error (and remove any type annotations)
            let result = localFetchResult.find((obj) => obj.name === name);
            if (result) {
                console.log(result.data);
            }
        });
    }
}
exercise40();
// Use typeof operator
function exercise41() {
    // for this exercise, use the following data
    const user = {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        maidenName: "Smitham",
        age: 50,
        gender: "male",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        username: "atuny0",
        password: "9uQFF1Lh",
        birthDate: "2000-12-25",
        image: "https://robohash.org/hicveldicta.png",
        bloodGroup: "A−",
        height: 189,
        weight: 75.4,
        eyeColor: "Green",
        hair: {
            color: "Black",
            type: "Strands",
        },
        domain: "slashdot.org",
        ip: "117.29.86.254",
        address: {
            address: "1745 T Street Southeast",
            city: "Washington",
            coordinates: {
                lat: 38.867033,
                lng: -76.979235,
            },
            postalCode: "20020",
            state: "DC",
        },
        macAddress: "13:69:BA:56:A3:74",
        university: "Capitol University",
        bank: {
            cardExpire: "06/22",
            cardNumbers: ["50380955204220685", "6762303175774717"],
            cardType: "maestro",
            currency: "Peso",
            iban: "NO17 0695 2754 967",
        },
        company: {
            address: {
                address: "629 Debbie Drive",
                city: "Nashville",
                coordinates: {
                    lat: 36.208114,
                    lng: -86.58621199999999,
                },
                postalCode: "37076",
                state: "TN",
            },
            department: "Marketing",
            name: "Blanda-O'Keefe",
            title: "Help Desk Operator",
        },
        ein: "20-9487066",
        ssn: "661-64-2976",
        userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    };
    // TODO: for each property of the user object, print its type using js typeof operator
    function printAllUserPropTypes() {
        const arrayOfUserProps = Object.keys(user);
        // TODO: get lis of own keys of the user object
        // TODO: iterate over the keys with foreach
        // TODO: console.log the typeof for each property
        arrayOfUserProps.forEach((item) => {
            console.log(`Type of property "${item}" is ${typeof user[item]}`);
        });
    }
    printAllUserPropTypes();
    // TODO: create function that returns coordinates of the user copany address,
    // TODO: set the return type of that function using typeof operator
    function getCoordinates() {
        return user.company.address.coordinates;
    }
    // console.log(getCoordinates());
}
exercise41();
// Use lookup types
function exercise42() {
    // imagine you have a list of products received from the API
    // and you need to display the location coordinates of every product's warehouse
    const products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: [
                {
                    url: "https://i.dummyjson.com/data/products/1/1.jpg",
                    title: "user photo 1",
                },
                {
                    url: "https://i.dummyjson.com/data/products/1/2.jpg",
                    title: "user photo 2",
                },
            ],
            warehouse: {
                address: {
                    address: "629 Debbie Drive",
                    city: "Nashville",
                    coordinates: {
                        lat: 36.208114,
                        lng: -86.58621199999999,
                    },
                    postalCode: "37076",
                    state: "TN",
                },
                name: "Blanda-O'Keefe",
                phoneNumbers: ["1-615-843-3426", "1-615-843-3427"],
            },
        },
    ];
    // TODO: fix/add type annotation for the function (remove any type annotation)
    function printProductLocationCoordinates(coordinates) {
        // NOTE: this could be using google map api to display the location on the map, but for now just console.log
        console.log(coordinates.lat);
        console.log(coordinates.lng);
    }
    printProductLocationCoordinates(products[0].warehouse.address.coordinates);
    function getProductWarehousePhoneNumber(product) {
        // TODO: fix the return value to be a type of a phone number for the product warehouse
        // HINT: use lookup types, and the result for that should equal to string type
        // TODO: make sure the function gets a phone number from product object
        console.log(product.warehouse.phoneNumbers.join("; "));
        return product.warehouse.phoneNumbers.join("; ");
    }
    getProductWarehousePhoneNumber(products[0]);
}
exercise42();
// Use keyof type operators
function exercise43() {
    // TODO: implement functions to get and set property of an object in type safe way
    // TODO: for type sefty use generics and keyof type operator to ensure that key is a valid property of the object
    function getProperty(obj, key) {
        console.log("getProperty", obj[key]);
        return obj[key];
    }
    // TODO: use generics and lookup type, add types T, K and use T[K] for value param type
    function setProperty(obj, key, value) {
        obj[key] = value;
        console.log("setProperty", obj, key, obj[key]);
    }
    const user = {
        firstName: "John",
        lastName: "Doe",
        role: "admin",
    };
    getProperty(user, "role"); // admin
    setProperty(user, "role", "user");
}
exercise43();
// Use conditional types
function exercise44() {
}
exercise44();
// Use conditional types with unions and never
function exercise45() {
    // TODO: uncomment the following lines and make sure there are no errors
    const a = "test";
    console.log(a);
}
exercise45();
// Use infer keyword
function exercise46() {
    function createUser(firstName, lastName, age) {
        const id = (Math.random() * 100000).toString();
        return {
            firstName,
            lastName,
            age,
            id,
        };
    }
}
exercise46();
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra1() {
    function areAnagrams(s1, s2) {
        if (s1.length !== s2.length)
            return false;
        const firstWord = {};
        const secondWord = {};
        for (let char of s1) {
            if (char in firstWord) {
                firstWord[char]++;
            }
            else
                firstWord[char] = 1;
        }
        for (let char of s2) {
            if (char in secondWord) {
                secondWord[char]++;
            }
            else
                secondWord[char] = 1;
        }
        for (let key in firstWord) {
            if (firstWord[key] !== secondWord[key])
                return false;
        }
        return true;
    }
    console.assert(areAnagrams("listen", "silent") === true);
    console.assert(areAnagrams("abc", "cba") === true);
    console.assert(areAnagrams("abc", "cbd") === false);
    // next three rows are for my personal additional check:
    console.log(areAnagrams("listen", "silent"));
    console.log(areAnagrams("abc", "cba"));
    console.log(areAnagrams("abc", "cbd"));
    // HINT: consider exercise33 for code reuse ideas
}
exerciseExtra1();
