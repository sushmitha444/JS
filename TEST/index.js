//1.Create an object car with properties: brand, model, and year. Then, access each property and print it.
let car = {
    brand:"Tata",
    model:"Nano",
    year: 2008
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

//2.Start with an empty object person. Add properties firstName, lastName, and age to it. Then, delete the age property.
let person={};
person.firstName = "Sushmitha";
person.lastName = "Bhat";
person.age = 23;
delete person.age;
console.log(person);

//3.Create an object book with properties title and author. Write a function that checks if a property exists in the object.
let book={
    title:"Fool me twice",
    author:"Nona"
};
function hasProp(obj,prop){
    return prop in obj;
}
console.log(hasProp(book,"title"));
console.log(hasProp(book,"date"));

//4.Given an object student with name, age, and grade, write a loop to print each key-value pair.
let student = {
    name: "Sush",
    age: 23,
    grade: "A"
  };
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }

//5.Write a function countProperties(obj) that returns the number of properties in the object.
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
  
  let user = {
    name: "Sush",
    age: 23,
    isAdmin: true
  };
  
  console.log(countProperties(user));

  //6.Create an object calculator with two properties: num1 and num2. Add two methods: add() to return the sum and subtract() to return the difference.
  let calculator = {
    num1: 20,
    num2: 4,
    add() {
      return this.num1 + this.num2;
    },
    subtract() {
      return this.num1 - this.num2;
    }
  };
  
  console.log(calculator.add());       
  console.log(calculator.subtract());
  
  //7.Create an object `user` with properties `name` and `age`. Write a function that clones the object into a new one.

  let user1 = {
    name: "Sush",
    age: 23
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(user1);
  console.log(userClone);  

  //8.Create two objects: userInfo1 with properties name and age, and userInfo2 with properties age and city. Merge the two into a new object.

  let userInfo1 = {
    name: "sush",
    age: 23
  };
  
  let userInfo2 = {
    age: 23,
    city: "Karnataka"
  };
  
  let mergedUser = Object.assign({}, userInfo1, userInfo2);
  
  console.log(mergedUser); 

  //9.Write a function createUser that creates a user object with properties name, age, and a default role of "user" if not provided.
  
  function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("sush", 23);
  console.log(newUser);  
   
 //10.Create an object company with properties name and employees (an array of objects, each representing an employee with name and position).
 let company = {
    name: "Google",
    employees: [
      { name: "Ashika", position: "Developer" },
      { name: "Rukmini", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   
  console.log(company.employees[1].position);

  //11.Create an object fruitPrices with properties apple: 2, banana: 1, and cherry: 3. Write a function getKeys that returns an array of keys from the object, and another function getValues that returns an array of values.
  let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 4
  };
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function getValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getKeys(fruitPrices));  
  console.log(getValues(fruitPrices)); 
  
  //12.Given the object salaries below, write a function that sorts the keys by their corresponding values and returns the sorted array of keys.

  let salaries={
    Sush:"400",
    Shalu: "400",
    Ram:"500",
    Laxmi: "600"
  };
  function sortSalaries(obj){
    return Object.keys(obj).sort((a,b) => obj[a]-obj[b]);
  }
  console.log(sortSalaries(salaries));

  //13.Create an object user with properties name, age, and city. Destructure the object to extract the properties into separate variables.

  let user3={
    name:"Sushu",
    age:23,
    city:"Hyderabad"
  };
   console.log(user3.name);
   console.log(user3.age);
   console.log(user3.city);

   //14.Create an object person with a nested object address containing street, city, and zipCode. Destructure the nested object to extract the address properties into variables.

   let person1={
    name:"Sush",
    age:23 ,
    address : {
        state : "Telangana",
        city:"Hyderabad",
        zipCode:502032
    }
   };
   let { address: { street, city, zipCode } } = person1;

  console.log(street);  
  console.log(city);    
  console.log(zipCode); 

  //15.Create two objects user1 with name and age, and user2 with city and country. Merge them using the spread syntax.
  
  let user11 = { name: "SUSH", age: 23 };
  let user22 = { city: "Paris", country: "France" };
  
  let mergedUser1 = { ...user11, ...user22 };
  
  console.log(mergedUser1);  
  
  //16.Create an object settings with properties theme, fontSize, and language. Use Object.freeze() to prevent modifications, then try to change a property and log the object to verify it hasn’t changed.

  let settings = {
    theme: "dark",
    fontSize: "16px",
    language: "en"
  };
  
  Object.freeze(settings);
  
  settings.theme = "light"; 
  console.log(settings);     

  //17.Use Object.entries() to convert the following object scores into an array of key-value pairs.

  let scores = {
    math: 95,
    english: 95,
    science: 85
  };
  
  let scoreEntries = Object.entries(scores);
  console.log(scoreEntries); 

  //18.Create an object team with properties player1, player2, and player3. Write a function updateScore that increases each player's score by a given amount.

  let team = {
    player1: 5,
    player2: 10,
    player3: 7
  };
  
  function updateScore(obj, increment) {
    for (let key in obj) {
      obj[key] += increment;
    }
  }
  
  updateScore(team, 3);
  console.log(team); 

  //19. Create an object rectangle with properties width and height, and a method area that calculates and returns the area using this.

  let rectangle = {
    width: 10,
    height: 10,
    area() {
      return this.width * this.height;
    }
  };
  
  console.log(rectangle.area());  
  
  //20.Given an object products with product names as keys and prices as values, write a function findMaxPrice that returns the name of the product with the highest price.

  let products = {
    "laptop": 1000,
    "phone": 500,
    "tablet": 500
  };
  
  function findMaxPrice(obj) {
    let maxPrice = 0;
    let maxProduct = "";
  
    for (let key in obj) {
      if (obj[key] > maxPrice) {
        maxPrice = obj[key];
        maxProduct = key;
      }
    }
  
    return maxProduct;
  }
  
  console.log(findMaxPrice(products));  

  
  
  