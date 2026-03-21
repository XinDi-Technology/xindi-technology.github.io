import { usePageData, useLang, useI18n } from '@rspress/core/runtime';

export interface BlogItem {
  title?: string;
  description?: string;
  date?: Date;
  link?: string;
  authors?: string[];
  tags?: string[];
  categories?: string[];
}

export interface BlogProps {
  posts: BlogItem[];
}

export const useBlogPages = (): BlogItem[] => {
  const { siteData, page } = usePageData();

  // 从页面路径中获取当前语言
  let currentLang = 'zh';
  if (page && page.routePath) {
    if (page.routePath.startsWith('/en/')) {
      currentLang = 'en';
    } else if (page.routePath.startsWith('/zh/')) {
      currentLang = 'zh';
    }
  }

  // 获取 base 路径并移除末尾斜杠
  const basePath = (siteData.base || '/').replace(/\/$/, '');

  // 动态获取博客文章数据
  const blogPosts: BlogItem[] = [];

  if (siteData.pages && Array.isArray(siteData.pages)) {
    // 过滤出博客文章页面
    for (const page of siteData.pages) {
      // 安全检查：确保 page 和 page.routePath 存在
      if (!page || !page.routePath) {
        continue;
      }

      // 检查路由中是否包含 blog
      const hasBlogPath = page.routePath.includes('/blog');

      if (!hasBlogPath) {
        continue;
      }

      // 排除博客首页（index.mdx）
      const isBlogIndex =
        page.routePath === '/blog' ||
        page.routePath === `/${currentLang}/blog` ||
        page.routePath.endsWith('/blog/') ||
        page.routePath === `/${currentLang}/blog/`;

      if (isBlogIndex) {
        continue;
      }

      // 获取页面的语言
      let pageLang = 'zh';
      if (page.routePath.startsWith('/en/')) {
        pageLang = 'en';
      } else if (page.routePath.startsWith('/zh/')) {
        pageLang = 'zh';
      }

      // 确保当前语言的文章
      if (pageLang === currentLang) {
        const frontMatter = page.frontmatter || {};

        // 确保文章有必要的元数据
        if (frontMatter.title) {
          const link = `${basePath}${page.routePath}`;
          blogPosts.push({
            title: frontMatter.title,
            description: frontMatter.description || '',
            date: frontMatter.date ? new Date(frontMatter.date) : undefined,
            link: link,
            authors: frontMatter.author ? [frontMatter.author] : [],
            tags: frontMatter.tags || [],
            categories: frontMatter.categories || [],
          });
        }
      }
    }

    // 按日期排序（最新的在前，无日期的排在最后），日期相同则按标题排序
    blogPosts.sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      const dateDiff = b.date.getTime() - a.date.getTime();
      if (dateDiff !== 0) return dateDiff;
      // 日期相同，按标题排序
      return a.title.localeCompare(b.title);
    });
  }

  return blogPosts;
};

export function BlogList({ posts }: BlogProps) {
  const lang = useLang();
  const t = useI18n<typeof import('i18n')>();

  if (!posts || posts.length === 0) {
    return <p className="blog-empty">{t('blogEmpty')}</p>;
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'zh-CN', options);
  };

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <article key={post.link || post.title} className="blog-item">
          <a href={post.link} className="blog-title">
            <h2>{post.title}</h2>
          </a>
          <div className="blog-meta">
            {post.date && <time className="blog-date">{formatDate(post.date)}</time>}
            {post.authors && post.authors.length > 0 && (
              <span className="blog-author">
                {post.authors.join(', ')}
              </span>
            )}
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="blog-categories">
              {post.categories.map((category) => (
                <span key={category} className="blog-category">
                  {category}
                </span>
              ))}
            </div>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {post.description && <p className="blog-description">{post.description}</p>}
        </article>
      ))}
    </div>
  );
}

export function BlogListAuto() {
  const posts = useBlogPages();
  return <BlogList posts={posts} />;
}