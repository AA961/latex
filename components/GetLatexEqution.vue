<template>
    <div>
        <img :src="imageURL" alt="LaTeX Equation" />
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    props: {
        equation: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            imageURL: ''
        };
    },
    mounted() {
        this.getImage();
    },
    methods: {
        async getImage() {
            try {
                const url = `https://quicklatex.com/latex3.f?${encodeURIComponent(this.equation)}`;
                const response = await axios.get(url, { responseType: 'blob' });
                this.imageURL = URL.createObjectURL(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
  