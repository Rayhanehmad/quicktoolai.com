import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, RefreshCw } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";

// Comprehensive list of world currencies with their names
const currencies = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  INR: 'Indian Rupee',
  MXN: 'Mexican Peso',
  BRL: 'Brazilian Real',
  ZAR: 'South African Rand',
  RUB: 'Russian Ruble',
  KRW: 'South Korean Won',
  TRY: 'Turkish Lira',
  SEK: 'Swedish Krona',
  NOK: 'Norwegian Krone',
  DKK: 'Danish Krone',
  PLN: 'Polish Zloty',
  THB: 'Thai Baht',
  IDR: 'Indonesian Rupiah',
  HUF: 'Hungarian Forint',
  CZK: 'Czech Koruna',
  ILS: 'Israeli Shekel',
  CLP: 'Chilean Peso',
  PHP: 'Philippine Peso',
  AED: 'UAE Dirham',
  COP: 'Colombian Peso',
  SAR: 'Saudi Riyal',
  MYR: 'Malaysian Ringgit',
  RON: 'Romanian Leu',
  SGD: 'Singapore Dollar',
  HKD: 'Hong Kong Dollar',
  BGN: 'Bulgarian Lev',
  HRK: 'Croatian Kuna',
  NZD: 'New Zealand Dollar',
  ARS: 'Argentine Peso',
  ISK: 'Icelandic Krona',
  PKR: 'Pakistani Rupee',
  VND: 'Vietnamese Dong',
  EGP: 'Egyptian Pound',
  KWD: 'Kuwaiti Dinar',
  BDT: 'Bangladeshi Taka',
  NGN: 'Nigerian Naira',
  UAH: 'Ukrainian Hryvnia',
  QAR: 'Qatari Riyal',
  PEN: 'Peruvian Sol',
  MAD: 'Moroccan Dirham',
  OMR: 'Omani Rial',
  KES: 'Kenyan Shilling',
  GHS: 'Ghanaian Cedi',
  JOD: 'Jordanian Dinar',
  BHD: 'Bahraini Dinar',
  LKR: 'Sri Lankan Rupee',
  MMK: 'Myanmar Kyat',
  UZS: 'Uzbekistan Sum',
  TZS: 'Tanzanian Shilling',
  DZD: 'Algerian Dinar',
  IQD: 'Iraqi Dinar',
  UGX: 'Ugandan Shilling',
  CRC: 'Costa Rican Colon',
  GTQ: 'Guatemalan Quetzal',
  HNL: 'Honduran Lempira',
  GEL: 'Georgian Lari',
  AMD: 'Armenian Dram',
  AZN: 'Azerbaijani Manat',
  BYN: 'Belarusian Ruble',
  KZT: 'Kazakhstani Tenge',
  UYU: 'Uruguayan Peso',
  BOB: 'Bolivian Boliviano',
  PYG: 'Paraguayan Guarani',
  DOP: 'Dominican Peso',
  JMD: 'Jamaican Dollar',
  TTD: 'Trinidad and Tobago Dollar',
  BAM: 'Bosnia-Herzegovina Mark',
  RSD: 'Serbian Dinar',
  MKD: 'Macedonian Denar',
  ALL: 'Albanian Lek',
  LBP: 'Lebanese Pound',
  SYP: 'Syrian Pound',
  YER: 'Yemeni Rial',
  AFN: 'Afghan Afghani',
  NPR: 'Nepalese Rupee',
  MVR: 'Maldivian Rufiyaa',
  BTN: 'Bhutanese Ngultrum',
  LAK: 'Lao Kip',
  KHR: 'Cambodian Riel',
  BND: 'Brunei Dollar',
  MOP: 'Macanese Pataca',
  TWD: 'Taiwan Dollar',
  KPW: 'North Korean Won',
  MNT: 'Mongolian Tugrik',
  KGS: 'Kyrgyzstani Som',
  TJS: 'Tajikistani Somoni',
  TMT: 'Turkmenistan Manat',
  GNF: 'Guinean Franc',
  SLL: 'Sierra Leonean Leone',
  LRD: 'Liberian Dollar',
  GMD: 'Gambian Dalasi',
  MWK: 'Malawian Kwacha',
  ZMW: 'Zambian Kwacha',
  BWP: 'Botswana Pula',
  LSL: 'Lesotho Loti',
  SZL: 'Swazi Lilangeni',
  NAD: 'Namibian Dollar',
  MZN: 'Mozambican Metical',
  AOA: 'Angolan Kwanza',
  CDF: 'Congolese Franc',
  RWF: 'Rwandan Franc',
  BIF: 'Burundian Franc',
  DJF: 'Djiboutian Franc',
  ERN: 'Eritrean Nakfa',
  ETB: 'Ethiopian Birr',
  SOS: 'Somali Shilling',
  SCR: 'Seychellois Rupee',
  MUR: 'Mauritian Rupee',
  MRU: 'Mauritanian Ouguiya',
  STN: 'Sao Tome Dobra',
  CVE: 'Cape Verdean Escudo',
  XOF: 'West African CFA Franc',
  XAF: 'Central African CFA Franc',
  KMF: 'Comorian Franc',
  MGA: 'Malagasy Ariary',
  TOP: 'Tongan Paʻanga',
  WST: 'Samoan Tala',
  VUV: 'Vanuatu Vatu',
  FJD: 'Fijian Dollar',
  PGK: 'Papua New Guinean Kina',
  SBD: 'Solomon Islands Dollar',
  XCD: 'East Caribbean Dollar',
  BBD: 'Barbadian Dollar',
  BZD: 'Belize Dollar',
  BMD: 'Bermudian Dollar',
  KYD: 'Cayman Islands Dollar',
  BSD: 'Bahamian Dollar',
  AWG: 'Aruban Florin',
  PAB: 'Panamanian Balboa',
  NIO: 'Nicaraguan Cordoba',
  SRD: 'Surinamese Dollar',
  GYD: 'Guyanese Dollar',
  HTG: 'Haitian Gourde',
  CUP: 'Cuban Peso',
  CUC: 'Cuban Convertible Peso',
  VES: 'Venezuelan Bolivar',
  SDG: 'Sudanese Pound',
  SSP: 'South Sudanese Pond',
  TND: 'Tunisian Dinar',
  LYD: 'Libyan Dinar',
  MDL: 'Moldovan Leu',
  IRR: 'Iranian Rial',
  FKP: 'Falkland Islands Pound',
  GIP: 'Gibraltar Pound',
  SHP: 'Saint Helena Pound',
  XPF: 'CFP Franc',
  ANG: 'Netherlands Antillean Guilder',
  ZWL: 'Zimbabwean Dollar'
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    setLoading(true);
    try {
      // Using Fawazahmed0 free currency API - no key required, no rate limits
      const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
      const data = await response.json();
      
      if (data && data.usd) {
        // Convert rates to use USD as base
        const usdRates: Record<string, number> = { USD: 1 };
        
        // Add rates for all our supported currencies
        Object.keys(currencies).forEach(code => {
          const lowerCode = code.toLowerCase();
          if (data.usd[lowerCode]) {
            usdRates[code] = data.usd[lowerCode];
          }
        });
        
        setRates(usdRates);
        setLastUpdated(new Date().toLocaleString());
      }
    } catch (error) {
      console.error('Failed to fetch rates:', error);
      // Fallback to basic rates if API fails
      setRates({
        USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.35, AUD: 1.52,
        CHF: 0.88, CNY: 7.24, INR: 83.12, MXN: 17.05
      });
    } finally {
      setLoading(false);
    }
  };

  const convert = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && rates[from] && rates[to]) {
      // Convert from -> USD -> to
      const inUsd = amt / rates[from];
      const converted = inUsd * rates[to];
      setResult(converted);
    }
  };

  const availableCurrencies = Object.keys(currencies).filter(code => rates[code]);

  return (
    <div id="currency" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-primary">Currency Converter</h3>
          <FavoriteButton toolId="currency" />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Convert {availableCurrencies.length}+ world currencies
        </p>
      </div>

      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Amount:</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
            className="text-center h-11"
            data-testid="input-amount"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-semibold mb-2">From:</label>
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className="bg-background h-11" data-testid="select-from">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {availableCurrencies.map(code => (
                  <SelectItem key={code} value={code}>
                    {code} - {currencies[code as keyof typeof currencies]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">To:</label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className="bg-background h-11" data-testid="select-to">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {availableCurrencies.map(code => (
                  <SelectItem key={code} value={code}>
                    {code} - {currencies[code as keyof typeof currencies]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          onClick={convert}
          className="flex-1 gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity h-12"
          disabled={!amount || loading}
          data-testid="button-convert"
        >
          <DollarSign className="w-4 h-4 mr-2" />
          Convert
        </Button>
        <Button
          onClick={fetchRates}
          variant="outline"
          className="h-12 px-4"
          disabled={loading}
          data-testid="button-refresh"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      {result !== null && (
        <div className="space-y-3 animate-slide-up">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary" data-testid="result">
            <div className="text-3xl font-bold text-primary text-center">
              {result.toFixed(2)} {to}
            </div>
            <div className="text-xs text-center text-muted-foreground mt-1">
              {amount} {from} = {result.toFixed(2)} {to}
            </div>
          </div>
          {lastUpdated && (
            <div className="text-xs text-center text-muted-foreground">
              Rates updated: {lastUpdated}
            </div>
          )}
        </div>
      )}

      {loading && (
        <div className="text-center text-sm text-muted-foreground">
          Fetching latest rates...
        </div>
      )}
    </div>
  );
}
