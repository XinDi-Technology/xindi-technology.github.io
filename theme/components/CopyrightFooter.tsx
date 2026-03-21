import { usePageData } from '@rspress/core/runtime';
import { withBase } from '@rspress/core/runtime';
import type { DefaultThemeConfig } from '@rspress/core';

interface PoweredByLink {
  name: string;
  url: string;
}

interface ThemeConfig extends DefaultThemeConfig {
  companyName: string;
  companyUrl: string;
  startYear?: number;
  endYear?: number;
  icpNumber?: string;
  gonganNumber?: string;
  poweredBy?: PoweredByLink[];
}

export function CopyrightFooter() {
  const { siteData } = usePageData();
  const themeConfig = siteData.themeConfig as ThemeConfig;

  // 获取默认值
  const currentYear = new Date().getFullYear();
  const startYear = themeConfig?.startYear ?? 2020;
  const endYear = themeConfig?.endYear ?? currentYear;
  
  // 公司名称和链接（必填）
  const companyName = themeConfig?.companyName || '人工智能制造';
  const companyUrl = themeConfig?.companyUrl || 'https://xindi-technology.github.io/rspress-theme-aim/';

  // ICP 备案号
  const icpNumber = themeConfig?.icpNumber;

  // 公安备案号
  const gonganNumber = themeConfig?.gonganNumber;
  
  // Powered by 配置
  const poweredBy = themeConfig?.poweredBy || [
    { name: 'Rspress', url: 'https://rspress.rs/' },
    { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
  ];
  
  // 提取公安备案号中的数字部分用于查询链接
  const extractGonganCode = (number: string): string => {
    const match = number.match(/\d+/);
    return match ? match[0] : '';
  };
  
  const gonganCode = gonganNumber ? extractGonganCode(gonganNumber) : '';
  const gonganUrl = gonganCode ? `https://beian.mps.gov.cn/#/query/webSearch?code=${gonganCode}` : '';

  // 构建年份显示文本
  const yearText = startYear === endYear ? String(startYear) : `${startYear}-${endYear}`;

  return (
    <div className="rspress-copyright-footer">
      <div className="rspress-copyright-content">
        <span>© {yearText} </span>
        {companyUrl ? (
          <a 
            href={companyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rspress-copyright-link"
          >
            {companyName}
          </a>
        ) : (
          <span>{companyName}</span>
        )}
        {poweredBy && poweredBy.length > 0 && (
          <>
            <span className="rspress-copyright-divider"> · </span>
            <span className="rspress-copyright-powered-by">
              Powered by{' '}
              {poweredBy.map((item, index) => (
                <span key={index}>
                  <a 
                    href={item.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rspress-copyright-link"
                  >
                    {item.name}
                  </a>
                  {index < poweredBy.length - 1 && ' & '}
                </span>
              ))}
            </span>
          </>
        )}
      </div>
      {icpNumber && (
        <div className="rspress-copyright-icp">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rspress-copyright-link"
          >
            {icpNumber}
          </a>
        </div>
      )}
      {gonganNumber && gonganUrl && (
        <div className="rspress-copyright-gongan">
          <img 
            src={withBase('/gongan-beian.png')} 
            alt="公安备案" 
            className="rspress-gongan-icon"
          />
          <a 
            href={gonganUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="rspress-copyright-link"
          >
            {gonganNumber}
          </a>
        </div>
      )}
    </div>
  );
}