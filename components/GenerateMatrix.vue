<template>
    <div class="container">
        <label for="rows">Number of Rows:</label>
        <input type="number" id="rows" v-model="rows" :min="1" />
        <br />
        <label for="columns">Number of Columns:</label>
        <input type="number" id="columns" v-model="columns" :min="1" />
        <br />
        <div class="matrix-inputs">
            <div class="inner-container">
                <div v-for="row in rows" :key="row" class="matrix-row">
                    <div v-for="column in columns" :key="column" class="matrix-column">
                        <input :id="`row_${row}_col_${column}`" type="text" v-model="matrixValues[row - 1][column - 1]"
                            placeholder="Value" />
                    </div>
                </div>
            </div>
        </div>
        <br />
        <button @click="generateMatrix" class="styled-button">Generate</button>
        <div v-if="matrixCode" class="output-box">
            <h2>LaTeX Output</h2>
            <LatexCode :latex-code="matrixCode" />

            <h2>Matrix Preview</h2>
            <Matrix :matrix="trimmedMatrixValues" />
        </div>
    </div>
</template>
  
<script setup>

const rows = ref(3);
const columns = ref(3);
const matrixValues = reactive([]);
const matrixCode = ref("");
const trimmedMatrixValues = ref("");

const generateMatrix = () => {
    matrixCode.value = "\\begin{bmatrix}\n";
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < columns.value; j++) {
            const value = matrixValues[i][j] || "0"; // Set empty values to 0
            matrixCode.value += value;
            if (j !== columns.value - 1) {
                matrixCode.value += " & ";
            }
        }
        if (i !== rows.value - 1) {
            matrixCode.value += " \\\\ \n";
        }
    }
    matrixCode.value += "\n\\end{bmatrix}";

    trimmedMatrixValues.value = removeMatrixDelimiters(matrixCode.value);
    console.log(trimmedMatrixValues.value)
};
// Initialize matrixValues with the correct dimensions
watch([rows, columns], () => {
    initializeMatrixValues();
});

const initializeMatrixValues = () => {
    matrixValues.length = rows.value;
    for (let i = 0; i < rows.value; i++) {
        if (!matrixValues[i]) {
            matrixValues[i] = [];
        }
        matrixValues[i].length = columns.value;
    }
};

// Initialize matrixValues when the component is initially rendered
initializeMatrixValues();

function removeMatrixDelimiters(matrix) {
    const beginRegex = /\\begin{pmatrix}/g;
    const endRegex = /\\end{pmatrix}/g;

    // Remove \begin{pmatrix}
    matrix = matrix.replace(beginRegex, '');

    // Remove \end{pmatrix}
    matrix = matrix.replace(endRegex, '');

    return matrix.trim();
}
</script>
  
<style scoped>
.matrix-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 8px;
}

.matrix-row {
    display: flex;
    gap: 10px;
}

.matrix-column {
    width: 50px;
}

.inner-container {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
    outline: none;
    border: none;
    border-radius: 0px;
    background: rgb(227, 227, 227);
    font-family: 'Courier Prime', monospace !important;
    font-weight: 600;
    color: #0f241d;
    margin: 1rem;
    width: 4rem;
    padding: 6px;

}
</style>
  