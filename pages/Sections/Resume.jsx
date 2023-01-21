import React from 'react';

const Resume = () => {
    return (
        <section data-scroll-index='2' className='section experience-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='section-heading'>
                            <h6>
                                <span>Cosa ho imparato?</span>
                            </h6>
                            <h3>
                                <span>
                                    Skills, Educazione e <br />
                                    Esperienze Lavorativa
                                </span>
                            </h3>
                            <p>
                                Adoro l'informatica e scoprire le varie forme
                                tecnologiche in continuo sviluppo. Sono
                                appassionata anche di arte e di qualsiasi cosa
                                possa essere spontaneo e sopratutto creativo. Mi
                                piace combinare queste mie due passioni e
                                poterlo trasformare in lavoro!
                            </p>
                        </div>
                        <div className='skill-box'>
                            <h3>I Miei Skills</h3>
                            <div className='row g-3'>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-html5'></i>
                                        </div>
                                        <h6>HTML</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-css3'></i>
                                        </div>
                                        <h6>CSS</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-react'></i>
                                        </div>
                                        <h6>React JS</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/jquery.png'
                                                alt=''
                                                style={{ width: '32px' }}
                                            />
                                        </div>
                                        <h6>jQuery</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <i className='fab fa-js'></i>
                                        </div>
                                        <h6>Javascript</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/next.png'
                                                alt=''
                                                style={{ width: '32px' }}
                                            />
                                        </div>
                                        <h6>Next.js</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/bootstrap.png'
                                                alt=''
                                                style={{ width: '32px' }}
                                            />
                                        </div>
                                        <h6>Bootstrap</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/ps.png'
                                                alt=''
                                                style={{ width: '30px' }}
                                            />
                                        </div>
                                        <h6>Adobe Photoshop</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/ai.png'
                                                alt=''
                                                style={{ width: '30px' }}
                                            />
                                        </div>
                                        <h6>Adobe Illustrator</h6>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 col-lg-6'>
                                    <div className='feature-box-02'>
                                        <div className='icon'>
                                            <img
                                                src='assets/img/id.png'
                                                alt=''
                                                style={{ width: '30px' }}
                                            />
                                        </div>
                                        <h6>Adobe InDesign</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0'>
                        <div className='experience-box'>
                            <h3>Educazione</h3>
                            <ul>
                                <li>
                                    <h6>10/2022 - 03/2023</h6>
                                    <div className='eb-right'>
                                        <h5>React con Next.js</h5>
                                        <span>Tirocinio da Softfobia, CA</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>12/2021</h6>
                                    <div className='eb-right'>
                                        <h5>Corso di React JS e Redux</h5>
                                        <span>Udemy, Inc.</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>2020 - 2021</h6>
                                    <div className='eb-right'>
                                        <h5>Programmazione Web</h5>
                                        <span>Studio Autonomo</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>2019 - 2020</h6>
                                    <div className='eb-right'>
                                        <h5>Graphic e Web Design</h5>
                                        <span>
                                            Accademia d'Arte di Cagliari
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='experience-box'>
                            <h3>Esperienza Lavorativa</h3>
                            <ul>
                                <li>
                                    <h6>10/2022 - 03/2023</h6>
                                    <div className='eb-right'>
                                        <h5>Tirocinante Frontend Developer</h5>
                                        <span>Azienda Softfobia, Cagliari</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>2021</h6>
                                    <div className='eb-right'>
                                        <h5>Grafica Designer</h5>
                                        <span>Freelancer</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>2018 - 2021</h6>
                                    <div className='eb-right'>
                                        <h5>Educatrice Personale</h5>
                                        <span>Cagliari, Sardegna</span>
                                    </div>
                                </li>
                                <li>
                                    <h6>Estate 2017</h6>
                                    <div className='eb-right'>
                                        <h5>Cassiera/Cameriera</h5>
                                        <span>Eurasia, Cagliari</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='experience-user'>
                            <span className='eu-1'>
                                <img
                                    src='assets/img/effect-3.svg'
                                    title=''
                                    alt=''
                                />
                            </span>
                            <span className='eu-2'>
                                <img
                                    src='assets/img/effect-4.svg'
                                    title=''
                                    alt=''
                                />
                            </span>
                            <div className='avatar'>
                                <img
                                    src='assets/img/me02.jpeg'
                                    title=''
                                    alt=''
                                />
                            </div>
                            <a className='px-btn px-btn-theme2' href='#'>
                                Hire me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
