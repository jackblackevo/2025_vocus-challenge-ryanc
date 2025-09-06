import type { Preview } from '@storybook/nextjs-vite';
import 'normalize.css';
import { notoSansTC } from '../app/layout';
import GlobalStyle from '../lib/GlobalStyle';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={notoSansTC.className}>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
