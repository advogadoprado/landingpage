import styles from "../styles/body.module.css";
import header2 from "@/assets/img/header-2.jpeg";
import header3 from "@/assets/img/header-3.jpg";
import face1 from "@/assets/img/faces/face_1.jpg";
import iconHands from "@/assets/img/icons/icon-hands.png";
import iconBag from "@/assets/img/icons/icon-bag.png";
import iconCompany from "@/assets/img/icons/icon-company.png";
import iconFamily from "@/assets/img/icons/icon-family.png";
import iconHouse from "@/assets/img/icons/icon-house.png";
import iconJobs from "@/assets/img/icons/icon-jobs.png";
import iconTouch from "@/assets/img/icons/icon-touch.png";
import iconUser from "@/assets/img/icons/icon-user.png";

export default function Body() {

    const linkWhatsApp = "https://api.whatsapp.com/send/?phone=%2B5585999655000&text=Ol%C3%A1%2C+tenho+uma+pergunta.&type=phone_number&app_absent=0";
    const emailContact = "carlosprado.advogado@hotmail.com";
    const linkEmailContact = "mailto:carlosprado.advogado@hotmail.com";
    const tellContact = "(85) 9 9965-5000";
    const linkInstagram = "https://www.instagram.com/drpradoadv";
    const userInstagram = "@drpradoadv";

    return(
        <>
            {/* 4 Cards informativos */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                <i className="pe-7s-check"></i>
                                </div>
                                <h3>Experiência</h3>
                                <p className="description">Oferecemos anos de experiência para resolver os desafios jurídicos do seu negócio.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                    <i className="pe-7s-check"></i>
                                </div>
                                <h3>Confiança</h3>
                                <p className="description">Deixe sua empresa nas mãos de nossa equipe dedicada, mantendo você informado em cada etapa do processo.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon">
                                    <i className="pe-7s-check"></i>
                                </div>
                                <h3>Comprometimento</h3>
                                <p className="description">Nosso compromisso é fornecer serviços jurídicos de qualidade, com agilidade e personalização para alcançar os melhores resultados para você.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sobre nós section */}
            <div className="section section-our-team-freebie" id="about">
                <div className="parallax filter filter-color-black">
                    <div className="image" style={{ backgroundImage: `url(${header2.src})` }}></div>
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Áreas de Atuação */}
            <div className="section section-our-team-freebie" id="services">
                <div className="parallax filter filter-color-black">
                    <div className="image" style={{ backgroundImage: `url(${header3.src})` }}></div>
                    <div className="container">
                        <div className="content">
                            <div className="row">
                                <div className="title-area">
                                    <h2>Áreas de Atuação</h2>
                                    <div className="separator separator-danger">∎</div>
                                </div>

                                <ul className="nav nav-text" role="tablist">
                                    <li>
                                        <a href="#touch" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconTouch.src} />
                                                <p className={styles.pAreasAtuacao}>Criminal</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#company" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconCompany.src} />
                                                <p className={styles.pAreasAtuacao}>Empresarial</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#user" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconUser.src} />
                                                <p className={styles.pAreasAtuacao}>Previdenciário</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#hands" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..."  className="img-circle" src={iconHands.src} />
                                                <p className={styles.pAreasAtuacao}>Civil</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#bag" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..."  className="img-circle" src={iconBag.src} />
                                                <p className={styles.pAreasAtuacao}>Administrativo</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#jobs" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconJobs.src} />
                                                <p className={styles.pAreasAtuacao}>Trabalhista</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#house" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconHouse.src} />
                                                <p className={styles.pAreasAtuacao}>Imobiliário</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#family" role="tab" data-toggle="tab">
                                            <div className="image-clients">
                                                <img alt="..." className="img-circle"  src={iconFamily.src} />
                                                <p className={styles.pAreasAtuacao}>Família</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="hands">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Civil</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O Direito Civil se caracteriza como o ramo do Direito que regula as relações jurídicas entre particulares, como as relações patrimoniais e as relações entre familiares.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Podemos dizer que o Direito Civil é uma das vertentes do Direito privado, cujo o objetivo é determinar como as pessoas devem se relacionar e agir em sociedade, como por exemplo, o direitos do nascituro, o casamento, a sucessão familiar por meio da herança e do legado, entre outros aspectos legais comuns as relações de uma sociedade civilizada.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Vale salientar que dada à complexidade das relações em sociedade, as relações pessoais e patrimoniais entre seres humanos, demandam de institutos que vão além do arcabouço do Código Civil, como as leis extravagantes, entre as quais os princípios fundamentais constitucionais, negócios jurídicos viciados entre outros institutos que abrangem outros ramos do Direito.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O Direito Civil regula todas as relações entre particulares, sejam elas pessoas físicas ou jurídicas. Sendo assim, podemos considerar o ramo do Direito Civil como “Direito do cidadão”.</p>
                                    </div>

                                    <div className="tab-pane" id="touch">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Criminal</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Advocacia criminal especializada traz agilidade e segurança para os clientes. Defesas em
