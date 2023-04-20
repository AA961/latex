// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: [
    //     'nuxt-dropzone'
    // ],
    plugins: [
        // { src: '~/plugins/mathjax.js', mode: 'client' },
        // { src: '~/plugins/katex.js' }
    ],

    app: {
        head: {
            link: [
                // { rel: 'stylesheet', href: 'fonts/noorehira.ttf' },
                { rel: 'icon', href: '/fav.png' },
                {
                    rel: 'stylesheet',
                    href: 'https://latex.now.sh/prism/prism.css',
                },
            ],
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/prismjs/prism.min.js' },
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
