// a varable is a placeholder that keeps informa

//varable is a container for value  

var myName = "ernest";

var myLastName = "idiaghe";

var myFavNum = 234;

var myArrary = [1, 2, 3, 4, 5,]

var myObject = {
    name: "idighe",
    age: 32
};

console.log(typeof myName);
console.log(myLastName);
console.log(myFavNum);
console.log(myArrary);
console.log(myObject); 

var myName = "ernest"; 

myName = "joan"

function sayHi() {
    console.log("Hi" + " " + myName);
}

sayHi()

// with var you can reasign variables 

var count = 1; 

function increase() {
    count += 1;

    console.log(count)
}

increase()
increase()
increase()

// varables are case sensentive 
// variable can have different kind of scope

// in js you cant name variable true or false it will through errors ... 
// varable is very descriptive

// [var-var, var true, var false]... 

// variabls re function scope




var myName = "ernest"; 

function sayName() {
    var myName = "idiaghe";

    console.log(myName);

}

console.log(myName);
sayName();

// let and const 

function sayHi() {
    var shouldSayHi = true;

    if(shouldSayHi === true) {
        var myName = "ernest";
        console.log("Hi" + " " + myName);
    };
}

sayHi()


function sayHi() {
    let shouldSayHi = false;
    let myName;

    if (shouldSayHi === true) {
        myName = "Ernest";
        console.log("Hi" + " " + myName)
    }
    else {
        myName = "idiaghe";
        console.log("Hi" + " " + myName)
    };
};

sayHi();

// const can not be used but that dnt me its not tranferable and can be muteded 
const MYNAME = "ernest" 

console.log(MYNAME);


const myArrary = [1, 2, 3];

console.log(myArrary); 

myArrary.push(4);

console.log(myArrary);   



const  myObject = { name: "ernest"};

console.log(myObject);

myObject.name = "idiaghe";

console.log(myObject);


function sayHi() {
    const myName = "joan"; 

    if (true) {
        const myName = "ernest"
    }

    console.log(myName)
}

sayHi()

// prompt 

let age = prompt ('How old are you?', 18);

alert(`Your are ${age} years old!`)





// in JavaScript, a non-empty string is always true

let newName = {
    name: 'ernest j',
    sense: 'he nor get',
    age: 'small pikin'
};

console.log(newName);






