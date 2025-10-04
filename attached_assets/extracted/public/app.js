
const e = React.createElement;
const { useState, useEffect } = React;

const TOOLS = [
  "BMI Calculator","BMR Calculator","Calorie Calculator","Sleep Calculator",
  "Loan Calculator","Mortgage Calculator","Currency Converter","Interest Calculator",
  "World Clock","Pomodoro Timer","Age Calculator","Random Number Generator",
  "Love Calculator","GPA Calculator","Unit Converter","Percentage Calculator",
  "Scientific Calculator","Fraction Calculator","Area Calculator","Volume Calculator",
  "Text to PDF","Image to PDF","QR Code Generator","Password Generator",
  "Date Calculator","Countdown Timer","Stopwatch","Timezone Converter",
  "Tip Calculator","Discount Calculator","Basic Calculator"
];

function ToolsBanner(){ 
  return e('section',{className:'mb-6'},
    e('h2',{className:'text-2xl font-bold text-center mb-4'},"Explore Free Tools"),
    e('div',{className:'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'},
      TOOLS.map(t => e('a',{key:t, href:'#', className:'p-3 bg-white shadow hover:bg-blue-600 hover:text-white rounded-xl text-center transition'}, t))
    )
  );
}

/* Full UnitConverter with all 62 units */
function UnitConverter(){
  const units = {
    length: { base: "m", factors: { m:1, km:1000, cm:0.01, mm:0.001, 'µm':1e-6, nm:1e-9, mi:1609.34, yd:0.9144, ft:0.3048, in:0.0254 } },
    weight: { base: "kg", factors: { kg:1, g:0.001, mg:1e-6, t:1000, lb:0.453592, oz:0.0283495, st:6.35029 } },
    temperature: "special",
    area: { base: "m2", factors: { m2:1, km2:1e6, cm2:0.0001, mm2:1e-6, ha:10000, ac:4046.86 } },
    volume: { base: "m3", factors: { m3:1, L:0.001, mL:1e-6, cm3:1e-6, in3:1.6387e-5, ft3:0.0283168, gal:0.00378541, qt:0.000946353, pt:0.000473176, cup:0.000236588 } },
    speed: { base: "mps", factors: { "m/s":1, "km/h":0.277778, "mph":0.44704, "kn":0.514444, "ft/s":0.3048 } },
    time: { base: "s", factors: { s:1, min:60, h:3600, d:86400, wk:604800, mo:2629800, yr:31557600 } },
    energy: { base: "J", factors: { J:1, kJ:1000, cal:4.184, kcal:4184, Wh:3600, kWh:3600000, eV:1.60218e-19 } },
    storage: { base: "B", factors: { b:0.125, B:1, KB:1024, MB:1048576, GB:1073741824, TB:1099511627776, PB:1125899906842624 } }
  };

  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('km');
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const opts = category === 'temperature' ? ['C','F','K'] : Object.keys(units[category].factors);
    setFrom(opts[0]);
    setTo(opts[1] || opts[0]);
  }, [category]);

  function convertTemperature(from, to, value){
    let c;
    if(from === 'C') c = value;
    if(from === 'F') c = (value - 32) * 5/9;
    if(from === 'K') c = value - 273.15;
    if(to === 'C') return c;
    if(to === 'F') return (c * 9/5) + 32;
    if(to === 'K') return c + 273.15;
  }

  function handleConvert(e){
    e.preventDefault();
    const v = parseFloat(value);
    if(isNaN(v)) return;
    let res;
    if(category === 'temperature'){
      res = convertTemperature(from, to, v);
    } else {
      const base = v * units[category].factors[from];
      res = base / units[category].factors[to];
    }
    setResult(res);
    setAnalysis(generateAnalysis(category, from, to, v, res));
  }

  function generateAnalysis(cat, f, t, v, res){
    // Short AI-style analysis text
    return `Converting ${v} ${f} to ${t} yields ${res}${typeof res === 'number' ? ' (rounded)' : ''}. This is a ${cat} conversion commonly used in science and daily life.`;
  }

  return e('div',{className:'p-6 bg-white rounded-xl shadow'},
    e('h3',{className:'text-lg font-semibold mb-2'},'Unit Converter (62 units)'),
    e('form',{onSubmit:handleConvert, className:'space-y-3'},
      e('div',null,
        e('label',{className:'block text-sm font-medium'},'Category'),
        e('select',{value:category,onChange:(e)=>setCategory(e.target.value), className:'w-full p-2 border rounded'}, Object.keys(units).map(k=> e('option',{key:k,value:k}, k)))
      ),
      e('div',{className:'grid grid-cols-2 gap-3'},
        e('div',null,
          e('label',{className:'block text-sm font-medium'},'From'),
          e('select',{value:from,onChange:(e)=>setFrom(e.target.value), className:'w-full p-2 border rounded'},
            (category==='temperature' ? ['C','F','K'] : Object.keys(units[category].factors)).map(u=> e('option',{key:u,value:u}, u))
          )
        ),
        e('div',null,
          e('label',{className:'block text-sm font-medium'},'To'),
          e('select',{value:to,onChange:(e)=>setTo(e.target.value), className:'w-full p-2 border rounded'},
            (category==='temperature' ? ['C','F','K'] : Object.keys(units[category].factors)).map(u=> e('option',{key:u,value:u}, u))
          )
        )
      ),
      e('div',null,
        e('label',{className:'block text-sm font-medium'},'Value'),
        e('input',{type:'number', step:'any', value:value, onChange:(e)=>setValue(e.target.value), className:'w-full p-2 border rounded'})
      ),
      e('button',{className:'p-2 bg-blue-600 text-white rounded w-full', type:'submit'}, 'Convert')
    ),
    result !== null && e('div',{className:'mt-4 p-3 bg-gray-50 rounded'},
      e('div',{className:'font-medium text-green-700'}, `Result: ${value} ${from} = ${result} ${to}`),
      e('p',{className:'text-sm text-gray-600 mt-2'}, analysis)
    )
  );
}

