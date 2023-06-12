<?php
// Путь к файлу JSON
$jsonFilePath = "data/data.json";

// Загрузка текущих данных из файла JSON
$currentData = json_decode(file_get_contents($jsonFilePath), true);

// Изменение значения coins на 1
$currentData['coins'] += 1;

// Сохранение обновленных данных в файл JSON
file_put_contents($jsonFilePath, json_encode($currentData));

// Отправка ответа в формате JSON
header('Content-Type: application/json');
echo json_encode(array('success' => true));
?>
