# 🚀 Getting Started (Using as Template)

> Goal: Create your Rspress documentation site based on this template and deploy it to GitHub Pages **without using any local environment**.

### 1. Create Your Repository Using This Template

1. Open this repository's homepage: `https://github.com/XinDi-Technology/rspress-theme-aim`
2. Click **Use this template → Create a new repository** in the top right corner
3. Fill in:
   - **Repository name**: e.g., `my-rspress-site`
   - **Public / Private**: Public is recommended (Pages is simpler)
4. Click **Create repository**.
5. Your new repository now contains all the same files as this repository.

### 2. Modify `base` to Your Repository Name (Important)

1. Open `rspress.config.ts` in your new repository.
2. Find this line:

```
base: '/rspress-theme-aim/',
```

Change it to:

```
base: '/<your-repository-name>/',
```

For example, if your repository is called my-rspress-site, write:

```
base: '/my-rspress-site/',
```

> [!CAUTION]
>
> GitHub Pages access path is usually: https://<your-github-username>.github.io/<your-repository-name>/
> `base` must match <your-repository-name> exactly for static resources and routing to work properly.
>

Commit the change to the main branch.

### 3. Enable GitHub Pages (Using Actions)

In your new repository, go to Settings → Pages. 
In the Build and deployment section:
- Source: Select GitHub Actions.
- Save settings.

### 4. Trigger a Deployment and Access Your Site

Make a small change to any file (e.g., README.md) in the repository and commit it to main.

Open the Actions page and wait for the "Deploy Rspress to GitHub Pages" workflow to turn green ✅.

Return to Settings → Pages, and you will see your site URL, which looks like:

https://<your-github-username>.github.io/<your-repository-name>/

Open this link to see your Rspress documentation site.

📁 Project Structure

```
.
├── docs
│   ├── index.md           # Homepage (Hero) configuration
│   └── guide
│       └── index.md       # Guide homepage
├── rspress.config.ts      # Rspress configuration (title, description, base, etc.)
├── package.json           # Dependencies and scripts
├── .github
│   └── workflows
│       └── deploy.yml     # GitHub Pages deployment workflow
├── tsconfig.json
└── README.md              # This documentation
```

To add more documentation, simply add .md/.mdx files in the docs/ directory and commit them.

------

### 🛠 Local Development (Optional)

Although this template focuses on "zero local environment", you can also clone it to your local machine for development.

```
git clone https://github.com/<your-username>/<your-repository-name>.git
cd <your-repository-name>
pnpm install    # or npm install / yarn
pnpm dev        # Start local development server
pnpm build      # Production build
```

> [!CAUTION]
>
> This template uses pnpm by default. You can modify deploy.yml and local commands to use npm or yarn instead.
>

### 🎨 Customizing Theme and Styles (Advanced)

This template uses Rspress's built-in theme by default, which is sufficient for most documentation site scenarios. When you want to further customize the visual style or layout structure, you can refer to the official documentation:

- Custom theme: https://rspress.rs/en/guide/basic/custom-theme

- CSS variables (brand colors, homepage background, code blocks, etc.): 
  https://rspress.rs/en/ui/vars

- Plugin system (extending Markdown, build process, global components, etc.): 
  https://rspress.rs/en/plugin/system/introduction

A typical style extension approach is:

1. Create theme/index.tsx, re-export the default theme and import custom CSS;
2. Create theme/index.css, copy default variables from the official CSS variables page and modify as needed.

### 🔄 Upgrading Rspress Version

This template has the following default dependencies:

```
"@rspress/core": "^2.0.4"
```

This means:

- Patch updates within the same major version (2.x) will be automatically followed;
- When Rspress releases 3.x, if you wish to upgrade, simply modify package.json to:

```
"@rspress/core": "^3.0.0"
```

Then commit the code and let GitHub Actions rebuild. If you encounter major version incompatibility changes, please refer to the official upgrade guide to adjust rspress.config.ts and other configurations.