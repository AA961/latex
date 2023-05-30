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

<style lang="scss" >

</style>