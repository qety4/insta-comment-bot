const puppeteer = require('puppeteer-extra')
require('dotenv').config()
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { executablePath } = require('puppeteer')

puppeteer.use(StealthPlugin())
const url1 = 'https://instagram.com'

const url2 = `${process.env.POST_URL}`

function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, (timeout + Math.round(Math.random() * 100)));
    });
}



let sessionCookies;
const bot = async () => {
    let i = 0;
    
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath(),
        // defaultViewport: { width: 414, height: 896 }
    })
    const page = await browser.newPage()

    const page_type = async (a, b) => {

        await page.waitForSelector(a, {
            timeout: 2000
        })
        await page.type(a, b)

    }

    const page_click = async (a) => {

        await page.waitForSelector(a, {
            timeout: 2000
        })
        await page.click(a)

    }

    if (sessionCookies) {
        await page.setCookies(...sessionCookies)

        await page.goto(url1)
    } else {
        await page.goto(url1)
        await delay(2011)

        // await page.waitForSelector('body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x5yr21d.x19onx9a > div > button._a9--._a9_1', {
        //     timeout: 1890
        // })
        // await page.click('body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x5yr21d.x19onx9a > div > button._a9--._a9_0')

        const cookie_btn = await page.$x('//button[contains(text(),"Decline optional cookies")]')


        await cookie_btn[0].click()



        await delay(3031)

        await page.waitForSelector('#loginForm > div > div:nth-child(1) > div > label > input', {
            timeout: 1900
        })

        await page.type('#loginForm > div > div:nth-child(1) > div > label > input', `${process.env.USERNAME}`)

        await delay(1813)

        await page.waitForSelector('#loginForm > div > div:nth-child(2) > div > label > input', {
            timeout: 1300
        })

        await page.type('#loginForm > div > div:nth-child(2) > div > label > input', `${process.env.PASSWORD}`)

        await delay(2013)


        await page_click('#loginForm > div > div:nth-child(3) > button')

    }

    await delay(100013)

    sessionCookies = await page.cookies()



    // await page.waitForSelector('body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.x1iyjqo2.xh8yej3 > div:nth-child(1) > div > span > div > a > div', {
    //     timeout: 5000
    // })
    // await page.click('body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.x1iyjqo2.xh8yej3 > div:nth-child(1) > div > span > div > a > div')

    await delay(5013)

    await page_click('body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div.xopu45v.xu3j5b3.xm81vs4.x1vjfegm > div > div.x1iyjqo2.xh8yej3 > div: nth - child(2) > span > div > a > div')

    await delay(3013)

    await page_click(' body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div.x10l6tqk.x1u3tz30.x1ja2u2z > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div.x6s0dn4.x78zum5.xdt5ytf.x5yr21d.x1n2onr6.xh8yej3.xhtitgo > div > ul > div:nth-child(1) > a > div')

    await delay(8013)

    await page.goto(url2)

    await delay(3013)



    // const commentBtn = 'body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > section > main > div > div > div:nth-child(3) > div > div:nth-child(1) > div > div.x78zum5 > span:nth-child(2) > div'

    // await page.waitForSelector(commentBtn, {
    //     timeout: 3000 + Math.round(Math.random() * 1000)
    // })

    // await delay(3013)

    // await page.click(commentBtn)

    const commentArea = 'body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > section > main > div > div.x6s0dn4.x78zum5.xdt5ytf.xdj266r.xkrivgy.xat24cr.x1gryazu.x1n2onr6.xh8yej3 > div > div.x4h1yfo > div > div.xdj266r.xktsk01.xat24cr.x1d52u69 > section > div > form > div > textarea'
    const postBtn = 'body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x1qjc9v5.xjbqb8w.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x15h9jz8.x47corl.xh8yej3.xir0mxb.x1juhsu6 > div > article > div > div._ae65 > div > div > div._ae2s._ae3v._ae3w > section._aaoe._ae5y._ae5z._ae62 > div > form > div > div._am-5 > div'

    await page.waitForSelector(commentArea, {
        timeout: 3000 + Math.round(Math.random() * 1000)
    })
    await page.click(commentArea)

    await delay(8013)
    let a = 0;
    while (a < 10) {

        while (i < 5) {

            await page.type(commentArea, `dis @yourexstacy00 too ${Math.round(Math.random() * 1000)}`);

            await delay(3013)

            const post = page.$x('//div[contains(text()),"Post"]')
            await post[0].click();

            await delay(8013)

            i++;

        }

        await page.reload()

        await delay(200000)

        a++
    }
    await page.screenshot({ path: 'bot.jpg' })
    console.log('screenshotted')

    await browser.close()


}

bot()
    .catch(e => console.error('scrape error', e))