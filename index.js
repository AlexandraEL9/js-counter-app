//grab save-el paragraph and store as a variable
let saveEl = document.getElementById("save-el")
//4a change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");
//1 initialize count as 0
let count = 0;
//2 listen for clicks on the increment button
function increment() {
    //3 increment the count variable when the button is clicked
    count += 1;
    //4b change the count-el in the html to reflect the new count
    countEl.textContent = count;
};

function save(){
//create a variable that contains both the count and the dash seperator
  let countString = count + " - "  
//render variable in the saveEl using innerTextsaveEl.textContent += countString
  saveEl.textContent += countString
//reset counter to 0 when save pressed
  countEl.textContent = 0
  count = 0
}

/*
let username = "Alex"
let message = "You have three new notifications"
console.log(message + "," + username + "!");

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)

let name = "Alex"
let greeting = "Hi, my name is "
let myGreeting = greeting + name 
console.log(myGreeting)

console.log(4 + 5)//9
console.log("2" + "4")//24
console.log("5" + "1")//51
console.log(100 + "100")//100100
//string always wins

//render a welcome message   /
//   grab welcome-el paragraph and store as a variable
let welcomeEl = document.getElementById("welcome-el")
   //create name and greeting variable
let name = "Alexandra Lee"
let greeting = "Welcome Back!"
   //render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting =", " + name

//add an emoji to the end!
   //welcomeEll.innerText = welcomeEl.innerText + "emoji"
   welcomeEll.innerText += "emoji"
*/