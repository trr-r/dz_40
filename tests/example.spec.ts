import { test, expect } from "@playwright/test"

// Функциональность
// При нажатии + число увеличивается на 1.
// При нажатии − число уменьшается на 1.
// Сбросить возвращает значение к 0.
// Playwright-тесты

// Написать 4 теста:

// Начальное состояние
// открыть страницу;
// проверить, что счётчик равен 0.
// Увеличение
// нажать +;
// проверить 1;
// нажать ещё раз;
// проверить 2.
// Уменьшение
// нажать −;
// проверить -1.
// Сброс
// увеличить счётчик несколько раз;
// нажать Сбросить;
// проверить 0.

test("Проверка начального состояния", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html")
  await expect(page.locator("#count")).toHaveText("0")
})

test("Проверка увеличения", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html")
  await page.locator("#plus").click()
  await expect(page.locator("#count")).toHaveText("1")
  await page.locator("#plus").click()
  await expect(page.locator("#count")).toHaveText("2")
})

test("Проверка уменьшения", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html")
  await page.locator("#minus").click()
  await expect(page.locator("#count")).toHaveText("-1")
})

test("Проверка сброса", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html")
  await page.locator("#plus").click()
  await page.locator("#plus").click()
  await page.locator("#reset").click()
  await expect(page.locator("#count")).toHaveText("0")
})

test("Проверка кнопки назад", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html")
  await page.locator("#plus").click()
  await page.locator("#plus").click()
  await page.locator("#plus").click()
  await page.locator("#undo").click()
  await expect(page.locator("#count")).toHaveText("2")
  await page.locator("#undo").click()
  await expect(page.locator("#count")).toHaveText("1")
})