inquéritos policiais e ações penais, defesa em audiência de custodia, atuação em flagrante e
pedidos de liberdade. Atuação especializada nos mais variados crimes: crimes de trânsito,
violência doméstica contra a mulher, crimes contra o patrimônio, crimes de falsidade, crimes
de injúria racial, crimes contra a vida, entre outros.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Progressão de regime: aqueles que foram condenados pela prática de algum crime, tem
direito a receber um benefício concedido pelo juiz que é a progressão de regime, e assim,
gradualmente, retornarem ao convívio social. Do regime fechado para o semiaberto, do
semiaberto para o aberto. Saiba como funciona a progressão de regime entrando em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Saiba como conseguir Liberdade Provisória, Relaxamento de Prisão e Revogação da Prisão. A
liberdade provisória pode ser concedida, com ou sem fiança, no caso de prisão em flagrante,
em que o procedimento não tiver nenhuma violação das normas previstas em lei. O
relaxamento da prisão ocorre nas hipóteses de prisão preventiva, que sofreu algum tipo de
ilegalidade, ou não possui os requisitos para sua decretação. A revogação da prisão cabe tanto
para prisão preventiva quanto para a prisão temporária, que ocorreram dentro da legalidade,
mas que não são mais úteis para o processo criminal. Para mais informações entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Audiência de Custódia: Serve para que seja feita uma análise dos requisitos de validade e
legalidade da prisão, o mais rápido possível, para que assim o juiz possa avaliar a condução do
preso em flagrante e a legalidade da prisão. Daí a importância de um advogado para defesa na
audiência de custódia.</p>
                                    </div>

                                    <div className="tab-pane" id="bag">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Administrativo</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O Direito Administrativo é a esfera do Direito Público Interno que, mediante regras e princípios exclusivos, regulamenta o exercício da função administrativa que é exercida por agentes públicos, órgãos públicos, pessoas jurídicas de Direito Público, em outras palavras, pela Administração Pública.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>A primeira vertente é no sentido subjetivo, em que as iniciais da Administração Pública são maiúsculas, o que indica um conjunto de órgãos e pessoas jurídicas ao qual a lei concede a função administrativa do Estado.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Agora na segunda vertente, o objetivo, em que as iniciais da administração pública são minúsculas, encaixa-se no contexto de atividade executada sob regime de Direito Público.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>A finalidade do Direito Administrativo é proteger o interesse público, o que não deve ser confundido com o interesse estatal, uma vez que, o poder público age em prejuízo da coletividade.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Tal finalidade é caracteristicamente executada pelos Poderes Executivos de cada esfera federativa, ou seja, a União, Estados-membros, Municípios e Distrito Federal. Entretanto, é também exercida em caráter atípico pelos Poderes Legislativo e Judiciário das esferas federativas.</p>
                                    </div>

                                    <div className="tab-pane" id="jobs">
                                        <p className="description" style={{ color: "white" }}><strong>Direito do Trabalho</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Os direitos do trabalhador brasileiro são assegurados pelo Decreto-lei n° 5.452/1943 (CLT).</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Entre eles, o décimo terceiro. Quem tem direito a receber? É um salário devido a todos os
