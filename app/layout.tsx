import '@/app/ui/global.css';
import Providers from './lib/Providers';
import Appbar from './ui/Appbar';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Appbar />
        {children}
        </Providers>
        </body>
    </html>
  );
}