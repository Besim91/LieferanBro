function render() {
  load();
  renderHeaderBar();
  renderShoppingCard();
  renderImg();
  renderFood("mainMenu");
}

function renderFood(selectedMenuCard) {
  if (selectedMenuCard == "mainMenu") {
    renderMainMenu(mainMenu, selectedMenuCard);
    changeColorOfMenuHeadbar("btn1");
  }
  if (selectedMenuCard == "drinks") {
    renderMainMenu(drinksArray, selectedMenuCard);
    changeColorOfMenuHeadbar("btn2");
  }
  if (selectedMenuCard == "dessert") {
    renderMainMenu(sweets, selectedMenuCard);
    changeColorOfMenuHeadbar("btn3");
  }
}

function changeColorOfMenuHeadbar(btn) {
  if (btn == "btn1") {
    document.getElementById(`btn1`).classList.add("btnMenuColor");
    document.getElementById(`btn2`).classList.remove("btnMenuColor");
    document.getElementById(`btn3`).classList.remove("btnMenuColor");
  }
  if (btn == "btn2") {
    document.getElementById(`btn2`).classList.add("btnMenuColor");
    document.getElementById(`btn1`).classList.remove("btnMenuColor");
    document.getElementById(`btn3`).classList.remove("btnMenuColor");
  }
  if (btn == "btn3") {
    document.getElementById(`btn3`).classList.add("btnMenuColor");
    document.getElementById(`btn2`).classList.remove("btnMenuColor");
    document.getElementById(`btn1`).classList.remove("btnMenuColor");
  }
}

function renderMainMenu(array, selectedMenuCard) {
  let food = document.getElementById(`foodCart`);
  food.innerHTML = ``;

  for (let i = 0; i < array.length; i++) {
    const menu = array[i];
    food.innerHTML += `
    ${renderSingleCard(menu, i, selectedMenuCard)}
    `;

    let ingredientsDiv = document.getElementById(`igredients${i}`);
    for (let j = 0; j < menu["ingredients"].length; j++) {
      let ingredients = menu["ingredients"][j];
      ingredientsDiv.innerHTML += `${ingredients}&nbsp;`;
    }
  }
}

function renderSingleCard(menu, i, selectedMenuCard) {
  return `<div id="mainMenu${i}" class="mainMenu">
  <a href="javascript: void(0)" onclick="addToBasket(${i},'${selectedMenuCard}')"><img class="plusImg" id="plus${i}" src="${menu.plusImg}" alt=""></a>
  <h3 id="titleResponsiv">${menu.name}</h3>
  <img class="imgFoodDiv" src="${menu["image"]}" alt="">

  <div class="foodInfo">
    <h2>${menu.name}</h2>
    <div id="igredients${i}"></div>
    <div>Extra:&nbsp;${menu.extra}</div>
  </div>

  <div id="price"><div id="af">Menge</div><div class="countDiv">
      <a onclick="countDownUp('down',${i},'${selectedMenuCard}')" href="javascript: void(0)"><img class="arrow a-right" src="${menu.arrow}" alt=""></a>
      <div id="count${i}">${menu.piece}</div>
      <a onclick="countDownUp('up',${i},'${selectedMenuCard}')" href="javascript: void(0)"><img class="arrow" src="${menu.arrow}" alt=""></a>
      </div>Preis:&nbsp;${menu.price}&nbsp;€<br><div id="amount">${menu["amount"]}</div>
  </div>

</div>`;
}

function countDownUp(upOrDown, i, selectedMenuCard) {
  let status;
  let arrayX;
  let newPrice;

  if (selectedMenuCard == "mainMenu") {
    status = mainMenu[i].piece;
    arrayX = mainMenu;
  }
  if (selectedMenuCard == "drinks") {
    status = drinksArray[i].piece;
    arrayX = drinksArray;
  }
  if (selectedMenuCard == "dessert") {
    status = sweets[i].piece;
    arrayX = sweets;
  }

  count(arrayX, status, newPrice, upOrDown, i);

  save();
  load();
  renderFood(selectedMenuCard);
}

