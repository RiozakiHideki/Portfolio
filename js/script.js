///////////////// Database ////////////////////////////////////
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

///////////////// Database ////////////////////////////////////

///////////////// animations ////////////////////////////////////

var doorEl = document.getElementById("door");
var hire_btn = document.getElementById("hire_btn");
var social_btn = document.getElementById("social_btn");
var hire_content = document.getElementById("hire_content");
var credits_btn = document.getElementById("credits_btn");
var credits_content = document.getElementById("credits_content");
var discard = document.getElementById("discard");
var cancel = document.getElementById("cancel");

hire_btn.addEventListener("click", function () {
  doorEl.style.transform = "perspective(1920px) rotateY(-40deg) scale(0.6)";
  doorEl.style.marginRight = "-385px";
  doorEl.style.marginTop = "-188px";
  hire_content.style.display = "block";
});

social_btn.addEventListener("click", function () {
  doorEl.style.transform = "perspective(1920px) rotateY(-40deg) scale(0.6)";
  doorEl.style.marginRight = "-385px";
  doorEl.style.marginTop = "-188px";
  hire_content.style.display = "block";
});

credits_btn.addEventListener("click", function () {
  doorEl.style.transform = "perspective(1920px) rotateY(-40deg) scale(0.6)";
  doorEl.style.marginRight = "-385px";
  doorEl.style.marginTop = "-188px";
  credits_content.style.display = "block";
});

discard.addEventListener("click", function () {
  doorEl.style.transform = "rotateY(0deg) scale(1.0)";
  doorEl.style.marginRight = "0px";
  doorEl.style.marginTop = "0px";
  hire_content.style.display = "none";
});

cancel.addEventListener("click", function () {
  doorEl.style.transform = "rotateY(0deg) scale(1.0)";
  doorEl.style.marginRight = "0px";
  doorEl.style.marginTop = "0px";
  credits_content.style.display = "none";
});

///////////////// animations ////////////////////////////////////

///////////////// Date ////////////////////////////////////

function getCurrentTime() {
  var date = new Date(); // Получаем текущую дату и время
  var serverTime = date.getHours() + ":" + date.getMinutes(); // Получаем время сервера

  var localDate = new Date(); // Получаем текущую дату и время
  var localTime = localDate.getHours() + ":" + localDate.getMinutes(); // Получаем локальное время пользователя

  document.getElementById("serverTime").innerHTML = serverTime; // Записываем время сервера в первый тег <p>
  document.getElementById("localTime").innerHTML = localTime; // Записываем локальное время пользователя во второй тег <p>
}

getCurrentTime();

///////////////// Date ////////////////////////////////////
