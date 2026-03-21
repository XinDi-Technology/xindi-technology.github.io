import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

export default defineConfig({
  base: '/',
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: '新地科技',
      description: '摸鱼时间作品集',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'XinDi Technology',
      description: '摸鱼时间作品集',
    },
  ],
  plugins: [
    pluginSitemap({
      siteUrl: 'https://xindi-technology.github.io/',
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
            content: 'D9F5D8DA09D0744A0A8F577D7CF4CB8B',
          },
        },
        // SEO 优化标签
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: '摸鱼时间作品集',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: '摸鱼时间作品集',
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
        content: 'https://github.com/XinDi-Technology/xindi-technology.github.io',
      },
    ],
    // 版权信息配置
    companyName: '新地科技（沈阳）有限责任公司',  // 必填，公司名称
    companyUrl: 'https://xindi-technology.github.io/',  // 必填，公司链接
    startYear: 2025,  // 可选，默认为 2020
    // endYear: 2023,    // 可选，默认为当前年份
    // ICP备案配置
    icpNumber: '',  // 可选，为空时不显示 ICP 备案信息
    // 公安联网备案配置
    gonganNumber: '',  // 可选，为空时不显示公安备案信息，默认为：鲁公网安备12345678912345号
    // 编辑此页链接配置
    editLink: {
      docRepoBaseUrl: 'https://github.com/XinDi-Technology/tree/main/docs',
    },
    // 最后更新时间配置
    lastUpdated: true,  // 显示文档最后更新时间
  },
});
