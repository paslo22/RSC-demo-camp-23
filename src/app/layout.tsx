import "./globals.css";
import NavLink from "./nav-link";

export default function RootLayout({ children }: React.PropsWithChildren) {
  console.log('This is rendered in the server.');
  return (
    <html lang="en" className="bg-gray-900 text-gray-100 antialiased">
      <head />
      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </nav>
        </header>
        <div className="p-4">{children}</div>
        </body>
    </html>
  );
}
