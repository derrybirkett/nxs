import './global.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'NXS - Dashboard Widget Platform',
  description: 'Manage your favorite apps through personalized dashboard widgets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
