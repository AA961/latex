<template>
    <div>
        <h1>Convert CSV to LaTeX</h1>
        <input type="file" @change="handleFileUpload" accept=".csv">
        <div>
            <h2>LaTeX output:</h2>
            <!-- <pre class="matrix-preview">{{ latex }}</pre> -->
            <div class="latex-output" v-html="latex"></div>
        </div>
    </div>
</template>
  
<script setup>
import 'katex/dist/katex.min.css';
import csvtojson from 'csvtojson';
import katex from 'katex';


let latex = ref(111);


async function handleFileUpload(event) {
    const csv = await readFile(event.target.files[0]);
    // console.log(csv)
    const json = await csvtojson().fromString(csv);

    const lat = convertToLatex(json);

    latex = lat;
    // console.log(this.latex)

    // this.latex.forEach(x => console.log(x))
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
}

function convertToLatex(data) {
    let latex = '';
    // Iterate over each row in the CSV data
    data.forEach((row) => {
        // Iterate over each column in the row
        Object.values(row).forEach((value) => {
            console.log(value);
            // Convert the value to LaTeX and append it to the LaTeX string
            latex += katex.renderToString(value) + ' & ';
        });
        // Remove the trailing ' & ' from the last column in the row
        latex = latex.slice(0, -3);
        // Add a new line after the row
        latex += ' \\\\ \n';
    });
    // Return the LaTeX string
    return `\\begin{tabular}{${'c'.repeat(Object.keys(data[0]).length)}} \n${latex}\\end{tabular}`;
}
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.dropzone {
    width: 300px;
    height: 200px;
    border: 2px dashed gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-bottom: 30px;
}

.dropzone-message {
    text-align: center;
}

.output-box {
    border: 2px solid gray;
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
}

.latex-output {
    margin-top: 20px;
}

.matrix-preview {
    font-family: monospace;
    margin-bottom: 20px;
}
</style>

This code will display the LaTeX output in a box with a preview of the matrix and will style the output using CSS.
