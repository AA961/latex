<script setup>
import Mathml2latex from 'mathml-to-latex'
import signMap from '@/assets/signMap.json'

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

function replaceLatexSigns(inputString) {

    let replacedString = inputString;

    // Iterate over each sign mapping and replace occurrences
    for (const sign in signMap) {
        if (signMap.hasOwnProperty(sign)) {
            const regex = new RegExp(sign, 'g');
            replacedString = replacedString.replace(regex, signMap[sign]);
        }
    }

    return replacedString;
}

function formatLatexString(input) {
    input = input.replace(/&coloneq;/g, "=");

    input = input.replace(/&nbsp;/g, " ");

    input = input.replace(/&minus;/g, "-");

    input = input.replace(/&InvisibleTimes;/g, "*");
    input = input.replace(/&InvisibleTimes;/g, " ");

    input = input.replace(/\\left\[0\\right\]/g, "_0");
    input = input.replace(/\\left\[(\d+)\\right\]/g, function (match, p1) {
        return "_" + p1;
    });
    input = input.replace(/&plus;/g, '+');
    input = input.replace(/&minus;/g, '-');
    input = input.replace(/&invisibleTimes;/g, ' ');
    input = input.replace(/a\\left[0\right]/g, 'a_0');

    input = input.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
    });
    input = replaceLatexSigns(input);

    return input;
}

function convertMathmlToLatex() {

    let result = Mathml2latex.convert(mathml.value);
    let format = formatLatexString(result);
    formattedLatex.value = format;
    latex.value = format
}

function formatMathML() {
    const latexCode = mathml.value;

    // Regular expressions for LaTeX formatting
    const indentRegex = /^(.*)/mg;
    const newlineRegex = /(\r?\n)/g;
    const spaceRegex = /(\s+)/g;

    // Apply formatting rules
    const formattedMathML = latexCode
        .replace(indentRegex, '    $1') // Indent each line with four spaces
        .replace(newlineRegex, '\n\n') // Add an extra newline between paragraphs
        .replace(spaceRegex, ' '); // Reduce multiple consecutive spaces to a single space

    mathml.value = formattedMathML;
}
</script>
<template>
    <section>
        <div class="container">
            <h1 class="title">MathML to LaTeX</h1>
            <div class="input-container">
                <textarea name="" class="dropzone math-ml" spellcheck="false"
                    placeholder="Paste Your MathML Here" v-model="mathml" id="" cols="30" rows="10"></textarea>
                <button class="styled-button" @click="convertMathmlToLatex">Convert</button>
            </div>
            <div v-if="latex" class=" flex-center col w-100">
                <h2>Latex Output</h2>
                <div class="output flex-center col">
                    <ColoredString :latexCode="latex" />
                </div>
            </div>
        </div>
    </section>
</template>
  

<style scoped>
button {
    /* padding: 32px 0px; */
    width: 300px;
}

@media (max-width :500px) {
    .title {
        font-size: 1.8rem;
    }
}

.math-ml {
    outline: none;
    border: none;
    border-radius: 0px;
    background: rgb(227, 227, 227);
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    word-spacing: 8px;
    line-height: 1.3rem;
    color: #0f241d;
}


/* .input-container,
.dropzone {
    min-width: 300px !important;
} */

/* .latex-code {
    background: none;
    text-align: left;
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
    width: 100%;
    min-width: 300px;

} */

.output {
    position: relative;

}
</style>
  