function count(arrayX, status, newPrice, upOrDown, i) {
  if (upOrDown == "down") {
    if (status > 1) {
      status--;
      document.getElementById(`count${i}`).innerHTML = `${status}`;
      newPrice = (status * (arrayX[i]["price"] / (status + 1))).toFixed(2);
    } else {
      alert(`Mindestmenge erreicht!`);
    }
  }
  if (upOrDown == "up") {
    status++;
    document.getElementById(`count${i}`).innerHTML = `${status}`;
    newPrice = (status * (arrayX[i]["price"] / (status - 1))).toFixed(2);
  }
  arrayX[i].piece.splice(0, 1);
  arrayX[i].piece.push(status);
  arrayX[i].price.splice(0, 1);
  arrayX[i].price.push(newPrice);
}

function renderHeaderBar() {
  let header = document.getElementById(`headbar`);
  header.innerHTML = `
    <div class="logoSection p-Div2">
        <img class="logo" src="./img/icon/logo.png" alt="" />
        <h2>LieferanBro</h2>
    </div>
    <div class="adress">Liliensraße 110, Stuttgart</div>
    <div class="flagBar p-Div2"><img id="shoppingBasket" class="shoppingBasket" onclick="openBasket()" src="./img/icon/shopping-cart.png" alt=""><img class="flag" src="./img/icon/deutschland.png" alt=""></div>`;
}

function renderShoppingCard() {
  loadBasket();
  let shoppingCart = document.getElementById(`shoppingCart`);

  shoppingCart.innerHTML = `
  <h2 class="t-align">Warenkorb</h2>
  <div id="basketOverview" class="basketOverview">
    <table class="tableBasket" id="tableBasket">
      <tr class="tableRowBasket">
      <td>⬇</td><td>Men.</td><td>⬆</td><td>Gericht</td><td>€</td><td>E</td>
      </tr>
    </table>
  </div>
  <h2 class="t-align">Summe</h2>
  <div id="sum">${calculateSum().toFixed(2)}&nbsp;€</div>
  <button id="order_btn" class="order_btn btn_color" onclick="order()">Bestellen</button>
  `;

  let contentShoppingcart = document.getElementById("tableBasket");
  for (let i = 0; i < basketAmount.length; i++) {
    contentShoppingcart.innerHTML += `${renderBasket(i)}`;
  }
}

function renderBasket(i) {
  return `<tr>
  <td class="td_basket"><a onclick="calculateBasketInventar(${i}, 'down')" href="javascript: void(0)"><img class="arrow a-right" src="${mainMenu[0].arrow}" alt=""></a></td>
  <td>${basketAmount[i]}</td>
  <td class="td_basket"><a onclick="calculateBasketInventar(${i}, 'up')" href="javascript: void(0)"><img class="arrow" src="${mainMenu[0].arrow}" alt=""></a></td>
  <td>${basketFood[i]}</td>
  <td>${basketPrice[i]}</td>
  <td class="td_basket"><a onclick="deleteBasketItem(${i})" href="javascript: void(0)">X</a></td>
</tr>`;
}

function calculateBasketInventar(i, up_or_down) {
  let newBasketAmountValue = basketAmount[i];
  let basketPriceValue = basketPrice[i];

  if (up_or_down == "down") {
    if (basketAmount[i] > 1) {
      newBasketAmountValue--;
      let newBasketPrice = (
        (basketPriceValue / basketAmount[i]) *
        newBasketAmountValue
      ).toFixed(2);

      basketAmount.splice(i, 1, newBasketAmountValue);
      basketPrice.splice(i, 1, newBasketPrice);
    } else {
      alert(`Drücke 'X' zum löschen!`);
    }
  }
  if (up_or_down == "up") {
    newBasketAmountValue++;
    let newBasketPrice = (
      (basketPriceValue / basketAmount[i]) *
      newBasketAmountValue
    ).toFixed(2);

    basketAmount.splice(i, 1, newBasketAmountValue);
    basketPrice.splice(i, 1, newBasketPrice);
  }
  saveBasket();
  loadBasket();
  renderShoppingCard();
}

function order() {
  if (basketFood.length >= 1) {
    document.getElementById("order_btn").classList.remove("btn_color");

    setTimeout(function () {
      document.getElementById("order_btn").classList.add("btn_color");
    }, 100);

    basketAmount.length = 0;
    basketFood.length = 0;
    basketPrice.length = 0;
    saveBasket();
    loadBasket();
    renderShoppingCard();
    alert(`Bestellung wird bearbeitet!`);
  } else {
    alert(`Warenkorb ist leer! Bitte eine Auswahl treffen.`);
  }
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < basketPrice.length; i++) {
    sum += Number(basketPrice[i]);
  }
  return sum;
}

