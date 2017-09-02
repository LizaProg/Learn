// оператор continue прерывает текущую иттерацию
// (П: вывести все числа от 322 до 356 которые без остатака делятся на 3)

for (var i = 322; i < 356; i++){
    if (i % 3 != 0)
        continue;
    console.log(i);
}

// оператор break прерывает весь цикл

for (var i = 322; i < 356; i++){
    if (i % 3 != 0)
        continue;
    console.log(i);
    break;
}

