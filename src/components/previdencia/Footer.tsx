import logomarca from "@/assets/img/logomarca.png";

export default function Footer() {

    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";
    const linkEmailContact = "mailto:carlosprado.advogado@hotmail.com";
    const telefone = "+55 85 9 9965-5000";
    const email = "carlosprado.advogado@hotmail.com";
    const linkInstagram = "https://www.instagram.com/drpradoadv";
    const userInstagram = "@drpradoadv";
    const linkTell = "tel:+5585999655000"

    return(
        <footer className="footer footer-big footer-color-black" data-color="black">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-3">
                        <div className="info">
                            <a href="/previdencia"><img alt="PRADO - Advogados Associados" src={logomarca.src} style={{ maxWidth: "150px", height: "auto" }}/></a>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 col-sm-3">
                        <div className="info">
                            <h5 className="title"> Departamentos</h5>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#about">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="#services">Como eu poderei ajudar</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                    <li>
                                        <a href={linkWhatsApp}>Fale Conosco</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="info">
                            <h5 className="title">Contatos</h5>
                            <nav>
                                <ul>
                                    <li>
                                        <a href={linkTell}>
                                            <i className="bi bi-telephone"></i> <b>{telefone}</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={linkWhatsApp}>
                                            <i className="bi bi-whatsapp"></i> <b>{telefone}</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={linkEmailContact} style={{ fontSize: "11px" }}>
                                            <i className="bi bi-envelope"></i> <b>{email}</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={linkInstagram}>
                                            <i className="bi bi-instagram"></i> <b>{userInstagram}</b>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-2 col-md-offset-1 col-sm-3">
                        <div className="info">
                            <h5 className="title">Endereço</h5>
                            <nav>
                                <ul>
                                    <li>
                                        <a style={{ fontSize: "13px" }}>
                                            <i className="bi bi-geo-alt-fill"></i> Edifício Ébano, Rua Costa Barros, 915, Centro
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    © {new Date().getFullYear()} Todos os Direitos Reservados - Prado Advogados Associados | Desenvolvido por <a target="_blank" href="https://www.instagram.com/blackandwhitesoftbw">BlackAndWhiteSoft</a>
                </div>
            </div>
        </footer>
    );
}