# 🚀 快速开始（作为模板使用）

> 目标：在 **完全不使用本地环境** 的前提下，基于本模板创建你的 Rspress 文档站，并部署到 GitHub Pages。

### 1. 使用本模板创建你的仓库

1. 打开本仓库主页：`https://github.com/XinDi-Technology/rspress-theme-aim`
2. 点击右上角 **Use this template → Create a new repository**
3. 填写：
   - **Repository name**：比如 `my-rspress-site`
   - **Public / Private**：建议 Public（Pages 更简单）
4. 点击 **Create repository**。
5. 你的新仓库已经包含和本仓库一样的所有文件。

### 2. 修改 `base` 为你的仓库名（重要）

1. 在新仓库中打开 `rspress.config.ts`。
2. 找到这一行：

```
base: '/rspress-theme-aim/',
```

改成：

```
base: '/<你的仓库名>/',
```

例如你的仓库叫 my-rspress-site，就写：

```
base: '/my-rspress-site/',
```

> [!CAUTION]
>
> GitHub Pages 的访问路径通常是： https://<你的 GitHub 用户名>.github.io/<你的仓库名>/ base 必须与 <你的仓库名> 保持一致，静态资源和路由才会正常工作。
>

提交变更到 main 分支。

### 3. 开启 GitHub Pages（使用 Actions）

在新仓库中进入 Settings → Pages。 在 Build and deployment 区域： Source：选择 GitHub Actions。 保存设置。

### 4. 触发一次部署并访问站点

在仓库中任意修改一个小文件（比如 README.md），提交到 main。

打开 Actions 页面，等待 Deploy Rspress to GitHub Pages 工作流变绿 ✅。

回到 Settings → Pages，你会看到站点 URL，形如：

https://<你的 GitHub 用户名>.github.io/<你的仓库名>/ 打开该链接，即可看到你的 Rspress 文档站。

📁 项目结构 Project Structure

```
.
├── docs
│   ├── index.md           # 首页（Hero）配置
│   └── guide
│       └── index.md       # 指南首页
├── rspress.config.ts      # Rspress 配置（标题、描述、base 等）
├── package.json           # 依赖与脚本
├── .github
│   └── workflows
│       └── deploy.yml     # GitHub Pages 部署流程
├── tsconfig.json
└── README.md              # 本说明文档
```

如需添加更多文档，只需在 docs/ 目录下增加 .md/.mdx 文件并提交。

------

### 🛠 本地开发（可选）

虽然本模板主打“零本地环境”，但你也可以选择 clone 到本地进行开发。

```
git clone https://github.com/<你的用户名>/<你的仓库名>.git
cd <你的仓库名>
pnpm install    # 或 npm install / yarn
pnpm dev        # 启动本地开发服务器
pnpm build      # 生产环境构建
```

> [!CAUTION]
>
> 本模板默认使用 pnpm，你也可以修改 deploy.yml 和本地命令改用 npm 或 yarn。
>

### 🎨 自定义主题与样式（进阶）

本模板默认使用 Rspress 提供的内置主题，已足够支撑大多数文档站场景。 当你希望进一步定制视觉风格或布局结构时，可以参考官方文档：

自定义主题：https://rspress.rs/zh/guide/basic/custom-theme

CSS 变量（品牌色、首页背景、代码块等）： https://rspress.rs/zh/ui/vars

插件机制（扩展 Markdown、构建流程、全局组件等）： https://rspress.rs/zh/plugin/system/introduction

一个典型的样式扩展方案是：

新建 theme/index.tsx，重导出默认主题并引入自定义 CSS； 新建 theme/index.css，从官方 CSS 变量页面复制默认变量并按需修改。

### 🔄 升级 Rspress 版本

本模板默认依赖：

```
"@rspress/core": "^2.0.4"
```

这意味着：

同一大版本（2.x）的小版本更新会自动跟进； 当 Rspress 发布 3.x 时，如果你希望升级，只需在 package.json 中修改为：

```
"@rspress/core": "^3.0.0"
```

然后提交代码，让 GitHub Actions 重新构建即可。 如遇大版本不兼容变更，请参考官方升级指南调整 rspress.config.ts 等配置。
