const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

// Unit test against generateText()
test('should output name and age', () => {
   const text = generateText('Shimba', 28)
   expect(text).toBe('Shimba (28 years old)')
})

// Another unit test against generateText()
test('should output data-less text', () => {
   const output = generateText('', null);
   expect(output).toBe(' (null years old)')
}) 


// Integration test against checkAndGenerate()
// It is integration test because checkAndGenerate() has 2 functions in it
test('should generate a valid text output', () => {
   const output = generateText('Shimba', 28)
   expect(output).toBe('Shimba (28 years old)')
})

// E2E test using puppeteer
test('should output the validated information on browser', async () => {
   // Step1: Create a browser
   const browser = await puppeteer.launch({
      headless: false, 
      slowMo: 50,
      args: ['--window-size=1920,1080']
   })

   // Step2: create 'page object'
   const page = await browser.newPage();

   // Step3: tell this test what to do
   await page.goto('file:///home/shimba/testing-introduction/index.html')
   await page.click('input#name')
   await page.type('input#name', 'Anna')
   await page.click('input#age')
   await page.type('input#age', '28')
   await page.click('#btnAddUser')

   // Step4: you can also have your program check the output instead of you seeing it 
   const finalText = await page.$eval('.user-item', el => el.textContent)
   expect(finalText).toBe('Anna (28 years old)')

}, 10000);