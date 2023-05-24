<template>
  <div class="container">
    <h1 class="title">CSV to LaTeX</h1>
    <div class="input-container">
      <label class="subtitle">Drop CSV file here or click to upload</label>
      <input class="dropzone" type="file" @change="handleFileUpload" accept=".csv">
    </div>
    <div class="output-box" v-if="latex">
      <h2>LaTeX Output</h2>
      <div class="latex-output">
        <div class="latex-" v-html="latex"></div>
        <Copy class="copy-icon" @click="copyToClipboard" />
      </div>
      <h2>Matrix Preview</h2>
      <pre class="matrix-preview">{{ matrix }}</pre>
    </div>
  </div>
</template>

<script setup>
import csvtojson from 'csvtojson';

let latex = ref(null)
let matrix = ref(null)


async function handleFileUpload(event) {
  const csv = await readFile(event.target.files[0]);
  // console.log(csv)
  const json = await csvtojson().fromString(csv);

  const latex1 = convertToLatex(json);
  // const matrix = this.getMatrixText(latex);
  const matrix1 = convertToMatrix(json);

  latex.value = latex1;
  matrix.value = matrix1;
  // console.log(this.latex)

  // this.latex.forEach(x => console.log(x))
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

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function convertToLatex(json) {
  let latex = "\\begin{pmatrix}\n";
  const rows = json.map((item) => Object.values(item));
  for (const row of rows) {
    if (Array.isArray(row)) {
      latex += row.join(" & ") + " \\\\ \n";
    }
  }
  latex += "\\end{pmatrix}";

  return latex;
}

function convertToMatrix(json) {
  let latex = "";
  const rows = json.map((item) => Object.values(item));
  for (const row of rows) {
    if (Array.isArray(row)) {
      latex += row.join(" & ") + " \n";
    }
  }
  return latex;
}

useHead(() => {
  return {
    title: 'CSV to LaTeX Converter - Convert CSV Data to LaTeX Tables Online',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Convert CSV data to LaTeX tables online with our free CSV to LaTeX converter tool. Simply upload your CSV file and download the resulting LaTeX code.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'CSV to LaTeX, convert CSV to LaTeX, CSV to LaTeX converter, LaTeX tables, online LaTeX converter'
      }
    ],
    script: [
      {
        hid: 'tags',
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "CSV to LaTeX Converter - Convert CSV Data to LaTeX Tables Online",
          "description": "Convert CSV data to LaTeX tables online with our free CSV to LaTeX converter tool. Simply upload your CSV file and download the resulting LaTeX code.",
          "keywords": "CSV to LaTeX, convert CSV to LaTeX, CSV to LaTeX converter, LaTeX tables, online LaTeX converter",
          "url": "https://example.com/csv-to-latex-converter",
          "image": "https://example.com/images/csv-to-latex.png"
        }
      }
    ]
  }
})
</script>


<style  scoped>
.copy-icon {
  position: absolute;
  bottom: 4%;
  right: 4%;
  cursor: pointer;
  font-size: 1.3rem;
}

/* .dropzone {
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
} */
</style>

