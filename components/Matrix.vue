<template>
    <div class="w-100">
        <div class="options">
            <label for="bracket">Bracket:</label>
            <select id="bracket" v-model="selectedBracket" @change="renderMatrix">
                <option value="pmatrix">( )</option>
                <option value="bmatrix">[ ]</option>
                <option value="Bmatrix">{ }</option>
                <option value="vmatrix">| |</option>
                <option value="Vmatrix">|| ||</option>
            </select>
        </div>
        <div class="matrix" ref="matrix"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import katex from 'katex';

const matrixElement = ref(null);
const selectedBracket = ref('pmatrix');

const props = defineProps({
    matrix: {
        type: String,
        required: true
    }
});


onMounted(() => {
    matrixElement.value = document.querySelector('.matrix');
    renderMatrix()
});

function removeMatrixDelimiters(matrix) {
    const beginRegex = /\\begin{pmatrix}/g;
    const endRegex = /\\end{pmatrix}/g;

    // Remove \begin{pmatrix}
    matrix = matrix.replace(beginRegex, '');

    // Remove \end{pmatrix}
    matrix = matrix.replace(endRegex, '');

    return matrix.trim();
}


function renderMatrix() {
    if (!matrixElement.value) return;

    matrixElement.value.innerHTML = '';

    try {
        let val = removeMatrixDelimiters(props.matrix)
        const matrixLatex = `\\begin{${selectedBracket.value}} ${val} \\end{${selectedBracket.value}}`;
        katex.render(matrixLatex, matrixElement.value, {
            throwOnError: false,
            displayMode: true,
        });
    } catch (error) {
        console.error('Error rendering LaTeX:', error);
    }
}
</script>
  
<style scoped>
.options {
    margin-bottom: 10px;
}

.matrix {
    /* border: 1px solid #ccc; */
    padding: 10px;
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1 !important;
    font-size: 3rem;
    font-family: 'Courier Prime', monospace !important;
    color: #276391;
}

#bracket {
    padding: 0.3rem;
    width: 300px;
    outline: none;
    border: none;
    margin-left: 6px;
    font-size: 1rem;
}
</style>
  