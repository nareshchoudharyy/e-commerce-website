import { DM_Sans, Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: '400' })
const dm_sens = DM_Sans({ subsets: ["latin"], weight: '300' })

export const metadata = {
  title: "BeClothing - By Naresh",
  description: "Made by Naresh Choudhary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sens.className}>{children}</body>
    </html>
  );
}