<template>
    <div class="latex-code">

        <div class="copy-wrapper w-100" @click="copyLatexCode">
            <Copy class="copy-icon " />
            <span>Copy Code</span>
        </div>

        <div>
            <span v-for="(segment, index) in coloredSegments" :key="index" :class="segment.type">{{ segment.text }}</span>
        </div>
    </div>
</template>
  
<script setup>

const props = defineProps({
    latexCode: {
        type: String,
        required: true
    }
});

const coloredSegments = computed(() => {
    const segments = [];

    // Regular expressions to match different patterns
    const symbolRegex = /[^\w\s]/g; // Matches symbols
    const numberRegex = /\b\d+\b/g; // Matches numbers
    const bracketRegex = /[()[\]{}]/g; // Matches brackets

    let lastIndex = 0;
    let match;

    // Iterate over matches and add segments to the array
    while ((match = symbolRegex.exec(props.latexCode)) !== null) {
        const index = match.index;
        const text = match[0];

        if (index > lastIndex) {
            segments.push({
                text: props.latexCode.substring(lastIndex, index),
                type: 'text' // Class for regular text
            });
        }

        segments.push({
            text,
            type: 'symbol' // Class for symbols
        });

        lastIndex = index + text.length;
    }

    // Add the remaining text as a segment
    if (lastIndex < props.latexCode.length) {
        segments.push({
            text: props.latexCode.substring(lastIndex),
            type: 'text' // Class for regular text
        });
    }

    // Apply class for numbers
    segments.forEach(segment => {
        if (numberRegex.test(segment.text)) {
            segment.type = 'number'; // Class for numbers
        }
    });

    segments.forEach(segment => {
        if (bracketRegex.test(segment.text)) {
            segment.type = 'bracket'; // Class for brackets
        }
    });

    return segments;
});

const copyLatexCode = () => {
    const textarea = document.createElement('textarea');
    textarea.value = props.latexCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Latex Code copied successfully")
};
</script>
  
<style scoped>
.latex-code {
    background-color: #f1f1f1 !important;
    padding: 20px;
    line-height: 1.4;
    letter-spacing: 2px;
    margin: 2rem auto;
    border-radius: 10px;
    position: relative;
    padding-top: 0px;
    /* min-width: 300px !important;

    max-width: 80%; */

}

.text {
    color: #276391;
    /* Color for regular text */
}

.symbol {
    color: #ba3119;
    font-size: 1.3rem;
    /* Color for symbols */
}

.number {
    color: #0f5c0f;
    /* Color for numbers */
}

.latex-code span {
    white-space: pre-wrap;
    font-family: 'Courier Prime', monospace !important;

}

.copy-icon {
    cursor: pointer;
    font-size: 1rem;
    color: white;
    margin-right: 2rem;
}

.copy-wrapper {
    border: 1px solid seashell;
    padding: 0.5rem 1rem;
    margin: 1rem auto;
    /* background-color: black; */
    background-color: #151414;
    color: whitesmoke;
    cursor: pointer;
}
</style>
  
