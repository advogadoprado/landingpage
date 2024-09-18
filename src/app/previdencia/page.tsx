import BodyPrevidencia from "@/components/previdencia/Body";
import Footer from "@/components/previdencia/Footer";
import Header from "@/components/previdencia/Header";
import NavBar from "@/components/previdencia/NavBar";
import WhatsApp from "@/components/WhatsApp";
import Script from "next/script";

const Previdencia = () => {
    return(
        <>
            <NavBar />
            <Header />
            <WhatsApp />
            <BodyPrevidencia />
            <Footer />
            <Script src="/utils/jquery.min.js" strategy="beforeInteractive" />
            <Script src="/utils/bootstrap.js" strategy="beforeInteractive" />
            <Script src="/utils/modernizr.js" strategy="beforeInteractive" />
            <Script src="/utils/gaia.js" strategy="beforeInteractive" />
        </>
    )
}

export default Previdencia;