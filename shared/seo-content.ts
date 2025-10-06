export interface FAQ {
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
  'bmi-calc': {
    title: 'BMI Calculator – Free Online Body Mass Index Tool',
    metaDescription: 'Calculate BMI from weight and height. Free, fast, and accurate.',
    keywords: 'bmi,calculator,–,free,online,body',
    introduction: 'Instantly calculate your Body Mass Index (BMI) using weight (kg) and height (cm).',
    formula: 'BMI = weight (kg) ÷ (height (m) × height (m))',
    example: '70kg, 175cm → 22.9 (Normal range)',
    faqs: [
      {
        question: 'What is BMI?',
        answer: 'BMI (Body Mass Index) estimates body fat from weight and height.'
      },
      {
        question: 'What is a healthy BMI range?',
        answer: 'For adults, 18.5–24.9 is generally considered healthy.'
      },
      {
        question: 'Is BMI accurate for athletes?',
        answer: 'Athletes may have high BMI due to muscle mass; BMI doesn\'t distinguish muscle from fat.'
      }
    ]
  },
  'bmr': {
    title: 'BMR Calculator – Basal Metabolic Rate Tool',
    metaDescription: 'Estimate calories burned at rest using Mifflin-St Jeor formula.',
    keywords: 'bmr,calculator,–,basal,metabolic,rate',
    introduction: 'Calculate Basal Metabolic Rate using age, sex, weight and height.',
    formula: 'Mifflin-St Jeor:\n- Men: BMR = 10W + 6.25H - 5A + 5\n- Women: BMR = 10W + 6.25H - 5A - 161',
    example: 'Male, 70kg, 175cm, 25y → 1665 kcal/day',
    faqs: [
      {
        question: 'What is BMR?',
        answer: 'BMR is calories burned at rest to maintain vital functions.'
      },
      {
        question: 'Which formula is used?',
        answer: 'We use Mifflin-St Jeor, widely accepted for estimates.'
      },
      {
        question: 'Can I use BMR for diet planning?',
        answer: 'Yes—multiply BMR by an activity factor to get daily needs.'
      }
    ]
  },
  'calorie': {
    title: 'Calorie Calculator – Daily Calorie Needs',
    metaDescription: 'Estimate daily calorie needs (TDEE) from BMR and activity level.',
    keywords: 'calorie,calculator,–,daily,calorie,needs',
    introduction: 'Calculate daily calories by selecting activity level and body stats.',
    formula: 'Calories = BMR × Activity Factor',
    example: 'BMR 1665, moderate activity → 2580 kcal/day',
    faqs: [
      {
        question: 'What is TDEE?',
        answer: 'Total Daily Energy Expenditure is calories burned per day including activity.'
      },
      {
        question: 'How to use this?',
        answer: 'Compute BMR then multiply by an activity factor (1.2 sedentary to 1.9 very active).'
      },
      {
        question: 'Is it precise?',
        answer: 'It\'s an estimate; use it as a starting point and adjust with real-world results.'
      }
    ]
  },
  'loan': {
    title: 'Loan / EMI Calculator – Monthly Payments',
    metaDescription: 'Compute EMI, total payment, and total interest for loans.',
    keywords: 'loan,/,emi,calculator,–,monthly',
    introduction: 'Enter principal, annual rate (%) and term (years) to compute monthly EMI.',
    formula: 'EMI = [P × R × (1+R)^N] ÷ [(1+R)^N - 1]',
    example: 'Loan = $10,000, 5% annual, 5 years → $188/month',
    faqs: [
      {
        question: 'What is EMI?',
        answer: 'Equated Monthly Installment to repay loan with interest over term.'
      },
      {
        question: 'Does rate accept annual value?',
        answer: 'Yes—enter annual rate; calculator uses monthly rate internally.'
      },
      {
        question: 'Can I include taxes?',
        answer: 'This calculator focuses on principal & interest; add taxes separately.'
      }
    ]
  },
  'mortgage': {
    title: 'Mortgage Calculator – Home Loan Estimator',
    metaDescription: 'Estimate mortgage payments for home loans with principal and interest.',
    keywords: 'mortgage,calculator,–,home,loan,estimator',
    introduction: 'Compute monthly mortgage payments and total cost.',
    formula: 'Same as Loan EMI formula',
    example: 'Loan $250,000, 4% annual, 30 years → $1193/month',
    faqs: [
      {
        question: 'What additional costs exist?',
        answer: 'Taxes, insurance, and HOA fees may add to monthly payment.'
      },
      {
        question: 'Can I change amortization?',
        answer: 'Shorter term increases payment but reduces interest paid.'
      },
      {
        question: 'Is rate fixed?',
        answer: 'Depends on loan—fixed stays same; adjustable can change over time.'
      }
    ]
  },
  'interest': {
    title: 'Compound Interest Calculator – Investment Growth',
    metaDescription: 'Calculate future value with compound interest and compounding frequency.',
    keywords: 'compound,interest,calculator,–,investment,growth',
    introduction: 'Enter principal, rate, years and compounding periods per year.',
    formula: 'A = P × (1 + r/n)^(n×t)',
    example: '$1000 at 5% for 10 years → $1628.89',
    faqs: [
      {
        question: 'What is compounding?',
        answer: 'Interest calculated on principal and previously earned interest.'
      },
      {
        question: 'How does frequency affect growth?',
        answer: 'More frequent compounding yields slightly higher returns.'
      },
      {
        question: 'Is rate annual?',
        answer: 'Yes—enter annual rate; specify compounding periods per year.'
      }
    ]
  },
  'percentage': {
    title: 'Percentage Calculator – Percent, Increase, Decrease',
    metaDescription: 'Calculate percentages, part-of-whole, and percentage changes.',
    keywords: 'percentage,calculator,–,percent,,increase,,decrease',
    introduction: 'Use for discounts, grades, and ratio calculations.',
    formula: '% = (Part / Whole) × 100',
    example: '50 of 200 → 25%',
    faqs: [
      {
        question: 'How to find percent?',
        answer: '(part/whole)×100 gives the percent value.'
      },
      {
        question: 'How to compute percent change?',
        answer: '((new-old)/old)×100 produces percent change.'
      },
      {
        question: 'Can I use negative values?',
        answer: 'Yes—negative indicates decrease.'
      }
    ]
  },
  'unit': {
    title: 'Unit Converter – Length, Mass, Volume & More',
    metaDescription: 'Convert common units across length, weight, volume, area, speed and temperature.',
    keywords: 'unit,converter,–,length,,mass,,volume',
    introduction: 'Supports a selection of common units with accurate conversion factors.',
    formula: 'Conversions are based on predefined ratios.',
    example: '1 inch = 2.54 cm',
    faqs: [
      {
        question: 'How many units supported?',
        answer: 'This page supports the most common length units; more categories can be added.'
      },
      {
        question: 'Are conversions precise?',
        answer: 'Yes—based on standard scientific conversion factors.'
      },
      {
        question: 'Can I convert temperature?',
        answer: 'Temperature uses different formulas (C↔F↔K) handled separately.'
      }
    ]
  },
  'currency': {
    title: 'Currency Converter – Convert World Currencies',
    metaDescription: 'Convert currencies using daily-updated exchange rates (rates cached daily).',
    keywords: 'currency,converter,–,convert,world,currencies',
    introduction: 'Enter amount and select currency pair. Note: rates are indicative; use banks for exact quotes.',
    formula: 'Amount × Exchange Rate',
    example: '100 USD → 92 EUR (approx)',
    faqs: [
      {
        question: 'Are rates live?',
        answer: 'This static package contains example rates. Use a rates API (ex: exchangerate.host) for live rates.'
      },
      {
        question: 'Which currencies?',
        answer: 'Common currencies included; you can add any ISO currency.'
      },
      {
        question: 'Are fees included?',
        answer: 'Displayed rates do not include conversion fees charged by banks or services.'
      }
    ]
  },
  'age-calc': {
    title: 'Age Calculator – Exact Age in Years, Months, Days',
    metaDescription: 'Calculate precise age from birthdate including leap years.',
    keywords: 'age,calculator,–,exact,age,in',
    introduction: 'Enter the date of birth to get years, months and days.',
    formula: 'Age = Current Date – Birthdate',
    example: 'Born 01 Jan 2000 → 25 years (in 2025)',
    faqs: [
      {
        question: 'Does it consider leap years?',
        answer: 'Yes—calculations use real calendar math including leap years.'
      },
      {
        question: 'Can it compute future age?',
        answer: 'Yes—enter a future date as reference to compute age at that date.'
      },
      {
        question: 'Is timezone relevant?',
        answer: 'Age uses local date; timezone differences rarely affect calendar day calculation.'
      }
    ]
  },
  'date': {
    title: 'Date Calculator – Add/Subtract Days & Difference',
    metaDescription: 'Add or subtract days/months/years and compute differences between dates.',
    keywords: 'date,calculator,–,add/subtract,days,&',
    introduction: 'Useful for deadlines, planning, and countdowns.',
    formula: 'Future Date = Start Date + Days',
    example: 'Add 90 days to Jan 1 → Mar 31',
    faqs: [
      {
        question: 'Does it handle leap years?',
        answer: 'Yes—uses JS Date which follows Gregorian calendar rules.'
      },
      {
        question: 'Can I add months?',
        answer: 'Adding months needs careful handling due to varying month lengths; this tool supports month addition.'
      },
      {
        question: 'Is time-of-day considered?',
        answer: 'This tool works in calendar days; time-of-day may affect partial days calculation.'
      }
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
      {
        question: 'How accurate is it?',
        answer: 'The calculator provides an estimated due date based on a 280-day pregnancy. Actual delivery dates can vary by a few weeks.'
      },
      {
        question: 'What if cycles are irregular?',
        answer: 'For irregular cycles, consult your healthcare provider for a more accurate due date estimate using ultrasound.'
      },
      {
        question: 'Can ultrasound change due date?',
        answer: 'Yes, early ultrasound measurements can provide a more accurate due date, especially if your cycle is irregular.'
      }
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
      {
        question: 'How many sleep cycles needed?',
        answer: 'Most adults need 4-6 complete sleep cycles (6-9 hours) for optimal rest and recovery.'
      },
      {
        question: 'What if I can\'t fall asleep quickly?',
        answer: 'Add 15-30 minutes to your bedtime to account for the time it takes to fall asleep.'
      },
      {
        question: 'How much sleep is ideal?',
        answer: 'Adults typically need 7-9 hours of sleep per night, which equals 5-6 complete sleep cycles.'
      }
    ]
  },
  'bodyfat': {
    title: 'Body Fat Calculator – U.S. Navy Method',
    metaDescription: 'Estimate body fat percentage using waist, neck, hip (for women) measurements.',
    keywords: 'body,fat,calculator,–,u.s.,navy',
    introduction: 'Use the U.S. Navy formula for estimated body fat percentage.',
    formula: 'Based on waist, neck, height (men) and hips (women).',
    example: 'Male, 34 waist, 16 neck, 70 height → ~20% BF',
    faqs: [
      {
        question: 'Is this accurate?',
        answer: 'It\'s an estimate; professional methods (DEXA) are more accurate.'
      },
      {
        question: 'Do measurements need units?',
        answer: 'Use all measurements in centimeters.'
      },
      {
        question: 'Is it suitable for athletes?',
        answer: 'Athletes may have atypical results due to muscle distribution.'
      }
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
      {
        question: 'Weighted vs unweighted GPA?',
        answer: 'Unweighted GPA uses a 4.0 scale for all classes. Weighted GPA adds extra points (0.5-1.0) for honors and AP courses.'
      },
      {
        question: 'How many credits per class?',
        answer: 'Most classes are worth 3-4 credits. Check your school\'s credit system as it can vary.'
      },
      {
        question: 'What is good GPA?',
        answer: 'A GPA above 3.0 is generally considered good. 3.5+ is very good, and 3.7+ is excellent for college applications.'
      }
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
      {
        question: 'How much is 70% off?',
        answer: '70% off means you pay 30% of the original price. For a $100 item, you\'d pay $30.'
      },
      {
        question: 'How to calculate double discounts?',
        answer: 'Apply discounts sequentially: first discount to original price, then second discount to the new price.'
      },
      {
        question: 'Does it include tax?',
        answer: 'This calculator shows pre-tax prices. Add your local sales tax to the final discounted price.'
      }
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
      {
        question: 'What is standard tip?',
        answer: 'In the US, 15-20% is standard for good service. 15% for adequate service, 20% or more for excellent service.'
      },
      {
        question: 'How to split bill?',
        answer: 'Add tip to the total bill, then divide by the number of people to get each person\'s share.'
      },
      {
        question: 'Tip before or after tax?',
        answer: 'Most people tip on the pre-tax amount, though tipping on the total (with tax) is also acceptable.'
      }
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
      {
        question: 'How to calculate average speed?',
        answer: 'Average speed = Total distance ÷ Total time. For varying speeds, use weighted average based on time spent at each speed.'
      },
      {
        question: 'Units supported?',
        answer: 'Common units include km/h, mph, m/s, and ft/s. Ensure distance and time units are compatible.'
      },
      {
        question: 'Can it convert mph to kph?',
        answer: 'Yes, 1 mph = 1.609 km/h. Multiply mph by 1.609 to get km/h.'
      }
    ]
  },
  'area': {
    title: 'Area Calculator – shapes: circle, rectangle, triangle',
    metaDescription: 'Compute area for standard shapes with given dimensions.',
    keywords: 'area,calculator,–,shapes:,circle,,rectangle,',
    introduction: 'Select shape, enter dimensions, and calculate area.',
    formula: 'Circle: πr², Rectangle: l×w',
    example: 'Circle radius 5 → 78.5 units²',
    faqs: [
      {
        question: 'Area of circle?',
        answer: 'Area = π × r².'
      },
      {
        question: 'Rectangle area?',
        answer: 'Area = length × width.'
      },
      {
        question: 'Triangle area?',
        answer: 'Area = 0.5 × base × height.'
      }
    ]
  },
  'volume': {
    title: 'Volume Calculator – cube, sphere, cylinder',
    metaDescription: 'Calculate volume of common 3D shapes quickly.',
    keywords: 'volume,calculator,–,cube,,sphere,,cylinder',
    introduction: 'Enter shape dimensions (radius, height, side) to compute volume.',
    formula: 'Cube: a³, Sphere: 4/3πr³',
    example: 'Sphere radius 3 → 113.1 units³',
    faqs: [
      {
        question: 'Volume of sphere?',
        answer: 'V = 4/3 × π × r³.'
      },
      {
        question: 'Volume of cylinder?',
        answer: 'V = π × r² × h.'
      },
      {
        question: 'Units?',
        answer: 'Results in same cubic units as inputs.'
      }
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
    title: 'Scientific Calculator – Trig, Log, Power',
    metaDescription: 'Basic scientific functions: sin, cos, tan, log, exponent, power.',
    keywords: 'scientific,calculator,–,trig,,log,,power',
    introduction: 'Enter an expression or use provided buttons for functions.',
    formula: 'Supports: sin, cos, tan, log, ln, √, ^, π, e',
    example: 'sin(30°) = 0.5, log(100) = 2',
    faqs: [
      {
        question: 'Is eval safe?',
        answer: 'Eval executes user input—ensure no untrusted code; for production use a math parser library.'
      },
      {
        question: 'Does it support trig?',
        answer: 'Yes—use Math.sin(), Math.cos(), Math.tan() with radians.'
      },
      {
        question: 'Can I use parentheses?',
        answer: 'Yes—standard JS expression rules apply.'
      }
    ]
  },
  'fraction': {
    title: 'Fraction Calculator – Add/Subtract/Multiply/Divide',
    metaDescription: 'Perform fraction arithmetic with simplification to lowest terms.',
    keywords: 'fraction,calculator,–,add/subtract/multiply/divide',
    introduction: 'Input fractions as numerator/denominator and choose an operation.',
    formula: 'a/b + c/d = (ad + bc)/bd',
    example: '1/2 + 1/3 = 5/6',
    faqs: [
      {
        question: 'Can it simplify results?',
        answer: 'Yes—results are simplified to lowest terms using GCD.'
      },
      {
        question: 'Does it support mixed numbers?',
        answer: 'Current UI accepts simple fractions; extend to mixed numbers if needed.'
      },
      {
        question: 'Is division by zero handled?',
        answer: 'Denominator zero is invalid and prompts an error.'
      }
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
      {
        question: 'How to simplify ratios?',
        answer: 'Divide both numbers by their greatest common divisor (GCD). For example, 12:18 simplifies to 2:3.'
      },
      {
        question: 'What is proportion?',
        answer: 'A proportion states that two ratios are equal. For example, 2:3 = 4:6 is a proportion.'
      },
      {
        question: 'Scale ratio calculations?',
        answer: 'To scale a ratio, multiply both parts by the same number. 1:2 scaled by 3 becomes 3:6.'
      }
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
      {
        question: 'Difference between mean and median?',
        answer: 'Mean is the arithmetic average (sum/count). Median is the middle value when numbers are sorted. Median is less affected by outliers.'
      },
      {
        question: 'What is mode?',
        answer: 'Mode is the most frequently occurring value in a dataset. A dataset can have one mode, multiple modes, or no mode.'
      },
      {
        question: 'When to use each measure?',
        answer: 'Use mean for normally distributed data, median for skewed data or data with outliers, and mode for categorical data.'
      }
    ]
  },
  'random': {
    title: 'Random Number Generator – Integers & Picks',
    metaDescription: 'Generate random integers in a range or pick random choices.',
    keywords: 'random,number,generator,–,integers,&',
    introduction: 'Specify min and max to generate a random integer.',
    formula: 'Pseudorandom algorithm with customizable range',
    example: 'Range 1-100 → Random: 42',
    faqs: [
      {
        question: 'Is it cryptographically secure?',
        answer: 'No—use Web Crypto API for crypto-grade randomness.'
      },
      {
        question: 'Can I generate floats?',
        answer: 'Yes—adapt function to use Math.random() scaled to decimal range.'
      },
      {
        question: 'Can I pick from a list?',
        answer: 'Yes—add choice splitting and pick randomly from array.'
      }
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
      {
        question: 'Joules vs calories?',
        answer: '1 calorie = 4.184 joules. Calories are commonly used for food energy, while joules are the SI unit for energy.'
      },
      {
        question: 'What is kilowatt-hour?',
        answer: 'A kilowatt-hour (kWh) is energy used by a 1000W device running for 1 hour. 1 kWh = 3.6 million joules.'
      },
      {
        question: 'How to calculate electricity cost?',
        answer: 'Multiply kWh used by your electricity rate ($/kWh). For example, 100 kWh at $0.12/kWh costs $12.'
      }
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
      {
        question: 'How to add time?',
        answer: 'Add hours, minutes, and seconds separately. If minutes/seconds exceed 60, convert to the next higher unit.'
      },
      {
        question: 'Convert time to decimal?',
        answer: 'Divide minutes by 60 and seconds by 3600, then add to hours. For example, 1:30:00 = 1.5 hours.'
      },
      {
        question: 'Calculate time between dates?',
        answer: 'Use a date calculator to find the difference between two dates in days, then convert to hours if needed.'
      }
    ]
  },
  'countdown': {
    title: 'Countdown Timer – Event Countdown',
    metaDescription: 'Countdown to a future date/time with days, hours, minutes and seconds.',
    keywords: 'countdown,timer,–,event,countdown',
    introduction: 'Enter a target date/time and start the live countdown.',
    formula: 'Time Remaining = Target Date - Current Date',
    example: 'New Year 2026 → 365 days remaining',
    faqs: [
      {
        question: 'Can I set multiple countdowns?',
        answer: 'This page supports a single countdown; extend UI to save multiple.'
      },
      {
        question: 'What happens when time\'s up?',
        answer: 'You can configure alerts or redirect when countdown reaches zero.'
      },
      {
        question: 'Is timezone considered?',
        answer: 'The target date/time is interpreted in the user\'s local timezone.'
      }
    ]
  },
  'clock': {
    title: 'World Clock – Multiple City Times',
    metaDescription: 'View current times in multiple cities worldwide.',
    keywords: 'world,clock,–,multiple,city,times',
    introduction: 'Select cities to view current local times and offsets.',
    formula: 'Local Time = UTC + Timezone Offset',
    example: 'UTC 12:00 → EST 07:00',
    faqs: [
      {
        question: 'Can I add custom cities?',
        answer: 'Yes—UI supports adding custom cities by timezone ID.'
      },
      {
        question: 'Is DST handled?',
        answer: 'Yes when using IANA timezone IDs in the browser.'
      },
      {
        question: 'Does it sync time?',
        answer: 'Times are read from browser and reflect local network time.'
      }
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
      {
        question: 'What do HTTP codes mean?',
        answer: '200 = OK (online), 404 = Not Found, 500 = Server Error, 503 = Service Unavailable. Codes 200-299 indicate success.'
      },
      {
        question: 'How often to check?',
        answer: 'For monitoring, check every 1-5 minutes. For casual checks, once per day or as needed is sufficient.'
      },
      {
        question: 'What is uptime percentage?',
        answer: 'Uptime percentage is (total time online / total time) × 100. 99.9% uptime means less than 9 hours downtime per year.'
      }
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
      {
        question: 'What is my IP?',
        answer: 'Your public IP address is assigned by your internet service provider and identifies your device on the internet.'
      },
      {
        question: 'IPv4 vs IPv6?',
        answer: 'IPv4 uses 32-bit addresses (e.g., 192.168.1.1). IPv6 uses 128-bit addresses for more available IPs.'
      },
      {
        question: 'Can IP reveal exact location?',
        answer: 'IP lookup shows approximate location (city/region), not exact address. Accuracy varies by provider and location.'
      }
    ]
  },
  'qr-generator': {
    title: 'QR Code Generator – Create QR Images',
    metaDescription: 'Generate QR codes for URLs and text (client-side).',
    keywords: 'qr,code,generator,–,create,qr',
    introduction: 'Enter text or URL and generate a downloadable QR image.',
    formula: 'QR encoding algorithm',
    example: 'URL → Scannable QR code',
    faqs: [
      {
        question: 'Is generation offline?',
        answer: 'This implementation uses a public QR image API; to run fully offline use a client JS QR lib.'
      },
      {
        question: 'Can I change size?',
        answer: 'Yes—adjust size parameter when requesting the QR image.'
      },
      {
        question: 'Is data stored?',
        answer: 'No—the API generates an image; we do not store submitted data.'
      }
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
      {
        question: 'Is my data saved?',
        answer: 'Notes are automatically saved to your browser\'s local storage and persist across sessions on the same device.'
      },
      {
        question: 'Export notes?',
        answer: 'You can copy and paste your notes to any text file or document. Some notepads offer download as .txt functionality.'
      },
      {
        question: 'Offline access?',
        answer: 'If previously loaded, many online notepads work offline using cached data. Changes sync when you reconnect.'
      }
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
      {
        question: 'Is this accurate?',
        answer: 'No, this is purely for entertainment. Real relationship compatibility depends on communication, values, and mutual respect.'
      },
      {
        question: 'How does it work?',
        answer: 'The calculator uses a fun algorithm based on letter values and patterns in names. Results are random and not scientific.'
      },
      {
        question: 'Just for fun?',
        answer: 'Yes! This is a lighthearted tool for entertainment only. Don\'t make relationship decisions based on it.'
      }
    ]
  }
};
