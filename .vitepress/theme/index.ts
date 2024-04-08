// https://vitepress.dev/guide/custom-theme
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import type { Theme, VitePressData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import { watch, nextTick, onMounted } from 'vue';
import { GiscusProps } from '@giscus/vue/dist/types'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    // Get frontmatter and route
    const data = useData();
    const { frontmatter } = toRefs(data);
    const route = useRoute();

    var props: GiscusProps = {
      repo: 'melontini/bootloader-unlock-wall-of-shame',
      repoId: 'R_kgDOJts7Mg',
      category: 'General',
      categoryId: 'DIC_kwDOJts7Ms4CXj04',
      mapping: 'pathname',
      inputPosition: 'top',
      reactionsEnabled: '1',
      loading: 'lazy'
    }

    onMounted(() => {
      fixLang(props, data);
    })
    watch(() => route.path, () => nextTick(() => {
      fixLang(props, data);
    }))

    // Obtain configuration from: https://giscus.app/
    giscusTalk(props, { frontmatter, route }, true);
  }
} satisfies Theme

const fixLang = (props: GiscusProps, data: VitePressData) => {
  var lang = data.lang.value
  switch (lang) {
    case "en-US":
      lang = "en"
      break;
    case "zh-CN":
      lang = "zh-CN"
      break;
    default:
      lang = "en"
      break;
  }
  props.lang = lang
}