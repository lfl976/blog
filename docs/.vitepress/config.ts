import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leo's Blog",
  description: "探索技术、旅行和观察的精彩世界。",
  base: "/blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "List",
        items: [
          { text: "SQL连接查询", link: "/SQL连接查询" },
          { text: "js片段", link: "/js片段" },
          { text: "React 18 新特性", link: "/React18新特性" },
          { text: "webpack删除文件插件", link: "/webpack删除文件插件" },
          { text: "JavaScript中的各种距离", link: "/JavaScript中的各种距离" },
          { text: "滚动居中菜单", link: "/滚动居中菜单" },
          { text: "ES2021新特性", link: "/ES2021新特性" },
          { text: "Examples", link: "/examples" },
          { text: "About", link: "/about" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lfl976" }],
  },
});
