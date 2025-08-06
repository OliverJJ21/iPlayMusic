

export const metadata = {
  title: "IPlayMusic",
  description: "Music App with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
        <p>Test123Layoutjs</p>
      </body>
    </html>
  );
}
