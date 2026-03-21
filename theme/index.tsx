import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { CopyrightFooter } from './components/CopyrightFooter';
import './styles/index.css';
import './styles/blog.css';

function Layout(props: React.ComponentProps<typeof BasicLayout>) {
  return (
    <>
      <BasicLayout {...props} />
      <CopyrightFooter />
    </>
  );
}

export { Layout };
export * from '@rspress/core/theme-original';