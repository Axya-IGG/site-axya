import { chromium } from 'playwright';

const url = 'https://site-axya.pages.dev';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

console.log('Abrindo site...');
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Screenshot do topo (Hero + Header)
await page.screenshot({ path: 'screenshot-01-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Hero');

// Scroll para Stats Banner
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-02-stats.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Stats');

// Scroll para Método PPMF
await page.evaluate(() => window.scrollTo(0, 1800));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-03-ppmf.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ PPMF');

// Scroll para Pilares
await page.evaluate(() => window.scrollTo(0, 3200));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-04-pilares.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Pilares');

// Scroll para Estrutura
await page.evaluate(() => window.scrollTo(0, 4800));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-05-estrutura.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Estrutura');

// Scroll para Empresas Familiares
await page.evaluate(() => window.scrollTo(0, 6400));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-06-empresas.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Empresas');

// Scroll para Posicionamento
await page.evaluate(() => window.scrollTo(0, 8000));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-07-posicionamento.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Posicionamento');

// Scroll para Dores
await page.evaluate(() => window.scrollTo(0, 10000));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-08-dores.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Dores');

// Scroll para Valores + CTA + Footer
await page.evaluate(() => window.scrollTo(0, 12000));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-09-valores.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ Valores');

await page.evaluate(() => window.scrollTo(0, 14000));
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-10-cta-footer.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ CTA + Footer');

await browser.close();
console.log('Done!');
