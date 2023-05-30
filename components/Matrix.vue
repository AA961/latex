<template>
    <div class="w-100">
        <div class="options">
            <label for="bracket">Bracket:</label>
            <select id="bracket" v-model="selectedBracket" @change="trimAndSet">
                <option value="pmatrix">( )</option>
                <option value="bmatrix">[ ]</option>
                <option value="Bmatrix">{ }</option>
                <option value="vmatrix">| |</option>
                <option value="Vmatrix">|| ||</option>
            </select>
        </div>
        <!-- <div class="matrix" ref="matrix"></div> -->
        <div v-if="trim">
            <LatexPreview :latexCode="trim" />
        </div>
    </div>
</template>
  
<script setup>

const matrixElement = ref(null);
const selectedBracket = ref('bmatrix');
let trim = ref('');

const props = defineProps({
    matrix: {
        type: String,
        required: true
    }
});
watch(() => props.matrix, trimAndSet);



function trimAndSet() {
    let trimmed = removeMatrixDelimiters(props.matrix);
    trim.value = `\\begin{${selectedBracket.value}} ${trimmed} \\end{${selectedBracket.value}}`
}

onMounted(() => {
    trimAndSet()

});

function removeMatrixDelimiters(matrix) {
    const startIndex = matrix.indexOf("\\begin{bmatrix}");
    const endIndex = matrix.indexOf("\\end{bmatrix}");

    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        const startLength = "\\begin{bmatrix}".length;
        return matrix.slice(startIndex + startLength, endIndex).trim();
    }

    return matrixCode;
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
  