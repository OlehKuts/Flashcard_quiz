import { v4 as uuidv4 } from "uuid";

export const questions = [
  {
    id: uuidv4(),
    question: "Яким буде результат виразу: typeof null?",
    correct: "object",
    options: ["null", "undefined", "object", "function"],
  },
  {
    id: uuidv4(),
    question: "Що поверне вираз: 2 + '2' - 1?",
    correct: "21",
    options: ["3", "21", "22", "NaN"],
  },
  {
    id: uuidv4(),
    question:
      "Яке з ключових слів створює змінну з блочною областю видимості, яку МОЖНА перевизначати?",
    correct: "let",
    options: ["var", "const", "let", "global"],
  },
  {
    id: uuidv4(),
    question: "Що поверне порівняння: [] == ![]?",
    correct: "true",
    options: ["true", "false", "TypeError", "undefined"],
  },
  {
    id: uuidv4(),
    question:
      "Який метод масиву створює НОВИЙ масив, заповнений елементами, що пройшли перевірку?",
    correct: "filter()",
    options: ["map()", "forEach()", "filter()", "reduce()"],
  },
  {
    id: uuidv4(),
    question: "Яким буде результат виразу: true + false?",
    correct: "1",
    options: ["true", "false", "1", "NaN"],
  },
  {
    id: uuidv4(),
    question: "Що виведе в консоль: console.log(typeof NaN)?",
    correct: "number",
    options: ["number", "NaN", "undefined", "null"],
  },
  {
    id: uuidv4(),
    question: "Який метод перетворює JSON-рядок назад у JavaScript-об'єкт?",
    correct: "JSON.parse()",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.convert()",
    ],
  },
  {
    id: uuidv4(),
    question: "Що таке замикання (Closure) в JavaScript?",
    correct: "Здатність функції доступ до області видимості зовнішньої функції",
    options: [
      "Функція, яка викликає сама себе",
      "Здатність функції доступ до області видимості зовнішньої функції",
      "Метод для видалення невикористовуваної пам'яті",
      "Спеціальний тип циклу",
    ],
  },
  {
    id: uuidv4(),
    question:
      "Яке значення повертає функція за замовчуванням, якщо в ній немає оператора return?",
    correct: "undefined",
    options: ["null", "undefined", "false", "0"],
  },
  {
    id: uuidv4(),
    question: "Що виведе код: console.log(0.1 + 0.2 === 0.3)?",
    correct: "false",
    options: ["true", "false", "TypeError", "NaN"],
  },
  {
    id: uuidv4(),
    question:
      "Який оператор використовується для перевірки як значення, так і типу даних (суворе порівняння)?",
    correct: "===",
    options: ["=", "==", "===", "!=="],
  },
  {
    id: uuidv4(),
    question: "Який метод додає один або більше елементів у КІНЕЦЬ масиву?",
    correct: "push()",
    options: ["pop()", "shift()", "unshift()", "push()"],
  },
  {
    id: uuidv4(),
    question:
      "Яка вбудована функція дозволяє виконувати код через певний проміжок часу ОДИН раз?",
    correct: "setTimeout()",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
  },
  {
    id: uuidv4(),
    question: "Що буде результатом виразу: typeof typeof 1?",
    correct: "string",
    options: ["number", "string", "undefined", "object"],
  },
  {
    id: uuidv4(),
    question: "Яким є базовий стан (state) щойно створеного Promise?",
    correct: "pending",
    options: ["pending", "fulfilled", "rejected", "resolved"],
  },
  {
    id: uuidv4(),
    question: "Який метод масиву мутує (змінює) оригінальний масив?",
    correct: "splice()",
    options: ["slice()", "concat()", "map()", "splice()"],
  },
  {
    id: uuidv4(),
    question: "Що поверне оператор: 'apple' && 'banana'?",
    correct: "banana",
    options: ["apple", "banana", "true", "false"],
  },
  {
    id: uuidv4(),
    question: "Як оголосити стрілочну функцію (Arrow Function)?",
    correct: "const myFunc = () => {}",
    options: [
      "function myFunc() {}",
      "const myFunc = function() {}",
      "const myFunc = () => {}",
      "arrow myFunc() {}",
    ],
  },
  {
    id: uuidv4(),
    question: "Яке значення матиме змінна x після: let x = 5; x++;?",
    correct: "6",
    options: ["5", "6", "7", "undefined"],
  },
];
