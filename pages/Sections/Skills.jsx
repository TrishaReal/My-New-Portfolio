import React from 'react';

const Resume = () => {
    const skillsData = [
        {
            title: 'HTML',
            iconSrc: 'assets/img/skills-icons/html_b.png',
        },
        {
            title: 'CSS',
            iconSrc: 'assets/img/skills-icons/css_b.png',
        },
        {
            title: 'Javascript',
            iconSrc: 'assets/img/skills-icons/js_b.png',
        },
        {
            title: 'jQuery',
            iconSrc: 'assets/img/skills-icons/jquery_b.png',
        },
        {
            title: 'React JS',
            iconSrc: 'assets/img/skills-icons/react_b.png',
        },
        {
            title: 'Next.js',
            iconSrc: 'assets/img/skills-icons/next_b.png',
        },
        {
            title: 'Bootstrap',
            iconSrc: 'assets/img/skills-icons/bootstrap_b.png',
        },
        {
            title: 'Adobe Photoshop',
            iconSrc: 'assets/img/skills-icons/ps_b.png',
        },
        {
            title: 'Adobe Illustrator',
            iconSrc: 'assets/img/skills-icons/ai_b.png',
        },
        {
            title: 'Adobe InDesign',
            iconSrc: 'assets/img/skills-icons/id_b.png',
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
            title: 'Sviluppo Web',
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
            place: 'Azienda Softfobia, Cagliari',
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
            title: 'Cassiera e Cameriera',
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
                                    Skills, <br /> Educazione e <br />
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
                        <div className='experience-box mt-5'>
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
                        <div className='experience-user '>
                            <a className='avatar' href='#contact'>
                                <img
                                    src='assets/img/mePng.png'
                                    title=''
                                    alt=''
                                />
                            </a>
                            <a
                                href='#contact'
                                className='px-btn px-btn-theme2 '
                            >
                                Progetti in mente?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
