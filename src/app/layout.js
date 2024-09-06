import { Poppins, Raleway } from "next/font/google";
import localFont from '@next/font/local'
import "./globals.css";
import MainNavbar from "@/components/navigation/MainNavbar";
import Script from "next/script";

export const metadata = {
  title: "Denka",
  description: "",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-raleway'
});

const rational = localFont({
  src: [
    {
      path: '../../src/font/RationalDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../../src/font/RationalDisplay-Book.ttf',
      weight: '400'
    },
    {
      path: '../../src/font/RationalDisplay-Bold.ttf',
      weight: '600'
    },
    {
      path: '../../src/font/RationalDisplay-ExtraBold.ttf',
      weight: '700'
    },
    {
      path: '../../src/font/RationalDisplay-Black.woff',
      weight: '800'
    },
  ],
  variable: '--font-rational'
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <Script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js" />
      </head>
      <body className={`${rational.variable} ${raleway.variable}`} style={{ scrollBehavior: "smooth" }}>
        <MainNavbar className="sticky left-0 top-0 z-[10000] bg-white" />
        {children}
      </body>
    </html>
  );
}
