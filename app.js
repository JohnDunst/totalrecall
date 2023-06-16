let firstVariable = "hello world"
firstVariable = 2;
let secondVariable = firstVariable
secondVariable = "Hello Dodge"
console.log(firstVariable);
//1st var = 2

let yourName = "john"
let Name = "hello, my name is "  +yourName
console.log(Name);

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true && false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

let woofWoof = function (animal){
    if(animal === "dog"){
        return("Woof")
    }
    else{return("Hey! You're not a cow")
    }
}
console.log(woofWoof("cow"));


let myAge = function (age){
    if(age >=16){
        console.log("here are the keys");
    }
    else{
            console.log("sorry you are not old enough");
    }
    
}
myAge=(99);



for(let i = 0; i<10; i++){
    console.log(i);
}

for(let i = 10; i<=400; i++){
    console.log(i);
}


for(let i = 12; i<=4000; i=i+3){
    console.log(i);
}




for(let i=1; i<=100; i++){
    if(i % 2 === 0)
        console.log(i,"is an even number");
    else{
        console.log(i);
    }
}

for(let number = 1; number <=100; number++){
    if(number % 5 ===0)
        console.log(number,"I found a" +number+"High five!")
    else if(number%3 ===0)
        console.log(number,"I found a" +number+"Three is a Crowd!")
    }

let bank_account = function(total){
    for(let i=1; i <= 10; i++){
        total +=i
    }
    console.log(total);
}

bank_account(0);

let bigBank_account = function(total){
    for(let i=1; i<=100; i++){
        total += i*2
    }
    console.log(total);
}
bigBank_account(0);

// array made of elements/ NO/ race times


let quotes = ["Yinz" , "Dawhn" , "Yonder"]

const randomThings= [1, 10, "hello", true]
randomThings[0]

randomThings[2] = "world"
    console.log(randomThings);


const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4] = "Octocat"

ourClass.push("Cloud City");


const myArray = [5, 10, 500, 20]

myArray.push("Aegon")
myArray.push("Drogon")
myArray.reverse()
myArray.pop()
myArray.unshift("Bob Marley")

console.log(myArray);


let x = 69

if ( x < 100)
console.log("little number");
else{
    console.log("big number");
}


{let x = undefined

if ( x < 5)
console.log("little number");
else if(x>10){
    console.log("big number");
}else{
    console.log("monkey");
}



const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!")
kristynsCloset.splice(6, "raybans")
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset);


console.log(thomsCloset[1][1])

console.log(thomsCloset[2][2])


console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] +"!")	
thomsCloset[1][2] = "footie pajamas"
console.log(thomsCloset[1][2])
}




let printGreeting = function(name){
	console.log("Hello there, " + name +"!")
}
    printGreeting=("slimer");


let printCool = function(name){
    console.log(name + "is cool")
}

        printCool("Jazz");



let calculateCube = function(number){
    return number * number * number
}
console.log(calculateCube(5));





let isVowel = function(vowel){
	if(vowel.length <= 1 && vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u")
		console.log(true)
	else{
		console.log(false)
    }
}
console.log(isVowel("u"));


let getTwoLengths = function(string1, string2){
    return [string1.length, string2.length];
    
    
    }
    
    console.log(getTwoLengths("Amanda", "Bines"))



let getMultipleLengths = function(array){
	return [array.length]

}

console.log(getMultipleLengths(["hello", "good morning"]))

//g.
let maxOfThree = function (num1,num2,num3){
	if(num1 > num2 && num1 > num3)
		return num1
	else if (num2 > num1 && num2 > num3)
		return num2
	else if (num3 > num1 && num3 > num2)
		return num3
	else if (num1 === num2)
		return num1 || num2
	else if (num1 === num3)
		return num1 || num3
	else if (num1 === num2 === num3)
		return num1 || num2 || num3


}

console.log(maxOfThree(6, 9, 1))




//let printLongestWord = function([str]){
	//let strSplit = str.split(' ');
	//let longestWord = ;

	//for(let i = 0; i < strSplit.length; i++){
					}
		}
	//	return longestWord;
	//}//






console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))


let user = {
	name: "Jorge",
	email: "JorgePosada@gmail.com",
	age: 44,
	purchased: []
}
user.email = "91jed@gmail.com"

user.age++

user.location = "Pittsburgh"






user.purchased.push("carbs")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")


console.log(user.purchased[2])


user.friend = {
	name: "tater",
	age: 27,
	location: "Austin",
	purchased: []
}

console.log(user.friend.name)

console.log(user.friend.location)

user.friend.age = 55;

user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")

console.log(user.friend.purchased[1])


for(i = 0; i < user.purchased.length; i++)
	console.log(user.purchased[i])



for(i = 0; i < user.friend.purchased.length; i++)
	console.log(user.friend.purchased[i])



let updateUser = function(){
	user.age++
	 user.name.toUpperCase()

}

let oldAndLoud = function(person){
	user.age++
	 user.name.toUpperCase()

}

