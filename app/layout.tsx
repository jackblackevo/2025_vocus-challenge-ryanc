import { Noto_Sans_TC } from 'next/font/google';
import 'normalize.css';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import GlobalStyle from '../lib/GlobalStyle';

export const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={notoSansTC.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
