import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from "lucide-react";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{ finalPrice: number; savings: number } | null>(null);

  const calculate = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (!isNaN(price) && !isNaN(discount)) {
      const savings = (price * discount) / 100;
      const finalPrice = price - savings;

      setResult({
        finalPrice,
        savings
      });
    }
  };

  return (
    <div id="discount" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Discount Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate final price after discount</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Original Price ($):</label>
          <Input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="100.00"
            step="0.01"
            className="text-center h-11"
            data-testid="input-price"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Discount (%):</label>
          <Input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="20"
            className="text-center h-11"
            data-testid="input-discount"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!originalPrice || !discountPercent}
        data-testid="button-calculate"
      >
        <Tag className="w-4 h-4 mr-2" />
        Calculate
      </Button>

      {result && (
        <div className="space-y-3 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center" data-testid="final-price">
              ${result.finalPrice.toFixed(2)}
            </div>
            <div className="text-xs text-center text-muted-foreground">Final Price</div>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-center">
            <div className="text-sm font-semibold text-green-700 dark:text-green-400" data-testid="savings">
              You save ${result.savings.toFixed(2)}
            </div>
            <div className="text-xs text-green-600 dark:text-green-500">Total Savings</div>
          </div>
        </div>
      )}
    </div>
  );
}
