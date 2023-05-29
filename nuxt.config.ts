// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: ['@pinia/nuxt'],
    app: {
        head: {
            link: [
                { rel: 'icon', href: '/fav.png' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },

            ],
            script: [

            ],



            style: [
                // <style type="text/css">:root { color: red }</style>
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                // { children: 'JavaScript is required' }
            ]
        }
    },

    css: ['@/assets/css/button.css',
        '@/assets/css/latex.css'],
})
