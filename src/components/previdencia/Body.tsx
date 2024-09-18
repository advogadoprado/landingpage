import header6 from "@/assets/img/header-6.jpg";
import face1 from "@/assets/img/faces/face_1.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";

const BodyPrevidencia = () => {
    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";
    const emailContact = "carlosprado.advogado@hotmail.com";
    const linkEmailContact = "mailto:carlosprado.advogado@hotmail.com";
    const tellContact = "(85) 9 9965-5000";
    const linkInstagram = "https://www.instagram.com/drpradoadv";
    const userInstagram = "@drpradoadv";

    const duvidas = [
        {
            title: "O que é Direito Previdenciário?",
            description: "Direito Previdenciário é uma área do direito que trata dos benefícios e direitos dos segurados do sistema previdenciário, buscando assegurar proteção social aos trabalhadores em situações de aposentadoria, invalidez, doença, acidente de trabalho, desemprego involuntário e outros eventos previstos em lei."
        },
        {
            title: "Preciso de um advogado?",
            description: "Sim, o advogado é o único profissional competente para assessorar você quando o problema é jurídico. Em se tratando de casos previdenciários no Judiciário, é obrigatória a presença do advogado."
        },
        {
            title: "Quanto vai custar?",
            description: "Primeiramente sempre discutimos o caso com o cliente para conseguirmos formular uma proposta adequada a ele, fazendo assim com que tenhamos um trabalho justo e transparente."
        },
        {
            title: "Como faço para solicitar um benefício previdenciário?",
            description: "Para solicitar um benefício previdenciário, você precisa agendar um atendimento no Instituto Nacional do Seguro Social (INSS) ou realizar o pedido através do site ou aplicativo “Meu INSS”. É importante reunir toda a documentação necessária e preencher os formulários corretamente para evitar atrasos ou negativas no processo."
        }
    ]

    return (
        <>
            {/* Veja como eu poderei te ajudar */}
            <div className="section section-our-team-freebie" id="services">
                <div className="parallax">
                    <div className="container">
                        <div className="content">
                            <div className="row">
                                <div className="title-area">
                                    <h2>Veja como eu poderei te ajudar</h2>
                                    <div className="separator separator-danger">∎</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h4" component="div">
                                                    Aposentadoria
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria por Idade;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria por tempo de Contribuição;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria do Professor;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria da Pessoa com Deficiência;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria por Incapacidade Permanente (Invalidez);
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Aposentadoria Especial;
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h4" component="div">
                                                    Auxílios e Benefícios
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Auxílio por Incapacidade Temporária (Auxílio Doença);
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Auxílio Acidente;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Auxílio Reclusão;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Salário Maternidade;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Pensão por Morte;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Benefício de Prestação Continuada (BPC/LOAS);
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="col-md-4">
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h4" component="div">
                                                    Outros Serviços
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Planejamento Previdenciário;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Acompanhamento e atuação em processos junto ao INSS;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Acompanhamento e atuação em processos judiciais;
                                                </Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary">
                                                    - Recursos administrativos;
                                                </Typography>
                                                <Typography style={{ padding: "8px" }} variant="body2" color="text.secondary"></Typography>
                                                <Typography style={{ padding: "6px" }} variant="body2" color="text.secondary"></Typography>
                                                <Typography style={{ padding: "5px" }} variant="body2" color="text.secondary"></Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "25px" }}>
                                <div className="button-get-started" style={{ textAlign: "center" }}>
                                    <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                        QUERO O APOIO DE UM ADVOGADO DA PRADO!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Sobre o prado */}
            <div style={{ paddingTop: "0" }} className="section section-our-team-freebie" id="about">
                <div className="parallax filter filter-color-black">
                    <div className="image" style={{ backgroundImage: `url(${header6.src})` }}></div>
                    <div className="container">
                        <div className="content">
                            <div className="row">
                                <div className="title-area">
                                    <h2>Sobre nós</h2>
                                    <div className="separator separator-danger">✻</div>
                                </div>
                            </div>

                            <div className="teams">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="row">
                                            <div className="content box-about" style={{ display: "flex" }}>
                                                <div className="col-md-6">
                                                    {/* Imagem */}
                                                    <div className="boxUser">
                                                        <div className="avatar">
                                                            <img alt="..." className="img-circle" src={face1.src} />
                                                        </div>
                                                        <h3 className="title">Antônio Prado / Advogado</h3>
                                                        <p className="small-text" style={{ color: "white", marginBottom: "20px" }}>Sócio e Fundador</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Texto sobre */}
                                                    <div className="description" style={{ textAlign: "justify" }}>
                                                        <p className="description" style={{ color: "white" }}>Ética, responsabilidade, profissionalismo, foco, respeito, tenacidade, assertividade e integridade são palavras que consistem no trabalho desenvolvido pela Prado advogado e associados.</p>
                                                        <p className="description" style={{ color: "white" }}>Em uma longa jornada na busca pela garantia do direito do cidadão, há muitos anos com uma equipe formada por profissionais competentes, capacitados e especialistas – sempre preparada para atender às necessidades dos clientes em diferentes áreas do direito.</p>
                                                        <p className="description" style={{ color: "white" }}>Entre experiências, desafios e aprendizados, a expansão para atender mais pessoas foi algo natural e necessário. Assim, estamos preparados para receber a demanda de todo o país, nossa matriz está situada no Edifício Ébano, Rua Costa Barros, 915, Centro.</p>
                                                        <p className="description" style={{ color: "white" }}>Nosso objetivo: disponibilizar serviços completos, em espaços equipados com tudo de moderno, com profissionais qualificados, e um atendimento humanizado e de excelência. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="button-get-started" style={{ textAlign: "center" }}>
                                    <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                        FALAR AGORA MESMO COM UM ADVOGADO NO WHATSAPP!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 Cards informativos */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <h3 style={{ textAlign: "center", padding: 10, marginBottom: 26, fontSize: "25px" }}>Entenda como será seu atendimento</h3>
                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                    <i className="pe-7s-phone"></i>
                                </div>
                                <h3>Atendimento Personalizado</h3>
                                <p className="description">Desde o início, você é acolhido com cuidado, ética e profissionalismo.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                    <i className="pe-7s-pen"></i>
                                </div>
                                <h3>Especialistas no Seu Caso</h3>
                                <p className="description">Já resolvemos inúmeros casos semelhantes ao seu, dedicando-nos completamente para encontrar a melhor solução.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                    <i className="pe-7s-news-paper"></i>
                                </div>
                                <h3>Transparência em Todas as Etapas</h3>
                                <p className="description">Você será informado sobre cada fase do processo, desde a entrega da documentação até a aprovação do seu benefício.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-get-started" style={{ textAlign: "center" }}>
                            <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                FALE AGORA MESMO COM UM ADVOGADO!
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contato */}
            <div className="section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="title-area">
                            <h2>Entre em Contato</h2>
                            <div className="separator">∎</div>
                        </div>

                        <div className="col-md-4">
                            <p><a target="_blank" href={linkInstagram} className="description" style={{ fontSize: "20px" }}><i className="bi bi-instagram"></i> {userInstagram}</a></p>
                        </div>

                        <div className="col-md-4">
                            <p><a href={linkEmailContact} className="description" style={{ fontSize: "16px" }}><i className="bi bi-envelope"></i> {emailContact}</a></p>
                        </div>

                        <div className="col-md-4">
                            <p><a target="_blank" href={linkWhatsApp} className="description" style={{ fontSize: "20px" }}><i className="bi bi-whatsapp"></i> {tellContact}</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dúvidas Frequentes */}
            <div className="section" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="title-area">
                            <h2>Dúvidas Frequentes</h2>
                            <div className="separator">∎</div>
                        </div>
                        <div className="col-md-12">
                            {duvidas.map((item: any, index: any) => (
                                <Accordion key={index} style={{ backgroundColor: "#bfa663", color: "white" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography><strong>{item.title}</strong></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.description}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-get-started" style={{ textAlign: "center", marginTop: "50px" }}>
                            <a href={linkWhatsApp} style={{ margin: "15px", backgroundColor: "#bfa663", color: "white", border: "none" }} className="btn btn-white btn-fill btn-lg ">
                                FALE AGORA MESMO COM UM ADVOGADO!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyPrevidencia;