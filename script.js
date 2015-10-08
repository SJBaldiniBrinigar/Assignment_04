// Step 1: Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.

//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = function();
//ANIMAL.Dog = function();



// STEP 2. Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.


//var cat = {};    //literal syntax
//function dog() {}    //constructor syntax



//STEP 3:	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.

//var fluffy = new cat() {};
//var fido = new dog () {};



//STEP 4:  Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 

/*
var Animal = {
    type: "cat",
    displayInfo: "The Animal has been created.",
    }
window.console.log(Animal.displayInfo);
*/



// STEP 5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

/*
function Animal() {
    window.console.log("The new Animal has been created.");
    }
var cat = new Animal();
*/



//STEP 6.	Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 

/*
function Animal(cat) {
    this._type = "cat";
    this.displayAnimalInfo = function (breed, color, height, length) {
        return "The animal is a " + color + " " + breed + " " + this._type + " " + height + " tall and " + length + " long.";
    }
}
var myAnimal = new Animal("Cat");
window.console.log(myAnimal.displayAnimalInfo("siamese", "blue point", "10 inches", "24 inches"));
*/

// OR
/*
function Animal(type, breed, color, height, length) {
    'use strict';
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    this.displayAnimalInfo = function () {
        return "This animal is a " + color + " " + breed + " " + type + " " + height  + " tall and " + length + " long.";
    }
}
var myAnimal = new Animal("cat", "siamese", "blue point", "10 inches", "24 inches");
window.console.log(myAnimal.displayAnimalInfo());
*/



//STEP 7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
/*
var Animal = function (type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property);
}
*/



//STEP 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*
function Animal(type, breed, color, height, length) {
    'use strict';
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    this.displayAnimalInfo = function () {
        return "This animal is a " + color + " " + breed + " " + type + " " + height  + " tall and " + length + " long.";
    }
}
var myAnimal = new Animal("cat", "siamese", "blue point", "10 inches", "24 inches");
Animal.prototype.speak = function () {
    if (this.type === "dog") {
        return "The " + this.color + " dog is barking.";
    } else if (this.type === "cat") {
        return "The " + this.color + " cat is meowing.";
    } else {
        return "There is no cat or dog making noise.";
    }
};
window.console.log(myAnimal.speak());
*/


// STEP 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

/*
function Animal(type, breed, color, height, length) {
    'use strict';
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    var checkType = function () {
        if (type === "dog") {
            return "dog";
        } else {
            return "cat";
        }
    }
this.getType = function () {   //from slide 18 of lecture; doesn't seem to work as shown in the slide
    'use strict';              // public method to return value of checkType
    return checkType()
}
}
Animal.prototype.speak = function () {
      // return this.getType();        
        //for Animal.type = getType {
    'use strict';
    return "The " + this.getType() + " has made a noise.";
}
var myAnimal = new Animal("cat", "Siamese", "blue point", "10 inches", "24 inches");
window.console.log(myAnimal.speak());
*/


//STEP 10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.


/*
this.findWords = function (par, word) {
    
    this.par = par;
    this.word = word;
    var count = 0;
    words = par.split(" ")

    for (var i=0; i<words.length; i++) {
    if (par.match(word) == words[i]) {
        count += 1
    }	
}
    return count
}

var par = "A paragraph (from the Ancient Greek παράγραφος paragraphos, to write beside or written beside is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.--From Wikipedia and the Google Search"

window.console.log(findWords(par,'the'));   
*/
    
    
        
/*Does My Vehicle Need An Oil Change? (10 points)
In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:
*/


//11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).

//var Vehicle = function (make, model, totalMiles, milesAtLastOilChange,) {}



//12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.

/*
var Vehicle = function (make, model, totalMiles, lastOilChange) {
    'use strict';
    this.make = make;
    this.model = model;
    this.totalMiles = totalMiles;
    this.drivenMiles = 0;
    this.type = "";
    this.lastOilChange = lastOilChange;
};
*/




//13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).

/*
Vehicle.prototype.drive = function (miles) {
    'use strict';
    this.drivenMiles += miles;
    return this;
};
*/




//14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).

/*
Vehicle.prototype.checkOil = function () {
    if (this.totalMiles - this.lastOilChange >= 3000) {
        return "It's time to change your oil.";
    } else {
        return this;
    }
};
*/



//15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 

//function Car(doors) {};



//16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.

//function Car(doors) {
//    this.doorCount = doors;
//};


//17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

/*
function Car(doors) {
    'use strict';
    this.doorCount = doors;
    if (this.doorCount > 2) {
        this.type = "Sedan";
    } else {
        this.type = "Coupe";
    }
};
*/


