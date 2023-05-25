// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: [
    //     'nuxt-dropzone'
    // ],
    plugins: [
        // { src: '~/plugins/mathjax.js', mode: 'client' },
        // { src: '~/plugins/matjax.js', mode: 'client' }

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
                // {
                //     src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js',
                //     async: true,
                //     defer: true,
                // }
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' },
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

    css: ['@/assets/css/button.css'],
})
