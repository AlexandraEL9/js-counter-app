
//4a change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");
//1 initialize count as 0
let count = 0;
//2 listen for clicks on the increment button
function increment() {
    //3 increment the count variable when the button is clicked
    count = count + 1;
    //4b change the count-el in the html to reflect the new count
    countEl.innerText = count;
};

