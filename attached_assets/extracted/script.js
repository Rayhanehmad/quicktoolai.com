const tools=["bmi","age","percentage","loan","mortgage","currency","unit","bmr","discount","tip",
"gpa","date","time","stopwatch","countdown","bodyfat","calorie","pregnancy","ratio","average","scientific",
"random","profit","speed","volume","area","energy","fraction","love","interest"];
window.onload=()=>{const c=document.getElementById("tools-list");tools.forEach(t=>{const a=document.createElement("a");
a.href=`tools/${t}.html`;a.innerText=t.charAt(0).toUpperCase()+t.slice(1)+" Calculator";c.appendChild(a)});
document.getElementById("search").addEventListener("keyup",e=>{const term=e.target.value.toLowerCase();
[...c.children].forEach(a=>{a.style.display=a.innerText.toLowerCase().includes(term)?"block":"none"})})};
