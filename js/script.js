var coin_button = document.getElementById("add_coins");

coin_button.addEventListener("click", function () {
  fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const coins = data.coins + 1;
      console.log(coins);

      const totalCoinsElement = document.getElementById("total_coins");
      totalCoinsElement.textContent = coins;

      // Отправка нового значения coins на сервер
      fetch("../update_coins.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coins: coins }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Coins updated on the server:", data);
        })
        .catch((error) => {
          console.error("Error updating coins on the server:", error);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
