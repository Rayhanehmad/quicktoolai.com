import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedTool {
  id: string;
  name: string;
  description: string;
  path: string;
}

interface RelatedCalculatorsProps {
  currentToolId: string;
  category: string;
  limit?: number;
}

const allTools: Record<string, RelatedTool> = {
  // Financial
  'percentage': { id: 'percentage', name: 'Percentage Calculator', description: 'Calculate percentages and percent changes', path: '/percentage' },
  'loan': { id: 'loan', name: 'Loan Calculator', description: 'Calculate loan payments and interest', path: '/loan' },
  'mortgage': { id: 'mortgage', name: 'Mortgage Calculator', description: 'Estimate mortgage payments', path: '/mortgage' },
  'interest': { id: 'interest', name: 'Interest Calculator', description: 'Calculate simple and compound interest', path: '/interest' },
  'discount': { id: 'discount', name: 'Discount Calculator', description: 'Find sale prices and savings', path: '/discount' },
  'tip': { id: 'tip', name: 'Tip Calculator', description: 'Calculate tips and split bills', path: '/tip' },
  'profit': { id: 'profit', name: 'Profit Calculator', description: 'Calculate profit margins', path: '/profit' },
  
  // Converters
  'currency': { id: 'currency', name: 'Currency Converter', description: 'Convert world currencies', path: '/currency' },
  'unit': { id: 'unit', name: 'Unit Converter', description: 'Convert measurement units', path: '/unit' },
  
  // Health & Fitness
  'bmi-calc': { id: 'bmi-calc', name: 'BMI Calculator', description: 'Calculate Body Mass Index', path: '/bmi-calc' },
  'bmr': { id: 'bmr', name: 'BMR Calculator', description: 'Calculate Basal Metabolic Rate', path: '/bmr' },
  'bodyfat': { id: 'bodyfat', name: 'Body Fat Calculator', description: 'Estimate body fat percentage', path: '/bodyfat' },
  'calorie': { id: 'calorie', name: 'Calorie Calculator', description: 'Calculate daily calorie needs', path: '/calorie' },
  'pregnancy': { id: 'pregnancy', name: 'Pregnancy Calculator', description: 'Calculate due date and milestones', path: '/pregnancy' },
  
  // Math & Science
  'scientific': { id: 'scientific', name: 'Scientific Calculator', description: 'Advanced scientific calculations', path: '/scientific' },
  'fraction': { id: 'fraction', name: 'Fraction Calculator', description: 'Calculate with fractions', path: '/fraction' },
  'ratio': { id: 'ratio', name: 'Ratio Calculator', description: 'Calculate ratios and proportions', path: '/ratio' },
  'average': { id: 'average', name: 'Average Calculator', description: 'Find mean, median, mode', path: '/average' },
  'random': { id: 'random', name: 'Random Number', description: 'Generate random numbers', path: '/random' },
  
  // Measurement
  'area': { id: 'area', name: 'Area Calculator', description: 'Calculate area of shapes', path: '/area' },
  'volume': { id: 'volume', name: 'Volume Calculator', description: 'Calculate volume of shapes', path: '/volume' },
  'speed': { id: 'speed', name: 'Speed Calculator', description: 'Calculate speed, distance, time', path: '/speed' },
  'energy': { id: 'energy', name: 'Energy Calculator', description: 'Convert energy units', path: '/energy' },
  
  // Time & Date
  'clock': { id: 'clock', name: 'World Clock', description: 'View world time zones', path: '/clock' },
  'age-calc': { id: 'age-calc', name: 'Age Calculator', description: 'Calculate exact age', path: '/age-calc' },
  'date': { id: 'date', name: 'Date Calculator', description: 'Calculate date differences', path: '/date' },
  'time-calc': { id: 'time-calc', name: 'Time Calculator', description: 'Add and subtract time', path: '/time-calc' },
  'countdown': { id: 'countdown', name: 'Countdown Timer', description: 'Set countdown timers', path: '/countdown' },
  'sleep': { id: 'sleep', name: 'Sleep Calculator', description: 'Optimize sleep cycles', path: '/sleep' },
  
  // Utilities
  'status': { id: 'status', name: 'Website Checker', description: 'Check website status', path: '/status' },
  'ip-lookup': { id: 'ip-lookup', name: 'IP Lookup', description: 'Find IP address info', path: '/ip-lookup' },
  'qr-generator': { id: 'qr-generator', name: 'QR Generator', description: 'Create QR codes', path: '/qr-generator' },
  'notepad': { id: 'notepad', name: 'Online Notepad', description: 'Simple text editor', path: '/notepad' },
  
  // Academic & Fun
  'gpa': { id: 'gpa', name: 'GPA Calculator', description: 'Calculate Grade Point Average', path: '/gpa' },
  'love': { id: 'love', name: 'Love Calculator', description: 'Fun compatibility calculator', path: '/love' },
};

const categoryMapping: Record<string, string[]> = {
  'Financial': ['percentage', 'loan', 'mortgage', 'interest', 'discount', 'tip', 'profit'],
  'Converters': ['currency', 'unit'],
  'Health': ['bmi-calc', 'bmr', 'bodyfat', 'calorie', 'pregnancy'],
  'Math': ['scientific', 'fraction', 'ratio', 'average', 'random'],
  'Measurement': ['area', 'volume', 'speed', 'energy'],
  'Time': ['clock', 'age-calc', 'date', 'time-calc', 'countdown', 'sleep'],
  'Utilities': ['status', 'ip-lookup', 'qr-generator', 'notepad'],
  'Academic': ['gpa'],
  'Fun': ['love'],
};

export function RelatedCalculators({ currentToolId, category, limit = 4 }: RelatedCalculatorsProps) {
  // Get tools from the same category
  const categoryTools = categoryMapping[category] || [];
  
  // Filter out current tool and get related tools
  const relatedToolIds = categoryTools
    .filter(id => id !== currentToolId)
    .slice(0, limit);
  
  const relatedTools = relatedToolIds
    .map(id => allTools[id])
    .filter(Boolean);

  // If not enough tools in same category, add popular tools
  if (relatedTools.length < limit) {
    const popularTools = ['percentage', 'bmi-calc', 'loan', 'currency', 'unit', 'age-calc'];
    const additionalTools = popularTools
      .filter(id => id !== currentToolId && !relatedToolIds.includes(id))
      .slice(0, limit - relatedTools.length)
      .map(id => allTools[id])
      .filter(Boolean);
    
    relatedTools.push(...additionalTools);
  }

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mb-12" data-testid="section-related-calculators">
      <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedTools.map((tool) => (
          <Link 
            key={tool.id} 
            href={tool.path}
            className="glass-card p-4 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group"
            data-testid={`related-tool-${tool.id}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
