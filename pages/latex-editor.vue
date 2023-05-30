<template>
    <div class="container">
        <h1 class="title">LaTeX Editor</h1>
        <div class="input-container w-100">
            <textarea v-model="input" class="raw-latex dropzone" spellcheck="false" @input="getImage"
                placeholder="Enter LaTeX"></textarea>
            <button class="styled-button w-310" @click="getImage">Render</button>
        </div>
        <div class="w-100">
            <div class="rendered-latex w-100" v-if="img && !loading">
                <div class="inner-container">
                    <img :src="img" alt="latex">
                </div>

            </div>

            <div class="input-container w-100">
                <button class="styled-button" v-if="img && !loading" @click="downloadBlob">Download</button>
            </div>
            <div v-if="loading" class="rendered-latex">
                <i class="fa fa-spinner"></i>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();

let img = ref("");
let input = ref("");
const loading = ref(false);
let blob = ref("");

onMounted(() => {
    if (route.query.latex) {
        input.value = route.query.latex;
    }
});

async function getImage() {
    loading.value = true;
    if (input.value) {
        const { data } = await useFetch(`https://latex.codecogs.com/svg.image?${input.value}`);
        blob.value = data.value;
        if (data.value) {
            img.value = await convertBlobToDataURL(data.value);
            loading.value = false;
        }
    }
}


async function convertBlobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function downloadBlob() {
    const url = URL.createObjectURL(blob.value);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Latex";
    link.click();
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
.title {
    margin-top: 2rem;
}

.raw-latex {
    outline: none;
    border: none;
    border-radius: 0px;
    background: rgb(227, 227, 227);
    white-space: pre-wrap;
    font-family: 'Courier Prime', monospace !important;
    font-weight: 600;
    word-spacing: 8px;
    line-height: 1.3rem;
    color: #0f241d;
    /* margin-top: -20px; */
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
  