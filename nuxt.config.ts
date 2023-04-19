// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: [
    //     'nuxt-dropzone'
    // ],

    app: {
        head: {
            link: [
                // { rel: 'stylesheet', href: 'fonts/noorehira.ttf' },
                { rel: 'icon', href: '/fav.png' }
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
})
