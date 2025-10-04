import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Star, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

// All available tools
const ALL_TOOLS = [
  { id: 'percentage', name: 'Percentage Calculator', category: 'Financial' },
  { id: 'loan', name: 'Loan Calculator', category: 'Financial' },
  { id: 'mortgage', name: 'Mortgage Calculator', category: 'Financial' },
  { id: 'interest', name: 'Interest Calculator', category: 'Financial' },
  { id: 'discount', name: 'Discount Calculator', category: 'Financial' },
  { id: 'tip', name: 'Tip Calculator', category: 'Financial' },
  { id: 'profit', name: 'Profit Calculator', category: 'Financial' },
  { id: 'currency', name: 'Currency Converter', category: 'Converters' },
  { id: 'unit', name: 'Unit Converter', category: 'Converters' },
  { id: 'bmi', name: 'BMI Calculator', category: 'Health & Fitness' },
  { id: 'bmr', name: 'BMR Calculator', category: 'Health & Fitness' },
  { id: 'bodyfat', name: 'Body Fat Calculator', category: 'Health & Fitness' },
  { id: 'calorie', name: 'Calorie Calculator', category: 'Health & Fitness' },
  { id: 'pregnancy', name: 'Pregnancy Calculator', category: 'Health & Fitness' },
  { id: 'scientific', name: 'Scientific Calculator', category: 'Math & Science' },
  { id: 'fraction', name: 'Fraction Calculator', category: 'Math & Science' },
  { id: 'ratio', name: 'Ratio Calculator', category: 'Math & Science' },
  { id: 'average', name: 'Average Calculator', category: 'Math & Science' },
  { id: 'random', name: 'Random Number Generator', category: 'Math & Science' },
  { id: 'area', name: 'Area Calculator', category: 'Measurement' },
  { id: 'volume', name: 'Volume Calculator', category: 'Measurement' },
  { id: 'speed', name: 'Speed Calculator', category: 'Measurement' },
  { id: 'energy', name: 'Energy Calculator', category: 'Measurement' },
  { id: 'worldclock', name: 'World Clock', category: 'Time & Date' },
  { id: 'age', name: 'Age Calculator', category: 'Time & Date' },
  { id: 'date', name: 'Date Calculator', category: 'Time & Date' },
  { id: 'time', name: 'Time Calculator', category: 'Time & Date' },
  { id: 'countdown', name: 'Countdown Timer', category: 'Time & Date' },
  { id: 'sleep', name: 'Sleep Calculator', category: 'Time & Date' },
  { id: 'status', name: 'Website Status Checker', category: 'Utilities' },
  { id: 'ip', name: 'IP Lookup', category: 'Utilities' },
  { id: 'qr', name: 'QR Generator', category: 'Utilities' },
  { id: 'notepad', name: 'Online Notepad', category: 'Utilities' },
  { id: 'gpa', name: 'GPA Calculator', category: 'Academic' },
  { id: 'love', name: 'Love Calculator', category: 'Fun' },
];

export function FavoritesPanel() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteTools = ALL_TOOLS.filter((tool) => isFavorite(tool.id));

  const scrollToTool = (toolId: string) => {
    const element = document.getElementById(toolId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 relative"
          data-testid="button-open-favorites"
        >
          <Star className="w-4 h-4" />
          Favorites
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle>Favorite Tools</SheetTitle>
          <SheetDescription>
            Quick access to your bookmarked calculators
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3">
          {favoriteTools.length === 0 ? (
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No favorites yet. Click the star icon on any tool to bookmark it!
              </p>
            </Card>
          ) : (
            favoriteTools.map((tool) => (
              <Card
                key={tool.id}
                className="p-4 hover:bg-primary/5 transition-colors cursor-pointer group"
                onClick={() => scrollToTool(tool.id)}
                data-testid={`favorite-${tool.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(tool.id);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      data-testid={`unfavorite-${tool.id}`}
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
