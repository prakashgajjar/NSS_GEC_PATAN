import { AppProvider } from "@/context/AppContext";
import "./globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "NSS GEC Patan | National Service Scheme",
  description:
    "Official website of NSS Unit, Government Engineering College, Patan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div>
          <Header/>
        </div>
        <AppProvider>{children}</AppProvider>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