function deleteBasketItem(i) {
  basketAmount.splice(i, 1);
  basketFood.splice(i, 1);
  basketPrice.splice(i, 1);

  saveBasket();
  loadBasket();
  renderShoppingCard();
}

function renderImg() {
  let menu = document.getElementById(`menu`);
  menu.innerHTML = `
  <div class="imgDardania">
    <img class="eagle" src="./img/icon/albania.png" alt="">
  </div>
  <div class="titleDardania">
  <h2>Restaurant Dardania</h2>
  <div>${createStars()}</div>
</div>
<div class="menuList">
<button onclick="renderFood('mainMenu')" class="btnMenu" id="btn1">Hauptspeise</button>
<button onclick="renderFood('drinks')" class="btnMenu" id="btn2">Getränke</button>
<button onclick="renderFood('dessert')" class="btnMenu" id="btn3">Dessert</button>
</div>
  `;
}

function openBasket() {
  document.getElementById(`shoppingCart`).classList.toggle(`hideCart`);
}

function createStars() {
  return `
      <img class="star" src="./img/icon/star (1).png" alt="">
      <img class="star" src="./img/icon/star (1).png" alt="">
      <img class="star" src="./img/icon/star (1).png" alt="">
      <img class="star" src="./img/icon/star (1).png" alt="">
      <img class="star" src="./img/icon/star (1).png" alt="">
      `;
}

function addToBasket(i, selectedMenuCard) {
  let arrayY;

  if (selectedMenuCard == "mainMenu") {
    arrayY = mainMenu;
  }
  if (selectedMenuCard == "drinks") {
    arrayY = drinksArray;
  }
  if (selectedMenuCard == "dessert") {
    arrayY = sweets;
  }

  fixArrayAndAdd(arrayY, i);
  saveBasket();
  renderFood(selectedMenuCard);
  renderShoppingCard();
}

function fixArrayAndAdd(arrayY, i) {
  if (basketFood.includes(arrayY[i]["name"])) {
    let j = basketFood.indexOf(arrayY[i]["name"]);

    let pieceAdjust = Number(arrayY[i]["piece"]) + Number(basketAmount[j]);
    let priceAdjust = (
      (basketPrice[j] / basketAmount[j]) *
      pieceAdjust
    ).toFixed(2);

    basketAmount.splice(j, 1);
    basketPrice.splice(j, 1);
    basketFood.splice(j, 1);
    basketAmount.push(pieceAdjust);
    basketPrice.push(priceAdjust);
    basketFood.push(arrayY[i]["name"]);
  } else {
    basketAmount.push(arrayY[i]["piece"]);
    basketFood.push(arrayY[i]["name"]);
    basketPrice.push(arrayY[i]["price"]);
  }
}

function save() {
  let jsonSave = JSON.stringify(mainMenu);
  localStorage.setItem(`mainMenu`, jsonSave);
}

function saveBasket() {
  let arrayPieceSave = JSON.stringify(basketAmount);
  localStorage.setItem("basketAmount", arrayPieceSave);

  let arrayNameSave = JSON.stringify(basketFood);
  localStorage.setItem("basketFood", arrayNameSave);

  let arrayPriceSave = JSON.stringify(basketPrice);
  localStorage.setItem("basketPrice", arrayPriceSave);
}

function load() {
  let jsonSave = localStorage.getItem(`mainMenu`);

  if (jsonSave) {
    mainMenu = JSON.parse(jsonSave);
  }
}

function loadBasket() {
  let arrayPieceSave = localStorage.getItem("basketAmount");
  let arrayNameSave = localStorage.getItem("basketFood");
  let arrayPriceSave = localStorage.getItem("basketPrice");

  if (arrayPieceSave && arrayNameSave && arrayPriceSave) {
    basketAmount = JSON.parse(arrayPieceSave);
    basketFood = JSON.parse(arrayNameSave);
    basketPrice = JSON.parse(arrayPriceSave);
  }
}
