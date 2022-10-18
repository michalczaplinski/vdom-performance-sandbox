import puppeteer from "puppeteer";
import { join } from "path";

const dirname = process.cwd();

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`file:${join(dirname, "test.html")}`);

    await page.addScriptTag({ path: join(dirname, "hydration-script.js") });

    const time = await page.evaluate(() => {
      const time = performance.now();
      window.run();
      return performance.now() - time;
    });

    console.log(`Time to hydrate: ${time}ms`);

    await browser.close();
  } catch (e) {
    console.log(e);
  }
})();