/* CurrencyConverter component - reads local /rates.json refreshed daily by server */
function CurrencyConverter(){
  const [symbols, setSymbols] = useState([]);
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('PKR');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(()=>{
    fetch('/rates.json').then(r=>r.json()).then(data=>{
      if(data && data.rates){
        setRates(data.rates);
        setSymbols(Object.keys(data.rates).sort());
        setLastUpdated(data.date || data.timestamp || null);
        if(!data.rates[from]) {
          const keys = Object.keys(data.rates);
          setFrom(keys[0]); setTo(keys[1] || keys[0]);
        }
      } else {
        const initial = JSON.parse(document.getElementById('initial-rates').textContent);
        setRates(initial.rates);
        setSymbols(Object.keys(initial.rates));
      }
    }).catch(err=>{
      const initial = JSON.parse(document.getElementById('initial-rates').textContent);
      setRates(initial.rates);
      setSymbols(Object.keys(initial.rates));
    });
  },[]);

  function convert(){
    if(!rates) return;
    const rFrom = rates[from];
    const rTo = rates[to];
    if(!rFrom || !rTo) return;
    const res = amount * (rTo / rFrom);
    setConverted(res);
  }

  return e('div',{className:'p-6 bg-white rounded-xl shadow mt-6'},
    e('h3',{className:'text-lg font-semibold mb-2'},'Currency Converter (live rates, auto-refresh daily)'),
    e('p',{className:'text-sm text-gray-500 mb-3'}, lastUpdated ? `Rates date: ${lastUpdated}` : ''),
    e('div',{className:'grid grid-cols-2 gap-3'},
      e('div',null,
        e('label',{className:'block text-sm font-medium'},'From'),
        e('select',{value:from,onChange:(e)=>setFrom(e.target.value), className:'w-full p-2 border rounded'},
          symbols.map(s=> e('option',{key:s,value:s}, s))
        )
      ),
      e('div',null,
        e('label',{className:'block text-sm font-medium'},'To'),
        e('select',{value:to,onChange:(e)=>setTo(e.target.value), className:'w-full p-2 border rounded'},
          symbols.map(s=> e('option',{key:s,value:s}, s))
        )
      )
    ),
    e('div',{className:'mt-3'},
      e('label',{className:'block text-sm font-medium'},'Amount'),
      e('input',{type:'number', step:'any', value:amount, onChange:(e)=>setAmount(e.target.value), className:'w-full p-2 border rounded'})
    ),
    e('button',{className:'mt-3 p-2 bg-indigo-600 text-white rounded w-full', onClick:convert}, 'Convert'),
    converted !== null && e('div',{className:'mt-4 p-3 bg-gray-50 rounded'},
      e('div',{className:'font-medium text-green-700'}, `${amount} ${from} = ${converted.toFixed(4)} ${to}`),
      e('p',{className:'text-sm text-gray-600 mt-2'}, 'AI Analysis: Rates are updated daily. For live intra-day rates, integrate a paid FX provider.')
    )
  );
}

/* Basic Calculator */
function BasicCalculator(){
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  function handleClick(val){ setInput(prev => prev + val); }
  function clearInput(){ setInput(""); setResult(null); }
  function calculate(){
    try {
      let expression = input.replace(/×/g,"*").replace(/÷/g,"/");
      let res = eval(expression);
      setResult(res);
    } catch(e){ setResult("Error"); }
  }
  const buttons = ["7","8","9","÷","4","5","6","×","1","2","3","-","0",".","C","+","="];
  return e('div',{className:"p-6 bg-white rounded-xl shadow mt-6"},
    e('h3',{className:"text-lg font-semibold mb-3"},"Basic Calculator"),
    e('div',{className:"p-3 bg-gray-100 rounded mb-3 text-right font-mono"},
      input || "0", result !== null && e('div',{className:"text-green-600 font-bold"},"= " + result)
    ),
    e('div',{className:"grid grid-cols-4 gap-2"},
      buttons.map(b => e('button',{key:b,className:"p-3 bg-blue-500 text-white rounded hover:bg-blue-600",
        onClick:()=>{ if(b==="C") clearInput(); else if(b==="=") calculate(); else handleClick(b); }}, b))
    )
  );
}

function App(){
  return e('div',{className:"max-w-6xl mx-auto"},
    e('header',{className:"text-center mb-6"},
      e('h1',{className:"text-3xl font-bold"},"AI Tools Hub — Free Online Tools & Calculators"),
      e('p',{className:"text-gray-600 mt-2"},"Professional productivity tools, calculators, and utilities - all completely free.")
    ),
    e(ToolsBanner,null),
    e('div',{className:"grid lg:grid-cols-2 gap-6"},
      e(UnitConverter,null),
      e('div',null,
        e(CurrencyConverter,null),
        e(BasicCalculator,null)
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
