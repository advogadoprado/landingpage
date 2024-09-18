import header1 from "@/assets/img/header-1.jpeg";

export default function Header() {
    
    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";

    return(
        <>
            <div className="section section-header">
                <div className="parallax filter">
                    <div className="image" style={{backgroundImage: `url(${header1.src})`}}>
                    </div>
                    <div className="container">
                        <div className="content">
                            <div className="title-area">
                                <p className="title-modern">Assessoria Jurídica Especializada: Protegendo Seus Interesses</p>
                                <h3>Bem-vindo à PRADO - Sua Parceira Legal de Confiança. Oferecemos soluções jurídicas personalizadas para proteger seus direitos e interesses. </h3>
                                <div className="separator line-separator">♦</div>
                            </div>

                            <div className="button-get-started">
                                <a href="#services" style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                    NOSSOS SERVIÇOS
                                </a>

                                <a href='#links' style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                    LINKS IMPORTANTES
                                </a>
                                
                                <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                    FALE CONOSCO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}