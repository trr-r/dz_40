import "@testing-library/jest-dom"
import { getNext, getPrev, getReset } from "./helpers.js"

test("getNext увеличивает число", () => {
  expect(getNext(5)).toBe(6)
})

test("getPrev уменьшает число", () => {
  expect(getPrev(5)).toBe(4)
})

test("getReset возвращает 0", () => {
  expect(getReset()).toBe(0)
})

test("Максимальное число 10", () => {
  expect(getNext(10)).toBe(10)
})

test("Минимальное число -10", () => {
  expect(getPrev(-10)).toBe(-10)
})

const html = `
<p id="count">0</p>
<button id="plus">+</button>
<button id="minus">-</button>
<button id="reset">Reset</button>
`

describe("Работа с DOM", () => {
  beforeEach(() => {
    jest.resetModules()
    document.body.innerHTML = html
    return import("./script.js")
  })

  test("Кнопка plus есть на странице", () => {
    document.body.innerHTML = html
    const addBtn = document.querySelector("#plus")
    expect(addBtn).not.toBeNull()
  })

  test("При клике на + увеличивается значение", () => {
    const addBtn = document.querySelector("#plus")
    const count = document.querySelector("#count")
    addBtn.click()
    addBtn.click()
    expect(count.innerHTML).toBe("2")
  })

  test("При клике на - уменьшается значение", () => {
    const addBtn = document.querySelector("#minus")
    const count = document.querySelector("#count")
    addBtn.click()
    addBtn.click()
    expect(count.innerHTML).toBe("-2")
  })

  test("Разные клики", () => {
    const minus = document.querySelector("#minus")
    const plus = document.querySelector("#plus")
    const reset = document.querySelector("#reset")
    const count = document.querySelector("#count")
    minus.click()
    minus.click()
    plus.click()
    plus.click()
    plus.click()
    reset.click()
    expect(count.innerHTML).toBe("0")
  })

  test("Число не увеличивается больше максимального значения", () => {
    const plus = document.querySelector("#plus")
    const count = document.querySelector("#count")
    for (let i = 0; i < 11; i++) {
      plus.click()
    }
    expect(count.innerHTML).toBe("10")
  })

  test("Число не уменьшается меньше максимального значения", () => {
    const minus = document.querySelector("#minus")
    const count = document.querySelector("#count")
    for (let i = 0; i < 11; i++) {
      minus.click()
    }
    expect(count.innerHTML).toBe("-10")
  })
})
