import { Providers } from './Providers';
import 'styles/globals.css';

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
