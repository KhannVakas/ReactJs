// import { MyContext } from "@/Helper/Context"; // my context ko aisay import ni krna

import MyContext from "@/Helper/Context";
import "./globals.css";


export const metadata = {
  title: "Roxi React",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
