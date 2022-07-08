export default {
  title: "VitePress",
  description: "Just Playing Around",
  themeConfig: {
    siteTitle: "FrontEnd Wiki",
    sidebar: {
      "/basic/": sidebarBasic(),
    },
    nav: nav(),
    socialLinks: [
      { icon: "github", link: "https://github.com/franklin23" },
      { icon: "twitter", link: "..." },
      { icon: "discord", link: "..." },
    ],

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Bobby Lin",
    },
  },
};

function nav() {
  return [
    {
      text: "Basic",
      items: [
        { text: "HTML", link: "..." },
        { text: "CSS", link: "..." },
        { text: "JavaScript", link: "..." },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "TypeScript", link: "..." },
        { text: "Vite", link: "..." },
        { text: "Sass", link: "..." },
      ],
    },
    {
      text: "Frameworks",
      items: [
        { text: "Vue", link: "..." },
        { text: "React", link: "..." },
      ],
    },
    {
      text: "Algorithm",
      link: "https://github.com",
    },
    {
      text: "Computer Basic",
      items: [
        { text: "Network", link: "/item-1" },
        { text: "Browser", link: "/item-2" },
      ],
    },
    {
      text: "Interviews",
      link: "https://github.com",
    },
  ];
}

function sidebarBasic() {
  return [
    {
      text: "HTML",
      collapsible: true,
      items: [
        { text: "HTML Basic", link: "/basic/html/html-basic" },
        { text: "HTML 5", link: "/basic/html/html5" },
      ],
    },
    {
      text: "CSS",
      collapsible: true,
      items: [
        { text: "CSS Basic", link: "/basic/css/css-basic" },
        { text: "CSS 3", link: "/basic/css/css3" },
      ],
    },
    {
      text: "JavaScript",
      collapsible: true,
      items: [
        {
          text: "Basic",
          link: "...",
        },
        {
          text: "Variables,Scope and Memory",
          link: "...",
        },
        {
          text: "Basic Reference Type",
          link: "...",
        },
        {
          text: "Collection reference type",
          link: "...",
        },
        {
          text: "Iterators and Generators",
          link: "...",
        },
        {
          text: "Objects, Classes and Object-oriented Programming",
          link: "...",
        },
      ],
    },
  ];
}
