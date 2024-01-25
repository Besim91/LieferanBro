let mainMenu = [
  {
    image: "./img/food/fli.png",
    name: "Fli",
    price: [3.79],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Sahne,", "Naturjoghurt,", "Schmand,", "..."],
    extra: "Johannisbeer-Marmelade",
    amount: "Ein Stück 250 g",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/petlla.png",
    name: "Petlla",
    price: [2.99],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Naturjoghurt,", "Mineralwasser,", "Eier,", "..."],
    extra: "Johannisbeer-Marmelade",
    amount: "Portion 300 g",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/speca.png",
    name: "Rahmpaprika",
    price: [3.55],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Paprika,", "Sahne,", "Öl,", "..."],
    extra: "Frühlingszwiebeln",
    amount: "3x Paprika / Portion ",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/burek.png",
    name: "Fleischbörek",
    price: [4.99],
    plusImg: ["./img/icon/plus.png"],
    ingredients: [
      "Rinderhackfleisch,",
      "Zwiebeln,",
      "Paprikapulver,",
      "Vegeta,",
      "...",
    ],
    extra: "Scharfe Peperoni",
    amount: "Ein Stück 200 g",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
];
let drinksArray = [
  {
    image: "./img/food/skenderbeg.png",
    name: "Skenderbeu",
    price: [4.99],
    plusImg: ["./img/icon/plus.png"],
    ingredients: [
      "Dieser hervorragende Brandy (Konjak) hat bereits in vielen renommierten und großen, internationalen Wettbewerben zahlreiche Medaillen gewonnen. ",
    ],
    extra: "Eis",
    amount: "300 ml Glas",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/goldeneagle.png",
    name: "Golden Eagle",
    price: [1.5],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Erfrischungsgetränk und Wachmacher"],
    extra: "Eis",
    amount: "230 ml Dose",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/peja.png",
    name: "Peja Bier",
    price: [2.5],
    plusImg: ["./img/icon/plus.png"],
    ingredients: [
      "Peja-Pilsner mit 4,2vol.% Alkohol. Es ist goldgelb und der Schaum ist gering ausgearbeitet.",
    ],
    extra: "Eis",
    amount: "330 ml Glas",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/wasser.png",
    name: "Wasser",
    price: [1],
    plusImg: ["./img/icon/plus.png"],
    ingredients: [
      "Naturprodukt und wird zu 70 Prozent aus Grund- und Quellwasser gewonnen.",
    ],
    extra: "Eis",
    amount: "200 ml  Glas",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
];
let sweets = [
  {
    image: "./img/food/tulluma.png",
    name: "Tulluma",
    price: [2],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["1 Glas Mehl", "3 Eier", "2 Esslöfel Essig", "..."],
    extra: "Kokosnuss oder Pistazien ",
    amount: "5 Stück",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/trileqe.png",
    name: "Trileqe",
    price: [2.5],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Vanille", "Milch", "Mehl", "..."],
    extra: "Eis",
    amount: "230 ml Dose",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/kajmacin.png",
    name: "Kajmacin",
    price: [1.5],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Eigelb", "Milch", "Zucker", "..."],
    extra: "Kokosnuss",
    amount: "Becher 150 ml",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
  {
    image: "./img/food/tatli.png",
    name: "Tatli",
    price: [1],
    plusImg: ["./img/icon/plus.png"],
    ingredients: ["Milch", "Eier", "Haselnuss", "..."],
    extra: "Eis",
    amount: "2 Stück",
    count: [],
    arrow: "./img/icon/pfeilRechts.png",
    piece: [1],
  },
];

let basketAmount = [];
let basketFood = [];
let basketPrice = [];
let basketDelete = ["x"];
