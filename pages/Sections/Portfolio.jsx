import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const [filter, setFilter] = useState(null);

    const projectsData = [
        {
            img: 'assets/img/dev/pickme.png',
            title: 'Pick-Me NFT Website',
            subtitle: 'React JS & Redux Toolkit (responsive)',
            iconLink: 'https://github.com/TrishaReal/PickMe-REDUX',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/wikidrink.png',
            title: 'Drink & Cocktails Website',
            subtitle: 'React JS (responsive)',
            iconLink: 'https://github.com/TrishaReal/WikiDrink-Website',
            imgLink: 'https://wiki-drink-website.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/nicecream.png',
            title: 'Ice Cream Menu',
            subtitle: 'React JS (responsive)',
            iconLink: 'https://github.com/TrishaReal/IceCreamMenuSite',
            imgLink: 'https://ice-cream-menu-site.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/colors.png',
            title: 'Color-Grading',
            subtitle: 'React JS (responsive)',
            iconLink: 'https://github.com/TrishaReal/ColorGrading',
            imgLink: 'https://myfirst-color-grading-website.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/vacation.png',
            title: 'Holiday Packages Silder',
            subtitle: 'React JS',
            iconLink: 'https://github.com/TrishaReal/ListaVacanza',
            imgLink: 'https://lista-vacanza.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/whatsapp.png',
            title: 'Whatsapp Web',
            subtitle: 'HTML, CSS & JS (non responsive)',
            iconLink: 'https://github.com/TrishaReal/WhatsappWeb-Replica',
            imgLink: 'https://whatsapp-web-replica.netlify.app/#',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/todolist.png',
            title: 'To Do List',
            subtitle: 'HTML, CSS & JS (responsive)',
            iconLink: 'https://github.com/TrishaReal/Simple-ToDoList',
            imgLink: 'https://my-first-to-do-list.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/youtube.png',
            title: 'Youtube Desktop',
            subtitle: 'HTML & CSS (non responsive)',
            iconLink: 'https://github.com/TrishaReal/Youtube-Replica',
            imgLink: 'https://youtube-replica-base.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/dev/parallax.png',
            title: 'Parallax Website',
            subtitle: 'HTML & CSS (non responsive)',
            iconLink: 'https://github.com/TrishaReal/parallax-website',
            imgLink: 'https://first-parallax-website.netlify.app/',
            message: 'Apri il DEMO',
            icon: 'fab fa-github',
            category: 'dev',
        },
        {
            img: 'assets/img/graphic/areilà.jfif',
            title: 'Areilà - Azienda Agricola',
            subtitle: 'Progetto di Brand Identity e Marketing',
            imgLink:
                'https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29',
            iconLink:
                'https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
        {
            img: 'assets/img/graphic/lancome.jpg',
            title: 'Lancôme Paris Poster',
            subtitle: 'Grafica Pubblicitaria (poster)',
            imgLink:
                'https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle',
            iconLink:
                'https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
        {
            img: 'assets/img/graphic/francarame.jfif',
            title: 'Giù le mani - Franca Rame',
            subtitle: 'Grafica Pubblicitaria (volantino per un evento)',
            imgLink:
                'https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento',
            iconLink:
                'https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
        {
            img: 'assets/img/graphic/gaga.jfif',
            title: 'Vanity Fair Magazine',
            subtitle: 'Grafica Editoriale (copertina di revista)',
            imgLink:
                'https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga',
            iconLink:
                'https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
        {
            img: 'assets/img/graphic/kobe.jpg',
            title: 'Sports Illustrated',
            subtitle: 'Grafica Editoriale (copertina di revista)',
            imgLink:
                'https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years',
            iconLink:
                'https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
        {
            img: 'assets/img/graphic/kundera.jfif',
            title: "L'insostenibile leggerezza dell'essere",
            subtitle: 'Grafica Editoriale (copertina di libro)',
            imgLink:
                'https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera',
            iconLink:
                'https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera',
            icon: 'fab fa-behance',
            category: 'graphic',
            message: 'Apri su BEHANCE',
        },
    ];

    const filteredData = () => {
        if (!filter) {
            return projectsData;
        }
        return projectsData.filter((project) => {
            return project.category == filter;
        });
    };

    return (
        <section
            id='projects'
            data-scroll-index='3'
            className=' work-section gradient-center'
        >
            <div className='container'>
                <div className='section  row section-heading'>
                    <div className='col-lg-6'>
                        <h6>
                            <span>Portfolio</span>
                        </h6>
                        <h3>
                            <span>I Miei Progetti</span>
                        </h3>
                    </div>
                </div>
                <div className='button-filter-project d-flex mb-5 justify-content-center'>
                    <a
                        id={'0'}
                        className={`px-btn filter-button ${
                            filter == null ? 'color-active' : ''
                        }`}
                        onClick={() => {
                            setFilter(null);
                        }}
                    >
                        Tutti
                    </a>
                    <a
                        id={'1'}
                        className={`px-btn filter-button ${
                            filter == 'graphic' ? 'color-active' : ''
                        }`}
                        onClick={() => setFilter('graphic')}
                    >
                        Graphic Design
                    </a>
                    <a
                        id={'2'}
                        className={`px-btn filter-button ${
                            filter == 'dev' ? 'color-active' : ''
                        }`}
                        onClick={() => setFilter('dev')}
                    >
                        Web Development
                    </a>
                </div>

                <div className='row g-4 lightbox-gallery'>
                    {filteredData().map((val, key) => {
                        return (
                            <div
                                className='col-sm-6 col-lg-4 projects-container'
                                key={key}
                            >
                                <div className='portfolio-box'>
                                    <div className='portfolio-img'>
                                        <a
                                            target='_blank'
                                            href={val.imgLink}
                                            className='gallery-link'
                                        >
                                            <img
                                                src={val.img}
                                                title={val.message}
                                                alt={val.title}
                                            />
                                        </a>
                                    </div>
                                    <div className='portfolio-info'>
                                        <div>
                                            <h6>{val.title}</h6>
                                            <span>{val.subtitle}</span>
                                        </div>

                                        <a
                                            target='_blank'
                                            href={val.iconLink}
                                            className='gallery-link'
                                        >
                                            <i className={val.icon}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
