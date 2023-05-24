<template>
    <div class="container">
        <h1 class="title">Latex Tools</h1>
        <div class="palette">
            <div class="swatch" style="background-color: #066666"></div>
            <div class="swatch" style="background-color: #0d7a7a"></div>
            <div class="swatch" style="background-color: #16a1a1"></div>
            <div class="swatch" style="background-color: #48c2c2"></div>
            <div class="swatch" style="background-color: #8de5e5"></div>
        </div>
        <div class="tools">
            <div class="tool">
                <h2 class="tool-title">CSV to Latex</h2>
                <p class="tool-description">Convert CSV data to Latex tables</p>
                <button class="tool-button">Try it now</button>
            </div>
            <div class="tool">
                <h2 class="tool-title">MathML to Latex</h2>
                <p class="tool-description">Convert MathML code to Latex equations</p>
                <button class="tool-button">Try it now</button>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Roboto', sans-serif;
    min-width: 300px;

}

.title {
    font-size: 2rem;
    color: #066666;
    margin-bottom: 1rem;
}

.palette {
    display: flex;
    margin-bottom: 2rem;
}

.swatch {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    border-radius: 4px;
}

.tools {
    display: flex;
    justify-content: space-between;
}

.tool {
    width: 45%;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tool-title {
    font-size: 1.25rem;
    color: #066666;
    margin-bottom: 1rem;
}

.tool-description {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
}

.tool-button {
    background-color: #066666;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.tool-button:hover {
    background-color: #0d7a7a;
}
</style>
  