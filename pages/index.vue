<template>
  <div class="container">
    <h1>Convert CSV to LaTeX</h1>
    <div class="input-container">
      <label class="dropzone-message">Drop CSV file here or click to upload</label>
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

<script>
import 'katex/dist/katex.min.css';
import csvtojson from 'csvtojson';
import katex from 'katex';

export default {
  data() {
    return {
      latex: null,
      matrix: null,
    };
  },
  methods: {
    async handleFileUpload(event) {
      const csv = await this.readFile(event.target.files[0]);
      // console.log(csv)
      const json = await csvtojson().fromString(csv);

      const latex = this.convertToLatex(json);
      // const matrix = this.getMatrixText(latex);
      const matrix = this.convertToMatrix(json);


      this.latex = latex;
      this.matrix = matrix;
      // console.log(this.latex)

      // this.latex.forEach(x => console.log(x))
    },

    copyToClipboard() {
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
    ,
    readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
      });
    },
    convertToLatex(json) {
      let latex = "\\begin{pmatrix}\n";
      const rows = json.map((item) => Object.values(item));
      for (const row of rows) {
        if (Array.isArray(row)) {
          latex += row.join(" & ") + " \\\\ \n";
        }
      }
      latex += "\\end{pmatrix}";

      return latex;
    },

    convertToMatrix(json) {
      let latex = "";
      const rows = json.map((item) => Object.values(item));
      for (const row of rows) {
        if (Array.isArray(row)) {
          latex += row.join(" & ") + " \n";
        }
      }
      return latex;
    },

    // getMatrixText(latex) {
    //   const startIndex = latex.indexOf('\n') + 1;
    //   const endIndex = latex.lastIndexOf('\n');
    //   const matrix = latex.substring(startIndex, endIndex);
    //   const matrixText = matrix.replace(/\\+/g, '').replace(/&/g, '').replace(/\s+/g, ' ').trim();
    //   return matrixText;
    // }


  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.dropzone-message {
  text-align: center;
}

.latex-output,
.matrix-preview,
.dropzone {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  width: 300px;
  height: 200px;
}

.latex-output {
  margin-top: 20px;
  font-size: 1.3rem;
  position: relative;
}

.copy-icon {
  position: absolute;
  bottom: 2%;
  right: 2%;
  cursor: pointer;
}

.matrix-preview {
  font-family: monospace;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>

