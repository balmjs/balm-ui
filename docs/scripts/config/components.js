import PurePage from '@/views/layouts/pure-page';
import DocsPage from '@/views/layouts/docs-page';
import UiMarkdown from '@/components/markdown';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import SvgLogo from '@/components/svg-logo';

function registerGlobalComponents(app) {
  app.component(PurePage.name, PurePage);
  app.component(DocsPage.name, DocsPage);
  app.component(UiMarkdown.name, UiMarkdown);
  app.component(UiSnippet.name, UiSnippet);
  app.component(UiFooterNav.name, UiFooterNav);
  app.component(UiTocAffix.name, UiTocAffix);
  app.component(SvgLogo.name, SvgLogo);
}

export default registerGlobalComponents;
