import { defineConfig } from 'vitepress'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER
const isUserOrOrgPage =
  Boolean(repositoryName && repositoryOwner) &&
  repositoryName === `${repositoryOwner}.github.io`

const inferredBase =
  process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}/`
    : '/'

const base = process.env.VITEPRESS_BASE ?? inferredBase

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  title: 'Tyranor Next',
  description: 'Android 多引擎视觉小说聚合启动器文档',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#5c73e7' }],
    ['link', { rel: 'icon', href: `${base}icon/tyranor-next.png` }]
  ],

  themeConfig: {
    logo: '/icon/tyranor-next.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/introduction' },
      { text: '功能特性', link: '/features/' },
      { text: '开发文档', link: '/development/' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '项目简介', link: '/guide/introduction' },
          { text: '安装要求', link: '/guide/installation' },
          { text: '开始使用', link: '/guide/quick-start' }
        ]
      },
      {
        text: '功能特性',
        items: [
          { text: '功能概览', link: '/features/' },
          { text: '引擎支持', link: '/features/engine-support' },
          { text: '游戏库管理', link: '/features/library-management' },
          { text: '存档与补丁', link: '/features/saves-and-patches' }
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '开发概览', link: '/development/' },
          { text: '架构说明', link: '/development/architecture' },
          { text: '参与贡献', link: '/development/contribution' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Weiss-UltimateSavior/Tyranor-Next'
      }
    ],
    footer: {
      message: 'Released under the GPL-2.0 License.',
      copyright: 'Copyright © Weiss-UltimateSavior'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern:
        'https://github.com/Weiss-UltimateSavior/Weiss-UltimateSavior.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新'
    }
  }
})
