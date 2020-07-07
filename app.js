// // constructor function which can be used to create "koneeko" objects
// var DigitalPal = function () {
//     this.hungry = false;
//     this.sleepy = false;
//     this.bored = true;
//     this.age = 0;

//     // method which feeds Koneeko when they are hungry and sets them to sleepy
//     this.feed = function () {
//         if (this.hungry === true) {
//             console.log("*nibbles*");
//             this.hungry = false;
//             this.sleepy = true;
//         }
//         else {
//             console.log("meow");
//         }
//     };

//     // method which puts the koneeko to sleep when they are sleepy, increases their age by one,
//     // and sets them to bored
//     this.sleep = function () {
//         if (this.sleepy === true) {
//             console.log("ZZzzZZZzzZZz~~");
//             this.sleepy = false;
//             this.bored = true;
//             this.increaseAge();
//         }
//         else {
//             console.log("*jumps in front of TV*");
//         }
//     };

//     // method which allows the user to play with koneeko when they are bored and sets them to hungry
//     this.play = function () {
//         if (this.bored === true) {
//             console.log("!!!");
//             this.bored = false;
//             this.hungry = true;
//         }
//         else {
//             console.log("*walks away*");
//         }
//     };

//     // method which is called in "this.sleep" to increase the age of koneeko by one
//     this.increaseAge = function () {
//         this.age++;
//         console.log("*meoww*" + "(i'm" + this.age + "years old in this dimension)");
//     };
// };

// // creates a new "digitalpal" object with the name "dog"
// var milo = new DigitalPal();

// // adds the property "outside" to the "dog" object and sets it to false
// milo.eating = false;

// // adds the method "bark" to the "dog" object which prints a message to the screen
// milo.meow = function () {
//     console.log("MEOWWW");
// };

// // adds the method "letoutside" to the "dog" object which lets "dog" outside when it's outside
// milo.fillBowl = function () {
//     if (this.eating === false) {
//         console.log("*pupils dilate*");
//         this.eating = true;
//         this.meow();
//     }
//     else {
//         console.log("Milo tricked you into feeding him again!");
//     }
// };

// // adds the method "letInside" to the "dog" object which lets "dog" inside when it's outside
// milo.removeBowl = function () {
//     if (this.eating === true) {
//         console.log("*eats food urgently*");
//         this.eating = false;
//     }
//     else {
//         console.log("MMMMEEEEEOOOOOOWWWWWWWWWW");
//     }
// };

// // creates a new "digitalpal" object with the name "cat"
// var marcel = new DigitalPal();

// // adds the property "houseQuality" to the "cat" object
// marcel.housePatience = 100;

// // adds the "meow" method to the "cat" object which prints a message to the screen
// marcel.meow = function () {
//     console.log("*purrs loudly*");
// };

// // adds the "destroyFurniture" method to the "cat" object which decreases the "cat.houseQuality" value by ten
// marcel.nonstopMeow = function () {
//     if (this.housePatience - 10 > 0) {
//         this.housePatience -= 10;
//         this.bored = false;
//         this.sleepy = true;
//         console.log("Meow! Meow! Meow! Meow! Meow! Meow! Meow! Meow!");
//     }
//     else {
//         console.log("MMMMMMMMMMMeeeeeeeeeeeeooooooooouuuuuuuwwwwwwwwwww");
//     }
// };

// // adds the "buynewfurniture" method to the "cat" object which increases the "cat.housequality" value by fifty
// marcel.actingCute = function () {
//     this.housePatience += 50;
//     console.log("*kills bug*");
// };

// // Try calling an animal's method below
// // Example: cat.destroyFurniture();
// marcel.actingCute();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// constructor function which can be used to create "digitalpal" objects
var DigitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    // method which feeds the digitalpal when they are hungry and sets them to sleepy
    this.feed = function () {
        if (this.hungry) {
            console.log("*aggressively eat*");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("*cats succesfully bamboozled you for food*");
        }
    };

    // method which puts the digitalPal to sleep when they are sleepy, increases
    // their age by one, and sets them to bored
    this.sleep = function () {
        if (this.sleepy) {
            console.log("ZZzzZZZzzZZz~~");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("*jump in front of TV*");
        }
    };

    // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
    this.play = function () {
        if (this.bored) {
            console.log("*begins sprinting from room to room*");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("*continues sleeping*");
        }
    };

    // method which is called in "this.sleep" to increase the age of the digitalpal by one
    this.increaseAge = function () {
        this.age++;
        console.log(this.DigitalPal + "is" + this.age + "years old");
    };
};

// Create a new animals object to contain our new Digital Pals
var animals = {};

// creates a new DigitalPal object with the name "dog"
animals.marcel = new DigitalPal();

// adds the property "outside" to the "dog" object and sets it to false
animals.marcel.hangWith = false;

// adds the method "bark" to the "dog" object which prints a message to the screen
animals.marcel.meowMarcel = function () {
    console.log("meow meow meow meow meow meow meow meow meow meow meow meow ");
};

// adds the method "letoutside" to the "dog" object which lets "dog" outside when it is outside
animals.marcel.wildin = function () {
    if (!this.hangWith) {
        console.log("*loud purring*");
        this.wildin = true;
        this.meowMarcel();
    }
    else {
        console.log("MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW");
    }
};

// adds the method "letInside" to the "dog" object which lets "dog" inside when it is outside
// animals.dog.letInside = function () {
//     if (this.outside) {
//         console.log("Aww... Do I have to?");
//         this.outside = false;
//     }
//     else {
//         console.log("We're already inside though...");
//     }
// };

// creates a new DigitalPal object with the name "cat"
animals.koneeko = new DigitalPal();

// adds the property "housequality" to the "cat" object
animals.koneeko.houseQuality = 100;

// adds the "meow" method to the "cat" object which prints a message to the screen
animals.koneeko.meow = function () {
    console.log("meow");
};

// adds the "destroyfurniture" method to the "cat" object which decreases the "animals.cat.housequality" value by ten
animals.koneeko.destroyFurniture = function () {
    if (this.houseQuality - 10 > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("*gets on counter*");
    }
    else {
        console.log("*gets in front of TV*");
    }
};

// adds the "buyNewFurniture" method to the "cat" object which increases the "animals.cat.houseQuality" value by fifty
// animals.cat.buyNewFurniture = function () {
//     this.houseQuality += 50;
//     console.log("Are you sure that's a good idea?");
// };

// Grabbing command line arguments for animal and method
var animal = process.argv[2];
var method = process.argv[3];

// try calling your chosen animal and method from the terminal example: 'node tamagotchi-this dog letInside'
animals[animal][method]();