trabalhadores registrados pelo regime da CLT. E também para os trabalhadores temporários –
sempre proporcional aos meses de serviço. Para mais informações, entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Outro: férias. Todos aqueles contratados no sistema CLT possuem direito a férias, após 12
meses de trabalho ou pode também solicitar férias proporcionais, neste último caso o
colaborador poderá tirar férias antes mesmo de completar o período aquisitivo (12 meses).
Para entender mais sobre o que é período aquisitivo, concessivo e indenizatório na legislação
trabalhista, entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Sensação de desamparo após ser demitido? Então você precisa saber tudo sobre o seguro-
desemprego. Este é um direito do funcionário, importantíssimo. É um auxílio financeiro que
será dado durante um período previamente determinado e, assim, o trabalhador poderá
garantir a sua própria subsistência e de sua família, sempre que for trabalhador é demitido
indiretamente ou sem justa causa. Para saber sobre o seu direito, entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Há muitos outros direitos, ignorados, desconhecidos, por seus detentores: que são os
trabalhadores brasileiros. Para outras informações entre em contato.</p>
                                    </div>

                                    <div className="tab-pane" id="house">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Imobiliário</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O direito imobiliário é um ramo do direito privado que lida, como o nome já aponta, que estuda e lida com as relações jurídicas e de direito que envolvam a posse, compra, venda, doação, sucessão, troca e propriedade de bens imóveis, inclusive a incorporação imobiliária.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Dessa forma, é uma área do direito que, embora tenha um objeto de estudo bem definido, trabalha com diferentes campos do direito, como o direito contratual, do consumidor, da família, civil, entre outros.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Trata-se de uma área que sempre apresentará relevância social, uma vez que a circulação de imóveis entre diferentes pessoas é inevitável na sociedade em que vivemos.</p>
                                    </div>

                                    <div className="tab-pane" id="company">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Empresarial</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O direito empresarial é uma área do direito privado. Isso quer dizer que, ao contrário do contencioso judicial, ele faz análises antecipadas do negócio e procura ter ações preventivas para poupar problemas aos clientes.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>A existência do direito empresarial é submetido a um regime de livre comércio de produtos ou de serviços. Vale ressaltar que a regulamentação inclui as relações específicas, os atos, e os locais e contratos comerciais. Tudo isso, é influenciado por uma série de outras regulações, como poderá ser visto mais adiante.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Dentro do Direito Empresarial, existem dois conceitos de suma importância: sociedade empresária e empresário.</p>
                                    </div>

                                    <div className="tab-pane" id="family">
                                        <p className="description" style={{ color: "white" }}><strong>Direito de Família</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>O Advogado de família é essencial em assuntos como pensão alimentícia, alienação parental,
pensão por morte, divórcio, união estável, inventário, herança e assim por diante.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Para um momento tão dramático em um relacionamento que é quando o casal decide se
separar, o caminho jurídico para concretizar a separação com a devida proteção ao casal é o Divórcio.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>E nada melhor que ter ao lado de si um bom advogado para tentar realiza-lo de forma amigável.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Assim como o Casamento, a União estável é reconhecida como entidade familiar, por isso
garante às partes os mesmos direitos e deveres no casamento. Para configurar união estável
não é necessário nenhum registro formal de sua existência. É claro que se for interesse do
casal, pode ser feito a formalização desta união por meio de escritura pública em cartório. Para
mais informações sobre todas as implicações jurídicas da união estável entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Pensão alimentícia. Nada mais é, em palavras claras, que um valor pago a uma pessoa para
que consiga suprir suas necessidades básicas de sobrevivência. Apesar de ter o nome
“alimentos”, destina-se não só aos alimentos, mas todos os custos com moradia, educação,
vestuário, saúde, lazer, entre outros. Você tem direito a receber pensão alimentícia ou deve
prestar pensão de alimentos? Entre em contato conosco e saiba todos os seus direitos</p>
                                    </div>

                                    <div className="tab-pane" id="user">
                                        <p className="description" style={{ color: "white" }}><strong>Direito Previdenciário</strong></p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Para tudo que se relacione com a previdência conte com o nosso serviço especializado.
