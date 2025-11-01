function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const result = document.getElementById(`result`);
  if (isNaN(num1) || isNaN(num2)) {
    result.innerText = 'ведіть коректно два числа';
    return;
  }
  else {
    let res;

    switch (operation) {
      case `+`:
        res = num1 + num2;
        break;
      case `-`:
        res = num1 - num2;
        break;
      case `*`:
        res = num1 * num2;
        break;
      case `/`:
        if (num2 === 0) {
          res = ` неможна ділити на нуль`;
          break;
        }
        else {
          res = num1 / num2;
          break;
        }
      default:
        alert('некоректна дія');

    }
    result.innerText = `Результат обчислень: ${res}`;
  }

}
// ---------------discriminant----------------
function discriminant() {
  const a = parseFloat(document.getElementById(`a`).value);
  const b = parseFloat(document.getElementById(`b`).value);
  const c = parseFloat(document.getElementById(`c`).value);
  const result1 = document.getElementById(`result1`);
  const result2 = document.getElementById(`result2`);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result1.innerText = `ведіть коректно 3 коефіціента`;
    return;
  }
  else {
    let D;
    D = b ** 2 - 4 * a * c;
    if (D < 0) {
      result2.innerText = 'рівняння немає дійсних коренів'
    }
    else {
      if (D === 0) {
        let x1;
        x1 = -b / 2 * a
        result2.innerText = `корінь рівняння ${x1}`;
      }
      else {
        let x1;
        let x2;
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        result2.innerText = `коріннями рівняння будуть числа ${x1.toFixed(2)} і ${x2.toFixed(2)}`;
      }
    }
    result1.innerText = `дискримінант ${D}`;
  }
}

function Vieta() {
  const a1 = parseFloat(document.getElementById(`a1`).value);
  const b1 = parseFloat(document.getElementById(`b1`).value);
  const c1 = parseFloat(document.getElementById(`c1`).value);
  const result3 = document.getElementById(`result3`);
  if (isNaN(a1) || isNaN(b1) || isNaN(c1)) {
    result3.innerText = `ведіть коректно значення коефіціентів`;
    return;
  }
  else {
    if (a1 !== 1) {
      result3.innerText = `це не зведене квадратне рівняння`;
      return;
    }
    else {
      result3.innerText = `сума коренів рівняння ${-b1} а добуток коренів ${c1}`;

    }
  }
}
function Pifagor() {
  const a2 = parseFloat(document.getElementById(`a2`).value);
  const b2 = parseFloat(document.getElementById(`b2`).value);
  const c2 = parseFloat(document.getElementById(`c2`).value);
  console.log(c2)
  const result4 = document.getElementById(`result4`);
  if (c2 >= a2 + b2 || a2 >= b2 + c2 || b2 >= a2 + c2) {
    result4.innerText = `трикутника з такими сторонами не існує `;
    return;
  }
  else {
    if (c2 === NaN) {
      c2 = Math.sqrt(a2 ** 2 + b2 ** 2);
      console.log(c2)
    }
    result4.innerText = `довжина гіпотенузи ${Math.sqrt(a2 ** 2 + b2 ** 2).toFixed(2)}`;
  }
}
const secretNum = Math.floor(Math.random() * 100) + 1;
let count = 0
function Vgaday() {
  const a3 = parseFloat(document.getElementById(`a3`).value);
  const result5 = document.getElementById(`result5`);
  console.log(secretNum);
  if (isNaN(a3)) {
    result5.innerText = `некоректно ввели значення`;
    return;
  }
  else {
    if (a3 > secretNum) {
      result5.innerText = `загадане число менше`;
      count++;
    }
    else if (a3 < secretNum) {
      result5.innerText = `загадане число більше`;
      count++;
    }
    else {
      count++;
      result5.innerText = `ти вгадав,для цього ти використав ${count} спроб`;

    }
  }
}
// -----------------------------sec6-----------------------------------
let count1 = 0;
let count2 = 0;
let count3 = 0;
function Play() {
  const a4 = document.getElementById(`a4`).value.toLowerCase().trim();
  console.log(a4)
  const result7 = document.getElementById(`result7`);
  const result6 = document.getElementById(`result6`);
  const options = ['камінь', 'ножниці', 'папір']
  const bot = options[Math.floor(Math.random() * 3)]
  console.log(bot)

  if (a4 !== `камінь` && a4 !== `папір` && a4 !== `ножниці`) {
    result6.innerText = `некоректно ввели значення`;
    return;

  }
  else {
    if (a4 === bot) {
      result6.innerText = `нічия`;
      count3++
    }
    else if ((a4 === 'камінь' && bot === 'ножниці') || (a4 === 'ножниці' && bot === 'папір') || (a4 === 'папір' && bot === 'камінь')) {
      result6.innerText = `ви перемогли`;
      count1++
    }
    else {
      result6.innerText = `переміг комп'ютер`;
      count2++
    }
    result7.innerText = `ви перемогли ${count1}\nви програли ${count2}\n нічей ${count3}`
  }
}

// -------------moda-----------------------
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const button223 = document.getElementById('button223');
const modal2 = document.querySelector('.modal2');
const close2 = document.querySelector('.close2');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});


button223.addEventListener('click', () => {
  const input1 = document.querySelector('.text1').value.trim();
  const input2 = document.querySelector('.text2').value.trim();

  if (input1 === '' || input2 === '') {
    alert('Будь ласка, заповніть усі поля!');
  } else {
    modal.style.display = 'none';
    modal2.style.display = 'flex';
  }
});


close2.addEventListener('click', () => {
  modal2.style.display = 'none';
});
