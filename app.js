console.log("hi");

// I need a global variable to store the value of the cookies
let cookieCounter = 0;
let cps = 0;

let shopItemContainer = document.querySelector(".shopItemContainer");

const cookieTotal = document.querySelector("#cookieTotal");
const cookiesPerSecond = document.querySelector("#cookiesPerSecond");
const cookieBtn = document.querySelector("#cookieBtn");

//DOM manipulation:
//elements in the DOM for:
// - cookie counter
// - cookies per second (cps)
// - image to click on
//select these elements from the DOM or create with js

//A way to store the shop items (upgrades) that we get from the API
let shopItems = []; //fill with api data
console.log(shopItems);

//fetch the items from the API --> Check Fetch demo code (async, await)
async function getShopItems() {
  //fetch the shop items from the API
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //turn the data into json --> .json()
  const shopData = await response.json();
  console.log(shopData);

  //push the items in the shop items array
  //   shopItems.push(shopData);
  shopItems = shopData;

  renderShop();
}

getShopItems();

//Buttons

//an event listener for clicking our cookie
//select the cookie img or button
//write an event listener
cookieBtn.addEventListener("click", function () {
  //when I click the button, the value of cookieCounter goes up by one
  let cookieIncrement = cookieCounter++;
  // show updated cookie total
  cookieTotal.innerText = `${cookieIncrement} total cookies`;
  //increment operator(one idea) --> google
});

//reset button
reset.addEventListener("click", function () {
  cookieCounter = 0;
  cps = 0;
  cookieTotal.innerText = `${cookieCounter} total cookies`;
  cookiesPerSecond.innerText = `${cps} CPS (Cookies per second)`;
});

//local storage
function saveLocalStorage() {
  //a method to turn data into strings
  stringifiedCPS = JSON.stringify(cps);
  //a method to set items using key and value in local storage
  localStorage.setItem("cps", stringifiedCPS);
}

saveLocalStorage();

function updateDisplay() {
  //update the DOM element containing the value of cookieCounter (could call inside load the game)
  //update the content value of the cookies from local storage (current total)
  const retrievedCPS = localStorage.getItem("cps");

  const parsedCPS = JSON.parse(retrievedCPS);

  console.log(parsedCPS);
}

updateDisplay();

//have all the game information in one function
//check if any values are stored in local storage (cookie counter, cps) --> means user can continue the game from where they left off.
//load the game --> load() calls the game function.
//fetch the shop items
//render the shop items --> display the shops items on the page

// setInterval();
//that's the cookie clicker game!

//extra tools, if you want to use them to seperate different tasks into functions

// function saveLocalStorage() {
//a method to turn data into strings
//a method to set items using key and value in local storage
// }
function renderShop() {
  //create DOM elements to display shop items
  //you can use a for method or an array method
  shopItems.forEach((item) => {
    //creating a new img elements
    let makeName = document.createElement("div");
    let newButton = document.createElement("button");

    //set attributes
    newButton.textContent = "Buy";
    newButton.id = `${item.id}`;
    makeName.className = "ShopItemBox";
    makeName.textContent = `${item.name} cost: ${item.cost} increase: ${item.increase}`;

    //appending name
    shopItemContainer.appendChild(makeName);
    shopItemContainer.appendChild(newButton);
    //loop and create elements
  });
}

//making the shop items clickable
const item1 = document.getElementById("1");
console.log(item1);
const item2 = document.getElementById("2");
const item3 = document.getElementById("3");
const item4 = document.getElementById("4");
const item5 = document.getElementById("5");
const item6 = document.getElementById("6");
const item7 = document.getElementById("7");
const item8 = document.getElementById("8");
const item9 = document.getElementById("9");
const item10 = document.getElementById("10");

//buy item 1
item1.addEventListener("click", function () {
  let cpsCounter = cps++;
  cookiesPerSecond.innerText = `${cpsCounter} cookies per second`;
});
//concider adding cookie banner

//we need a timer to increase the cookies we get every second
setInterval(function () {
  let cpsCounter = cps + 1;
  cookiesPerSecond.innerText = `${cpsCounter} cookies per second`;
  console.log("this repeats");
  //increase the value of cookieCounter by one every second
  //I want update the value displayed on the page (or you could have this in a separate function that you call inside the interval, for example, updateDisplay())
  //I want to update the value in local storage (or you could have this in a separate function that you call inside the interv, for example, saveLocalStorage())
}, 1000);

setInterval();
