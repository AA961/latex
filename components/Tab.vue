<script setup>
import LatexCode from './LatexCode.vue';


let tab = ref("code");
const props = defineProps({
    latexCode: {
        type: String,
        required: true
    }
});

</script>
<template>
    <div class="selection-wrapper">
        <div class="selection">
            <div class="code" @click="tab = 'code'" :class="{ selected: tab === 'code' }">
                <i class="fa fa-view"></i>
                <span>Preview Code</span>
            </div>

            <div class="preview" @click="tab = 'preview'" :class="{ selected: tab === 'preview' }">
                <i class="fa fa-view"></i>
                <span>Preview Latex</span>
            </div>
        </div>

        <div class="code" v-if="tab == 'code'">
            <LatexCode :latexCode="props.latexCode" />
        </div>

        <div v-if="tab == 'preview'">
            <LatexPreview :latexCode="props.latexCode" />

            <nuxt-link :to="'/latex-editor/?latex=' + props.latexCode">Edit In Editor</nuxt-link>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.selection-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .selection {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #f1f1f1;
        cursor: pointer;
        width: 320px;

        .selected {
            background: black;
            color: #f1f1f1;
            padding: 0.4rem;
            width: 60%;
            border-radius: 4px;
        }
    }
}
</style>