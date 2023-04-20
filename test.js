function mathMLToLatex() {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
    const xml = parser.parseFromString(mathml.value, "application/xml");
    const escapedXml = serializer.serializeToString(xml)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    const node = parser.parseFromString(escapedXml, "application/xml").documentElement;
    let texString = convertMML(node)
    latex.value = texString
    return texString;
}

function convertMML(node) {
    if (!node) {
        return '';
    }

    const nodeType = node.nodeType;
    if (nodeType === Node.TEXT_NODE) {
        return node.textContent;
    } else if (nodeType === Node.ELEMENT_NODE) {
        const nodeName = node.nodeName.toLowerCase();
        let texString = "";
        if (nodeName === "mi" || nodeName === "mn" || nodeName === "mtext") {
            texString += node.textContent;
        } else if (nodeName === "mo") {
            const operator = node.textContent;
            if (operator === "\u2212") {
                texString += "-";
            } else if (operator === "\u00d7") {
                texString += "\\times";
            } else if (operator === "\u00f7") {
                texString += "\\div";
            } else {
                texString += operator;
            }
        } else if (nodeName === "msup") {
            const base = convertMML(node.childNodes[0]);
            const exponent = convertMML(node.childNodes[1]);
            texString += `{${base}}^{${exponent}}`;
        } else if (nodeName === "msqrt") {
            const radicand = convertMML(node.childNodes[0]);
            texString += `\\sqrt{${radicand}}`;
        } else if (nodeName === "mfrac") {
            const numerator = convertMML(node.childNodes[0]);
            const denominator = convertMML(node.childNodes[1]);
            texString += `\\frac{${numerator}}{${denominator}}`;
        } else if (nodeName === "mrow") {
            for (let i = 0; i < node.childNodes.length; i++) {
                texString += convertMML(node.childNodes[i]);
            }
        } else if (nodeName === "mover") {
            const base = convertMML(node.childNodes[0]);
            const overscript = convertMML(node.childNodes[1]);
            texString += `\\overset{${overscript}}{${base}}`;
        } else if (nodeName === "munder") {
            const base = convertMML(node.childNodes[0]);
            const underscript = convertMML(node.childNodes[1]);
            texString += `\\underset{${underscript}}{${base}}`;
        } else if (nodeName === "msub" || nodeName === "msubsup") {
            const base = convertMML(node.childNodes[0]);
            const subscript = convertMML(node.childNodes[1]);
            texString += `{${base}}_{${subscript}}`;
            if (nodeName === "msubsup") {
                const superscript = convertMML(node.childNodes[2]);
                texString += `^{${superscript}}`;
            }
        } else if (nodeName === "mover") {
            const base = convertMML(node.childNodes[0]);
            const overscript = convertMML(node.childNodes[1]);
            texString += `\\overset{${overscript}}{${base}}`;
        } else if (nodeName === "munder") {
            const base = convertMML(node.childNodes[0]);
            const underscript = convertMML(node.childNodes[1]);
            texString += `\\underset{${underscript}}{${base}}}`;
        } else if (nodeName === "mtable") {
            texString += "\begin{matrix}";
            for (let i = 0; i < node.childNodes.length; i++) {
                const row = node.childNodes[i];
                for (let j = 0; j < row.childNodes.length; j++) {
                    const cell = row.childNodes[j];
                    const cellContent = convertMML(cell);
                    texString += cellContent;
                    if (j !== row.childNodes.length - 1) {
                        texString += "&";
                    }
                }
                if (i !== node.childNodes.length - 1) {
                    texString += "\\";
                }
            }
            texString += "\end{matrix}";
        } else {
            texString += "";
        }
        return texString;
    } else {
        return "";
    }
}

const mathml = "<math><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>";
const latex = mathMLToLatex(mathml);
console.log(latex); // Output: x+2