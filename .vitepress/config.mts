import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bootloader-unlock-wall-of-shame/',
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  title: "Bootloader Unlock: Wall of Shame",
  description: "Keeping track of companies that \"care about your data 🥺\"",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/bootloader-unlock-wall-of-shame/favicon.png' }],
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/bootloader-unlock-wall-of-shame/favicon.png' }],
    ['meta', { name: "robots", content: "noai, noimageai" }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap', rel: 'stylesheet' }]
  ],

  cleanUrls: true,
  lastUpdated: true,

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: { src: '/favicon.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/melontini/bootloader-unlock-wall-of-shame' }
    ],

    footer: {
      message: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Bootloader Unlock: Wall of Shame</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/melontini/bootloader-unlock-wall-of-shame" property="cc:attributionName" rel="cc:attributionURL">https://github.com/melontini/bootloader-unlock-wall-of-shame</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.'
    },

    search: {
      provider: 'local'
    },
  }
})
