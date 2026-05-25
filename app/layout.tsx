import './globals.css';

export const metadata = {
  title: 'MARI.A Studio AI',
  description: 'AI website builder for creators, beauty brands and digital product sellers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
