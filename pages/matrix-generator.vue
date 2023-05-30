<template>
  <div class="selection-wrapper container">
    <h1 class="title">Matrix Generator</h1>
    <div class="selection">
      <div class="code" @click="tab = 'csv'" :class="{ selected: tab === 'csv' }">
        <i class="fa fa-view"></i>
        <span>From CSV</span>
      </div>

      <div class="preview" @click="tab = 'values'" :class="{ selected: tab === 'values' }">
        <i class="fa fa-view"></i>
        <span>From Values</span>
      </div>
    </div>


  </div>
  <div class="container" v-if="tab == 'csv'">
    <h2 class="">CSV to LaTeX</h2>
    <div id="matrix"></div>
    <div class="input-container" v-if="!matrix">
      <label class="subtitle">Drop CSV file here or click to upload</label>
      <input class="dropzone" type="file" @change="handleFileUpload" accept=".csv">
    </div>
    <div v-else>
      <button class="styled-button" @click="matrix = null">New File</button>
    </div>
    <div class="output-box" v-if="matrix">
      <h2>LaTeX Output</h2>
      <LatexCode :latex-code="latex" />

      <h2>Matrix Preview</h2>
      <Matrix :matrix="latex" />
    </div>
  </div>

  <div class="contaienr" v-if="tab == 'values'">
    <GenerateMatrix />
  </div>
</template>

<script setup>
import csvtojson from 'csvtojson';


let latex = ref(null)
let matrix = ref(null)
let tab = ref("csv");




async function handleFileUpload(event) {
  const csv = await readFile(event.target.files[0]);
  const json = await csvtojson().fromString(csv);

  const latex1 = convertToLatex(json);
  const matrix1 = convertToMatrix(json);

  latex.value = latex1;
  matrix.value = matrix1;

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
      },
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

.dropzone {
  border: 5px dashed gray;
  border-radius: 0px;
}
</style>

