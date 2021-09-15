 let price;
let a = prompt("Введите страну");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    price = 200;
    price = hot ? price - 0.12 * price : price;
    break;
  case "Греция":
    price = 300;
    price = hot ? price - 0.1 * price : price;
    break;
  case "Дубай":
    price = 750;
    price = hot ? price - 0.22 * price : price;
    break;
  case "Египет":
    price = 180;
    price = hot ? price - 0.27 * price : price;
    break;

  default:
    price = "У нас нету такого тура";
}
alert(price);