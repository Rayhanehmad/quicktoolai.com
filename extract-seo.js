import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const htmlDir = 'attached_assets/extracted';
const files = readdirSync(htmlDir).filter(f => f.endsWith('.html') && f !== 'index.html');

const filenameToToolId = {
  'bmi-calculator.html': 'bmi-calc',
  'bmr-calculator.html': 'bmr',
  'calorie-calculator.html': 'calorie',
  'loan-calculator.html': 'loan',
  'mortgage-calculator.html': 'mortgage',
  'compound-interest-calculator.html': 'interest',
  'percentage-calculator.html': 'percentage',
  'unit-converter.html': 'unit',
  'currency-converter.html': 'currency',
  'age-calculator.html': 'age-calc',
  'date-calculator.html': 'date',
  'world-clock.html': 'clock',
  'bodyfat-calculator.html': 'bodyfat',
  'scientific-calculator.html': 'scientific',
  'fraction-calculator.html': 'fraction',
  'random-number-generator.html': 'random',
  'qr-code-generator.html': 'qr-generator',
  'area-calculator.html': 'area',
  'volume-calculator.html': 'volume',
  'countdown-timer.html': 'countdown'
};

const seoData = {};

files.forEach(file => {
  const toolId = filenameToToolId[file];
  if (!toolId) return;

  const content = readFileSync(join(htmlDir, file), 'utf-8');
  
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  
  const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
  const metaDescription = descMatch ? descMatch[1] : '';
  
  const keywordsMatch = content.match(/<meta name="keywords" content="([^"]+)"/);
  const keywords = keywordsMatch ? keywordsMatch[1] : '';
  
  const introMatch = content.match(/<header[^>]*>.*?<p[^>]*>([^<]+)<\/p>/s);
  const introduction = introMatch ? introMatch[1].replace(/&amp;/g, '&') : '';
  
  const schemaMatch = content.match(/<script type='application\/ld\+json'>([\s\S]*?)<\/script>/);
  let faqs = [];
  if (schemaMatch) {
    try {
      const schema = JSON.parse(schemaMatch[1]);
      if (schema.mainEntity) {
        faqs = schema.mainEntity.map(item => ({
          question: item.name,
          answer: item.acceptedAnswer.text
        }));
      }
    } catch (e) {
      console.error(`Error parsing schema for ${file}:`, e.message);
    }
  }
  
  seoData[toolId] = {
    title,
    metaDescription,
    keywords,
    introduction,
    faqs
  };
});

console.log(JSON.stringify(seoData, null, 2));
