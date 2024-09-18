import logomarca from "@/assets/img/logomarca.png";

export default function NavBar() {
    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";
    return(
        <>
            <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
                <div className="container">
                    <div className="navbar-header">
                        <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                        <a href="/previdencia" className="navbar-brand">
                            <img alt="PRADO - Advogados Associados" src={logomarca.src} style={{ maxWidth: "150px", height: "auto" }}/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right navbar-uppercase">
                            <li>
                                <a href={linkWhatsApp} className="btn btn-fill" style={{ backgroundColor: "#bfa663", border: "none" }}>Fale Conosco</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}