Aposentadorias, pensões, benefícios, auxílios e assim por diante, conforme a Lei n° 8.213/91.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Nunca trabalhou formalmente ou não tem nenhuma comprovação? Ainda assim poderá
receber um benefício mensal: Pedido de BPC/LOAS. Para mais informações entre em contato.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Pensão por Morte se um falecido tiver dependentes, estes não ficarão desamparados,
poderão solicitar a pensão por morte.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Todo trabalhador tem direito uma vida digna, em especial, após anos de trabalho. Após anos
de trabalho é direito do trabalhador a Aposentadoria, que podem ser: aposentadoria por
idade, aposentadoria por tempo de contribuição e aposentadoria por invalidez. Seja orientado,
entre em contato. Se por outro lado você já recebe aposentadoria, mas tem a impressão que
deveria receber um benefício maior, é caso de Revisão de Aposentadoria.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>São inúmeras as leis de amparo ao trabalhador, portanto, há variados Requerimentos de
Auxílio: auxílio-doença, auxílio-acidente, auxílio-reclusão e auxílio-maternidade.</p>
                                        <p className="description" style={{ color: "white", textAlign: "justify" }}>Essas e outras dúvidas podem serem sanadas: entre em contato.</p>
                                    </div>
                                </div>
                            </div>
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

            {/* Links Importantes */}
            <div className="section" id="links">
                <div className="container">
                    <div className="row">
                        <div className="title-area">
                            <h2>Links Importantes</h2>
                            <div className="separator">∎</div>
                        </div>

                        <div className="col-md-3">
                            <div className="info-icon" style={{ textAlign: "start" }}>
                                <div className="icon">
                                    <p>Códigos e Leis Online</p>
                                </div>
                                <p className="description">Neste site você poderá ter acesso a todas as leiss e códigos e ainda baixar cada um deles no seu tablet, notebook, celular ou computador.</p>
                                <a target="_blank" href="http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/codigos-1?TSPD_101_R0=34d5a316596d58369197aad183c9f29bm460000000000000000322033b1ffff000000000000000000000000000062e00892007106254b08282a9212ab200051554f179b6a6ffaf819d7b1a56110feb101af22409be58c05be0695b9f641900863ce667d0a28005624c7fc1ef1580ac7da3e8dc627fe9d916a00549d43c025cbd1318e3615a1d6105ff30414dd42a7" className="btn btn-fill">Clique Aqui</a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="info-icon" style={{ textAlign: "start" }}>
                                <div className="icon">
                                    <p>TJCE - Consultar Processo</p>
                                </div>
                                <p className="description">Neste site você poderá consultar um processo, pauta de julgamento, jurisprudência e outros assuntos relacionados.</p>
                                <a target="_blank" href="https://esaj.tjce.jus.br/esaj/portal.do?servico=190090" className="btn btn-fill">Clique Aqui</a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="info-icon" style={{ textAlign: "start" }}>
                                <div className="icon">
                                    <p>Justiça Trabalho Ceará - Consultar Processo</p>
                                </div>
                                <p className="description">Neste site você poderá consultar e acompanhar um processo aos cuidados da justiça do trabalho.</p>
                                <a target="_blank" href="https://pje.trt7.jus.br/consultaprocessual/" className="btn btn-fill">Clique Aqui</a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="info-icon" style={{ textAlign: "start" }}>
                                <div className="icon">
                                    <p>Consulta Pública a Juizado Especial do Ceará</p>
                                </div>
                                <p className="description">Neste site você poderá consultar e acompanhar um processo.</p>
                                <a target="_blank" href="https://pje.tjce.jus.br/pje1grau/ConsultaPublica/listView.seam" className="btn btn-fill">Clique Aqui</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}