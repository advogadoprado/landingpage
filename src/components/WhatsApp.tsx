'use client'
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export default function WhatsApp() {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);
    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";

    function setAnimation() {
        const button = document.getElementById('buttonWhatsApp');
        if (button) button.style.transform = "translateX(10px) scale(1.0)";
    }

    useEffect(() => {
        if (pageYOffset > 300) {
            setVisible(true);
            setAnimation();
        }
    }, [pageYOffset]);

    return(
        <>
            {visible && (
                <a
                    href={linkWhatsApp}
                    target="_blank"
                    id="buttonWhatsApp"
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: '#25D366',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        cursor: 'pointer',
                        transition: "transform 1s",
                        transform: "translateX(0) scale(0)"
                    }}
                ><i className="bi bi-whatsapp" style={{ color: 'white', fontSize: '22px' }}></i></a>
            )}
        </>
    );
}