<script setup>
import Mathml2latex from 'mathml-to-latex'


useHead(() => {
    return {
        title: 'MathML to LaTeX Converter - Convert MathML Equations to LaTeX Code Online',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Convert MathML equations to LaTeX code online with our free MathML to LaTeX converter tool. Simply copy and paste your MathML code and download the resulting LaTeX code.'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'MathML to LaTeX, convert MathML to LaTeX, MathML to LaTeX converter, LaTeX equations, online LaTeX converter'
            }
        ],
        script: [
            {
                hid: 'tags',
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "MathML to LaTeX Converter - Convert MathML Equations to LaTeX Code Online",
                    "description": "Convert MathML equations to LaTeX code online with our free MathML to LaTeX converter tool. Simply copy and paste your MathML code and download the resulting LaTeX code.",
                    "keywords": "MathML to LaTeX, convert MathML to LaTeX, MathML to LaTeX converter, LaTeX equations, online LaTeX converter",
                    "url": "https://latex-tools.netlify.app/mathml-to-latex-converter",
                    "image": "https://example.com/images/mathml-to-latex.png"
                }
            }
        ]
    }
})
const mathml = ref("")
const latex = ref("")
const formattedLatex = ref("")

// function formatLatex(latexCode) {
//     // Replace &nbsp; with a space
//     latexCode = latexCode.replace(/&nbsp;/g, ' ');

//     // Replace &plus; with +
//     latexCode = latexCode.replace(/&plus;/g, '+');

//     // Replace &minus; with -
//     latexCode = latexCode.replace(/&minus;/g, '-');

//     // Replace &invisibleTimes; with a space
//     latexCode = latexCode.replace(/&invisibleTimes;/g, ' ');

//     // Replace unicode escape sequences with their respective characters
//     latexCode = latexCode.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
//         return String.fromCharCode(parseInt(grp, 16));
//     });

//     // Replace HTML entities with their respective character
//     return latexCode;
// }

function formatLatexString(input) {
    // Replace &coloneq; with =
    input = input.replace(/&coloneq;/g, "=");

    // Replace &nbsp; with space
    input = input.replace(/&nbsp;/g, " ");

    // Replace &minus; with -
    input = input.replace(/&minus;/g, "-");

    // Replace &InvisibleTimes; with * or space
    input = input.replace(/&InvisibleTimes;/g, "*");
    input = input.replace(/&InvisibleTimes; /g, " ");

    // Replace \left[0\right] with _0 or _anynumber
    input = input.replace(/\\left\[0\\right\]/g, "_0");
    input = input.replace(/\\left\[(\d+)\\right\]/g, function (match, p1) {
        return "_" + p1;
    });

    // Replace greek characters
    const greekChars = {
        alpha: "\\alpha",
        beta: "\\beta",
        gamma: "\\gamma",
        delta: "\\delta",
        epsilon: "\\epsilon",
        zeta: "\\zeta",
        eta: "\\eta",
        theta: "\\theta",
        iota: "\\iota",
        kappa: "\\kappa",
        lambda: "\\lambda",
        mu: "\\mu",
        nu: "\\nu",
        xi: "\\xi",
        omicron: "\\omicron",
        pi: "\\pi",
        rho: "\\rho",
        sigma: "\\sigma",
        tau: "\\tau",
        upsilon: "\\upsilon",
        phi: "\\phi",
        chi: "\\chi",
        psi: "\\psi",
        omega: "\\omega"
    };

    for (let key in greekChars) {
        const regex = new RegExp(`&${key};`, "g");
        input = input.replace(regex, greekChars[key]);
    }

    return input;
}



function convertMathmlToLatex() {
    let result = Mathml2latex.convert(mathml.value);
    let format = formatLatexString(result);
    formattedLatex.value = format
    latex.value = format
}



function copyToClipboard() {
    const textarea = document.querySelector('.latex-code')
    textarea.select()
    document.execCommand('copy')
    // Optional: show a notification that the text was copied
    alert('LaTeX code copied to clipboard!');
}

</script>
<template>
    <section>
        <div class="container">
            <h1 class="title">MathML to LaTex</h1>
            <div class="input-container">
                <textarea name="" class="dropzone" placeholder="Paste Your MathML Here" v-model="mathml" id="" cols="30"
                    rows="10"></textarea>
                <button class="btn" @click="convertMathmlToLatex">Convert</button>
            </div>
            <!-- <p>MathML: {{ mathml }}</p> -->
            <div v-if="latex">
                <h2>Latex Output</h2>
                <div class="output">
                    <!-- <pre><code  class="language-latex">{{ latex }}</code></pre> -->
                    <textarea class="dropzone latex-code" v-model="latex" id="" cols="30" rows="10"></textarea>
                    <Copy class="copy-icon" @click="copyToClipboard" />

                </div>
            </div>
        </div>
    </section>
</template>
  

<style scoped>
.latex-code {
    background: none;
    text-align: left;
    /* white-space: pre; */
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

.output {
    position: relative;
}

.btn {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    background-color: #3a3a3a;
        color: blanchedalmond;
    outline: none;
    border: none;
    padding: 0.6rem;
    margin: 1rem auto;
    font-size: 1rem;

}
</style>
  
