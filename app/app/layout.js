import './globals.css';

export const metadata = {
  title: 'Cautio Fleet Dashboard',
  description: 'Vehicle fleet management dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