//18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 

/*
var Vehicle = function (make, model, totalMiles, lastOilChange) {
    'use strict';
    this.make = make;
    this.model = model;
    this.totalMiles = totalMiles;
    this.drivenMiles = 0;
    this.type = "";
    this.lastOilChange = lastOilChange;
};
Car.prototype = new Vehicle();
var myCar = new Car("Toyota", "Camry", 55653, 51698);
*/


//19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.

/*
var Vehicle = function (make, model, totalMiles, lastOilChange) {
    'use strict';
    this.make = make;
    this.model = model;
    this.totalMiles = totalMiles;
    this.drivenMiles = 0;
    this.type = "";
    this.lastOilChange = lastOilChange;
};
Car.prototype = new Vehicle();
var myCar = new Car("Toyota", "Camry", 55653, 51698);
//myCar.doors(2);
*/

//20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.


//window.console.log(myCar.drive(3995).checkOil());


//All together:
/*
var Vehicle = function (make, model, totalMiles, lastOilChange) {
    'use strict';
    this.make = make;
    this.model = model;
    this.totalMiles = totalMiles;
    this.drivenMiles = 0;
    this.type = "";
    this.lastOilChange = lastOilChange;
};
Vehicle.prototype.drive = function (miles) {
    'use strict';
    this.drivenMiles += miles;
    return this;
};
Vehicle.prototype.checkOil = function () {
    'use strict';
    if (this.totalMiles - this.lastOilChange <= 3000) {
        return "It's time to change your oil.";
    } else {
        return this;
    }
};
function Car(doors) {
    'use strict';
    this.doorCount = doors;
    if (this.doorCount > 2) {
        this.type = "Sedan";
    } else {
        this.type = "Coupe";
    }
}
Car.prototype = new Vehicle();
var myCar = new Car("Toyota", "Camry", 55653, 51698);
window.console.log(myCar.drive(2500).checkOil());
*/



/*The Recipe Card (10 points)	
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

/*
function Recipe(title) {
    'use strict';
    this.title = title;
    this.servings = 0;
    this.ingredients = [];
    
}
Recipe.prototype.dispRecipe = function () {
    'use strict';
    window.console.log(this.title + "\nServes:" + this.servings);
    for (var i = 0; i < this.ingredients.length; i++) {
        window.console.log("- " + this.ingredients[i]);
    }
};
Recipe.prototype.addIngredient = function (item) {
    'use strict';
    this.ingredients.push(item);
};
var guacam = new Recipe("Guacamole");
guacam.servings = 4;
guacam.addIngredient("3 Avocados");
guacam.addIngredient("1 Lime");
guacam.addIngredient("1 Teaspoon Salt");
guacam.addIngredient("1/2 Cup Onion");
guacam.addIngredient("3 Tablespoons Cilantro");
guacam.addIngredient("2 Dices Tomatoes");
guacam.addIngredient("1 Teaspoon Garlic");
guacam.addIngredient("1 Pinch Ground Pepper");
guacam.dispRecipe();
*/



/*
The Reading List (10 points)
Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
*/


/*
function Book(title, author, alreadyRead) {
    'use strict';
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
}
Book.prototype.toRead = function () {
    'use strict';
    if (this.alreadyRead === true) {
        return "You already read " + '"' + this.title + " by " + this.author + '."';
    } else {
        return "You still need to read " + '"' + this.title + " by " + this.author + '."';
    }
};
var bookList = [], i;
bookList.push(new Book("Around the World with Disney", "Kevin Markey", true));
bookList.push(new Book("Conni", "Julia Boehme", false));
bookList.push(new Book("I Could Pee on This and other poems by cats", "Francesco Marciuliano", true));
bookList.push(new Book("Dramatic Light", "Patrick Howe", false));
bookList.push(new Book("Look-Alikes", "Joan Steiner", true));
    
for (i = 0; i < bookList.length; i++) {
    window.console.log(bookList[i].toRead());
}
*/


/*
Fill in the Blanks (10 points)
Fill in the blanks to make this program work.
*/

/*
function Auto() {
    'use strict';
    var person = {       
        this.name: "Sandy";
        this.income: 50000;
        };

    var car = {
        price: 75000;
        drive: function () {
        window.console.log("vroom, vroom!");
    }
    }
}
    // print vroom vroom
    car.drive();

    // print 'I'm rich'
  //  if (car.price > 100000) {
  //      person.buy(car);
//    }
//}());
*/











