import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import WhatsApp from "@/components/WhatsApp";
import Script from "next/script";

import ogLogo from "@/assets/img/ogLogo.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <WhatsApp />
      <Body />
      <img src={ogLogo.src} style={{ display: "none" }} />
      <Footer />
      <Script src="/utils/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/utils/bootstrap.js" strategy="beforeInteractive" />
      <Script src="/utils/modernizr.js" strategy="beforeInteractive" />
      <Script src="/utils/gaia.js" strategy="beforeInteractive" />
    </>
  );
}
