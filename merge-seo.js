import { readFileSync, writeFileSync } from 'fs';

const extracted = JSON.parse(readFileSync('seo-extracted.json', 'utf-8'));
const currentSeo = readFileSync('shared/seo-content.ts', 'utf-8');

const toolsWithExtractedData = Object.keys(extracted);

const header = `export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolSEO {
  title: string;
  metaDescription: string;
  keywords: string;
  introduction: string;
  formula?: string;
  example?: string;
  faqs?: FAQ[];
}

export const SEO_CONTENT: Record<string, ToolSEO> = {
`;

const toolEntries = [];

const allTools = {
  'bmi-calc': { hasExtracted: true, hasOriginal: true },
  'bmr': { hasExtracted: true, hasOriginal: true },
  'calorie': { hasExtracted: true, hasOriginal: true },
  'loan': { hasExtracted: true, hasOriginal: true },
  'mortgage': { hasExtracted: true, hasOriginal: true },
  'interest': { hasExtracted: true, hasOriginal: true },
  'percentage': { hasExtracted: true, hasOriginal: true },
  'unit': { hasExtracted: true, hasOriginal: true },
  'currency': { hasExtracted: true, hasOriginal: true },
  'age-calc': { hasExtracted: true, hasOriginal: true },
  'date': { hasExtracted: true, hasOriginal: true },
  'pregnancy': { hasExtracted: false, hasOriginal: true },
  'sleep': { hasExtracted: false, hasOriginal: true },
  'bodyfat': { hasExtracted: true, hasOriginal: true },
  'gpa': { hasExtracted: false, hasOriginal: true },
  'discount': { hasExtracted: false, hasOriginal: true },
  'tip': { hasExtracted: false, hasOriginal: true },
  'speed': { hasExtracted: false, hasOriginal: true },
  'area': { hasExtracted: true, hasOriginal: true },
  'volume': { hasExtracted: true, hasOriginal: true },
  'profit': { hasExtracted: false, hasOriginal: true },
  'scientific': { hasExtracted: true, hasOriginal: true },
  'fraction': { hasExtracted: true, hasOriginal: true },
  'ratio': { hasExtracted: false, hasOriginal: true },
  'average': { hasExtracted: false, hasOriginal: true },
  'random': { hasExtracted: true, hasOriginal: true },
  'energy': { hasExtracted: false, hasOriginal: true },
  'time-calc': { hasExtracted: false, hasOriginal: true },
  'countdown': { hasExtracted: true, hasOriginal: true },
  'clock': { hasExtracted: true, hasOriginal: true },
  'status': { hasExtracted: false, hasOriginal: true },
  'ip-lookup': { hasExtracted: false, hasOriginal: true },
  'qr-generator': { hasExtracted: true, hasOriginal: true },
  'notepad': { hasExtracted: false, hasOriginal: true },
  'love': { hasExtracted: false, hasOriginal: true }
};

const originalFaqs = {
  'pregnancy': ['How accurate is it?', 'What if cycles are irregular?', 'Can ultrasound change due date?'],
  'sleep': ['How many sleep cycles needed?', 'What if I can\'t fall asleep quickly?', 'How much sleep is ideal?'],
  'gpa': ['Weighted vs unweighted GPA?', 'How many credits per class?', 'What is good GPA?'],
  'discount': ['How much is 70% off?', 'How to calculate double discounts?', 'Does it include tax?'],
  'tip': ['What is standard tip?', 'How to split bill?', 'Tip before or after tax?'],
  'speed': ['How to calculate average speed?', 'Units supported?', 'Can it convert mph to kph?'],
  'profit': ['Difference between margin and markup?', 'How to calculate break-even?', 'What is gross vs net profit?'],
  'ratio': ['How to simplify ratios?', 'What is proportion?', 'Scale ratio calculations?'],
  'average': ['Difference between mean and median?', 'What is mode?', 'When to use each measure?'],
  'energy': ['Joules vs calories?', 'What is kilowatt-hour?', 'How to calculate electricity cost?'],
  'time-calc': ['How to add time?', 'Convert time to decimal?', 'Calculate time between dates?'],
  'status': ['What do HTTP codes mean?', 'How often to check?', 'What is uptime percentage?'],
  'ip-lookup': ['What is my IP?', 'IPv4 vs IPv6?', 'Can IP reveal exact location?'],
  'notepad': ['Is my data saved?', 'Export notes?', 'Offline access?'],
  'love': ['Is this accurate?', 'How does it work?', 'Just for fun?']
};

function convertFaqsToObjects(questions) {
  return questions.map(q => ({
    question: q,
    answer: 'Please check our documentation for more information.'
  }));
}

Object.keys(allTools).forEach(toolId => {
  const tool = allTools[toolId];
  
  if (tool.hasExtracted) {
    const data = extracted[toolId];
    const entry = `  '${toolId}': {
    title: '${data.title}',
    metaDescription: '${data.metaDescription}',
    keywords: '${data.keywords}',
    introduction: '${data.introduction}',${data.formula ? `\n    formula: '${data.formula}',` : ''}${data.example ? `\n    example: '${data.example}',` : ''}
    faqs: ${JSON.stringify(data.faqs, null, 6).replace(/^/gm, '    ')}
  }`;
    toolEntries.push(entry);
  } else {
    const faqObjects = originalFaqs[toolId] ? convertFaqsToObjects(originalFaqs[toolId]) : [];
    const faqsString = faqObjects.length > 0 ? `,\n    faqs: ${JSON.stringify(faqObjects, null, 6).replace(/^/gm, '    ')}` : '';
    
    const entry = currentSeo.match(new RegExp(`'${toolId}':\\s*\\{[^}]+(?:formula:[^,}]+)?(?:example:[^,}]+)?(?:faqs:[^}]+)?\\}`, 's'))?.[0] || '';
    if (entry) {
      toolEntries.push('  ' + entry);
    }
  }
});

const footer = '\n};\n';

const output = header + toolEntries.join(',\n') + footer;

writeFileSync('shared/seo-content-new.ts', output);
console.log('Created shared/seo-content-new.ts');
