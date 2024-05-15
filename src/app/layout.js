import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "A new economic primitive for funding decentralized AI",
  description: "We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
        </header>
        {children}
      </body>
    </html>
  );
}