import header from "@/assets/img/header-4.jpg";

export default function Header() {
    
    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";

    return(
        <>
            <div className="section section-header">
                <div className="parallax ">
                    <div className="image" style={{backgroundImage: `url(${header.src})`}}></div>
                    <div className="container">
                        <div className="content" style={{ marginTop: "5%" }}>
                            <div className="title-area">
                                <h3>Escritório especializado em demandas do INSS, auxílios e benefícios. Toque no botão abaixo e fale agora com um ADVOGADO ESPECIALISTA diretamente no seu WhatsApp.</h3>
                            </div>

                            <div className="button-get-started">
                                <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                    FALAR AGORA MESMO!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}