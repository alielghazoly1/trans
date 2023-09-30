let ull = document.getElementById("ull");
let textarea = document.getElementById("trans");
let textarea2 = document.getElementById("trans2");

//
function ckick() {
  ull.style.display = "block";
}
function services() {
  scrollTo({top:700,
  behavior:"smooth"});
  ull.style.display = "none";
}
function about() {
  scrollTo({top:2000,
    behavior:"smooth"});
  ull.style.display = "none";
}
function contact() {
  scrollTo({top:700,
    behavior:"smooth"});
  ull.style.display = "none";

}
//

function re() {
  let arb = document.getElementById("arb");
  let frn = document.getElementById("frn");
  let textrans = document.getElementById("texttrans");
  if (arb.innerHTML === "عربي") {
    arb.innerHTML = "فرانكو";
    frn.innerHTML = "عربي";
    textrans.innerHTML = "Translated to Arabic";

    textarea.setAttribute("onkeyup", "trans2()");
  } else {
    arb.innerHTML = "عربي";
    frn.innerHTML = "فرانكو";
    textrans.innerHTML = "Translated to Franco";
    textarea.setAttribute("onkeyup", "trans()");
  }
}

function trans() {
  textarea2.innerHTML = textarea.value
    .replace(/ا|ة|أ/g, "a")
    .replace(/ب/g, "b")
    .replace(/ث/g, "c")
    .replace(/د|ض/g, "d")
    .replace(/ع/g, "3")
    .replace(/غ/g, "4")
    .replace(/خ/g, "5")
    .replace(/ت|ط/g, "t")
    .replace(/ح/g, "7")
    .replace(/ه/g, "h")
    .replace(/ف/g, "f")
    .replace(/ج/g, "g")
    .replace(/ك/g, "k")
    .replace(/ل/g, "l")
    .replace(/م/g, "m")
    .replace(/ن/g, "n")
    .replace(/و/g, "o")
    .replace(/ق/g, "q")
    .replace(/ر/g, "r")
    .replace(/ص|س/g, "s")
    .replace(/ت/gi, "t")
    .replace(/ى/gi, "e")
    .replace(/وا/gi, "w")
    .replace(/ي/gi, "y")
    .replace(/ز|ذ|ظ/g, "z")
    .replace(/ي|إ/g, "e")
    .replace(/ق/g, "8")
    .replace(/ش/g, "sh")
    .replace(/ء|ؤ|ئ/g, "2");
}
function trans2() {
  textarea2.innerHTML = textarea.value
    .replace(/a/gi, "ا")
    .replace(/b|p/gi, "ب")
    .replace(/c/gi, "ث")
    .replace(/d/gi, "د")
    .replace(/3/gi, "ع")
    .replace(/4/gi, "غ")
    .replace(/5/gi, "خ")
    .replace(/t/gi, "ت")
    .replace(/7/gi, "ح")
    .replace(/h/gi, "ه")
    .replace(/f|v/gi, "ف")
    .replace(/g|j/gi, "ج")
    .replace(/k/gi, "ك")
    .replace(/l/gi, "ل")
    .replace(/m/gi, "م")
    .replace(/n/gi, "ن")
    .replace(/o|w/gi, "و")
    .replace(/q/gi, "ق")
    .replace(/r/gi, "ر")
    .replace(/s/gi, "س")
    .replace(/t/gi, "ت")
    .replace(/e/gi, "ى")
    .replace(/w/gi, "وا")
    .replace(/y|i|u|e/gi, "ي")
    .replace(/z/gi, "ز")
    .replace(/e/gi, "إ")
    .replace(/8/gi, "ق")
    .replace(/sh/gi, "ش")
    .replace(/2/gi, "ء");
}
// start copy taxt
function copytaxt() {
  let inputElement = document.createElement("input");
  inputElement.value = document.getElementById("trans2").innerHTML;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  document.body.removeChild(inputElement);
  document.getElementById("copy").textContent = "تم النسخ";
}
// start clear
function cleaaar() {
  document.getElementById("copy").textContent = "نسخ";
  if (trans.value != "") {
    document.getElementById("trans").value = "";
    document.getElementById("trans2").innerHTML = "";
  }
}
