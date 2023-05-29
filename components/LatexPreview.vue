<template>
    <div>
        <div class="rendered-latex" v-if="img && !loading">
            <div class="inner-container">
                <img :src="img" alt="latex">
            </div>
        </div>
        <div v-if="loading" class="rendered-latex">
            <i class="fa fa-spinner"></i>
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

watch(() => props.latexCode, getImage);

onMounted(() => {
    getImage()
})

let img = ref("");
const loading = ref(false)

async function getImage() {
    loading.value = true;
    const { data, pending } = await useFetch(`https://latex.codecogs.com/svg.image?${props.latexCode}`)
    img.value = data.value
    if (img.value) {
        img.value = await convertBlobToDataURL(img.value);
        loading.value = false;
    }
}


async function convertBlobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

</script>

<style scoped>
div {
    margin-top: 10px;
}

.fa-spinner,
.fa-circle-notch {
    animation: spin 2s linear infinite;

}


@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>