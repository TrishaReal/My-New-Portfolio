import React from 'react';

const Resume = () => {
    const skillsData = [
        {
            title: 'HTML',
            iconSrc: 'assets/img/html.png',
        },
        {
            title: 'CSS',
            iconSrc: 'assets/img/css.png',
        },
        {
            title: 'Javascript',
            iconSrc: 'assets/img/js.png',
        },
        {
            title: 'jQuery',
            iconSrc: 'assets/img/jquery.png',
        },
        {
            title: 'React JS',
            iconSrc: 'assets/img/react.png',
        },
        {
            title: 'Next.js',
            iconSrc: 'assets/img/next.png',
        },
        {
            title: 'Bootstrap',
            iconSrc: 'assets/img/bootstrap.png',
        },
        {
            title: 'Adobe Photoshop',
            iconSrc: 'assets/img/ps.png',
        },
        {
            title: 'Adobe Illustrator',
            iconSrc: 'assets/img/ai.png',
        },
        {
            title: 'Adobe InDesign',
            iconSrc: 'assets/img/id.png',
        },
    ];

    const educationData = [
        {
            title: 'React con Next.js',
            date: '10/2022 - 03/2023',
            place: 'Tirocinio da Softfobia, CA',
        },
        {
            title: 'Corso di React JS e Redux',
            date: '12/2021',
            place: 'Udemy, Inc.',
        },
        {
            title: 'Programmazione Web',
            date: '2020 - 2021',
            place: 'Studio Autonomo',
        },
        {
            title: 'Graphic e Web Design',
            date: '2019 - 2020',
            place: "Accademia d' Arte di Cagliari",
        },
        {
            title: 'Diploma Liguistico',
            date: '2013 - 2018',
            place: "Liceo Eleonora d'Arborea, Cagliari",
        },
    ];

    const experienceData = [
        {
            title: 'Tirocinante Frontend Developer',
            date: '10/2022 - 03/2023',
            place: 'Azienda Softfobia, Cagliari<',
        },
        {
            title: 'Graphic Designer',
            date: '2021',
            place: 'Freelancer',
        },
        {
            title: 'Educatrice Personale',
            date: '2018 - 2021',
            place: 'Studio Autonomo',
        },
        {
            title: 'Cassiera/Cameriera',
            date: 'Estate 2017',
            place: 'Eurasia, Cagliari',
        },
    ];

    return (
        <section
            id='skills-education-experience'
            data-scroll-index='2'
            className='section experience-section  gradient-bottom '
        >
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
                                {skillsData.map((val, key) => {
                                    return (
                                        <div
                                            className='col-6 col-md-4 col-lg-6'
                                            key={key}
                                        >
                                            <div className='feature-box-02'>
                                                <div className='icon'>
                                                    <img
                                                        src={val.iconSrc}
                                                        alt=''
                                                        style={{
                                                            width: '30px',
                                                            paddingTop: '2px',
                                                        }}
                                                    />
                                                </div>
                                                <h6>{val.title}</h6>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0'>
                        <div className='experience-box'>
                            <h3>Educazione</h3>
                            <ul>
                                {educationData.map((val, key) => {
                                    return (
                                        <li key={key}>
                                            <h6>{val.date}</h6>
                                            <div className='eb-right'>
                                                <h5>{val.title}</h5>
                                                <span>{val.place}</span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='experience-box'>
                            <h3>Esperienza Lavorativa</h3>
                            <ul>
                                {experienceData.map((val, key) => {
                                    return (
                                        <li key={key}>
                                            <h6>{val.date}</h6>
                                            <div className='eb-right'>
                                                <h5>{val.title}</h5>
                                                <span>{val.place}</span>
                                            </div>
                                        </li>
                                    );
                                })}
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
                            <a className='px-btn px-btn-theme2' href='#contact'>
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
