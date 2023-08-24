import { Builder, By, Key, WebDriver, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as chromedriver from 'chromedriver';
import * as assert from 'assert';
import * as fs from 'fs'

const service = new chrome.ServiceBuilder(chromedriver.path).build();

const webpageURL = 'https://selenium-califano-vilches.web.app'

describe('Web app tests selenium', () => {
    
    let driver : WebDriver;

    before(async () => {
        driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(
            new chrome
            .Options()
            .headless()
        )
        .build();
    });

    after(async () => {
        await driver.quit();
    });
    
    describe('Data input tests', () => {
        it('Login test', async () => {
            await driver.get(`${webpageURL}/login`);
            
            await driver.findElement(By.id('name'))    .sendKeys('cali');
            await driver.findElement(By.id('password')).sendKeys('vilches');
    
            await driver.findElement(By.id('submit_button')).click();
    
            const titulo = await driver.getTitle();
            assert.strictEqual(titulo, 'Login');
        });
    
        it('Forms test', async () => {
            await driver.get(`${webpageURL}/cargaDeDatos`);
    
            await driver.findElement(By.id('nombre'))  .sendKeys('nicolas');
            await driver.findElement(By.id('apellido')).sendKeys('pruscino');
            await driver.findElement(By.id('dni'))     .sendKeys('32318526');
            await driver.findElement(By.id('cuil'))    .sendKeys('20-32318526-4');
    
            await driver.findElement(By.id('submit_button')).click();
    
            const titulo = await driver.getTitle();
    
            assert.strictEqual(titulo, 'Carga de Datos');
        });
    
    });
    
    describe('Navigation tests', () => {
        it('Home test', async () => {
            await driver.get(`${webpageURL}`);
            const titulo = await driver.getTitle();    
            assert.strictEqual(titulo, 'Home');
        });

        it('Login test', async () => {
            await driver.get(`${webpageURL}`);
            await driver.findElement(By.id('nav_login_button')).click();

            const titulo = await driver.getTitle();
    
            assert.strictEqual(titulo, 'Login');
        });

        it('Carga de datos test', async () => {
            await driver.get(`${webpageURL}`);
            await driver.findElement(By.id('nav_cargar_datos_button')).click();
    
            const titulo = await driver.getTitle();
    
            assert.strictEqual(titulo, 'Carga de Datos');
        });

    });
    
    describe('Screenshot', () => {
        it('Home image', async () => {
            await driver.get(`${webpageURL}`);
            const img1 = await driver.takeScreenshot();
            fs.writeFileSync('home_img.png', img1, 'base64')
        });

        it('Login image', async () => {
            await driver.get(`${webpageURL}/login`);
            const img1 = await driver.takeScreenshot();
            fs.writeFileSync('login_img.png', img1, 'base64')
        });

        it('Carga de Datos image', async () => {
            await driver.get(`${webpageURL}/cargaDeDatos`);
            const img1 = await driver.takeScreenshot();
            fs.writeFileSync('carga_de_datos_img.png', img1, 'base64')
        });

    });

})
