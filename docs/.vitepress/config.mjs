import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端面试题汇总",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "职场", link: "/职场/简历" },
      { text: "HTML", link: "/html" },
      { text: "CSS", link: "/css" },
      { text: "JavaScript", link: "/javascript/js基础" },
      { text: "WebApi", link: "/WebApi/DOM" },
      { text: "Vue", link: "/vue/" },
      {text: "HTTP", link: "/http/" },
      { text: "开发小记", link: "/coding/轮询" },
      // { text: "React", link: "/react" },
      // { text: "Node", link: "/node" },
      // { text: "Webpack", link: "/webpack" },
      // { text: "算法", link: "/algorithm" },
      // { text: "网络", link: "/network" },
      // { text: "安全", link: "/security" },
      // { text: "工程化", link: "/engineering" },
      // { text: "项目", link: "/project" },
      // { text: "面试", link: "/interview" },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    sidebar: {
      "/javascript": [
        { text: "js基础", link: "/javascript/js基础" },
        { text: "原型和原型链", link: "/javascript/原型和原型链" },
        { text: "作用域和闭包", link: "/javascript/作用域和闭包" },
        { text: "异步和单线程", link: "/javascript/异步和单线程" },
        { text: "栈和堆", link: "https://juejin.cn/post/6868166748709847053" },
        // { text: "ES6", link: "/javascript/es6" },
        // { text: "TypeScript", link: "/javascript/typescript" },
        // { text: "正则表达式", link: "/javascript/regexp" },
        // { text: "设计模式", link: "/javascript/pattern" },
        // { text: "模块化", link: "/javascript/module" },
        // { text: "函数式编程", link: "/javascript/functional" },
      ],
      "/WebApi": [
        { text: "DOM", link: "/WebApi/DOM" },
        { text: "BOM", link: "/WebApi/BOM" },
        { text: "存储", link: "/WebApi/存储" },
        { text: "ajax", link: "/WebApi/ajax" },
      ],
      "/职场": [
        { text: "面试流程", link: "/职场/面试流程" },
        { text: "项目开发", link: "/职场/项目开发" },
        { text: "star模型", link: "/职场/star" },
        { text: "SBETF模型", link: "/职场/sbetf" },
        { text: "pyramid模型", link: "/职场/pyramid" },
        { text: "简历", link: "/职场/简历" },
      ],
      "/开发小记": [
        { text: "轮询", link: "/coding/轮询" },
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
