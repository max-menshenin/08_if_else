function toReadable (num) {
    const number = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемб', 'девять'];
      const moreNumbers = ['', 'одиннадцать', 'двеннадцать', 'триннадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
      const decimals = ['', 'десять' ,'двенадцать', 'тринадцать', 'пятнадцать', 'пятдесят', 'шесьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
      let result = '';
     
      if (num.toString().length === 3) {
        let hundreds = Math.floor(num * 0.01);
        num -= hundreds * 100;
        result += `${number[hundreds]} сто `;
      }
    
      if (num.toString().length === 2 && (num >= 20 || num == 10)) {
        let dec = Math.floor(num * 0.1);
        num -= dec * 10;
        result += `${decimals[dec]} `;
      }
    
      else if (num.toString().length === 2 && num < 20) {
        result += `${moreNumbers[num - 10]} `;
        num = '';
      }  
    
      if (num.toString().length === 1) {
        result += `${number[num]}`;
      }
    
      if (result == '' && num == '0') return 'ноль'
      return (result.slice(-1) == " ") ? result.slice(0, -1) : result
    }
    
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () { 
	gameRun = true;
	orderNumberField.innerText = orderNumber;
	answerField.innerText = `Вы загадали число ${answerNumber }?`;
	alert("Игра началась заново");
	minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
	answerNumber = Math.floor((minValue + maxValue) / 2);
	orderNumber++;
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom == 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Как знал, молодец\n\u{1F60E}`
        gameRun = false;
    }
})
