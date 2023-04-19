<template>
    <section>
        <div class="container">
            <h1>MathML to LaTex</h1>
            <div class="input-container">
                <textarea name="" class="dropzone" v-model="mathml" id="" cols="30" rows="10"></textarea>
                <button class="btn" @click="convertMathmlToLatex">Convert</button>
            </div>
            <!-- <p>MathML: {{ mathml }}</p> -->
            <div v-if="latex"> 
                <h2>Latex Output</h2>
                <div class="latex-output">
                    <p>{{ latex }}</p>
                    <Copy class="copy-icon" @click="copyToClipboard" />
    
                </div>
            </div>
        </div>
    </section>
</template>
  
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

function convertMathmlToLatex() {
    // console.log("jhf")
    let result = Mathml2latex.convert(mathml.value);
    console.log(result)
    latex.value = result
}

function copyToClipboard() {
    const output = document.querySelector('.latex-output');
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // Optional: show a notification that the text was copied
    alert('LaTeX code copied to clipboard!');
}

</script>

<style>
.btn {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    background-color: #04476f;
    color: blanchedalmond;
    outline: none;
    border: none;
    padding: 0.6rem;
    margin: 1rem auto;
    font-size: 1rem;

}
</style>
  