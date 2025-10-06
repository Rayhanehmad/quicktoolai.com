export interface ToolSEO {
  title: string;
  metaDescription: string;
  keywords: string;
  introduction: string;
  formula?: string;
  example?: string;
  faqs?: string[];
}

export const SEO_CONTENT: Record<string, ToolSEO> = {
  'bmi-calc': {
    title: 'BMI Calculator – Free Online Body Mass Index Tool',
    metaDescription: 'Calculate your BMI instantly with our free BMI Calculator. Easy to use, accurate, and suitable for adults and children. Find out your healthy weight range today.',
    keywords: 'BMI calculator, body mass index, healthy weight calculator, free BMI online',
    introduction: 'Instantly calculate your Body Mass Index (BMI) using weight and height. Useful for health tracking and understanding body fat levels.',
    formula: 'BMI = weight (kg) ÷ (height (m) × height (m))',
    example: '70kg, 175cm → 22.9 (Normal range)',
    faqs: [
      'What is BMI?',
      'What is a healthy BMI range?',
      'Is BMI accurate for athletes?'
    ]
  },
  'bmr': {
    title: 'BMR Calculator – Basal Metabolic Rate Online Tool',
    metaDescription: 'Estimate daily calories burned at rest with our BMR Calculator. Useful for diet planning, fitness, and weight management.',
    keywords: 'BMR calculator, basal metabolic rate, calorie calculator, fitness',
    introduction: 'Calculate the number of calories your body burns at rest daily. Essential for diet and weight planning.',
    formula: 'Mifflin-St Jeor:\n- Men: BMR = 10W + 6.25H - 5A + 5\n- Women: BMR = 10W + 6.25H - 5A - 161',
    example: 'Male, 70kg, 175cm, 25y → 1665 kcal/day',
    faqs: [
      'What is BMR?',
      'How is BMR different from TDEE?',
      'Does muscle mass affect BMR?'
    ]
  },
  'calorie': {
    title: 'Calorie Calculator – Daily Calorie Needs Tool',
    metaDescription: 'Find out how many calories you need daily with our free Calorie Calculator. Perfect for weight loss, maintenance, or gain.',
    keywords: 'calorie calculator, diet calculator, daily calorie intake',
    introduction: 'Helps determine daily calorie intake based on activity, goal, and body stats.',
    formula: 'Calories = BMR × Activity Factor',
    example: 'BMR 1665, moderate activity → 2580 kcal/day',
    faqs: [
      'How many calories to lose weight?',
      'What is maintenance calories?',
      'Can this help build muscle?'
    ]
  },
  'loan': {
    title: 'Loan Calculator – Free Online Loan Payment Tool',
    metaDescription: 'Calculate monthly loan payments with our Loan Calculator. Easy to use for personal loans, car loans, and mortgages.',
    keywords: 'loan calculator, EMI calculator, finance tool',
    introduction: 'Find your monthly payments and total interest for any loan. Perfect for personal loans, auto loans, or mortgages.',
    formula: 'EMI = [P × R × (1+R)^N] ÷ [(1+R)^N - 1]',
    example: 'Loan = $10,000, 5% annual, 5 years → $188/month',
    faqs: [
      'What is EMI?',
      'How is loan interest calculated?',
      'Can I pay off early?'
    ]
  },
  'mortgage': {
    title: 'Mortgage Calculator – Free Home Loan Estimator',
    metaDescription: 'Estimate your monthly mortgage payments with our free Mortgage Calculator. Includes principal and interest breakdown.',
    keywords: 'mortgage calculator, home loan calculator, house payments',
    introduction: 'Helps you estimate monthly mortgage costs for buying a home. Includes principal, interest, and total cost.',
    formula: 'Same as Loan EMI formula',
    example: 'Loan $250,000, 4% annual, 30 years → $1193/month',
    faqs: [
      'How long is a typical mortgage?',
      'What is down payment?',
      'Fixed vs adjustable rates?'
    ]
  },
  'interest': {
    title: 'Compound Interest Calculator – Free Investment Growth Tool',
    metaDescription: 'Calculate compound interest growth with our free calculator. Perfect for savings and investments.',
    keywords: 'compound interest calculator, investment calculator, finance',
    introduction: 'See how your money grows with compound interest over time.',
    formula: 'A = P × (1 + r/n)^(n×t)',
    example: '$1000 at 5% for 10 years → $1628.89',
    faqs: [
      'What is compound interest?',
      'How does compounding frequency affect returns?',
      'Simple vs compound interest?'
    ]
  },
  'percentage': {
    title: 'Percentage Calculator – Free Online Math Tool',
    metaDescription: 'Calculate percentages easily with our free Percentage Calculator. Perfect for discounts, tax, and exams.',
    keywords: 'percentage calculator, percent tool, discount calculator',
    introduction: 'Helps calculate percentages, increases, decreases, and comparisons.',
    formula: '% = (Part / Whole) × 100',
    example: '50 of 200 → 25%',
    faqs: [
      'How to calculate percentage increase?',
      'How to find what percent of X is Y?',
      'How to reverse percentage?'
    ]
  },
  'unit': {
    title: 'Unit Converter – Free Online Conversion Tool',
    metaDescription: 'Convert between length, weight, area, volume, and more with our free Unit Converter. Supports 60+ units.',
    keywords: 'unit converter, metric to imperial, conversion tool',
    introduction: 'Convert between common units like meters, feet, kilograms, pounds, etc.',
    formula: 'Conversions are based on predefined ratios.',
    example: '1 inch = 2.54 cm',
    faqs: [
      'How many cm in a foot?',
      'Convert km to miles?',
      'Metric vs imperial?'
    ]
  },
  'currency': {
    title: 'Currency Converter – Free Live Exchange Rate Tool',
    metaDescription: 'Convert world currencies with live exchange rates. Supports 160+ currencies updated daily.',
    keywords: 'currency converter, forex calculator, exchange rates',
    introduction: 'Convert between global currencies with daily exchange rates.',
    formula: 'Amount × Exchange Rate',
    example: '100 USD → 92 EUR (approx)',
    faqs: [
      'How often are rates updated?',
      'Is it real-time?',
      'Does it include fees?'
    ]
  },
  'age-calc': {
    title: 'Age Calculator – Free Birthday to Age Tool',
    metaDescription: 'Calculate your exact age in years, months, and days with our Age Calculator.',
    keywords: 'age calculator, birthday calculator, how old am I',
    introduction: 'Find your exact age from your birthdate instantly.',
    formula: 'Age = Current Date – Birthdate',
    example: 'Born 01 Jan 2000 → 25 years (in 2025)',
    faqs: [
      'How accurate is age calculator?',
      'Does it count leap years?',
      'Can it show months and days?'
    ]
  },
  'date': {
    title: 'Date Calculator – Add or Subtract Days Tool',
    metaDescription: 'Calculate future or past dates with our Date Calculator. Add or subtract days easily.',
    keywords: 'date calculator, days calculator, time calculator',
    introduction: 'Find exact dates by adding or subtracting days, months, or years.',
    formula: 'Future Date = Start Date + Days',
    example: 'Add 90 days to Jan 1 → Mar 31',
    faqs: [
      'How many days until a date?',
      'How to subtract days?',
      'Does it handle leap years?'
    ]
  },
  'pregnancy': {
    title: 'Pregnancy Calculator – Due Date Estimator',
    metaDescription: 'Estimate due date with our Pregnancy Calculator. Based on last menstrual period (LMP).',
    keywords: 'pregnancy calculator, due date calculator, maternity',
    introduction: 'Helps expectant mothers estimate due date based on LMP.',
    formula: 'Due Date = LMP + 280 days',
    example: 'LMP Jan 1 → Due Date Oct 8',
    faqs: [
      'How accurate is it?',
      'What if cycles are irregular?',
      'Can ultrasound change due date?'
    ]
  },
  'sleep': {
    title: 'Sleep Calculator – Best Bedtime & Wake Up Tool',
    metaDescription: 'Find best sleep and wake-up times with our Sleep Calculator. Based on sleep cycles.',
    keywords: 'sleep calculator, bedtime calculator, wake up tool',
    introduction: 'Helps you find best bedtime to wake up refreshed.',
    formula: 'Sleep cycles ≈ 90 minutes each',
    example: 'Wake at 7 AM → sleep at 11 PM or 12:30 AM',
    faqs: [
      'How many sleep cycles needed?',
      'What if I can\'t fall asleep quickly?',
      'How much sleep is ideal?'
    ]
  },
  'bodyfat': {
    title: 'Body Fat Calculator – Free Health Tool',
    metaDescription: 'Estimate body fat percentage with our calculator using height, waist, neck, and hip measurements.',
    keywords: 'body fat calculator, health tracker, body composition',
    introduction: 'Estimates your body fat percentage using U.S. Navy formula.',
    formula: 'Based on waist, neck, height (men) and hips (women).',
    example: 'Male, 34 waist, 16 neck, 70 height → ~20% BF',
    faqs: [
      'How accurate is body fat calculator?',
      'Difference from BMI?',
      'Does it work for athletes?'
    ]
  },
  'gpa': {
    title: 'GPA Calculator – Grade Point Average Tool',
    metaDescription: 'Calculate GPA easily with our GPA Calculator. Supports weighted and unweighted GPAs.',
    keywords: 'GPA calculator, grade calculator, school tool',
    introduction: 'Helps students calculate GPA from grades and credits.',
    formula: 'GPA = Σ(Grade × Credits) ÷ Σ(Credits)',
    example: 'A=4, B=3 → GPA = 3.5',
    faqs: [
      'Weighted vs unweighted GPA?',
      'How many credits per class?',
      'What is good GPA?'
    ]
  },
  'discount': {
    title: 'Discount Calculator – Free Online Sale Tool',
    metaDescription: 'Quickly find final price after discount with our Discount Calculator.',
    keywords: 'discount calculator, sale calculator, shopping tool',
    introduction: 'Helps you calculate price after discount.',
    formula: 'Final Price = Price – (Price × %/100)',
    example: '$200 – 25% → $150',
    faqs: [
      'How much is 70% off?',
      'How to calculate double discounts?',
      'Does it include tax?'
    ]
  },
  'tip': {
    title: 'Tip Calculator – Free Restaurant Tool',
    metaDescription: 'Calculate tips and split bills with our Tip Calculator.',
    keywords: 'tip calculator, restaurant bill calculator',
    introduction: 'Helps calculate tips and split bills among friends.',
    formula: 'Tip = Bill × %',
    example: '$50, 15% → $7.50 tip',
    faqs: [
      'What is standard tip?',
      'How to split bill?',
      'Tip before or after tax?'
    ]
  },
  'speed': {
    title: 'Speed Calculator – Free Online Tool',
    metaDescription: 'Calculate speed, distance, or time with our Speed Calculator.',
    keywords: 'speed calculator, distance calculator, travel calculator',
    introduction: 'Find speed, time, or distance using formula.',
    formula: 'Speed = Distance ÷ Time',
    example: '100 km ÷ 2 hrs → 50 km/h',
    faqs: [
      'How to calculate average speed?',
      'Units supported?',
      'Can it convert mph to kph?'
    ]
  },
  'area': {
    title: 'Area Calculator – Free Geometry Tool',
    metaDescription: 'Calculate area of shapes like circle, square, rectangle with our free calculator.',
    keywords: 'area calculator, geometry tool, math calculator',
    introduction: 'Find area of basic shapes.',
    formula: 'Circle: πr², Rectangle: l×w',
    example: 'Circle radius 5 → 78.5 units²',
    faqs: [
      'Units supported?',
      'Complex shapes?',
      'Does it support land area?'
    ]
  },
  'volume': {
    title: 'Volume Calculator – Free Geometry Tool',
    metaDescription: 'Calculate volume of cube, cylinder, sphere and more with our Volume Calculator.',
    keywords: 'volume calculator, geometry calculator, 3D shapes',
    introduction: 'Find volume of common shapes.',
    formula: 'Cube: a³, Sphere: 4/3πr³',
    example: 'Sphere radius 3 → 113.1 units³',
    faqs: [
      'Can it convert liters to m³?',
      'Supports irregular shapes?',
      'Engineering uses?'
    ]
  },
  'profit': {
    title: 'Profit Calculator – Business Margin Tool',
    metaDescription: 'Calculate profit margins and markup percentages for your business.',
    keywords: 'profit calculator, margin calculator, business tool',
    introduction: 'Calculate profit, margin, and markup for business decisions.',
    formula: 'Profit = Revenue - Cost, Margin = (Profit/Revenue) × 100',
    example: 'Revenue $100, Cost $60 → $40 profit, 40% margin',
    faqs: [
      'Difference between margin and markup?',
      'How to calculate break-even?',
      'What is gross vs net profit?'
    ]
  },
  'scientific': {
    title: 'Scientific Calculator – Advanced Math Tool',
    metaDescription: 'Free online scientific calculator with advanced functions including trigonometry, logarithms, and more.',
    keywords: 'scientific calculator, advanced calculator, math tool',
    introduction: 'Perform advanced mathematical calculations with scientific functions.',
    formula: 'Supports: sin, cos, tan, log, ln, √, ^, π, e',
    example: 'sin(30°) = 0.5, log(100) = 2',
    faqs: [
      'How to use trigonometric functions?',
      'Degrees vs radians?',
      'What is logarithm?'
    ]
  },
  'fraction': {
    title: 'Fraction Calculator – Free Math Tool',
    metaDescription: 'Add, subtract, multiply, and divide fractions easily with our Fraction Calculator.',
    keywords: 'fraction calculator, math calculator, fraction operations',
    introduction: 'Perform operations on fractions with step-by-step results.',
    formula: 'a/b + c/d = (ad + bc)/bd',
    example: '1/2 + 1/3 = 5/6',
    faqs: [
      'How to simplify fractions?',
      'Mixed numbers vs improper fractions?',
      'How to convert fraction to decimal?'
    ]
  },
  'ratio': {
    title: 'Ratio Calculator – Proportion Tool',
    metaDescription: 'Calculate ratios and solve proportions with our free Ratio Calculator.',
    keywords: 'ratio calculator, proportion calculator, math tool',
    introduction: 'Find ratios, proportions, and equivalent values.',
    formula: 'a:b = c:d, then a/b = c/d',
    example: '2:3 = 4:6',
    faqs: [
      'How to simplify ratios?',
      'What is proportion?',
      'Scale ratio calculations?'
    ]
  },
  'average': {
    title: 'Average Calculator – Mean, Median, Mode Tool',
    metaDescription: 'Calculate mean, median, mode, and range with our free Average Calculator.',
    keywords: 'average calculator, mean median mode, statistics calculator',
    introduction: 'Find statistical measures for any set of numbers.',
    formula: 'Mean = Sum/Count, Median = Middle value',
    example: '2, 4, 6 → Mean=4, Median=4',
    faqs: [
      'Difference between mean and median?',
      'What is mode?',
      'When to use each measure?'
    ]
  },
  'random': {
    title: 'Random Number Generator – Free Tool',
    metaDescription: 'Generate random numbers in any range with our Random Number Generator.',
    keywords: 'random number generator, RNG, random tool',
    introduction: 'Generate random numbers for games, decisions, or statistical use.',
    formula: 'Pseudorandom algorithm with customizable range',
    example: 'Range 1-100 → Random: 42',
    faqs: [
      'Is it truly random?',
      'Can it generate decimals?',
      'How to set custom range?'
    ]
  },
  'energy': {
    title: 'Energy Calculator – Power & Work Tool',
    metaDescription: 'Calculate energy, power, and work with unit conversions.',
    keywords: 'energy calculator, power calculator, physics tool',
    introduction: 'Convert and calculate energy units for physics and engineering.',
    formula: 'Energy (J) = Power (W) × Time (s)',
    example: '100W × 10s = 1000J',
    faqs: [
      'Joules vs calories?',
      'What is kilowatt-hour?',
      'How to calculate electricity cost?'
    ]
  },
  'time-calc': {
    title: 'Time Calculator – Add & Subtract Time Tool',
    metaDescription: 'Add and subtract hours, minutes, and seconds with our Time Calculator.',
    keywords: 'time calculator, time addition, duration calculator',
    introduction: 'Calculate time durations and perform time arithmetic.',
    formula: 'Time = Hours:Minutes:Seconds',
    example: '2:30:00 + 1:45:30 = 4:15:30',
    faqs: [
      'How to add time?',
      'Convert time to decimal?',
      'Calculate time between dates?'
    ]
  },
  'countdown': {
    title: 'Countdown Timer – Event Countdown Tool',
    metaDescription: 'Create countdown timers for events and deadlines.',
    keywords: 'countdown timer, event countdown, deadline timer',
    introduction: 'Set countdown for important events and track time remaining.',
    formula: 'Time Remaining = Target Date - Current Date',
    example: 'New Year 2026 → 365 days remaining',
    faqs: [
      'Can I save countdowns?',
      'Timezone support?',
      'How to share countdown?'
    ]
  },
  'clock': {
    title: 'World Clock & Timer – Time Zone Converter',
    metaDescription: 'View time in multiple world time zones and convert between them.',
    keywords: 'world clock, time zone converter, global time',
    introduction: 'Track time across multiple time zones simultaneously.',
    formula: 'Local Time = UTC + Timezone Offset',
    example: 'UTC 12:00 → EST 07:00',
    faqs: [
      'What is UTC?',
      'Daylight saving time?',
      'How many time zones?'
    ]
  },
  'status': {
    title: 'Website Status Checker – Uptime Monitor',
    metaDescription: 'Check if websites are online or offline with our Website Status Checker.',
    keywords: 'website checker, uptime monitor, site status',
    introduction: 'Monitor website availability and check server status.',
    formula: 'HTTP Response Code Check',
    example: 'example.com → Status: Online (200 OK)',
    faqs: [
      'What do HTTP codes mean?',
      'How often to check?',
      'What is uptime percentage?'
    ]
  },
  'ip-lookup': {
    title: 'IP Lookup – Find IP Address & Location',
    metaDescription: 'Find your IP address and location with our IP Lookup tool.',
    keywords: 'IP lookup, IP address finder, geolocation',
    introduction: 'Discover your public IP address and approximate location.',
    formula: 'Geolocation via IP database',
    example: '8.8.8.8 → Location: Mountain View, CA',
    faqs: [
      'What is my IP?',
      'IPv4 vs IPv6?',
      'Can IP reveal exact location?'
    ]
  },
  'qr-generator': {
    title: 'QR Code Generator – Free QR Maker',
    metaDescription: 'Create QR codes for URLs and text with our free QR Code Generator.',
    keywords: 'QR code generator, QR maker, barcode generator',
    introduction: 'Generate QR codes for websites, text, and contact information.',
    formula: 'QR encoding algorithm',
    example: 'URL → Scannable QR code',
    faqs: [
      'What can QR codes contain?',
      'How to scan QR codes?',
      'Custom QR code design?'
    ]
  },
  'notepad': {
    title: 'Online Notepad – Simple Text Editor',
    metaDescription: 'Simple online text editor with auto-save functionality.',
    keywords: 'online notepad, text editor, note taking',
    introduction: 'Quick and simple text editor for notes and drafts.',
    formula: 'Browser-based text storage',
    example: 'Type notes → Auto-saved locally',
    faqs: [
      'Is my data saved?',
      'Export notes?',
      'Offline access?'
    ]
  },
  'love': {
    title: 'Love Calculator – Compatibility Test',
    metaDescription: 'Fun compatibility calculator for couples based on names.',
    keywords: 'love calculator, compatibility test, relationship calculator',
    introduction: 'Calculate love compatibility for fun and entertainment.',
    formula: 'Name-based algorithm (for entertainment)',
    example: 'John + Jane → 85% compatible',
    faqs: [
      'Is this accurate?',
      'How does it work?',
      'Just for fun?'
    ]
  }
};
