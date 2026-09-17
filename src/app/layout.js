import "./globals.css";

export const metadata = {
  title: "EMBER — Coffee & Roastery",
  description: "Crafted coffee, warm moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
