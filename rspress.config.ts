import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

export default defineConfig({
  base: '/rspress-theme-aim/',
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: '人工智能制造 · Rspress Theme AIm',
      description: '零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板，支持版权信息、ICP备案、公安备案等功能',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'AI Manufacturing · Rspress Theme AIm',
      description: 'Zero local setup · GitHub Pages one-click deployment Rspress documentation template, supporting copyright information, ICP record, public security record and other features',
    },
  ],
  plugins: [
    pluginSitemap({
      siteUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
    }),
  ],
  builderConfig: {
    html: {
      tags: [
        // Bing Webmasters 验证标签
        // 请将 YOUR_BING_VERIFICATION_CODE 替换为 Bing 提供的验证码
        {
          tag: 'meta',
          attrs: {
            name: 'msvalidate.01',
            content: 'YOUR_BING_VERIFICATION_CODE',
          },
        },
        // SEO 优化标签
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: '零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板，支持版权信息、ICP备案、公安备案等功能',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Rspress, 文档站, GitHub Pages, ICP备案, 公安备案, 静态站点, 零本地环境',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'XinDi Technology',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow',
          },
        },
      ],
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/XinDi-Technology/rspress-theme-aim',
      },
    ],
    // 版权信息配置
    companyName: 'AIm',  // 必填，公司名称
    companyUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',  // 必填，公司链接
    startYear: 2025,  // 可选，默认为 2020
    // endYear: 2023,    // 可选，默认为当前年份
    // ICP备案配置
    icpNumber: '',  // 可选，为空时不显示 ICP 备案信息
    // 公安联网备案配置
    gonganNumber: '',  // 可选，为空时不显示公安备案信息，默认为：鲁公网安备12345678912345号
    // 编辑此页链接配置
    editLink: {
      docRepoBaseUrl: 'https://github.com/XinDi-Technology/rspress-theme-aim/tree/main/docs',
    },
    // 最后更新时间配置
    lastUpdated: true,  // 显示文档最后更新时间
  },
});