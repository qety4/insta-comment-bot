const url1 = 'https://bot.sannysoft.com'

const puppeteer = require('puppeteer-extra')
require('dotenv').config()
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { executablePath } = require('puppeteer')

puppeteer.use(StealthPlugin())


function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, (timeout + Math.round(Math.random() * 100)));
    });
}

// await page.waitForSelector('', {
//     timeout: 1000 + Math.round(Math.random() * 1000)
// })

const bot = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath(),
        // defaultViewport: { width: 414, height: 896 }
    })
    const page = await browser.newPage()
    await page.goto(url1)

    await delay(1000000)
    await browser.close()

}

bot()
.catch(e=> console.error(e))