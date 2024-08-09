import './styles/globals.css';

export const metadata = {
  title: 'Cine Search',
  description: 'Search for your favorite movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
