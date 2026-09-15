// 1. Сделать такую разметку
// <p id="count">0</p>

// <button id="plus">+</button>
// <button id="minus">-</button>
// <button id="reset">Reset</button>

// и написать логику (мы такое делали, но здесь смысл будет в тестах, поэтому как раз можно повторить):
// при клике на + - число увеличивается на 1
// при клике на - - число уменьшается на 1 (можно сделать в виде функций, которые принимают число и возвращают новое значение)
// при клике на Reset - число снова становится равным 0

// Стараться писать код так, чтобы логика работы с числами была в отдельных функциях
// (можно даже вынести их в отдельный файл) и уже потом менять html.

// После этого написать тесты - начните с unit-тестирования:
// проверьте функции, которые увеличивают число, уменьшают число и возвращают ноль.
// И после этого можно подключить jsdom и написать более сложные тесты.

import { getReset, getNext, getPrev } from "./helpers.js"

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const countNum = document.getElementById("count")
const undoBtn = document.getElementById("undo")

let count = 0
let history = []

plus.addEventListener("click", () => {
  history.push(count)
  count = getNext(count)
  countNum.innerHTML = count
})

minus.addEventListener("click", () => {
  history.push(count)
  count = getPrev(count)
  countNum.innerHTML = count
})

reset.addEventListener("click", () => {
  history.push(count)
  count = getReset()
  countNum.innerHTML = count
})

undoBtn.addEventListener("click", () => {
  if (history.length === 0) {
    return
  } else {
    const last = history[history.length - 1]
    history.length = history.length - 1
    count = last
    countNum.innerHTML = count
  }
})
