function mathMLToKatex(mathML) {
    // Convert MathML string to a DOM object
    const parser = new DOMParser();
    const mathMlDom = parser.parseFromString(mathML, "text/xml").documentElement;
  
    // Convert the MathML DOM object to a KaTeX string
    let katexString = "";
    const tag = mathMlDom.tagName.toLowerCase();
    switch (tag) {
      case "mrow":
        katexString = Array.from(mathMlDom.children).map((child) => mathMLToKatex(child.outerHTML)).join("");
        break;
      case "mo":
        const operator = mathMlDom.textContent;
        switch (operator) {
          case "×":
            katexString = "\\cdot ";
            break;
          case "−":
            katexString = "-";
            break;
          case "+":
          case "=":
            katexString = operator;
            break;
          default:
            katexString = `\\${operator}`;
            break;
        }
        break;
      case "mn":
      case "mi":
        katexString = mathMlDom.textContent;
        break;
      case "mfrac":
        const numerator = mathMLToKatex(mathMlDom.querySelector("mn, mi, mrow").outerHTML);
        const denominator = mathMLToKatex(mathMlDom.querySelector("mn:last-of-type, mi:last-of-type, mrow:last-of-type").outerHTML);
        katexString = `\\frac{${numerator}}{${denominator}}`;
        break;
      case "msup":
        const base = mathMLToKatex(mathMlDom.querySelector("mn, mi, mrow").outerHTML);
        const exponent = mathMLToKatex(mathMlDom.querySelector("mn:last-of-type, mi:last-of-type, mrow:last-of-type").outerHTML);
        katexString = `^${exponent}{${base}}`;
        break;
      case "mroot":
        const radicand = mathMLToKatex(mathMlDom.querySelector("mn, mi, mrow").outerHTML);
        const degree = mathMLToKatex(mathMlDom.querySelector("mn:last-of-type, mi:last-of-type, mrow:last-of-type").outerHTML);
        katexString = `\\sqrt[${degree}]{${radicand}}`;
        break;
      case "msqrt":
        const inner = mathMLToKatex(mathMlDom.querySelector("mn, mi, mrow").outerHTML);
        katexString = `\\sqrt{${inner}}`;
        break;
      case "munderover":
        const baseElem = mathMlDom.querySelector("mn, mi, mrow");
        const underElem = mathMLToKatex(mathMlDom.querySelector("munder").querySelector("mn, mi, mrow").outerHTML);
        const overElem = mathMLToKatex(mathMlDom.querySelector("mover").querySelector("mn, mi, mrow").outerHTML);
        const base1 = mathMLToKatex(baseElem.outerHTML);
        const underover = `_{${underElem}}^{${overElem}}`;
        katexString = `${base1}${underover}`;
        break;
      default:
        console.log(`Unsupported tag: ${tag}`);
        break;
    }
  
    return katexString;
  }
  

const strings = "<math><mrow><mi>u</mi><msub><mi>0</mi><mn> </mn></msub><mo>=</mo><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mrow><mo>(</mo><mrow><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>-</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow><mo>)</mo><mo>*</mo><mi>P</mi><msub><mi>0</mi><mn> </mn></msub></mrow><mo>)</mo></mrow><mo>;</mo><mo> </mo><mo>#</mo><mo> </mo><mi>Forward</mi><mo> </mo><mi>Roll</mi><mo> </mo><mi>Coating</mi></mrow></math>"

let result = mathMLToKatex(strings)
console.log(result)