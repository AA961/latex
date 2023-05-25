<template>
    <div class="container">
        <h1 class="title">LaTeX Preview</h1>
        <div class="input-container w-100">
            <textarea v-model="input" class="raw-latex dropzone" spellcheck="false" @input="parseInput"
                placeholder="Enter LaTeX"></textarea>
            <button class="styled-button" @click="getImage">Render</button>

        </div>
        <div class="rendered-latex" v-if="img">
            <img :src="`https://latex.codecogs.com/svg.image?${input}`" alt="">
        </div>
        <div v-if="loading">
            <i class="fa fa-spinner"></i>
        </div>
    </div>
</template>
  
<script setup>
import katex from 'katex';

let input = ref("");
let output = ref("");
let img = ref("");
const loading = ref(false)

async function getImage() {
    loading.value = true;
    const { data, pending } = await useFetch(`https://latex.codecogs.com/svg.image?${input}`)
    img.value = data.value
    if (img.value) {
        loading.value = false;

    } else {
        getImage()
    }

}

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
.raw-latex {
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

.rendered-latex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    padding: 30px;
    background-color: #f1f1f1 !important;
}

div {
    margin-top: 10px;
}

.fa-spinner,
.fa-circle-notch {
    animation: spin 2s linear infinite;

}


@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
  