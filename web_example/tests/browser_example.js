import { browser } from "k6/browser";
import { check } from "https://jslib.k6.io/k6-utils/1.5.0/index.js";
import { Trend } from "k6/metrics";

export const options = {
  scenarios: {
    100: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

const ExtendTrend = new Trend("add_elem_time", true);

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto("http://localhost:3000");

    for (let i = 0; i < 100; i++) {
      await page.evaluate(() => window.performance.mark("start-add"));
      await page.locator(".add_button").click();
      await page.evaluate(() => window.performance.mark("add-completed"));
    }

    // get difference between start-add to add-completed
    await page.evaluate(() =>
      window.performance.measure("add_elem_time", "start-add", "add-completed"),
    );

    const totalActionTime = await page.evaluate(
      () =>
        JSON.parse(
          JSON.stringify(window.performance.getEntriesByName("add_elem_time")),
        )[0].duration,
    );

    ExtendTrend.add(totalActionTime);

    check(page, {
      "all elements should be present": async (page) =>
        (await page.locator(".elem-99").isVisible()) === true,
    });
  } finally {
    await page.close();
    await context.close();
  }
}
