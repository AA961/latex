<template>
    <div class="container">
        <h1 class="title">LaTeX Editor</h1>
        <div class="input-container">
            <textarea v-model="input" class="dropzone" @input="parseInput" placeholder="Enter LaTeX"></textarea>
            <button class="btn" @click="parseInput">Convert</button>

        </div>
        <div class="latex-output" v-if="output">
            <div v-html="output"></div>
        </div>
    </div>
</template>
  
<script setup>
import katex from 'katex';

let input = ref("");
let output = ref("");

function convertLatex(latexString) {
    // Replace double backslashes with a single backslash
    let formattedString = latexString.replace(/\\\\/g, '\\');

    // Replace newline characters with a space
    formattedString = formattedString.replace(/\n/g, ' ');

    // Wrap the string in a math environment
    formattedString = `\\begin{aligned}${formattedString}\\end{aligned}`;

    return formattedString;
}


function parseInput() {
    let val = convertLatex(input.value)
    try {
        output.value = katex.renderToString(val);
    } catch (e) {
        output.value = `<span style="color:red">${e.message}</span>`;
    }
}

useHead(() => {
    return {
        title: 'LaTeX Editor | Free Online Tool | Write and Compile LaTeX Code',
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Create, edit and compile LaTeX code easily with our free online LaTeX editor. Perfect for students, academics, and professionals. Sign up now and start writing your papers, reports, and articles with ease. Keywords: LaTeX editor, online LaTeX editor, free LaTeX editor, compile LaTeX code, write LaTeX, LaTeX tool, academic writing, LaTeX compiler.' },
            { name: 'keywords', content: 'LaTeX editor ,online LaTeX editor, free LaTeX editor, compile LaTeX code,  latex, write LaTeX, LaTeX tool tools, online, convert, copy, paste' },
            { name: 'robots', content: 'index,follow' },
        ]
    }
})
</script>
<style scoped>
textarea {
    width: 100%;
    height: 200px;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}

div {
    margin-top: 10px;
}
</style>
  