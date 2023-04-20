<template>
    <div class="landing-page">
        <h1 class="title">LaTeX Tools!</h1>
        <div class="subtitle">Here you can find various tools to make your LaTeX workflow easier.</div>
        <div class="tool-container">
            <div class="tool">
                <h2 class="tool-title">CSV to LaTeX Table</h2>
                <div class="tool-description">Convert CSV files into LaTeX tables</div>
                <NuxtLink to="/csv-to-latex" class="tool-button">Use this tool</NuxtLink>
            </div>
            <div class="tool">
                <h2 class="tool-title">MathML to LaTeX</h2>
                <div class="tool-description">Convert MathML equations into LaTeX</div>
                <NuxtLink to="/mathml-to-latex" class="tool-button">Use this tool</NuxtLink>
            </div>
            <div class="tool">
                <h2 class="tool-title">LaTeX Equation Editor</h2>
                <div class="tool-description">Create LaTeX equations with a visual editor</div>
                <NuxtLink to="/latex-editor" class="tool-button">Use this tool</NuxtLink>
            </div>
        </div>
        <div class="disclaimer">Disclaimer: This website is not affiliated with LaTeX or any of its developers.</div>
    </div>
</template>
  
<script setup>
useHead(() => {
    return {
        title: 'Latex Tools - Convert CSV and MathML to Latex',
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Easily convert CSV and MathML to Latex with our online tools. No more manual typing, just copy and paste!' },
            { name: 'keywords', content: 'latex, csv, mathml, tools, online, convert, copy, paste' },
            { name: 'robots', content: 'index,follow' },
        ]
    }
})
</script>
  
<style scoped>
.landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
}



.tool-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
}

.tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    margin: 1rem auto;
}

.tool:hover {
    box-shadow: 0px 0px 5px 0px black;
}

.tool-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.tool-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.tool-button {
    background-color: #3a3a3a;
    color: white;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}

.tool-button:hover {
    background-color: #525252;
}

.disclaimer {
    margin-top: 50px;
    font-size: 0.8rem;
    text-align: center;
}
</style>
  