import "./globals.css";

export const metadata = {
  title: "NSS GEC Patan | National Service Scheme",
  description: "Official website of NSS Unit, Government Engineering College, Patan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <main className="min-h-screen">
            {children}
        </main>
      </body>
    </html>
  );
}
