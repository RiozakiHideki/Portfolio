import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  runTransaction,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://portfolio-coins-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const coinsInDB = ref(database, "coins");
const coin_button = document.getElementById("add_coins");
const coin_value_from_DB = document.getElementById("total_coins");

onValue(coinsInDB, (snapshot) => {
  const coinsValue = snapshot.val();
  coin_value_from_DB.textContent = coinsValue;
});

coin_button.addEventListener("click", function () {
  runTransaction(coinsInDB, (currentValue) => {
    // Увеличиваем значение на 1
    return (currentValue || 0) + 1;
  });
});
