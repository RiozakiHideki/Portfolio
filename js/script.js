var coin_button = document.getElementById("add_coins");

coin_button.addEventListener("click", function () {
  var coins = document.getElementById("total_coins");
  var coins_value = parseInt(coins.innerText, 10) + 1;
  coins.innerText = coins_value;
});
