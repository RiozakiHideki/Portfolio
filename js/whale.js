var whaleImage = document.getElementById("whale_pic");
var whaleBox = document.getElementById("whale_box");

function updateHeight() {
  var whaleHeight = whaleImage.clientHeight;
  whaleBox.style.height = whaleHeight + "px";
}

// Изначально устанавливаем высоту при загрузке страницы
updateHeight();

// Обновляем высоту при изменении размеров окна
window.addEventListener("resize", updateHeight);
