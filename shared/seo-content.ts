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
    title: 'AI-Powered BMI Calculator – Smart Body Mass Index Tracking',
    metaDescription: 'AI-powered BMI calculator for smart health tracking. Automated body mass index analysis with personalized health insights and weight management recommendations based on your data.',
    keywords: 'AI calculator, BMI calculator, smart planning, automated, health tracking, AI-powered, body mass index',
    introduction: 'AI-powered BMI calculator - instantly calculate your Body Mass Index using weight (kg) and height (cm) with smart health insights.',
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
    title: 'Smart BMR Calculator – AI-Powered Metabolic Rate Analysis',
    metaDescription: 'AI-powered BMR calculator for smart health planning. Automated basal metabolic rate calculations using Mifflin-St Jeor formula with personalized calorie insights and fitness recommendations.',
    keywords: 'AI calculator, BMR calculator, smart planning, automated, health tracking, AI-powered, basal metabolic rate',
    introduction: 'Smart AI-powered BMR calculator - calculate Basal Metabolic Rate using age, sex, weight and height with automated health insights.',
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
    title: 'AI-Powered Calorie Calculator – Smart Daily Nutrition Planning',
    metaDescription: 'AI-powered calorie calculator for smart health and fitness planning. Automated TDEE calculations from BMR and activity level with personalized nutrition insights and weight management strategies.',
    keywords: 'AI calculator, calorie calculator, smart planning, automated, health tracking, AI-powered, daily calorie needs, TDEE',
    introduction: 'AI-powered calorie calculator - calculate daily calories with automated insights by selecting activity level and body stats.',
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
    title: 'AI-Powered Loan Calculator – Smart EMI & Payment Planning',
    metaDescription: 'AI-powered loan calculator for smart financial planning. Compute EMI, total interest, and optimize payment schedules with automated calculations and insights for better loan management.',
    keywords: 'AI calculator, loan calculator, smart planning, automated, financial health, AI-powered, EMI, monthly payments',
    introduction: 'AI-powered loan calculator - enter principal, annual rate (%) and term (years) to compute monthly EMI with smart financial insights.',
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
    title: 'Smart Mortgage Calculator – AI-Powered Home Loan Planning',
    metaDescription: 'AI-powered mortgage calculator for smart home loan planning. Automated payment estimates with principal, interest, and total cost analysis for informed financial decisions.',
    keywords: 'AI calculator, mortgage calculator, smart planning, automated, financial health, AI-powered, home loan, estimator',
    introduction: 'Smart AI-powered mortgage calculator - compute monthly mortgage payments and total cost with automated financial insights.',
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
    title: 'AI-Powered Interest Calculator – Smart Investment Growth Tracking',
    metaDescription: 'AI-powered compound interest calculator for smart investment planning. Automated calculations with compounding frequency analysis and financial growth insights for optimal investment strategies.',
    keywords: 'AI calculator, interest calculator, smart planning, automated, financial health, AI-powered, compound interest, investment growth',
    introduction: 'AI-powered interest calculator - enter principal, rate, years and compounding periods for smart investment growth projections.',
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
    title: 'AI-Powered Percentage Calculator – Smart Percent Analysis',
    metaDescription: 'AI-powered percentage calculator with automated calculations for discounts, grades, and financial analysis. Smart percentage change tracking with instant insights and recommendations.',
    keywords: 'AI calculator, percentage calculator, smart planning, automated, financial health, AI-powered, percent, increase, decrease',
    introduction: 'AI-powered percentage calculator for discounts, grades, and smart ratio calculations with automated insights.',
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
    title: 'Smart Unit Converter – AI-Powered Metric Conversions',
    metaDescription: 'AI-powered unit converter for smart metric conversions. Automated calculations across length, weight, volume, area, speed and temperature with precise conversion factors and intelligent unit recommendations.',
    keywords: 'AI calculator, unit converter, smart conversion, automated, intelligent calculations, AI-powered, metric converter, measurement tool',
    introduction: 'Smart AI-powered unit converter - supports accurate conversions across common units with automated precision and intelligent suggestions.',
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
    title: 'Smart Currency Converter – AI-Powered Exchange Rates',
    metaDescription: 'AI-powered currency converter with smart exchange rate calculations. Automated forex conversions for 150+ world currencies with real-time rate intelligence and precision financial insights.',
    keywords: 'AI calculator, currency converter, smart conversion, automated, intelligent calculations, AI-powered, forex converter, exchange rates',
    introduction: 'Smart AI-powered currency converter - convert between world currencies with automated exchange rate calculations and intelligent financial insights.',
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
    title: 'Smart Age Calculator – AI-Powered Precise Age Tracking',
    metaDescription: 'AI-powered age calculator with smart precision tracking. Calculate exact age in years, months, and days with automated leap year handling and intelligent date analysis for birthdays and milestones.',
    keywords: 'AI calculator, age calculator, smart planning, automated, productivity tools, AI-powered, age tracking, birthday calculator',
    introduction: 'Smart AI-powered age calculator - enter date of birth to get precise years, months and days with automated calculations and intelligent insights.',
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
    title: 'Smart Date Calculator – AI-Powered Date Planning & Scheduling',
    metaDescription: 'AI-powered date calculator for smart scheduling and planning. Automated date arithmetic with add/subtract days, months, years and intelligent difference calculations for deadlines and project management.',
    keywords: 'AI calculator, date calculator, smart planning, automated, productivity tools, professional, AI-powered, deadline calculator, scheduling tool',
    introduction: 'Smart AI-powered date calculator - add or subtract time periods and calculate date differences with automated calendar intelligence for effective planning.',
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
    title: 'AI-Powered Pregnancy Calculator – Smart Due Date Planning',
    metaDescription: 'AI-powered pregnancy calculator for smart maternity planning. Automated due date estimation based on LMP with personalized pregnancy insights, trimester tracking, and health milestones.',
    keywords: 'AI calculator, pregnancy calculator, smart planning, automated, health tracking, AI-powered, due date calculator, maternity',
    introduction: 'AI-powered pregnancy calculator - helps expectant mothers estimate due date based on LMP with automated health insights and milestones.',
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
    title: 'Smart Sleep Calculator – AI-Powered Sleep Cycle Optimization',
    metaDescription: 'AI-powered sleep calculator for smart rest optimization. Automated bedtime and wake-up recommendations based on 90-minute sleep cycles with intelligent health insights for peak performance and productivity.',
    keywords: 'AI calculator, sleep calculator, smart planning, automated, productivity tools, AI-powered, sleep cycles, bedtime optimizer, wellness tool',
    introduction: 'Smart AI-powered sleep calculator - find optimal bedtime and wake-up times with automated sleep cycle analysis for refreshed mornings and peak productivity.',
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
    title: 'Smart Body Fat Calculator – AI-Powered Composition Analysis',
    metaDescription: 'AI-powered body fat calculator using U.S. Navy method for smart fitness tracking. Automated body composition analysis with waist, neck, and hip measurements for personalized health insights.',
    keywords: 'AI calculator, body fat calculator, smart planning, automated, health tracking, AI-powered, U.S. Navy method',
    introduction: 'Smart AI-powered body fat calculator - use the U.S. Navy formula for automated body fat percentage estimation with health insights.',
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
    title: 'Smart GPA Calculator – AI-Powered Academic Performance Tracking',
    metaDescription: 'AI-powered GPA calculator for smart academic planning. Automated grade point average calculations with intelligent weighted and unweighted GPA analysis for students and professional academic performance tracking.',
    keywords: 'AI calculator, GPA calculator, smart planning, automated, productivity tools, professional, AI-powered, academic tracking, grade calculator',
    introduction: 'Smart AI-powered GPA calculator - calculate grade point averages with automated weighted and unweighted analysis for effective academic performance tracking and planning.',
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
    title: 'Smart Discount Calculator – AI-Powered Sale Price Analyzer',
    metaDescription: 'AI-powered discount calculator with automated price analysis. Instantly calculate final prices, savings percentages, and get smart shopping insights for maximum value.',
    keywords: 'AI calculator, discount calculator, smart planning, automated, financial health, AI-powered, sale calculator, shopping tool',
    introduction: 'Smart AI-powered discount calculator - instantly calculate final prices with automated savings analysis and shopping insights.',
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
    title: 'AI-Powered Tip Calculator – Smart Bill Splitting Tool',
    metaDescription: 'AI-powered tip calculator with automated bill splitting. Smart calculations for restaurant tips, group payments, and fair cost distribution with instant financial insights.',
    keywords: 'AI calculator, tip calculator, smart planning, automated, financial health, AI-powered, restaurant bill calculator',
    introduction: 'AI-powered tip calculator - smart calculations for tips and automated bill splitting among friends with fair distribution.',
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
    title: 'Smart Speed Calculator – AI-Powered Distance & Time Analysis',
    metaDescription: 'AI-powered speed calculator for smart travel planning. Automated calculations for speed, distance, and time with intelligent unit conversions and precision physics-based insights.',
    keywords: 'AI calculator, speed calculator, smart planning, automated, intelligent calculations, AI-powered, distance calculator, velocity tool',
    introduction: 'Smart AI-powered speed calculator - find speed, time, or distance with automated calculations and intelligent travel insights.',
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
    title: 'Smart Area Calculator – AI-Powered Shape Analysis',
    metaDescription: 'AI-powered area calculator for smart geometric calculations. Automated area computation for circles, rectangles, triangles and more with intelligent shape recognition and precision measurement insights.',
    keywords: 'AI calculator, area calculator, smart planning, automated, intelligent calculations, AI-powered, geometry calculator, shape area',
    introduction: 'Smart AI-powered area calculator - select shape, enter dimensions, and get automated area calculations with intelligent insights.',
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
    title: 'Smart Volume Calculator – AI-Powered 3D Shape Analysis',
    metaDescription: 'AI-powered volume calculator for smart 3D geometry. Automated volume calculations for cubes, spheres, cylinders and more with intelligent shape analysis and precision measurement insights.',
    keywords: 'AI calculator, volume calculator, smart planning, automated, intelligent calculations, AI-powered, 3D calculator, cubic measurement',
    introduction: 'Smart AI-powered volume calculator - enter shape dimensions and get automated volume calculations with intelligent geometric insights.',
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
    title: 'AI-Powered Profit Calculator – Smart Business Margin Analysis',
    metaDescription: 'AI-powered profit calculator for smart business planning. Automated margin calculations, markup analysis, and financial insights for optimized pricing and profitability strategies.',
    keywords: 'AI calculator, profit calculator, smart planning, automated, financial health, AI-powered, margin calculator, business tool',
    introduction: 'AI-powered profit calculator - calculate margins and markup with automated business insights for smart financial decisions.',
    formula: 'Profit = Revenue - Cost, Margin = (Profit/Revenue) × 100',
    example: 'Revenue $100, Cost $60 → $40 profit, 40% margin',
    faqs: [
      {
        question: 'Difference between margin and markup?',
        answer: 'Margin is profit divided by revenue. Markup is profit divided by cost. A 50% markup equals a 33% margin.'
      },
      {
        question: 'How to calculate break-even?',
        answer: 'Break-even is when revenue equals costs (profit = 0). Calculate by dividing fixed costs by (price - variable cost per unit).'
      },
      {
        question: 'What is gross vs net profit?',
        answer: 'Gross profit is revenue minus cost of goods sold. Net profit is gross profit minus all operating expenses, taxes, and interest.'
      }
    ]
  },
  'scientific': {
    title: 'AI Scientific Calculator – Advanced Mathematical Computing',
    metaDescription: 'AI-powered scientific calculator with advanced mathematical functions. Automated trigonometry, logarithms, exponentials, and power calculations with intelligent computation and precision analysis.',
    keywords: 'AI calculator, scientific calculator, smart planning, automated, intelligent calculations, AI-powered, advanced math, trig functions',
    introduction: 'AI-powered scientific calculator - enter expressions or use function buttons for automated advanced mathematical computations with intelligent insights.',
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
    title: 'Smart Fraction Calculator – AI-Powered Arithmetic Operations',
    metaDescription: 'AI-powered fraction calculator with smart arithmetic operations. Automated addition, subtraction, multiplication, and division with intelligent simplification to lowest terms and precision insights.',
    keywords: 'AI calculator, fraction calculator, smart planning, automated, intelligent calculations, AI-powered, fraction arithmetic, simplification',
    introduction: 'Smart AI-powered fraction calculator - input fractions and choose operations for automated calculations with intelligent simplification.',
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
    title: 'Smart Ratio Calculator – AI-Powered Proportion Analysis',
    metaDescription: 'AI-powered ratio calculator for smart proportion solving. Automated ratio calculations and equivalent value analysis with intelligent simplification and precision mathematical insights.',
    keywords: 'AI calculator, ratio calculator, smart planning, automated, intelligent calculations, AI-powered, proportion tool, equivalent ratios',
    introduction: 'Smart AI-powered ratio calculator - find ratios, proportions, and equivalent values with automated calculations and intelligent insights.',
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
    title: 'Smart Average Calculator – AI-Powered Statistical Analysis',
    metaDescription: 'AI-powered average calculator for smart statistical analysis. Automated calculations for mean, median, mode, and range with intelligent data insights and precision statistical recommendations.',
    keywords: 'AI calculator, average calculator, smart planning, automated, intelligent calculations, AI-powered, statistics tool, mean median mode',
    introduction: 'Smart AI-powered average calculator - find statistical measures for any set of numbers with automated analysis and intelligent insights.',
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
    title: 'Smart Random Number Generator – AI-Powered Integer Generation',
    metaDescription: 'AI-powered random number generator with smart integer generation. Automated random picks, range-based numbers, and intelligent selection algorithms for games, testing, and decision-making.',
    keywords: 'AI calculator, random generator, smart planning, automated, intelligent calculations, AI-powered, random numbers, integer picker',
    introduction: 'Smart AI-powered random number generator - specify min and max ranges for automated random integer generation with intelligent algorithms.',
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
    title: 'Smart Energy Calculator – AI-Powered Physics Analysis',
    metaDescription: 'AI-powered energy calculator for smart physics and engineering. Automated calculations for energy, power, and work with intelligent unit conversions and precision scientific insights.',
    keywords: 'AI calculator, energy calculator, smart planning, automated, intelligent calculations, AI-powered, power calculator, physics tool',
    introduction: 'Smart AI-powered energy calculator - convert and calculate energy units for physics and engineering with automated analysis and intelligent insights.',
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
    title: 'Smart Time Calculator – AI-Powered Duration & Time Arithmetic',
    metaDescription: 'AI-powered time calculator for smart duration tracking. Automated addition and subtraction of hours, minutes, seconds with intelligent time management insights for productivity and professional scheduling.',
    keywords: 'AI calculator, time calculator, smart planning, automated, productivity tools, professional, AI-powered, duration calculator, time tracking',
    introduction: 'Smart AI-powered time calculator - add and subtract time durations with automated calculations and intelligent time management insights for optimal productivity.',
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
    title: 'Smart Countdown Timer – AI-Powered Event Tracking & Scheduling',
    metaDescription: 'AI-powered countdown timer for smart event planning. Automated real-time tracking to future dates with intelligent reminders showing days, hours, minutes, and seconds for productivity and professional event management.',
    keywords: 'AI calculator, countdown timer, smart planning, automated, productivity tools, professional, AI-powered, event tracking, smart timing',
    introduction: 'Smart AI-powered countdown timer - track time to important events with automated real-time updates and intelligent event management for enhanced productivity.',
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
    title: 'Smart World Clock – AI-Powered Time Zone Management',
    metaDescription: 'AI-powered world clock for smart global time management. Automated time zone conversions across multiple cities with intelligent scheduling insights for productivity and professional international coordination.',
    keywords: 'AI calculator, world clock, smart planning, automated, productivity tools, professional, AI-powered, time zones, smart timing, global coordination',
    introduction: 'Smart AI-powered world clock - view current times across multiple cities with automated time zone intelligence for seamless global collaboration and productivity.',
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
    title: 'Professional Website Status Checker – Automated Uptime Monitoring',
    metaDescription: 'AI-powered website status checker for professional uptime monitoring. Automated availability checks with intelligent HTTP response analysis and smart alerts for productivity and reliable web presence management.',
    keywords: 'AI calculator, website checker, smart planning, automated, productivity tools, professional, AI-powered, uptime monitor, site monitoring, automated monitoring',
    introduction: 'Professional AI-powered website status checker - monitor site availability with automated HTTP status checks and intelligent uptime analysis for reliable web presence.',
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
    title: 'Smart IP Lookup – AI-Powered Geolocation & Network Analysis',
    metaDescription: 'AI-powered IP lookup tool for smart network analysis. Automated IP address detection with intelligent geolocation data and network insights for productivity, security, and professional network management.',
    keywords: 'AI calculator, IP lookup, smart planning, automated, productivity tools, professional, AI-powered, geolocation, network analysis, IP finder',
    introduction: 'Smart AI-powered IP lookup - discover your public IP address with automated geolocation analysis and intelligent network insights for enhanced security and productivity.',
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
    title: 'Smart QR Code Generator – AI-Powered Digital Code Creation',
    metaDescription: 'AI-powered QR code generator for smart digital sharing. Automated QR code creation for URLs and text with intelligent optimization and professional code generation for productivity and marketing.',
    keywords: 'AI calculator, QR generator, smart planning, automated, productivity tools, professional, AI-powered, QR code creator, digital sharing',
    introduction: 'Smart AI-powered QR code generator - create professional QR codes for URLs and text with automated generation and intelligent optimization for seamless digital sharing.',
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
    title: 'Smart Online Notepad – AI-Powered Note Taking & Text Editor',
    metaDescription: 'AI-powered online notepad for smart note-taking. Automated auto-save functionality with intelligent text storage and professional note management for enhanced productivity and seamless writing workflow.',
    keywords: 'AI calculator, online notepad, smart planning, automated, productivity tools, professional, AI-powered, text editor, note taking, auto-save',
    introduction: 'Smart AI-powered online notepad - capture ideas and notes with automated auto-save and intelligent text management for effortless productivity and professional writing.',
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
    title: 'AI Love Calculator – Smart Compatibility Analysis & Fun Relationship Test',
    metaDescription: 'AI-powered love calculator for fun compatibility testing. Smart name-based algorithm generates entertaining relationship scores with automated analysis. Perfect for couples seeking playful compatibility insights and entertainment.',
    keywords: 'AI calculator, love calculator, smart planning, automated, AI-powered, compatibility test, relationship calculator, fun tool, entertainment',
    introduction: 'AI-powered love calculator - discover fun compatibility scores with smart name analysis for entertaining relationship insights. Purely for fun and entertainment!',
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
