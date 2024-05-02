import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import ActiveStatus from "./components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thelegroum",
  description: "Mohsen Khojasteh nezhad Thelegroum app messanger",
  // icons:{

  //   icon:"https://logowik.com/content/uploads/images/t_852_telegram.jpg"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>


        <ToasterContext />
        <ActiveStatus/>
        {children}
        </AuthContext>
      </body>
    </html>
  );
}
