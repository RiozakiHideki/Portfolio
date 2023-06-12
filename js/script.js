var coin_button = document.getElementById("add_coins");
var savedCoinsValue = localStorage.getItem("coinsValue");

if (savedCoinsValue > 0) {
  var coins = document.getElementById("total_coins");
  coins.innerText = savedCoinsValue;
}

coin_button.addEventListener("click", function () {
  var coins = document.getElementById("total_coins");
  var coins_value = parseInt(coins.innerText, 10) + 1;
  coins.innerText = coins_value;

  localStorage.setItem("coinsValue", coins_value);
});
